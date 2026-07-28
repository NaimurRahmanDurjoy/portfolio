import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useArticles } from "@/hooks/useArticles";
import { slideUp } from "@/lib/animations";
import { Link } from "react-router-dom";
import { Loader2, Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/common/SEOHead";

export default function Articles() {
    const { data: articles, isLoading } = useArticles();

    if (isLoading) {
        return <div className="flex h-[50vh] justify-center items-center"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>;
    }

    return (
        <div className="flex flex-col gap-12 pb-24">
            <SEOHead title="Articles" description="Technical writing and software engineering thoughts." />

            <SectionContainer>
                <SectionHeading title="Articles" subtitle="Writing about software engineering, architecture, and technology." />

                <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
                    {articles?.map((article) => (
                        <AnimatedWrapper key={article.id} variants={slideUp}>
                            <Link to={`/articles/${article.slug}`} className="group block">
                                <article className="glass p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">{article.category}</Badge>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-2">{article.excerpt}</p>

                                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.publishedDate}</span>
                                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readingTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-medium group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </AnimatedWrapper>
                    ))}
                    {(!articles || articles.length === 0) && (
                        <div className="text-center py-20 text-muted-foreground">No articles published yet.</div>
                    )}
                </div>
            </SectionContainer>
        </div>
    )
}
