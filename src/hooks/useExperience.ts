import { useQuery } from "@tanstack/react-query";
import { ExperienceService } from "@/services/ExperienceService";

export const useExperience = () => {
  return useQuery({
    queryKey: ["experience"],
    queryFn: ExperienceService.getAllExperience,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
