-- CreateEnum
CREATE TYPE "Role" AS ENUM ('seeker', 'moderator', 'admin');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('deactivated', 'active');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('deactivated', 'active', 'prioritized');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('permanent', 'contract', 'temporary');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('pending', 'reviewed', 'rejected', 'hired');

-- CreateEnum
CREATE TYPE "CvStatus" AS ENUM ('deactivated', 'active');

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT,
    "role" TEXT NOT NULL DEFAULT 'seeker',
    "status" TEXT NOT NULL DEFAULT 'active',
    "img_url" TEXT,
    "dob" DATE,
    "address" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "industries" (
    "industry_id" VARCHAR(3) NOT NULL,
    "industry_name" TEXT NOT NULL,

    CONSTRAINT "industries_pkey" PRIMARY KEY ("industry_id")
);

-- CreateTable
CREATE TABLE "job_functions" (
    "job_function_id" VARCHAR(3) NOT NULL,
    "job_function_name" TEXT NOT NULL,

    CONSTRAINT "job_functions_pkey" PRIMARY KEY ("job_function_id")
);

-- CreateTable
CREATE TABLE "job_subfunctions" (
    "job_subfunction_id" VARCHAR(3) NOT NULL,
    "job_subfunction_name" TEXT NOT NULL,
    "job_function_id" TEXT NOT NULL,

    CONSTRAINT "job_subfunctions_pkey" PRIMARY KEY ("job_function_id","job_subfunction_id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "job_id" VARCHAR(11) NOT NULL,
    "job_title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "salary_range_start" DOUBLE PRECISION NOT NULL,
    "salary_range_end" DOUBLE PRECISION NOT NULL,
    "close_date" DATE NOT NULL,
    "industry_id" VARCHAR(3) NOT NULL,
    "job_function_id" VARCHAR(3) NOT NULL,
    "job_subfunction_id" VARCHAR(3) NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "employment_type" TEXT NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("job_id")
);

-- CreateTable
CREATE TABLE "cvs" (
    "cv_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "cv_url" TEXT NOT NULL,
    "uploaded_time" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cv_title" TEXT,
    "status" TEXT DEFAULT 'active',

    CONSTRAINT "cvs_pkey" PRIMARY KEY ("cv_id")
);

-- CreateTable
CREATE TABLE "job_applications" (
    "application_id" SERIAL NOT NULL,
    "job_id" VARCHAR(11) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "cv_id" INTEGER NOT NULL,
    "applied_time" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("application_id")
);

-- AddForeignKey
ALTER TABLE "job_subfunctions" ADD CONSTRAINT "job_subfunctions_job_function_id_fkey" FOREIGN KEY ("job_function_id") REFERENCES "job_functions"("job_function_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_industry_id_fkey" FOREIGN KEY ("industry_id") REFERENCES "industries"("industry_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_job_function_id_fkey" FOREIGN KEY ("job_function_id") REFERENCES "job_functions"("job_function_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_job_function_id_job_subfunction_id_fkey" FOREIGN KEY ("job_function_id", "job_subfunction_id") REFERENCES "job_subfunctions"("job_function_id", "job_subfunction_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cvs" ADD CONSTRAINT "cvs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "cvs"("cv_id") ON DELETE RESTRICT ON UPDATE CASCADE;
