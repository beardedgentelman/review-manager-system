# Reviews Management System

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Architectural Decisions and Trade-offs](#architectural-decisions-and-trade-offs)
- [State Management](#state-management)
- [Performance Optimizations](#performance-optimizations)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (used v22.12.0)
- [pnpm](https://www.pnpm.io/) (can use another if you prefer)

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Navigate to the project directory
cd your-repo

# Install dependencies
pnpm install:all 

# Setup the database with prisma (you need to create a db file manually and specify it in the .env file)
pnpx prisma migrate dev # Then run seed.ts file!
```

## Running the Project

```bash
# Run the next project
pnpm next

# Run the express api project
pnpm api
```

## Architectural Decisions and Trade-offs

### Chosen Architecture

- **Component-based architecture**: Each UI piece is encapsulated into modular, reusable components.
- **API-centric approach**: All data is fetched via REST APIs to maintain a clean separation between the backend and
  frontend.

### Trade-offs

1. **Next.js (SSR)**:
    - **Pros**: Improved SEO, faster initial page load times, and better user experience.
    - **Cons**: Increased server load and potential complexity in data fetching.

2. **TypeScript Adoption**:
    - **Pros**: Improved developer experience and reduced runtime errors.
    - **Cons**: Slightly increased development time due to type annotations.

3. **Express.js (API)**:
    - **Pros**: Improved performance and scalability for API requests.
    - **Cons**: Additional complexity in setting up the API and routing.

4. **Prisma (ORM)**:
    - **Pros**: Simplifies interactions with the database and generates types.
    - **Cons**: Adds a small overhead in library size and may require additional setup.

---

## State Management

The project uses Zustand to manage application state and Next.js Server Actions for asynchronous requests. Key details:

- **Global State**: Managed using Zustand for a lightweight and flexible state management solution.
- **Local State**: Managed at the component level for UI-specific states like modals.
- **Asynchronous State**: API calls are handled using Next.js Server Actions for efficient server-side data handling.

**Why this approach?**

- The server actions provide a clear separation of concerns between the server and client code, making it easier to
  debug and scale the application.
- Facilitates scaling by separating global and local state management concerns.

---

## Performance Optimizations

1. **`startTransition`**:
    - Used `startTransition` to wrap slow operations, providing a better user experience while the app is loading.
2. **Minimal Global State**:
    - Only the truly necessary state is lifted to the global level, reducing unnecessary complexity.

---
