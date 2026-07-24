import { ExperienceRepository } from "@/repositories/ExperienceRepository";
import type { Experience } from "@/types";

export class ExperienceService {
  static async getAllExperience(): Promise<Experience[]> {
    const experience = await ExperienceRepository.getAll();
    // In a real scenario, you might sort by date here if the backend doesn't
    return experience;
  }
}
