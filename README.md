<p align="center">
  <a href="https://cosmocloud-interview.vercel.app">
    <img src="https://github.com/user-attachments/assets/2c52522d-942c-4a42-9eda-85a4acdb5c97" alt="ESM" />
  </a>
</p>
<h1 align="center">
  Employee Management System
</h1>

<h4 align="center">
  <a href="https://cosmocloud-interview.vercel.app">Website</a>
</h4>

<p align="center">
An employee management website.
</p>

## Getting Started

### Requirements

- Node v18.0 or higher.

You can run EMS locally by following the steps:

1. **Clone the Repo**

   ```bash
   git clone https://github.com/sebabratakundu/cosmocloud-interview.git
   ```

2. **Start your ESM website**

   set env variable in `.env.local` file

   ```dotenv
   COSMOCLOUD_PROJECT_ID=4234fsdaf
   COSMOCLOUD_ENVIRONMENT_ID=4238fsdfsa
   COSMOCLOUD_API_BASE_URL=https://example.com/api
   ```

   ```bash
   cd backend
   pnpm i
   pnpm husky install
   pnpm dev
   ```

## What is ESM (Employee Management System)?

ESM is an employee management website built with Next.js and Cosmocloud. ESM enables users to view all the employees, review their details, add new employees to the system, and delete one. fully **CRUD** enabled!

### Technology Stack

1. Next.js 14
2. Tailwind CSS - (styling)
3. Cosmocloud

### Architecture

1. Front-end routes

   - `/` - all employees page
   - `/:id` - single employee page
   - `/add-employee` - add an employee page

### Features

- View all employees available in our database
- View employee details page
- Add a new employee
