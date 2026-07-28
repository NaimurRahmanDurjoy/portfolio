import { useQuery } from "@tanstack/react-query";
import { ArticleRepository } from "@/repositories/ArticleRepository";

export const useArticle = (slug: string) => {
    return useQuery({
        queryKey: ["articles", slug],
        queryFn: () => ArticleRepository.getBySlug(slug),
        staleTime: Infinity,
        enabled: !!slug,
    });
};
