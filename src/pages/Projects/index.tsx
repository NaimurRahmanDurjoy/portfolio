import { useState, useMemo } from "react";
import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
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
      <SectionHeading title="Projects" subtitle="A showcase of my engineering work." />
      
      <AnimatedWrapper variants={slideUp} className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search projects..." 
            className="pl-9 glass"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
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
