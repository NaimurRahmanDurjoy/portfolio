import { SectionContainer } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useArticles } from "@/hooks/useArticles";
import { slideUp, staggerContainer } from "@/lib/animations";
import { Link } from "react-router-dom";
import { Loader2, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/common/SEOHead";
import { motion } from "framer-motion";

export default function Articles() {
    const { data: articles, isLoading } = useArticles();

    if (isLoading) {
        return <div className="flex h-[50vh] justify-center items-center"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>;
    }

    const featuredArticle = articles?.[0];
    const restArticles = articles?.slice(1) || [];

    return (
        <div className="flex flex-col gap-12 pb-24">
            <SEOHead title="Articles" description="Technical writing and software engineering thoughts." />

            <SectionContainer className="pt-24 md:pt-32">
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5"><BookOpen className="w-4 h-4 mr-2" /> Tech Journal</Badge>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Insights</span></h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Deep dives into software architecture, modern frameworks, and scaling complex applications.</p>
                </div>

                <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto z-10 relative">
                    {/* Featured Article */}
                    {featuredArticle && (
                        <AnimatedWrapper variants={slideUp}>
                            <Link to={`/articles/${featuredArticle.slug}`} className="group block relative overflow-hidden rounded-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-50 z-0"></div>
                                <article className="relative z-10 glass p-8 md:p-12 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-4">{featuredArticle.category}</Badge>
                                        <Badge variant="outline" className="border-border">Featured Analysis</Badge>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-extrabold mb-5 group-hover:text-primary transition-colors leading-tight">{featuredArticle.title}</h3>
                                    <p className="text-lg md:text-xl text-muted-foreground mb-8 line-clamp-3 leading-relaxed">{featuredArticle.excerpt}</p>

                                    <div className="flex flex-wrap items-center justify-between mt-auto pt-6 border-t border-border/50">
                                        <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base text-muted-foreground font-medium">
                                            <span className="flex items-center gap-2 bg-surface/80 px-4 py-2 rounded-lg border border-border"><Calendar className="w-4 h-4 text-primary" /> {featuredArticle.publishedDate}</span>
                                            <span className="flex items-center gap-2 bg-surface/80 px-4 py-2 rounded-lg border border-border"><Clock className="w-4 h-4 text-primary" /> {featuredArticle.readingTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform bg-primary/10 px-6 py-3 rounded-xl mt-4 md:mt-0">
                                            Read Story <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </AnimatedWrapper>
                    )}

                    {/* Standard Articles Grid */}
                    <AnimatedWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        {restArticles.map((article) => (
                            <motion.div key={article.id} variants={slideUp} className="h-full">
                                <Link to={`/articles/${article.slug}`} className="group block h-full">
                                    <article className="h-full flex flex-col glass p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform blur-xl"></div>

                                        <div className="flex flex-wrap gap-2 mb-5">
                                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 px-3">{article.category}</Badge>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                                        <p className="text-muted-foreground mb-8 line-clamp-3 flex-1">{article.excerpt}</p>

                                        <div className="flex items-center justify-between mt-auto pt-5 border-t border-border">
                                            <div className="flex flex-col gap-1 text-xs text-muted-foreground font-medium">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.publishedDate}</span>
                                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readingTime}</span>
                                            </div>
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatedWrapper>

                    {(!articles || articles.length === 0) && (
                        <div className="text-center py-20 text-muted-foreground">No articles published yet.</div>
                    )}
                </div>
            </SectionContainer>
        </div>
    )
}
