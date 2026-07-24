import { useQuery } from "@tanstack/react-query";
import type { Education } from "@/types";
import educationData from "@/data/education.json";

// Quick mock for hook pattern
export const useEducation = () => {
  return useQuery({
    queryKey: ["education"],
    queryFn: async (): Promise<Education[]> => {
      return new Promise((resolve) => setTimeout(() => resolve(educationData as Education[]), 100));
    }
  });
};
