import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useSkills } from "@/hooks/useSkills";
import { slideUp } from "@/lib/animations";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const { data: skills, isLoading, error } = useSkills();

  return (
    <SectionContainer>
      <SectionHeading title="Technical Skills" subtitle="My engineering toolkit." />
      
      {isLoading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>
      ) : error ? (
        <div className="text-center text-destructive py-20">Failed to load skills data.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skillGroup) => (
            <AnimatedWrapper key={skillGroup.id} variants={slideUp}>
              <div className="p-6 glass rounded-xl border border-border h-full hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <Badge key={item} variant="secondary" className="text-sm py-1 px-3">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      )}
    </SectionContainer>
  )
}
