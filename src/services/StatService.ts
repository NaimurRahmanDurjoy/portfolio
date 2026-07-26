import type { Stat } from "@/types";
import statsData from "@/data/stats.json";

export class StatRepository {
  static async getAll(): Promise<Stat[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(statsData as Stat[]), 100);
    });
  }
}

export class StatService {
  static async getAllStats(): Promise<Stat[]> {
    return await StatRepository.getAll();
  }
}
