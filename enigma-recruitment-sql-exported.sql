--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-06-25 13:45:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16509)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE _prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);

--
-- TOC entry 229 (class 1259 OID 24049)
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE accounts (
    id text NOT NULL,
    user_id integer NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    provider_account_id text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text
);

--
-- TOC entry 226 (class 1259 OID 16606)
-- Name: cvs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE cvs (
    cv_id integer NOT NULL,
    user_id integer NOT NULL,
    cv_url text NOT NULL,
    uploaded_time timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    cv_title text,
    status text DEFAULT 'active'::text
);

--
-- TOC entry 225 (class 1259 OID 16605)
-- Name: cvs_cv_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE cvs_cv_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- TOC entry 4992 (class 0 OID 0)
-- Dependencies: 225
-- Name: cvs_cv_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE cvs_cv_id_seq OWNED BY cvs.cv_id;


--
-- TOC entry 221 (class 1259 OID 16576)
-- Name: industries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE industries (
    industry_id character varying(3) NOT NULL,
    industry_name text NOT NULL
);

--
-- TOC entry 228 (class 1259 OID 16617)
-- Name: job_applications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE job_applications (
    application_id integer NOT NULL,
    job_id character varying(11) NOT NULL,
    user_id integer NOT NULL,
    cv_id integer NOT NULL,
    applied_time timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL
);

--
-- TOC entry 227 (class 1259 OID 16616)
-- Name: job_applications_application_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE job_applications_application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- TOC entry 4993 (class 0 OID 0)
-- Dependencies: 227
-- Name: job_applications_application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE job_applications_application_id_seq OWNED BY job_applications.application_id;


--
-- TOC entry 222 (class 1259 OID 16583)
-- Name: job_functions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE job_functions (
    job_function_id character varying(3) NOT NULL,
    job_function_name text NOT NULL
);

--
-- TOC entry 223 (class 1259 OID 16590)
-- Name: job_subfunctions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE job_subfunctions (
    job_subfunction_id character varying(3) NOT NULL,
    job_subfunction_name text NOT NULL,
    job_function_id text NOT NULL
);

--
-- TOC entry 224 (class 1259 OID 16597)
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE jobs (
    job_id character varying(11) NOT NULL,
    job_title text NOT NULL,
    description text NOT NULL,
    salary_range_start double precision NOT NULL,
    salary_range_end double precision NOT NULL,
    close_date date NOT NULL,
    industry_id character varying(3) NOT NULL,
    job_function_id character varying(3) NOT NULL,
    job_subfunction_id character varying(3) NOT NULL,
    location text NOT NULL,
    status text DEFAULT 'active'::text NOT NULL,
    employment_type text NOT NULL,
	created_date date NOT NULL
);

--
-- TOC entry 232 (class 1259 OID 30624)
-- Name: reset_password_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE reset_password_tokens (
    identifier text NOT NULL,
    email text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);

--
-- TOC entry 230 (class 1259 OID 24056)
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE sessions (
    id text NOT NULL,
    session_token text NOT NULL,
    user_id integer NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);

--
-- TOC entry 220 (class 1259 OID 16566)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    name text NOT NULL,
    password text,
    role text DEFAULT 'seeker'::text NOT NULL,
    status text DEFAULT 'active'::text NOT NULL,
    image text,
    dob date,
    address text,
    email_verified timestamp(3) without time zone
);

--
-- TOC entry 219 (class 1259 OID 16565)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- TOC entry 4994 (class 0 OID 0)
-- Dependencies: 219
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_user_id_seq OWNED BY users.id;


--
-- TOC entry 231 (class 1259 OID 24063)
-- Name: verification_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE verification_tokens (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL,
    email text NOT NULL
);

--
-- TOC entry 4795 (class 2604 OID 16609)
-- Name: cvs cv_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cvs ALTER COLUMN cv_id SET DEFAULT nextval('cvs_cv_id_seq'::regclass);


--
-- TOC entry 4798 (class 2604 OID 16620)
-- Name: job_applications application_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_applications ALTER COLUMN application_id SET DEFAULT nextval('job_applications_application_id_seq'::regclass);


--
-- TOC entry 4791 (class 2604 OID 16569)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_user_id_seq'::regclass);


--
-- TOC entry 4802 (class 2606 OID 16517)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY _prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4819 (class 2606 OID 24055)
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- TOC entry 4815 (class 2606 OID 16615)
-- Name: cvs cvs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cvs
    ADD CONSTRAINT cvs_pkey PRIMARY KEY (cv_id);


--
-- TOC entry 4807 (class 2606 OID 16582)
-- Name: industries industries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY industries
    ADD CONSTRAINT industries_pkey PRIMARY KEY (industry_id);


--
-- TOC entry 4817 (class 2606 OID 16626)
-- Name: job_applications job_applications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_applications
    ADD CONSTRAINT job_applications_pkey PRIMARY KEY (application_id);


--
-- TOC entry 4809 (class 2606 OID 16589)
-- Name: job_functions job_functions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_functions
    ADD CONSTRAINT job_functions_pkey PRIMARY KEY (job_function_id);


--
-- TOC entry 4811 (class 2606 OID 16596)
-- Name: job_subfunctions job_subfunctions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_subfunctions
    ADD CONSTRAINT job_subfunctions_pkey PRIMARY KEY (job_function_id, job_subfunction_id);


--
-- TOC entry 4813 (class 2606 OID 16604)
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (job_id);


--
-- TOC entry 4830 (class 2606 OID 30630)
-- Name: reset_password_tokens reset_password_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY reset_password_tokens
    ADD CONSTRAINT reset_password_tokens_pkey PRIMARY KEY (identifier);


--
-- TOC entry 4822 (class 2606 OID 24062)
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 4805 (class 2606 OID 16575)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4826 (class 2606 OID 28547)
-- Name: verification_tokens verification_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY verification_tokens
    ADD CONSTRAINT verification_tokens_pkey PRIMARY KEY (identifier);


--
-- TOC entry 4820 (class 1259 OID 25631)
-- Name: accounts_provider_provider_account_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX accounts_provider_provider_account_id_key ON accounts USING btree (provider, provider_account_id);


--
-- TOC entry 4828 (class 1259 OID 30632)
-- Name: reset_password_tokens_email_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX reset_password_tokens_email_token_key ON reset_password_tokens USING btree (email, token);


--
-- TOC entry 4831 (class 1259 OID 30631)
-- Name: reset_password_tokens_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX reset_password_tokens_token_key ON reset_password_tokens USING btree (token);


--
-- TOC entry 4823 (class 1259 OID 25632)
-- Name: sessions_session_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX sessions_session_token_key ON sessions USING btree (session_token);


--
-- TOC entry 4803 (class 1259 OID 17705)
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON users USING btree (email);


--
-- TOC entry 4824 (class 1259 OID 28548)
-- Name: verification_tokens_email_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX verification_tokens_email_token_key ON verification_tokens USING btree (email, token);


--
-- TOC entry 4827 (class 1259 OID 24070)
-- Name: verification_tokens_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX verification_tokens_token_key ON verification_tokens USING btree (token);


--
-- TOC entry 4840 (class 2606 OID 24072)
-- Name: accounts accounts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts
    ADD CONSTRAINT accounts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4836 (class 2606 OID 24082)
-- Name: cvs cvs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cvs
    ADD CONSTRAINT cvs_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4837 (class 2606 OID 16662)
-- Name: job_applications job_applications_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_applications
    ADD CONSTRAINT job_applications_cv_id_fkey FOREIGN KEY (cv_id) REFERENCES cvs(cv_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4838 (class 2606 OID 16652)
-- Name: job_applications job_applications_job_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_applications
    ADD CONSTRAINT job_applications_job_id_fkey FOREIGN KEY (job_id) REFERENCES jobs(job_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4839 (class 2606 OID 24087)
-- Name: job_applications job_applications_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_applications
    ADD CONSTRAINT job_applications_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4832 (class 2606 OID 16627)
-- Name: job_subfunctions job_subfunctions_job_function_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY job_subfunctions
    ADD CONSTRAINT job_subfunctions_job_function_id_fkey FOREIGN KEY (job_function_id) REFERENCES job_functions(job_function_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4833 (class 2606 OID 16632)
-- Name: jobs jobs_industry_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY jobs
    ADD CONSTRAINT jobs_industry_id_fkey FOREIGN KEY (industry_id) REFERENCES industries(industry_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4834 (class 2606 OID 16637)
-- Name: jobs jobs_job_function_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY jobs
    ADD CONSTRAINT jobs_job_function_id_fkey FOREIGN KEY (job_function_id) REFERENCES job_functions(job_function_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4835 (class 2606 OID 16642)
-- Name: jobs jobs_job_function_id_job_subfunction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY jobs
    ADD CONSTRAINT jobs_job_function_id_job_subfunction_id_fkey FOREIGN KEY (job_function_id, job_subfunction_id) REFERENCES job_subfunctions(job_function_id, job_subfunction_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4841 (class 2606 OID 24077)
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2025-06-25 13:45:18

--
-- PostgreSQL database dump complete
--