import { useQuery } from "@tanstack/react-query";
import { SkillService } from "@/services/SkillService";

export const useSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: SkillService.getAllSkills,
    staleTime: Infinity,
  });
};
