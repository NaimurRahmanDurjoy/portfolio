import type { Profile } from "@/types";
import profileData from "@/data/profile.json";

export class ProfileRepository {
  static async get(): Promise<Profile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileData as Profile);
      }, 100);
    });
  }
}
