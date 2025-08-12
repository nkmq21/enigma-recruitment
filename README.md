# Enigma Recruitment

Empowering careers by connecting talent with opportunity.

## Overview
[Enigma Recruitment](https://enigma-recruitment.com) is a full-stack recruitment platform built with **Next.js 15** and **TypeScript**. It helps jobseekers and administrators manage job listings, build and upload CVs, and handle applications. Data is stored through **Prisma** and PostgreSQL, while **Auth.js** secures authentication.

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL database

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yeetingthots69/enigma-recruitment
   cd enigma-recruitment
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   AUTH_SECRET="<nextauth-secret>"
   AUTH_GOOGLE_ID="<google-oauth-client-id>"
   AUTH_GOOGLE_SECRET="<google-oauth-client-secret>"
   JWT_SECRET="<jwt-secret>"
   RESEND_API_KEY="<resend-api-key>"
   FRONTEND_URL="http://localhost:3000"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="<nextauth-secret>"
   PDFENDPOINT_ACCESS_TOKEN="<pdfendpoint-access-token>"
   ```
4. Run database migrations
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server
   ```bash
   npm run dev
   ```

### Scripts
- `npm run dev` – start the development server
- `npm run build` – generate Prisma client and build the app for production
- `npm start` – run the production server
- `npm run lint` – lint the codebase

### Testing
This project does not include a test suite yet. Run `npm run lint` to check code style.

## Our Services
| Icon | Service            | Details                                                    |
|:----:|--------------------|------------------------------------------------------------|
|  ⚙️  | **Architecture**   | Next.js 15 with TypeScript and Prisma ORM                  |
|  🔒  | **Authentication** | Email & Google sign-in via NextAuth with role-based access |
|  📄  | **CV Management**  | Build and upload CVs directly in the app                   |
|  🧩  | **Job Listings**   | Search, filter, and apply to jobs                          |
|  ✉️  | **Email**          | Resend integration for verification and password reset     |

## Project Structure
```text
enigma-recruitment/
├── prisma/
│   ├── migrations/
│   ├── prisma.ts
│   └── schema.prisma
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── repositories/
│   ├── services/
│   ├── schemas/
│   ├── styles/
│   ├── types/
│   └── utils/
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

*Maintained by the Enigma Recruitment team*