import { ProfileRepository } from "@/repositories/ProfileRepository";
import type { Profile } from "@/types";

export class ProfileService {
  static async getProfile(): Promise<Profile> {
    return await ProfileRepository.get();
  }
}
