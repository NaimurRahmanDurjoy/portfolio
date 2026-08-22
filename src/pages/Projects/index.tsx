import { useState, useMemo } from "react";
import { SectionContainer } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useProjects } from "@/hooks/useProjects";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { slideUp } from "@/lib/animations";
import { Loader2, Search } from "lucide-react";

const FILTERS = ["All", "Personal", "Company", "Client", "Laravel", "React", "Vue", "ERP", "POS"];

import { SEOHead } from "@/components/common/SEOHead";

export default function Projects() {
  const { data: projects, isLoading, error } = useProjects();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = activeFilter === "All" || 
                            project.type === activeFilter || 
                            project.category === activeFilter ||
                            project.technologies.includes(activeFilter);
                            
      return matchesSearch && matchesFilter;
    });
  }, [projects, searchQuery, activeFilter]);

  return (
    <SectionContainer>
      <SEOHead title="Projects" description="Explore my portfolio of enterprise software, personal projects, and open-source contributions." />
      
      <div className="flex flex-col items-center text-center mb-16 pt-10 md:pt-20">
        <AnimatedWrapper variants={slideUp} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">& Case Studies</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A comprehensive showcase of my engineering work, ranging from complex enterprise applications to open-source tools and personal experiments.
          </p>
        </AnimatedWrapper>
      </div>
      
      <AnimatedWrapper variants={slideUp} className="flex flex-col gap-6 mb-12">
        <div className="glass p-2 md:p-3 rounded-2xl md:rounded-full border border-border/50 flex flex-col md:flex-row items-center gap-3 w-full shadow-lg shadow-primary/5">
          <div className="relative w-full md:w-[300px] shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search projects..." 
              className="pl-11 h-12 bg-background/50 border-transparent hover:border-primary/20 focus-visible:ring-1 focus-visible:ring-primary rounded-xl md:rounded-full text-base transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex-1 w-full overflow-x-auto pb-2 md:pb-0 hide-scrollbar mask-edges">
            <div className="flex items-center gap-2 min-w-max px-1">
              {FILTERS.map(filter => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full h-10 px-5 text-sm transition-all ${activeFilter === filter ? 'shadow-md shadow-primary/20' : 'bg-transparent border-transparent hover:bg-surface text-muted-foreground hover:text-foreground'}`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedWrapper>

      {isLoading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>
      ) : error ? (
        <div className="text-center text-destructive py-20">Failed to load projects.</div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center text-muted-foreground py-20">No projects found matching your criteria.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <AnimatedWrapper key={project.id} variants={slideUp}>
              <ProjectCard project={project} />
            </AnimatedWrapper>
          ))}
        </div>
      )}
    </SectionContainer>
  )
}
