import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { slideUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProfile } from "@/hooks/useProfile";
import { Mail, Phone, MapPin, GitBranch } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { data: profile } = useProfile();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! (Simulated)");
    }, 1000);
  };

  return (
    <SectionContainer>
      <SectionHeading title="Contact" subtitle="Let's build something together." />
      
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedWrapper variants={slideUp} className="flex flex-col gap-8">
          <div className="glass p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-6 text-muted-foreground">
              {profile?.email && (
                <div className="flex items-center gap-4">
                  <Mail className="text-primary w-5 h-5" />
                  <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">{profile.email}</a>
                </div>
              )}
              {profile?.phone && (
                <div className="flex items-center gap-4">
                  <Phone className="text-primary w-5 h-5" />
                  <span>{profile.phone}</span>
                </div>
              )}
              {profile?.location && (
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary w-5 h-5" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-border flex gap-4">
              {profile?.socialLinks.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" className="bg-surface p-3 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <GitBranch className="w-5 h-5" />
                </a>
              )}
              
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper variants={slideUp} className="glass p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" required placeholder="John Doe" className="bg-surface" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" required placeholder="john@example.com" className="bg-surface" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" required placeholder="How can I help you?" rows={5} className="bg-surface" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="mt-4">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </AnimatedWrapper>
      </div>
    </SectionContainer>
  )
}
