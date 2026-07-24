import { useQuery } from "@tanstack/react-query";
import { ProjectService } from "@/services/ProjectService";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: ProjectService.getAllProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useFeaturedProjects = () => {
  return useQuery({
    queryKey: ["projects", "featured"],
    queryFn: ProjectService.getFeaturedProjects,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProjectDetails = (slug: string) => {
  return useQuery({
    queryKey: ["projects", slug],
    queryFn: () => ProjectService.getProjectDetails(slug),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });
};
