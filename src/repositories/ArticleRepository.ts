import type { Article } from "@/types";
import articlesData from "@/data/articles.json";

export class ArticleRepository {
    static async getAll(): Promise<Article[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(articlesData as Article[]);
            }, 100);
        });
    }

    static async getBySlug(slug: string): Promise<Article | undefined> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const article = (articlesData as Article[]).find((a) => a.slug === slug);
                resolve(article);
            }, 100);
        });
    }
}
