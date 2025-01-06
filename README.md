# Reviews Management System

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Development](#development)
- [Build](#build)
- [Testing](#testing)

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

# Setup the database with prisma
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
- **API-centric approach**: All data is fetched via REST APIs to maintain a clean separation between the backend and frontend.

### Trade-offs

1. **Client-side Rendering (CSR)**:
    - **Pros**: Faster iterations during development, reduced server load.
    - **Cons**: Initial page load time may be slower due to JavaScript rendering.

2. **TypeScript Adoption**:
    - **Pros**: Improved developer experience and reduced runtime errors.
    - **Cons**: Slightly increased development time due to type annotations.

3. **State Management with [State Library]**:
    - **Pros**: Simplifies state management across components.
    - **Cons**: Adds a small overhead in library size.

---

## State Management

The project uses [State Management Tool/Library] to manage application state. Key details:

- **Global State**: Managed using [e.g., Redux/Context API/Zustand].
- **Local State**: Managed at the component level for UI-specific states like modals.
- **Asynchronous State**: API calls are handled using [e.g., Redux Toolkit/React Query].

**Why this approach?**
- Keeps state predictable and debuggable.
- Facilitates scaling by separating global and local state management concerns.

---

## Performance Optimizations

1. **Lazy Loading**:
    - Components and routes are loaded on demand using React's `lazy` and `Suspense`.

2. **Memoization**:
    - Used `React.memo` and `useMemo` for caching expensive calculations and preventing unnecessary re-renders.

3. **Code Splitting**:
    - Bundles are split into smaller chunks for faster initial loading.

4. **API Caching**:
    - Implemented with [tool, e.g., SWR/React Query] to minimize redundant API calls.

5. **Static Assets Optimization**:
    - Images are compressed, and static files are served via a CDN for better performance.

---
