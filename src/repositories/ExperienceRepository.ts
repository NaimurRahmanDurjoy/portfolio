import type { Experience } from "@/types";
import experienceData from "@/data/experience.json";

export class ExperienceRepository {
  static async getAll(): Promise<Experience[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(experienceData as Experience[]);
      }, 200);
    });
  }
}
