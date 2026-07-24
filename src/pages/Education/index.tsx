import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useEducation } from "@/hooks/useEducation";
import { slideUp } from "@/lib/animations";
import { Loader2, GraduationCap } from "lucide-react";

export default function Education() {
  const { data: education, isLoading, error } = useEducation();

  return (
    <SectionContainer>
      <SectionHeading title="Education" subtitle="My academic background." />
      
      {isLoading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>
      ) : error ? (
        <div className="text-center text-destructive py-20">Failed to load education data.</div>
      ) : education?.length === 0 ? (
        <div className="text-center text-muted-foreground py-20">Academic history will be updated soon.</div>
      ) : (
        <div className="flex flex-col gap-6">
          {education?.map((edu) => (
            <AnimatedWrapper key={edu.id} variants={slideUp} className="glass p-6 rounded-xl border border-border flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{edu.degree} in {edu.fieldOfStudy}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{edu.startDate} - {edu.endDate}</span>
                  {edu.grade && <span>CGPA: {edu.grade}</span>}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      )}
    </SectionContainer>
  )
}
