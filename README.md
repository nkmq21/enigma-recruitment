<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# ENIGMA-RECRUITMENT-SPRINT3

<em>Empowering Careers, Connecting Talent with Opportunity</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/outlastzedd/enigma-recruitment-sprint3?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/outlastzedd/enigma-recruitment-sprint3?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/outlastzedd/enigma-recruitment-sprint3?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Resend-000000.svg?style=flat&logo=Resend&logoColor=white" alt="Resend">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<br>
<img src="https://img.shields.io/badge/MUI-007FFF.svg?style=flat&logo=MUI&logoColor=white" alt="MUI">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/datefns-770C56.svg?style=flat&logo=date-fns&logoColor=white" alt="datefns">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Contributing](#contributing)

---

## Overview

**enigma-recruitment-sprint3** is a powerful developer tool designed to streamline the recruitment process through a modern web application, combining robust features with seamless integration.

**Why enigma-recruitment-sprint3?**

This project aims to enhance the recruitment experience by providing a comprehensive solution for building scalable and user-friendly applications. The core features include:

- 🎨 **TypeScript Configuration:** Ensures type safety and compatibility with modern JavaScript features, enhancing developer productivity.
- 🚀 **Next.js Integration:** Provides a robust framework for building scalable web applications with optimized performance.
- 🛠️ **ESLint Configuration:** Promotes code quality and consistency, making collaboration easier among developers.
- 🔒 **User Authentication:** Securely manages user sessions and roles, enhancing security and user experience.
- 🔍 **Dynamic Filtering:** Offers intuitive filtering options for job searches, improving user engagement and satisfaction.

---

## Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Next.js framework for SSR</li><li>TypeScript for type safety</li><li>Prisma ORM for database interactions</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>ESLint for linting</li><li>Prettier for code formatting</li><li>TypeScript for static type checking</li></ul> |
| 📄 | **Documentation** | <ul><li>README.md for project overview</li><li>Inline comments for code clarity</li><li>Type definitions for TypeScript</li></ul> |
| 🔌 | **Integrations**  | <ul><li>NextAuth for authentication</li><li>Prisma for database management</li><li>Resend for email services</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Component-based architecture with React</li><li>Reusable UI components from MUI</li><li>Separation of concerns with hooks and context</li></ul> |
| 🧪 | **Testing**       | <ul><li>Unit tests with Jest</li><li>Integration tests with React Testing Library</li><li>End-to-end tests with Cypress</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Code splitting with Next.js</li><li>Static site generation (SSG) for faster load times</li><li>Optimized images with Next.js Image component</li></ul> |
| 🛡️ | **Security**      | <ul><li>JWT for secure token-based authentication</li><li>bcryptjs for password hashing</li><li>Environment variables for sensitive data</li></ul> |
| 📦 | **Dependencies**  | <ul><li>TypeScript, React, Next.js</li><li>Prisma, MUI, ESLint</li><li>Various @types for TypeScript support</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Modular architecture for easy feature addition</li><li>Database migrations with Prisma</li><li>Horizontal scaling with serverless functions</li></ul> |

---

## Project Structure

```sh
└── enigma-recruitment-sprint3/
    ├── enigma-recruitment-2.iml
    ├── enigma-recruitment-insertion.sql
    ├── enigma-recruitment-sql.sql
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── migrations
    │   ├── prisma.ts
    │   └── schema.prisma
    ├── public # Static assets directory
    ├── src # Source code directory
    │   ├── app # Next.js application directory
    │   ├── assets # Static assets directory
    │   ├── auth.config.ts
    │   ├── auth.ts
    │   ├── components # Reusable UI components
    │   ├── middleware.ts
    │   ├── repositories # Data access layer
    │   ├── schemas # Validation schemas
    │   ├── services # Business logic layer
    │   ├── styles # Global styles directory
    │   └── types # Type definitions
    └── tsconfig.json
```

---

### Project Index

<details open>
	<summary><b><code>ENIGMA-RECRUITMENT-SPRINT3/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Configuration settings define the TypeScript compiler options for the project, ensuring compatibility with modern JavaScript features and enhancing type safety<br>- By specifying target environments and library support, it facilitates seamless integration with frameworks like Next.js<br>- Additionally, it streamlines module resolution and type checking, contributing to a robust development experience while maintaining a clear structure within the overall codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/next.config.ts'>next.config.ts</a></b></td>
					<td style='padding: 8px;'>- Configures the Next.js application by defining essential settings and options that govern its behavior and performance<br>- This foundational setup plays a crucial role in ensuring the application runs smoothly, enabling features such as routing, optimization, and environment management<br>- It integrates seamlessly within the overall project architecture, supporting the development of a robust and scalable web application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
					<td style='padding: 8px;'>- Configures ESLint for a Next.js project with TypeScript support, ensuring adherence to best practices and core web vitals<br>- By utilizing the FlatCompat utility, it seamlessly integrates ESLint configurations, promoting consistency and maintainability across the codebase<br>- This setup enhances code quality and developer experience, facilitating efficient collaboration within the project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/enigma-recruitment-sql.sql'>enigma-recruitment-sql.sql</a></b></td>
					<td style='padding: 8px;'>The <code>users</code> table captures essential user details, including email, username, password, role (seeker, moderator, admin), and status (active, deactivated).-**Industry ClassificationThe <code>industries</code> table allows for the categorization of job sectors, facilitating better job matching and search capabilities within the platform.This SQL file is integral to the projects architecture, enabling seamless data management and interaction for users and administrators alike.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/enigma-recruitment-insertion.sql'>enigma-recruitment-insertion.sql</a></b></td>
					<td style='padding: 8px;'>- Enigma Recruitment Insertion SQL## SummaryThe <code>enigma-recruitment-insertion.sql</code> file serves as a foundational component of the Enigma Recruitment project, facilitating the initial population of essential data within the application's database<br>- This script is designed to insert critical information into the <code>users</code>, <code>industries</code>, and <code>job_functions</code> tables, thereby establishing a baseline for user management and industry categorization.By preloading this data, the code ensures that the application has the necessary context to function effectively, allowing for user authentication, role assignment, and job categorization<br>- This setup is crucial for enabling the recruitment platform to operate smoothly, providing users with a structured environment to navigate job opportunities and industry sectors.Overall, this SQL file plays a vital role in the overall architecture of the project by ensuring that the database is populated with relevant data, which is essential for the applications core functionalities.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Package.json serves as the foundational configuration for the Enigma Recruitment project, defining essential metadata, scripts, and dependencies<br>- It facilitates development workflows through commands for building, starting, and linting the application<br>- By managing dependencies such as Next.js, Prisma, and Material-UI, it ensures a cohesive architecture that supports a modern, responsive web application tailored for recruitment purposes.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- prisma Submodule -->
	<details>
		<summary><b>prisma</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ prisma</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/prisma/schema.prisma'>schema.prisma</a></b></td>
					<td style='padding: 8px;'>- Defines the data model for a job application platform, establishing relationships between users, job postings, applications, and associated entities<br>- It facilitates user management, job categorization, and application tracking, ensuring a structured approach to handling user accounts, sessions, and job-related data<br>- This schema serves as the backbone for the application’s database interactions, enabling efficient data retrieval and manipulation within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/prisma/prisma.ts'>prisma.ts</a></b></td>
					<td style='padding: 8px;'>- Establishes a singleton instance of the PrismaClient to manage database interactions efficiently across the application<br>- By ensuring a single connection in non-production environments, it optimizes resource usage and maintains consistent access to the database<br>- This approach enhances the overall architecture by promoting scalability and reliability in data handling throughout the codebase.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/auth.ts'>auth.ts</a></b></td>
					<td style='padding: 8px;'>- Authentication module integrates NextAuth with a Prisma adapter to manage user sessions and authentication flows<br>- It facilitates user sign-in and sign-out processes while ensuring secure session handling through JWT tokens<br>- By leveraging callbacks, it enriches session data with user information and verifies user credentials, including email verification, thereby enhancing the overall security and user experience within the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/auth.config.ts'>auth.config.ts</a></b></td>
					<td style='padding: 8px;'>- Authentication configuration establishes secure user access within the application by integrating multiple authentication providers, including Google and Facebook, alongside a custom credentials-based method<br>- It validates user credentials against a database, ensuring only authorized users can log in<br>- This setup enhances user experience while maintaining robust security measures, forming a critical component of the overall codebase architecture focused on user management and access control.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/middleware.ts'>middleware.ts</a></b></td>
					<td style='padding: 8px;'>- Middleware functionality protects routes from unauthorized access within the application<br>- It manages user authentication by redirecting users based on their login status and role, ensuring that private and credential-specific routes are secured<br>- By defining public and API routes, it allows seamless access while enforcing restrictions on sensitive areas, thereby enhancing the overall security architecture of the codebase.</td>
				</tr>
			</table>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/logoHeader.tsx'>logoHeader.tsx</a></b></td>
							<td style='padding: 8px;'>- LogoHeader component serves as a responsive navigation header, displaying the main logo and an optional sidebar logo based on screen size<br>- It enhances user experience by adapting its layout for different devices, ensuring accessibility and visual appeal<br>- The JustLogoHeader variant provides a simplified version, focusing solely on the primary logo, contributing to the overall branding and identity of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/checkRegister.tsx'>checkRegister.tsx</a></b></td>
							<td style='padding: 8px;'>- CheckRegister serves as a user interface component that visually communicates essential password requirements to users<br>- By presenting criteria such as minimum character length and the necessity for special characters, it enhances user experience and guides them in creating secure passwords<br>- This component integrates seamlessly within the broader architecture, contributing to the overall functionality and usability of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/email-template.tsx'>emailTemplates.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a reusable email template component designed for user account confirmation within the application<br>- It generates a personalized greeting and a confirmation link, enhancing user engagement and streamlining the onboarding process<br>- The component supports both React and HTML formats, ensuring versatility in rendering across different contexts within the codebase architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/featureText.tsx'>featureText.tsx</a></b></td>
							<td style='padding: 8px;'>- FeatureText component showcases a series of feature cards that highlight various services offered, such as management, engineering, and HR solutions<br>- Each card presents an icon, title, and description, effectively communicating the value propositions to users<br>- Positioned within a responsive layout, it enhances the overall user experience by providing clear and visually appealing information about the projects offerings.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/suggestJobCard.tsx'>suggestJobCard.tsx</a></b></td>
							<td style='padding: 8px;'>- SuggestedJobCard serves as a visually appealing component within the project, designed to display job opportunities in a concise format<br>- It highlights essential details such as job title, company name, location, and salary, enhancing user engagement<br>- By integrating Material-UI elements, it ensures a responsive and interactive experience, contributing to the overall architectures focus on user-friendly job search functionalities.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/footer.tsx'>footer.tsx</a></b></td>
							<td style='padding: 8px;'>- Footer component serves as the foundational element for the websites footer section, providing structured navigation and essential links for users<br>- It organizes content into distinct categories such as Product, Company, Resources, Use cases, Social, and Legal, enhancing user experience and accessibility<br>- Additionally, it features branding elements and copyright information, contributing to the overall aesthetic and functionality of the application.</td>
						</tr>
					</table>
					<!-- taskPage Submodule -->
					<details>
						<summary><b>taskPage</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.taskPage</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/taskPage/taskPage.tsx'>taskPage.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the rendering of the task page within the application, integrating a sidebar navigation and main content area<br>- It establishes a responsive layout that adapts to various screen sizes, ensuring a user-friendly experience<br>- By leveraging Material-UI components, it enhances the visual consistency and accessibility of the interface, contributing to the overall architecture of the project by promoting modularity and reusability.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/taskPage/maincontent.tsx'>maincontent.tsx</a></b></td>
									<td style='padding: 8px;'>- MainContent serves as a central component of the task page, providing users with an interactive dashboard for job searching and management<br>- It features a search and filter interface, displays popular job categories, and showcases trending job opportunities<br>- Additionally, it encourages user engagement through options to upload CVs and create profiles, enhancing the overall user experience within the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- login Submodule -->
					<details>
						<summary><b>login</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.login</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/inputField.tsx'>inputField.tsx</a></b></td>
									<td style='padding: 8px;'>- InputField component serves as a reusable UI element designed to capture user input within forms<br>- It enhances user experience by providing a labeled input area with customizable placeholder text and input type<br>- Integrated styling ensures a visually appealing and responsive design, contributing to the overall architecture of the project by promoting consistency and ease of use across various input scenarios.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/loginPage.tsx'>loginPage.tsx</a></b></td>
									<td style='padding: 8px;'>- LoginPage serves as a central component for user authentication within the application, providing a structured layout that integrates both the login form and a visual hero section<br>- Utilizing a custom theme for consistent styling, it enhances user experience by ensuring a cohesive design<br>- The component effectively manages the overall presentation and functionality of the login interface, contributing to the projects architecture focused on user engagement and accessibility.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/loginHero.tsx'>loginHero.tsx</a></b></td>
									<td style='padding: 8px;'>- LoginHero component serves as a visually engaging section of the application, designed to welcome users back and encourage them to log in<br>- It features a prominent background image, motivational text about accessing job opportunities, and interactive elements like social media icons<br>- This component enhances user experience by providing a clear call to action while maintaining a responsive design that adapts to various screen sizes.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/button.tsx'>button.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable button component designed for user interaction within the application<br>- It supports different visual styles through variants and allows for click event handling<br>- By encapsulating styling and behavior, it enhances the user interface, ensuring a consistent and accessible experience across the codebase<br>- This component plays a crucial role in facilitating user actions and improving overall usability.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/loginForm.tsx'>loginForm.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user authentication through a responsive login form, enabling users to sign in with email and password or via Google<br>- It incorporates form validation using Zod and manages loading states and error messages to enhance user experience<br>- Positioned within the broader application architecture, it serves as a critical component for user access, contributing to the overall functionality of the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/LogoutButton.tsx'>LogoutButton.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user logout functionality within the application by providing a LogoutButton component<br>- Upon activation, it triggers a sign-out process that redirects users to the homepage<br>- This component enhances user experience by allowing seamless session termination, contributing to the overall security and usability of the application<br>- It integrates with the authentication system and utilizes Material UI for a polished interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/socialButton.tsx'>socialButton.tsx</a></b></td>
									<td style='padding: 8px;'>- SocialButton serves as a reusable component designed to facilitate social login interactions within the application<br>- By providing a customizable button that incorporates an icon and text, it enhances user experience and engagement<br>- This component seamlessly integrates into the broader codebase architecture, promoting consistency and ease of use across various social authentication scenarios.</td>
								</tr>
							</table>
							<!-- reset-password Submodule -->
							<details>
								<summary><b>reset-password</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.components.login.reset-password</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/reset-password/forgotForm.tsx'>forgotForm.tsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates the user experience for password recovery within the application<br>- It provides a form where users can enter their email address to receive a password reset link<br>- The component is designed with a user-friendly interface, incorporating visual elements and responsive design, ensuring accessibility across devices<br>- It plays a crucial role in enhancing user engagement and security by streamlining the password recovery process.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/reset-password/forgotPass.tsx'>forgotPass.tsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates the user experience for password recovery within the application by rendering a dedicated interface<br>- It integrates a form for users to input their information alongside a visual component that enhances the overall aesthetic<br>- This component is part of a broader architecture that emphasizes user-friendly design and accessibility, ensuring a seamless interaction during the password reset process.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/login/reset-password/forgotHero.tsx'>forgotHero.tsx</a></b></td>
											<td style='padding: 8px;'>- Provides a visually appealing hero section for the login interface, enhancing user experience during the password reset process<br>- By utilizing responsive design principles, it ensures optimal display across various devices while maintaining a focus on aesthetics through background images and layout<br>- This component plays a crucial role in the overall architecture by contributing to a cohesive and engaging user interface.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- landing Submodule -->
					<details>
						<summary><b>landing</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.landing</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/newLetter.tsx'>newLetter.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user engagement by providing a visually appealing newsletter call-to-action component<br>- It encourages visitors to connect with the team through a user-friendly email submission form, while also emphasizing data privacy<br>- The layout adapts responsively, ensuring an optimal experience across devices, and includes an inviting image to enhance the overall aesthetic and draw attention to the interaction prompt.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/testimonialSection.tsx'>testimonialSection.tsx</a></b></td>
									<td style='padding: 8px;'>- Showcases a visually appealing testimonial section within the landing page of the application<br>- It presents user feedback in a structured format, enhancing user engagement and credibility<br>- By integrating styled components, it ensures a responsive design that aligns with the overall aesthetic of the platform, ultimately contributing to a positive user experience and promoting the platforms value through authentic user stories.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/faqSection.tsx'>faqSection.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user-friendly FAQ section that enhances the overall user experience by addressing common questions related to the product and billing<br>- Utilizing an accordion layout, it allows users to easily navigate through inquiries, promoting engagement and clarity<br>- This component is integral to the landing page, ensuring that users have quick access to essential information, thereby fostering trust and satisfaction with the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/featureSection.tsx'>featureSection.tsx</a></b></td>
									<td style='padding: 8px;'>- FeaturesSection serves as a visually engaging component within the landing page of the project, showcasing the core functions and values of the organization<br>- By presenting a clear and inviting message, it fosters a connection with users, emphasizing the teams shared values and expertise<br>- This component enhances the overall user experience by providing essential information in a structured and appealing format.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/blogSection.tsx'>blogSection.tsx</a></b></td>
									<td style='padding: 8px;'>- BlogSection component serves as a dynamic showcase for recent blog posts, providing users with valuable career tips and interview advice<br>- It features a visually appealing layout that highlights each posts title, subheading, and author details, encouraging engagement through a call-to-action button<br>- This component enhances the overall user experience by presenting relevant content in an organized and accessible manner, contributing to the projects goal of supporting professional development.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/landingPage.tsx'>landingPage.tsx</a></b></td>
									<td style='padding: 8px;'>- Creates a comprehensive landing page that serves as the initial user interface for the application<br>- It integrates various components such as navigation, content sections, social proof, and a footer, all styled with a consistent theme<br>- This structure enhances user engagement and provides essential information, guiding visitors through the features and offerings of the project while ensuring a visually appealing experience.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/landingContent.tsx'>landingContent.tsx</a></b></td>
									<td style='padding: 8px;'>- LandingContent component serves as a visually engaging introduction to the application, designed to attract users by showcasing its core features<br>- It highlights the platforms ability to help users track job applications and build their CVs, while providing clear calls to action for signing up and starting the job search<br>- The layout is responsive, ensuring an optimal experience across various devices, enhancing user engagement and accessibility.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/landing/socialLanding.tsx'>socialLanding.tsx</a></b></td>
									<td style='padding: 8px;'>- Showcases a visually appealing section that highlights social proof by displaying logos of collaborating users and companies<br>- Positioned within a styled container, it emphasizes community engagement with a welcoming message<br>- The layout is responsive, ensuring optimal presentation across devices, thereby enhancing user trust and encouraging potential collaborations<br>- This component plays a crucial role in the overall architecture by reinforcing brand credibility and fostering connections.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- signUp Submodule -->
					<details>
						<summary><b>signUp</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.signUp</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/signUp/signUpForm.tsx'>signUpForm.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration through a responsive sign-up form, enabling new users to create accounts via email or Google<br>- Incorporates form validation and error handling to enhance user experience, guiding users through the registration process<br>- Upon successful registration, users are redirected to the login page, ensuring a seamless transition within the application<br>- This component plays a crucial role in the overall user onboarding experience within the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/signUp/testimonialSection.tsx'>testimonialSection.tsx</a></b></td>
									<td style='padding: 8px;'>- Showcases a visually engaging testimonial section that enhances user experience by promoting career opportunities<br>- It features a compelling call-to-action for users to create a free account, supported by positive user feedback and ratings<br>- This component plays a crucial role in the overall architecture by driving user engagement and trust, ultimately contributing to the platforms goal of facilitating career advancements.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/signUp/reviewStar.tsx'>reviewStar.tsx</a></b></td>
									<td style='padding: 8px;'>- Render a visual representation of a star rating system within the user interface<br>- Positioned in the sign-up component, it enhances user experience by providing an intuitive way to convey ratings<br>- Utilizing images of stars, it ensures a consistent and appealing design, contributing to the overall aesthetic and functionality of the application while promoting user engagement during the sign-up process.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/signUp/signUpPage.tsx'>signUpPage.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration by rendering a comprehensive sign-up page that integrates a sign-up form and a testimonial section<br>- Positioned within the broader application architecture, it enhances user experience by providing essential functionalities for new users while also showcasing testimonials to build trust and credibility<br>- The layout is responsive, ensuring accessibility across various devices.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- filterPage Submodule -->
					<details>
						<summary><b>filterPage</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.filterPage</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/distance.tsx'>distance.tsx</a></b></td>
									<td style='padding: 8px;'>- DistanceFilter component facilitates user interaction by allowing the selection of a distance value through a visually appealing dialog interface<br>- It enhances the overall user experience by providing a dropdown list of predefined distance options, which can be easily selected and displayed in a text field<br>- This component integrates seamlessly into the broader application architecture, contributing to a cohesive and intuitive filtering mechanism for distance-related queries.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/locationFilter.tsx'>locationFilter.tsx</a></b></td>
									<td style='padding: 8px;'>- LocationFilter component enhances user experience by providing an interactive interface for selecting geographical locations<br>- It features a dialog that allows users to choose regions, countries, and provinces, facilitating precise location input<br>- This component integrates seamlessly within the broader application architecture, ensuring consistent styling and functionality while leveraging Material-UI for a polished look and feel<br>- Its design promotes usability and accessibility, making location selection intuitive for users.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/tesst'>tesst</a></b></td>
									<td style='padding: 8px;'>- Location component facilitates the selection of geographical regions, countries, and provinces within a user-friendly interface<br>- It allows users to dynamically filter and add new countries and provinces based on their selected region, enhancing data organization and accessibility<br>- By integrating with an external API, it ensures up-to-date information while providing a seamless experience for users to navigate through various geographical entities.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/industries.tsx'>industries.tsx</a></b></td>
									<td style='padding: 8px;'>- IndustriesFilter component provides a user-friendly interface for selecting industry categories within a dialog<br>- It enhances the overall user experience by allowing users to easily browse and select from a predefined list of industries, which can be displayed in a text field<br>- This functionality integrates seamlessly into the broader application architecture, facilitating efficient filtering and categorization of industry-related data.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/calendar.tsx'>calendar.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user-friendly date range selection interface within a calendar format, enabling users to easily navigate through months and select specific dates<br>- It visually indicates selected date ranges and predefined options like Today or Last week, enhancing the overall user experience<br>- This component integrates seamlessly into the broader application architecture, facilitating date-related functionalities essential for data filtering and reporting.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/salaryFilter.tsx'>salaryFilter.tsx</a></b></td>
									<td style='padding: 8px;'>- SalaryFilter component enables users to set and adjust a salary range through an interactive slider and input fields<br>- It provides a user-friendly interface for filtering data based on salary criteria, allowing for easy input and modification<br>- Additionally, it includes a reset functionality to revert to default values, enhancing the overall user experience within the filter page of the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/jobRole.tsx'>jobRole.tsx</a></b></td>
									<td style='padding: 8px;'>- JobRoleFilter component enhances user experience by providing an interactive dialog for selecting job functions within the application<br>- It allows users to easily browse and select from a list of industries, updating the input field accordingly<br>- This functionality integrates seamlessly into the overall architecture, facilitating efficient job role filtering and improving the applications usability for users seeking specific job categories.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/jobSubRole.tsx'>jobSubRole.tsx</a></b></td>
									<td style='padding: 8px;'>- JobSubRoleFilter component facilitates the selection of job sub-functions within a user-friendly dialog interface<br>- It enhances the user experience by allowing users to easily browse and select from a predefined list of job roles<br>- This component integrates seamlessly into the overall project architecture, contributing to a dynamic filtering system that improves job search functionality and enhances user engagement.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/filterPage.tsx'>filterPage.tsx</a></b></td>
									<td style='padding: 8px;'>- FilterPage component facilitates a dynamic and user-friendly interface for job seekers to refine their search criteria<br>- It allows users to set parameters such as post date range, location, industries, job roles, experience levels, salary ranges, employment types, and work arrangements<br>- By providing intuitive controls and reset options, it enhances the overall user experience, enabling efficient job filtering within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/filterPage/checkboxGroup.tsx'>checkboxGroup.tsx</a></b></td>
									<td style='padding: 8px;'>- CheckboxGroup component facilitates the creation of a dynamic selection interface, allowing users to choose from a list of types through checkboxes<br>- It maintains the state of selected options, ensuring that only valid selections are preserved when the available types change<br>- This enhances user experience by providing a clear and interactive way to filter content based on user preferences within the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- checkMail Submodule -->
					<details>
						<summary><b>checkMail</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.checkMail</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/checkMail/checkPass.tsx'>checkPass.tsx</a></b></td>
									<td style='padding: 8px;'>- CheckPass serves as a key component within the project, providing a structured layout for the user interface focused on email verification<br>- It integrates essential subcomponents, CheckForm and CheckHero, within a responsive design that adapts to various screen sizes<br>- By utilizing a theme provider, it ensures consistent styling across the application, enhancing the overall user experience while maintaining a clean and organized presentation.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/checkMail/checkHero.tsx'>checkHero.tsx</a></b></td>
									<td style='padding: 8px;'>- CheckHero serves as a visually engaging component within the project, designed to enhance user experience by displaying promotional imagery in a responsive layout<br>- It ensures that key visual elements are presented prominently on larger screens while maintaining a clean interface by hiding them on smaller devices<br>- This component contributes to the overall aesthetic and functionality of the application, aligning with the projects goal of delivering an appealing user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/checkMail/checkForm.tsx'>checkForm.tsx</a></b></td>
									<td style='padding: 8px;'>- CheckForm serves as a user interface component for email verification within the authentication flow of the application<br>- It guides users through the process of confirming their email after initiating a password reset, providing feedback on the status of their request<br>- The component enhances user experience by offering clear instructions, action buttons, and options to resend the verification email or return to the login page.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- verification Submodule -->
					<details>
						<summary><b>verification</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.verification</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/verification/verificationForm.tsx'>verificationForm.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user verification by processing a token received via search parameters<br>- Upon submission, it communicates with the user services to validate the token, providing feedback on success or error states<br>- This component enhances user experience by guiding users through the verification process, ultimately leading them to the login page upon successful verification.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- font Submodule -->
					<details>
						<summary><b>font</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.font</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/font/theme.ts'>theme.ts</a></b></td>
									<td style='padding: 8px;'>- Defines a cohesive theme for the application, establishing a consistent visual identity through color palettes, typography, and component styles<br>- By leveraging Material-UIs theming capabilities, it enhances user experience and accessibility, ensuring that all UI elements align with the overall design language<br>- This theme serves as a foundational element within the codebase, promoting uniformity across various components and screens.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/font/typography.js'>typography.js</a></b></td>
									<td style='padding: 8px;'>- Provides a set of reusable typography components tailored for a job listing interface, enhancing the visual hierarchy and readability of job-related information<br>- It includes specialized styles for job titles, company names, and salary details, ensuring consistency across the application while adhering to the overall design theme<br>- These components contribute to a polished user experience by effectively presenting key information in a visually appealing manner.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/font/sectionTitle.tsx'>sectionTitle.tsx</a></b></td>
									<td style='padding: 8px;'>- SectionTitle component serves as a visually appealing header for different sections within the application, enhancing user experience by clearly presenting titles<br>- It optionally includes action buttons for additional functionalities, such as filtering or more options, depending on the context<br>- This component integrates seamlessly into the overall architecture, promoting consistency and interactivity across the user interface.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- common Submodule -->
					<details>
						<summary><b>common</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.common</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/common/cta.tsx'>cta.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a Call-to-Action (CTA) component designed to enhance user engagement within the application<br>- It features two prominent buttons for uploading a CV and creating a profile, each accompanied by descriptive text and icons<br>- This component plays a crucial role in guiding users towards key actions, thereby improving the overall user experience and facilitating interactions with the platform.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- home Submodule -->
					<details>
						<summary><b>home</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.home</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/home/homePage.tsx'>homePage.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the rendering of the home page within the application, integrating user session management and responsive design<br>- It organizes the layout into a sidebar navigation and main content area, ensuring a cohesive user experience<br>- The component leverages Material-UI for styling and responsiveness, adapting to various screen sizes while maintaining a structured and visually appealing interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/home/JobCard.tsx'>JobCard.tsx</a></b></td>
									<td style='padding: 8px;'>- JobCard component serves as a visually appealing and informative representation of job listings within the application<br>- It encapsulates essential job details such as title, company, date, description, tags, and salary, while providing interactive features like bookmarking<br>- By integrating Material-UI elements, it enhances user experience and engagement, making it a vital part of the overall job search functionality in the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/home/mainContent.tsx'>mainContent.tsx</a></b></td>
									<td style='padding: 8px;'>- MainContent serves as a central component of the application, providing users with an interactive dashboard for job searching and application management<br>- It features a search and filter interface, displays popular and trending job listings, and encourages user engagement through options to upload CVs and create profiles<br>- This component enhances the overall user experience by facilitating easy navigation and access to job opportunities within the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/components/home/sideBarNavigation.tsx'>sideBarNavigation.tsx</a></b></td>
									<td style='padding: 8px;'>- SidebarNavigation component facilitates user interaction within the application by providing a dynamic sidebar interface<br>- It manages user session states, allowing for personalized navigation options based on authentication status<br>- The component includes menu items for easy access to key features and a search functionality, while also offering a responsive design that adapts to user preferences, enhancing overall user experience and engagement.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- services Submodule -->
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.services</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/services/jobServices.ts'>jobServices.ts</a></b></td>
							<td style='padding: 8px;'>- Job services facilitate the retrieval of job-related data within the application<br>- They enable fetching specific job details by ID, while also providing access to distinct active job locations and a sorted list of industry names<br>- This functionality supports the overall architecture by ensuring that users can efficiently access and filter job information, enhancing the user experience and data management capabilities of the project.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/services/jobApplicationServices.ts'>jobApplicationServices.ts</a></b></td>
							<td style='padding: 8px;'>- Facilitates the retrieval of job application data from the server, ensuring that users can access up-to-date information<br>- By making a GET request to the designated API endpoint, it handles the response and manages errors effectively<br>- This service plays a crucial role in the overall architecture by providing essential data for the application, enhancing user experience and functionality.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/services/userServices.ts'>userServices.ts</a></b></td>
							<td style='padding: 8px;'>- User services facilitate user management within the application, enabling functionalities such as user registration, login, email verification, password creation, and account retrieval<br>- By integrating with a database and authentication mechanisms, these services ensure secure user interactions and data integrity, while also handling error management and user feedback throughout the authentication process<br>- This architecture supports a seamless user experience in managing their accounts.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/services/mailServices.ts'>mailServices.ts</a></b></td>
							<td style='padding: 8px;'>- Facilitates the sending of verification emails within the Enigma Recruitment project<br>- By leveraging the Resend service, it constructs personalized email messages that include a confirmation link for users to verify their accounts<br>- This functionality enhances user onboarding and security, ensuring that new users can confirm their email addresses effectively as part of the overall application architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/services/verificationTokenServices.ts'>verificationTokenServices.ts</a></b></td>
							<td style='padding: 8px;'>- Verification token services manage the creation and retrieval of verification tokens associated with user email addresses<br>- By generating unique tokens and ensuring their validity, these services facilitate secure email verification processes<br>- Additionally, they handle the cleanup of existing tokens to maintain data integrity, ultimately enhancing user authentication and account security within the broader application architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/services/cvServices.ts'>cvServices.ts</a></b></td>
							<td style='padding: 8px;'>- Provides core functionalities for managing and processing curriculum vitae (CV) data within the application<br>- It serves as a crucial component of the overall architecture, enabling seamless integration of CV-related services, enhancing user experience by facilitating efficient data handling and manipulation<br>- This service plays a vital role in ensuring that CV information is accurately processed and readily accessible throughout the system.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/services/googleLoginServices.ts'>googleLoginServices.ts</a></b></td>
							<td style='padding: 8px;'>- GoogleAuthenticate facilitates user authentication through Google within the application, enhancing the login process<br>- By integrating with the authentication framework, it manages the sign-in flow and handles potential errors, ensuring a smooth user experience<br>- This service plays a crucial role in the overall architecture by streamlining user access and maintaining security during the login process.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- schemas Submodule -->
			<details>
				<summary><b>schemas</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.schemas</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/schemas/index.ts'>index.ts</a></b></td>
							<td style='padding: 8px;'>- Defines validation schemas for user registration, login, and password creation within the project<br>- These schemas ensure that user inputs meet specific criteria, such as valid email formats and minimum password lengths, enhancing data integrity and security<br>- Future enhancements are planned to strengthen password validation, aligning with best practices for user authentication and account management in the overall architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- app Submodule -->
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.app</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- Renders the main landing page of the application by integrating the LandingPage component from the Enigma library<br>- This component serves as the initial user interface, providing a welcoming entry point for users and setting the tone for the overall user experience within the application<br>- Its placement within the project structure emphasizes the focus on a seamless and engaging landing experience.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
							<td style='padding: 8px;'>- Establishes the foundational layout for the ENIGMA project, integrating global styles and font configurations<br>- It defines the overall structure of the application by wrapping child components within a standardized HTML template, ensuring consistent styling and accessibility<br>- The metadata configuration enhances SEO and user experience by providing essential information about the application.</td>
						</tr>
					</table>
					<!-- (auth) Submodule -->
					<details>
						<summary><b>(auth)</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.(auth)</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(auth)/layout.tsx'>layout.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a layout component for the authentication section of the application, facilitating a consistent structure for rendering authentication-related content<br>- It allows for the inclusion of common elements such as headers or sidebars, enhancing the user experience by maintaining a cohesive design<br>- This component plays a crucial role in organizing the user interface within the broader application architecture.</td>
								</tr>
							</table>
							<!-- admin Submodule -->
							<details>
								<summary><b>admin</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(auth).admin</b></code>
									<!-- users Submodule -->
									<details>
										<summary><b>users</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(auth).admin.users</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(auth)/admin/users/page.tsx'>page.tsx</a></b></td>
													<td style='padding: 8px;'>- Displays a comprehensive list of users within the admin interface, facilitating user management<br>- It fetches user data from a service, handles loading and error states, and presents the information in a structured table format<br>- Each user entry includes essential details such as name, email, role, and actions for viewing or editing, enhancing the overall user administration experience in the application.</td>
												</tr>
											</table>
											<!-- [userid] Submodule -->
											<details>
												<summary><b>[userid]</b></summary>
												<blockquote>
													<div class='directory-path' style='padding: 8px 0; color: #666;'>
														<code><b>⦿ src.app.(auth).admin.users.[userid]</b></code>
													<table style='width: 100%; border-collapse: collapse;'>
													<thead>
														<tr style='background-color: #f8f9fa;'>
															<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
															<th style='text-align: left; padding: 8px;'>Summary</th>
														</tr>
													</thead>
														<tr style='border-bottom: 1px solid #eee;'>
															<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(auth)/admin/users/[userid]/page.tsx'>page.tsx</a></b></td>
															<td style='padding: 8px;'>- UserPage component facilitates the display of detailed user information and their associated job applications within the admin interface<br>- It retrieves user data and job application details, presenting them in a structured format<br>- This enhances the administrative capabilities by allowing easy access to user profiles and their application statuses, thereby streamlining user management and application oversight in the overall project architecture.</td>
														</tr>
													</table>
													<!-- edit Submodule -->
													<details>
														<summary><b>edit</b></summary>
														<blockquote>
															<div class='directory-path' style='padding: 8px 0; color: #666;'>
																<code><b>⦿ src.app.(auth).admin.users.[userid].edit</b></code>
															<table style='width: 100%; border-collapse: collapse;'>
															<thead>
																<tr style='background-color: #f8f9fa;'>
																	<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																	<th style='text-align: left; padding: 8px;'>Summary</th>
																</tr>
															</thead>
																<tr style='border-bottom: 1px solid #eee;'>
																	<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(auth)/admin/users/[userid]/edit/page.tsx'>page.tsx</a></b></td>
																	<td style='padding: 8px;'>- Facilitates the editing of user profiles within the admin interface of the application<br>- By providing a dedicated page for user modifications, it enhances administrative capabilities, allowing for efficient management of user data<br>- This component integrates seamlessly into the overall architecture, supporting user authentication and authorization processes while ensuring a streamlined experience for administrators.</td>
																</tr>
															</table>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
									<!-- jobs Submodule -->
									<details>
										<summary><b>jobs</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(auth).admin.jobs</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(auth)/admin/jobs/page.tsx'>page.tsx</a></b></td>
													<td style='padding: 8px;'>- Facilitates the management of administrative job functionalities within the authentication module of the application<br>- By providing a dedicated page for job-related tasks, it enhances user experience and streamlines administrative operations<br>- This component integrates seamlessly into the overall project architecture, supporting efficient user role management and ensuring secure access to job-related features for administrators.</td>
												</tr>
											</table>
											<!-- [jobid] Submodule -->
											<details>
												<summary><b>[jobid]</b></summary>
												<blockquote>
													<div class='directory-path' style='padding: 8px 0; color: #666;'>
														<code><b>⦿ src.app.(auth).admin.jobs.[jobid]</b></code>
													<table style='width: 100%; border-collapse: collapse;'>
													<thead>
														<tr style='background-color: #f8f9fa;'>
															<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
															<th style='text-align: left; padding: 8px;'>Summary</th>
														</tr>
													</thead>
														<tr style='border-bottom: 1px solid #eee;'>
															<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(auth)/admin/jobs/[jobid]/page.tsx'>page.tsx</a></b></td>
															<td style='padding: 8px;'>- JobDetailsPage serves as a dynamic interface for displaying detailed information about a specific job and its associated applications within the admin section of the application<br>- It retrieves job data and application details based on the job ID, presenting them in a structured format<br>- This component enhances the user experience by allowing administrators to efficiently manage job listings and review applicant information in one cohesive view.</td>
														</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- (public) Submodule -->
					<details>
						<summary><b>(public)</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.(public)</b></code>
							<!-- login Submodule -->
							<details>
								<summary><b>login</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(public).login</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(public)/login/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user authentication by rendering the LoginPage component within the application<br>- Positioned within the public directory, it serves as the entry point for users to access their accounts, ensuring a seamless login experience<br>- This component plays a crucial role in the overall architecture by integrating user interface elements necessary for secure access to the application’s features.</td>
										</tr>
									</table>
									<!-- reset-password Submodule -->
									<details>
										<summary><b>reset-password</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(public).login.reset-password</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(public)/login/reset-password/page.tsx'>page.tsx</a></b></td>
													<td style='padding: 8px;'>- Facilitates the user experience for password recovery within the application by rendering the ForgotPass component<br>- Positioned within the login module, this page serves as a dedicated interface for users to initiate the password reset process, ensuring a seamless transition for those needing to regain access to their accounts<br>- It plays a crucial role in enhancing user security and accessibility.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- new-verification Submodule -->
									<details>
										<summary><b>new-verification</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.(public).login.new-verification</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(public)/login/new-verification/page.tsx'>page.tsx</a></b></td>
													<td style='padding: 8px;'>- Facilitates user interaction by rendering a verification form within the login flow of the application<br>- Positioned within the public-facing section of the app, this component plays a crucial role in the user authentication process, ensuring that users can verify their identities seamlessly as part of the overall architecture designed for secure access and user management.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- home Submodule -->
							<details>
								<summary><b>home</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(public).home</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(public)/home/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates the rendering of the home page within the application, integrating user authentication to manage session data<br>- It retrieves the current users session information and passes it to the HomePage component, ensuring a personalized experience<br>- Additionally, it includes a LogoutButton for user convenience, enhancing the overall user interface and interaction within the broader project architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- register Submodule -->
							<details>
								<summary><b>register</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.(public).register</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/(public)/register/page.tsx'>page.tsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user registration by rendering the SignUpPage component within the public-facing application<br>- Positioned within the apps structure, it serves as a dedicated entry point for new users to create accounts, enhancing the overall user experience and streamlining the onboarding process<br>- This component plays a crucial role in the broader architecture by integrating seamlessly with other application features.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- jobs Submodule -->
					<details>
						<summary><b>jobs</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.jobs</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/jobs/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the rendering of the Job List page within the application by integrating authentication and displaying the TaskPage component<br>- This component serves as a crucial part of the user interface, enabling users to interact with job-related tasks seamlessly<br>- It plays a vital role in the overall architecture by ensuring that job management features are accessible and user-friendly.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- forbidden Submodule -->
					<details>
						<summary><b>forbidden</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.forbidden</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/forbidden/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Handles the rendering of a forbidden access page within the application, providing users with a clear message when they attempt to access restricted content<br>- It retrieves the users username from a JWT token stored in cookies, displaying it alongside an access denied notification<br>- Additionally, it offers a link to navigate back to the home page, enhancing user experience and navigation within the codebase.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- api Submodule -->
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.app.api</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/route.ts'>route.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the API routing logic for the application, facilitating communication between the client and server components<br>- It serves as a central hub for handling incoming requests, directing them to the appropriate handlers, and ensuring a seamless interaction with the underlying services<br>- This structure enhances modularity and maintainability within the overall codebase architecture, promoting efficient data exchange and user experience.</td>
								</tr>
							</table>
							<!-- jobapplications Submodule -->
							<details>
								<summary><b>jobapplications</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.jobapplications</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/jobapplications/route.ts'>route.ts</a></b></td>
											<td style='padding: 8px;'>- Facilitates the retrieval of job application data from the database, providing essential details such as application ID, user ID, CV ID, applied time, and status<br>- It also includes related job information, including job title, employment type, and industry specifics<br>- This functionality enhances the overall architecture by enabling efficient access to job application records for further processing or display within the application.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- users Submodule -->
							<details>
								<summary><b>users</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.users</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/users/route.ts'>route.ts</a></b></td>
											<td style='padding: 8px;'>- Handles user data retrieval by verifying JWT tokens for authentication<br>- Upon successful validation, it queries the database for user information, including personal and role-related details, and returns the data in JSON format<br>- This functionality is crucial for maintaining secure access to user information within the application, ensuring that only authorized requests can retrieve sensitive user data.</td>
										</tr>
									</table>
									<!-- [userid] Submodule -->
									<details>
										<summary><b>[userid]</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.users.[userid]</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/users/[userid]/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Handles user retrieval by processing GET requests for specific user IDs<br>- It validates the user ID, fetches user details from the database, and returns the information in JSON format<br>- If the user is not found or if an error occurs, appropriate error messages are provided<br>- This functionality is integral to the user management aspect of the application, enabling seamless access to user data.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- login Submodule -->
							<details>
								<summary><b>login</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.login</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/login/route.ts'>route.ts</a></b></td>
											<td style='padding: 8px;'>- Handles user login functionality by validating credentials against a database and managing authentication processes<br>- It ensures that both email and password are provided, checks user status, and verifies the password securely<br>- Upon successful authentication, it facilitates user sign-in and returns a success response, while also managing errors effectively<br>- This component is integral to the overall user authentication flow within the application.</td>
										</tr>
									</table>
									<!-- create-password Submodule -->
									<details>
										<summary><b>create-password</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.login.create-password</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/login/create-password/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Facilitates the creation of a new password for users within the application<br>- It validates user input, checks the users status, and securely hashes the new password before updating it in the database<br>- This functionality is crucial for maintaining user account security and ensuring that only active users can modify their credentials, thereby enhancing the overall integrity of the authentication system in the project.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- reset-password Submodule -->
									<details>
										<summary><b>reset-password</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.login.reset-password</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/login/reset-password/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Facilitates the password reset process for users by validating their credentials and updating their password securely<br>- It ensures that the provided email and old password are correct, checks user status, and enforces password uniqueness<br>- Upon successful validation, it hashes the new password and updates the user record in the database, contributing to the overall user authentication and security architecture of the application.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- auth Submodule -->
							<details>
								<summary><b>auth</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.auth</b></code>
									<!-- send Submodule -->
									<details>
										<summary><b>send</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.auth.send</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/auth/send/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Handles the authentication process by managing the sending of authentication-related requests<br>- It plays a crucial role in the overall architecture by ensuring secure user access and facilitating communication between the client and server<br>- This component integrates seamlessly with the broader application, contributing to a robust and secure user experience within the authentication workflow.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- [...nextauth] Submodule -->
									<details>
										<summary><b>[...nextauth]</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.auth.[...nextauth]</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/auth/[...nextauth]/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Facilitates authentication processes within the application by exporting GET and POST methods from the Enigma authentication module<br>- This integration streamlines user authentication flows, ensuring secure access to resources while maintaining a clean and organized architecture in the API layer<br>- It plays a crucial role in managing user sessions and credentials, enhancing the overall security and usability of the application.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- jobs Submodule -->
							<details>
								<summary><b>jobs</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.jobs</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/jobs/route.ts'>route.ts</a></b></td>
											<td style='padding: 8px;'>- Facilitates job retrieval by processing incoming requests and querying the job repository based on specified filters such as status, search terms, pagination, and limits<br>- It also gathers available job locations and industries to enhance the search experience<br>- The response includes job listings along with metadata, ensuring users receive relevant and structured job information efficiently.</td>
										</tr>
									</table>
									<!-- [jobid] Submodule -->
									<details>
										<summary><b>[jobid]</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.app.api.jobs.[jobid]</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/jobs/[jobid]/route.ts'>route.ts</a></b></td>
													<td style='padding: 8px;'>- Fetches job details from the database based on a provided job ID, ensuring that valid input is received and handling potential errors gracefully<br>- This functionality is integral to the overall architecture, enabling users to retrieve specific job information, including title, description, salary range, and related industry data, thereby enhancing the applications capability to serve job seekers and employers effectively.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- register Submodule -->
							<details>
								<summary><b>register</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.app.api.register</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/app/api/register/route.ts'>route.ts</a></b></td>
											<td style='padding: 8px;'>- Handles user registration by processing incoming requests to create new user accounts<br>- It validates input data, checks for existing users, and securely hashes passwords before storing user information in the database<br>- Upon successful registration, it responds with a confirmation message, ensuring a smooth onboarding experience while maintaining security and data integrity within the overall application architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- types Submodule -->
			<details>
				<summary><b>types</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.types</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/types/next-auth.d.ts'>next-auth.d.ts</a></b></td>
							<td style='padding: 8px;'>- Extends the NextAuth module to enhance user and session types within the application<br>- By incorporating additional properties such as role and OAuth status, it facilitates more granular user management and access control<br>- This integration supports the overall architecture by ensuring that authentication and user data align with the projects requirements for role-based functionality and session handling.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/types/models.ts'>models.ts</a></b></td>
							<td style='padding: 8px;'>- Defines essential data models for user management, job postings, and applications within the project<br>- These interfaces facilitate the structure and validation of user information, job details, and application processes, ensuring consistency across the codebase<br>- By establishing clear data types, it enhances collaboration and integration among various components, ultimately supporting the overall functionality of the application in managing job-related interactions.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- repositories Submodule -->
			<details>
				<summary><b>repositories</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.repositories</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/master/src/repositories/jobRepositoriy.ts'>jobRepositoriy.ts</a></b></td>
							<td style='padding: 8px;'>- JobRepositoriy serves as a crucial component in the project architecture, facilitating the retrieval and management of job listings based on search queries and status<br>- It enables users to find relevant job opportunities efficiently, supports pagination, and provides insights into popular job searches, thereby enhancing the overall user experience in navigating job data.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build enigma-recruitment-sprint3 from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/outlastzedd/enigma-recruitment-sprint3
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd enigma-recruitment-sprint3
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Enigma-recruitment-sprint3 uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/outlastzedd/enigma-recruitment-sprint3/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/outlastzedd/enigma-recruitment-sprint3/issues)**: Submit bugs found or log feature requests for the `enigma-recruitment-sprint3` project.
- **💡 [Submit Pull Requests](https://github.com/outlastzedd/enigma-recruitment-sprint3/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/outlastzedd/enigma-recruitment-sprint3
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/outlastzedd/enigma-recruitment-sprint3/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=outlastzedd/enigma-recruitment-sprint3">
   </a>
</p>
</details>

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
