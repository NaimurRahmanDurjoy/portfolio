import { useParams, Link, Navigate } from "react-router-dom";
import { useArticle } from "@/hooks/useArticle";
import { SectionContainer } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { slideUp } from "@/lib/animations";
import { Loader2, ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/common/SEOHead";

export default function ArticleDetails() {
    const { slug } = useParams<{ slug: string }>();

    if (!slug) return <Navigate to="/articles" replace />;

    const { data: article, isLoading } = useArticle(slug);

    if (isLoading) {
        return <div className="flex h-[50vh] justify-center items-center"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>;
    }

    if (!article) {
        return (
            <div className="flex flex-col h-[50vh] justify-center items-center gap-4">
                <h2 className="text-2xl font-bold">Article Not Found</h2>
                <Link to="/articles" className="text-primary hover:underline">Return to Articles</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col pb-24">
            <SEOHead title={article.title} description={article.excerpt} />

            <SectionContainer className="pt-8 md:pt-12">
                <div className="max-w-4xl mx-auto w-full mb-12">
                    <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Articles
                    </Link>
                </div>

                <AnimatedWrapper variants={slideUp} className="max-w-4xl mx-auto flex flex-col gap-8">
                    <div className="flex flex-col gap-6 items-start">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                            {article.category}
                        </Badge>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex items-center gap-6 text-muted-foreground font-medium border-y border-border py-4 w-full">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.publishedDate}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readingTime}</span>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
                        {article.content.split('\n').map((paragraph: string, idx: number) => (
                            paragraph.trim() ? <p key={idx} className="mb-6">{paragraph}</p> : null
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
                        {article.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="bg-surface">{tag}</Badge>
                        ))}
                    </div>
                </AnimatedWrapper>
            </SectionContainer>
        </div>
    )
}
