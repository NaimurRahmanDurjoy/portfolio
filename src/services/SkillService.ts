import type { Skill } from "@/types";
import skillsData from "@/data/skills.json";

export class SkillRepository {
  static async getAll(): Promise<Skill[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(skillsData as Skill[]), 150);
    });
  }
}

export class SkillService {
  static async getAllSkills(): Promise<Skill[]> {
    return await SkillRepository.getAll();
  }
}
