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
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-6">
              {profile?.email && (
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground"> Email Me </span>
                    <a href={`mailto:${profile.email}`} className="text-base font-semibold hover:text-primary transition-colors"> {profile.email} </a>
                  </div>
                </div>
              )}

              {profile?.phone && (
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground"> Contact Me </span>
                    <span className="text-base font-semibold"> {profile.phone} </span>
                  </div>
                </div>
              )}

              {profile?.location && (
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">Find Me</span>
                    <span className="text-base font-semibold">{profile.location}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-border flex gap-4">
              {profile?.socialLinks.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <GitBranch className="h-5 w-5" />
                </a>
              )}
              {profile?.socialLinks.linkedin && (
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              )}
              {profile?.socialLinks.twitter && (
                <a href={profile.socialLinks.twitter} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
              )}
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper variants={slideUp} className="glass p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Input id="name" required placeholder="Name" className="bg-surface" />
            </div>
            <div className="flex flex-col gap-2">
              <Input id="email" type="email" required placeholder="Email" className="bg-surface" />
            </div>
            <div className="flex flex-col gap-2">
              <Textarea id="message" required placeholder="Message" rows={5} className="bg-surface" />
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
