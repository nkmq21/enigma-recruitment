-- NILE-READY SCHEMA (shared tables; no tenant_id columns)
-- Notes:
-- - Uses UUID PKs with DEFAULT public.uuid_generate_v7() (available on Nile).
-- - No sequences, triggers, UDFs, or DO blocks (per Nile limits).
-- - If you're using Prisma Migrate, let Prisma manage _prisma_migrations.

BEGIN;

-- ─────────────────────────────────────────────────────────────────────────────
-- Prisma migration table (usually created by Prisma; keep here for completeness)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS _prisma_migrations
(
    id                  varchar(36) PRIMARY KEY,
    checksum            varchar(64)               NOT NULL,
    finished_at         timestamptz,
    migration_name      varchar(255)              NOT NULL,
    logs                text,
    rolled_back_at      timestamptz,
    started_at          timestamptz DEFAULT now() NOT NULL,
    applied_steps_count integer     DEFAULT 0     NOT NULL
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Core lookup tables (unchanged key shapes)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS industries
(
    industry_id   varchar(3) PRIMARY KEY,
    industry_name text NOT NULL
);

CREATE TABLE IF NOT EXISTS job_functions
(
    job_function_id   varchar(3) PRIMARY KEY,
    job_function_name text NOT NULL
);

CREATE TABLE IF NOT EXISTS job_subfunctions
(
    job_subfunction_id   varchar(3) NOT NULL,
    job_subfunction_name text       NOT NULL,
    job_function_id      text       NOT NULL,
    CONSTRAINT job_subfunctions_pkey PRIMARY KEY (job_function_id, job_subfunction_id),
    CONSTRAINT job_subfunctions_job_function_id_fkey
        FOREIGN KEY (job_function_id) REFERENCES job_functions (job_function_id)
            ON UPDATE CASCADE ON DELETE RESTRICT
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Users → switch PK to UUID (v4 by default)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users
(
    id             uuid PRIMARY KEY      DEFAULT public.uuid_generate_v7(),
    email          varchar(255) NOT NULL,
    name           text         NOT NULL,
    password       text,
    role           text         NOT NULL DEFAULT 'seeker',
    status         text         NOT NULL DEFAULT 'active',
    image          text,
    dob            date,
    address        text,
    email_verified timestamp(3)
);
CREATE UNIQUE INDEX IF NOT EXISTS users_email_key ON users (email);

-- ─────────────────────────────────────────────────────────────────────────────
-- NextAuth-ish tables (link to users.id as UUID)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS accounts
(
    id                  text PRIMARY KEY,
    user_id             uuid NOT NULL,
    type                text NOT NULL,
    provider            text NOT NULL,
    provider_account_id text NOT NULL,
    refresh_token       text,
    access_token        text,
    expires_at          integer,
    token_type          text,
    scope               text,
    id_token            text,
    session_state       text,
    CONSTRAINT accounts_user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users (id)
            ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS accounts_provider_provider_account_id_key
    ON accounts (provider, provider_account_id);

CREATE TABLE IF NOT EXISTS sessions
(
    id            text PRIMARY KEY,
    session_token text         NOT NULL,
    user_id       uuid         NOT NULL,
    expires       timestamp(3) NOT NULL,
    CONSTRAINT sessions_user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users (id)
            ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS sessions_session_token_key
    ON sessions (session_token);

CREATE TABLE IF NOT EXISTS verification_tokens
(
    identifier text PRIMARY KEY,
    token      text         NOT NULL,
    expires    timestamp(3) NOT NULL,
    email      text         NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS verification_tokens_email_token_key
    ON verification_tokens (email, token);
CREATE UNIQUE INDEX IF NOT EXISTS verification_tokens_token_key
    ON verification_tokens (token);

-- ─────────────────────────────────────────────────────────────────────────────
-- CVs → PK becomes UUID (no sequence)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cvs
(
    cv_id              uuid PRIMARY KEY DEFAULT public.uuid_generate_v7(),
    user_id            uuid                                       NOT NULL,
    cv_url             text                                       NOT NULL,
    uploaded_time      timestamp(6)     DEFAULT CURRENT_TIMESTAMP NOT NULL,
    cv_title           text,
    status             text             DEFAULT 'active',
    source_document_id uuid,
    CONSTRAINT cvs_user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users (id)
            ON UPDATE CASCADE ON DELETE RESTRICT
);

-- ─────────────────────────────────────────────────────────────────────────────
-- CV Documents → Stores raw CV data as JSONB
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS cv_documents
(
    id           uuid PRIMARY KEY     DEFAULT public.uuid_generate_v7(),
    cv_id        uuid REFERENCES cvs (cv_id) ON UPDATE CASCADE ON DELETE CASCADE,
    template_key text        NOT NULL,
    data         jsonb       NOT NULL,
    version      integer     NOT NULL DEFAULT 1,
    created_at   timestamptz NOT NULL DEFAULT now(),
    updated_at   timestamptz NOT NULL DEFAULT now(),
    user_id      uuid        NOT NULL REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS cv_documents_cv_updatedAt_idx ON cv_documents (cv_id, updated_at);

-- Speed up pruning queries (keep newest 5)
CREATE INDEX IF NOT EXISTS cv_documents_cv_created_idx ON cv_documents (cv_id, created_at DESC, id);

CREATE INDEX IF NOT EXISTS cv_documents_user_created_idx ON cv_documents (user_id, created_at DESC, id);

CREATE INDEX IF NOT EXISTS cv_documents_user_tpl_created_idx ON cv_documents (user_id, template_key, created_at DESC, id);

-- Add a GIN index for querying by containment on data (e.g., data @> ...). jsonb_path_ops is fast for containment but narrower.
CREATE INDEX cv_documents_data_gin ON cv_documents USING GIN (data jsonb_path_ops);

-- Add compression (only when Nile supports it)
ALTER TABLE cv_documents
    ALTER COLUMN data SET COMPRESSION lz4;

-- ─────────────────────────────────────────────────────────────────────────────
-- Jobs (string PK unchanged)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS jobs
(
    job_id             varchar(11) PRIMARY KEY,
    job_title          text             NOT NULL,
    description        text             NOT NULL,
    salary_range_start double precision NOT NULL,
    salary_range_end   double precision NOT NULL,
    close_date         date             NOT NULL,
    industry_id        varchar(3)       NOT NULL,
    job_function_id    varchar(3)       NOT NULL,
    job_subfunction_id varchar(3)       NOT NULL,
    location           text             NOT NULL,
    status             text             NOT NULL DEFAULT 'active',
    employment_type    text             NOT NULL,
    created_date       date             NOT NULL,
    CONSTRAINT jobs_industry_id_fkey
        FOREIGN KEY (industry_id) REFERENCES industries (industry_id)
            ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT jobs_job_function_id_fkey
        FOREIGN KEY (job_function_id) REFERENCES job_functions (job_function_id)
            ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT jobs_job_function_id_job_subfunction_id_fkey
        FOREIGN KEY (job_function_id, job_subfunction_id)
            REFERENCES job_subfunctions (job_function_id, job_subfunction_id)
            ON UPDATE CASCADE ON DELETE RESTRICT
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Job applications → PK becomes UUID; FKs updated
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS job_applications
(
    application_id uuid PRIMARY KEY     DEFAULT public.uuid_generate_v7(),
    job_id         varchar(11) NOT NULL,
    user_id        uuid        NOT NULL,
    cv_id          uuid        NOT NULL,
    applied_time   timestamp(6)         DEFAULT CURRENT_TIMESTAMP NOT NULL,
    status         text        NOT NULL DEFAULT 'pending',
    CONSTRAINT job_applications_job_id_fkey
        FOREIGN KEY (job_id) REFERENCES jobs (job_id)
            ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT job_applications_user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users (id)
            ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT job_applications_cv_id_fkey
        FOREIGN KEY (cv_id) REFERENCES cvs (cv_id)
            ON UPDATE CASCADE ON DELETE RESTRICT
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Password reset (as-is)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reset_password_tokens
(
    identifier text PRIMARY KEY,
    email      text         NOT NULL,
    token      text         NOT NULL,
    expires    timestamp(3) NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS reset_password_tokens_email_token_key
    ON reset_password_tokens (email, token);
CREATE UNIQUE INDEX IF NOT EXISTS reset_password_tokens_token_key
    ON reset_password_tokens (token);

COMMIT;
