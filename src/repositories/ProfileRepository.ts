import type { Profile } from "@/types";
import profileData from "@/data/profile.json";
import profileImage from "@/assets/profile.png";

export class ProfileRepository {
  static async get(): Promise<Profile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...profileData, avatar: profileImage } as Profile);
      }, 100);
    });
  }
}
