##Project Name: DevPulse 🐞 Issue Tracker API
A backend REST API built with **Node.js, Express, TypeScript, PostgreSQL**, and **JWT authentication** for managing issues with role-based access control (RBAC).

## LIve Link:

https://devpulse-issue-tracker.vercel.app/api/issues

## ALl Endpoints:

http://devpulse-issue-tracker.vercel.app/api/auth/signup
http://devpulse-issue-tracker.vercel.app/api/auth/login
http://devpulse-issue-tracker.vercel.app/api/issues (post/get)
http://devpulse-issue-tracker.vercel.app/api/issues/1 (single-issue/update/delete)

## 🚀 Features

- 🔐 User authentication (JWT)
- 👥 Role-based access control (Contributor & Maintainer)
- 📝 Create, read, update, delete issues
- 🔒 Ownership-based authorization
- 📌 Contributors can only update their own issues
- 🛠 Maintainers have full access
- ⚡ PostgreSQL integration using `pg` pool
- 🧠 Strong TypeScript typing

## 🧑‍💻 Roles

### Contributor

- Can create issues
- Can update only their own issues
- Can update only if issue status is `open`
- Can't delete issues

### Maintainer

- Can manage all issues
- No restrictions on updates or deletions

## 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt
