import type { Project } from "@/types";
import projectsData from "@/data/projects.json";

/**
 * Project Repository
 * Simulates data access layer.
 * Future: Replace JSON import with Axios API calls.
 */
export class ProjectRepository {
  static async getAll(): Promise<Project[]> {
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(projectsData as Project[]);
      }, 300);
    });
  }

  static async getBySlug(slug: string): Promise<Project | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const project = (projectsData as Project[]).find((p) => p.slug === slug);
        resolve(project);
      }, 200);
    });
  }
}
