import { useQuery } from "@tanstack/react-query";
import { ArticleRepository } from "@/repositories/ArticleRepository";

export const useArticles = () => {
    return useQuery({
        queryKey: ["articles"],
        queryFn: ArticleRepository.getAll,
        staleTime: Infinity,
    });
};
