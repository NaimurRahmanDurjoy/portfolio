import { useQuery } from "@tanstack/react-query";
import { ProfileService } from "@/services/ProfileService";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: ProfileService.getProfile,
    staleTime: Infinity, // Profile doesn't change often
  });
};
