import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useProfile } from "@/hooks/useProfile";
import { slideUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  const { data: profile } = useProfile();

  return (
    <SectionContainer className="max-w-4xl mx-auto">
      <SectionHeading title="Resume" subtitle="My professional summary in a PDF." />
      
      <AnimatedWrapper variants={slideUp} className="glass p-8 md:p-12 rounded-xl border border-border flex flex-col items-center justify-center text-center gap-6">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
          <FileText className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold">Download My Resume</h3>
        <p className="text-muted-foreground max-w-lg">
          Get a comprehensive overview of my experience, skills, and projects in a printer-friendly PDF format.
        </p>
        
        {profile?.resumeUrl ? (
          <Button size="lg" className="mt-4" asChild>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" /> Download PDF
            </a>
          </Button>
        ) : (
          <Button size="lg" className="mt-4" disabled>
            Resume Not Available
          </Button>
        )}
      </AnimatedWrapper>
    </SectionContainer>
  )
}
