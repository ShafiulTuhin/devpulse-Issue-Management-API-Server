## Project Name: DevPulse 🐞 Issue Tracker API

A backend REST API built with **Node.js, Express, TypeScript, PostgreSQL**, and **JWT authentication** for managing issues with role-based access control (RBAC).

## LIve Link: https://devpulse-issue-tracker.vercel.app/api/issues

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt

## Setup Steps:

--> Designed database schema (users & issues tables with constraints)
--> Connected PostgreSQL database using dotenv configuration
--> Initialized database connection using pg Pool
--> Created automatic table creation function (initDB)
--> Set up Express server with TypeScript support
--> Implemented authentication system (JWT-based login & signup)
--> Added role-based access control (admin / contributor)
--> Built CRUD APIs for issue management
--> Tested API endpoints using Postman

## API Endpoints

--> Auth Routes:
--> Register User --> POST /api/auth/signup
--> Access type: Public

--> Login User --> POST /api/auth/login
--> Access type: Public

Authenticates user and returns JWT token.

## Issue Routes

--> Create Issue --> POST /api/issues --> Creates a new issue (bug / feature request)
--> Access type: Requires authentication

--> Get All Issues --> GET /api/issues --> Fetch all issues (can be filtered by status/type if implemented).
--> Access type: Public

--> Get Single Issue -->GET /api/issues/:id --> Fetch a specific issue by ID.
--> Access type: Public

--> Update Issue --> PUT /api/issues/:id
--> Access: Maintainer (any issue) OR Contributor (own issue, only if status is open)

--> Delete Issue --> DELETE /api/issues/:id
Access: Maintainer only

## database schema summary

Users Table: Stores registered users of the system.
--> id → Primary key
--> name → User's name (max 20 chars),cannot be empty
--> email → Unique email address (max 20 chars)
--> password → Hashed password
--> role → User role (contributor by default)
--> created_at → Account creation time
--> updated_at → Last update time

Issues Table: Stores bug reports and feature requests.
--> id → Primary key
--> reporter_id → ID of the user who created the issue
--> title → Issue title (max 150 characters)
--> type → Either bug or feature_request
--> description → Detailed issue description (min 20 characters)
--> status → Issue state (open, in_progress, resolved)
--> created_at → Creation timestamp
--> updated_at → Last update timestamp
