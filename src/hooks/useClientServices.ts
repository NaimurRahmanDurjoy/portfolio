import { useQuery } from "@tanstack/react-query";
import { ClientServiceService } from "@/services/ClientServiceService";

export const useClientServices = () => {
  return useQuery({
    queryKey: ["clientServices"],
    queryFn: () => ClientServiceService.getServices(),
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
};
