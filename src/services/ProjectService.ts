import { ProjectRepository } from "@/repositories/ProjectRepository";
import type { Project } from "@/types";

export class ProjectService {
  static async getAllProjects(): Promise<Project[]> {
    return await ProjectRepository.getAll();
  }

  static async getFeaturedProjects(): Promise<Project[]> {
    const projects = await ProjectRepository.getAll();
    return projects.filter((project) => project.featured);
  }

  static async getProjectDetails(slug: string): Promise<Project> {
    const project = await ProjectRepository.getBySlug(slug);
    if (!project) {
      throw new Error(`Project with slug ${slug} not found`);
    }
    return project;
  }
}
