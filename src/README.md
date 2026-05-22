##Project Name: DevPulse 🐞 Issue Tracker API
A backend REST API built with **Node.js, Express, TypeScript, PostgreSQL**, and **JWT authentication** for managing issues with role-based access control (RBAC).

## ALl Endpoints:

http://localhost:5000/api/auth/signup
http://localhost:5000/api/auth/login
http://localhost:5000/api/issues (post/get)
http://localhost:5000/api/issues/1 (single-issue/update/delete)

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
