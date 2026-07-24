# Portfolio CMS Migration Notes

This document provides instructions on how to migrate the portfolio data from local JSON files to a Laravel REST API.

## Current Architecture: JSON Repository

Currently, the application relies on simulated API calls using local JSON files stored in the `src/data/` directory. The data flow is as follows:

- **Component Layer** (`src/pages/Projects.tsx`): Renders UI based on data from a hook.
- **Hook Layer** (`src/hooks/useProjects.ts`): Uses TanStack Query to manage loading, caching, and errors.
- **Service Layer** (`src/services/ProjectService.ts`): Handles business logic (filtering, sorting).
- **Repository Layer** (`src/repositories/ProjectRepository.ts`): Reads from `src/data/projects.json` via Axios or dynamic imports.

## Future Architecture: Laravel REST API

To transition to a live backend CMS (e.g., Laravel), follow these steps:

1. **Environment Variables**:
   Update `VITE_API_URL` in `.env` to point to your live Laravel API endpoint:
   ```env
   VITE_API_URL=https://api.yourportfolio.com/v1
   ```

2. **Update Axios Instance**:
   In `src/api/index.ts`, ensure Axios uses the base URL from the environment:
   ```typescript
   import axios from 'axios';
   
   export const apiClient = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     headers: {
       'Content-Type': 'application/json',
     },
   });
   ```

3. **Modify Repositories**:
   Update the functions in your repositories (`ProjectRepository.ts`, `ProfileRepository.ts`) to make actual HTTP requests instead of importing JSON.
   
   *Example:*
   ```typescript
   // Before (JSON)
   import projectsData from '@/data/projects.json';
   export const getProjects = async () => {
     return projectsData;
   };

   // After (API)
   import { apiClient } from '@/api';
   export const getProjects = async () => {
     const response = await apiClient.get('/projects');
     return response.data;
   };
   ```

4. **Adjust Schemas (Optional)**:
   Ensure the TypeScript interfaces in `src/types/index.ts` match the exact JSON structure returned by your Laravel endpoints (e.g., handling pagination metadata).

By strictly adhering to the Repository pattern, the components and hooks will remain completely unaware of the data source change.
