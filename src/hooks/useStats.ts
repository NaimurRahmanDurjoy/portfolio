import { useQuery } from "@tanstack/react-query";
import { StatService } from "@/services/StatService";

export const useStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: StatService.getAllStats,
    staleTime: Infinity,
  });
};
