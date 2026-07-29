import { useProfile } from "@/hooks/useProfile"

export function Footer() {
  const { data: profile } = useProfile()

  return (
    <footer className="border-t border-border bg-surface/30 mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile?.name || "Naimur Rahman"}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {profile?.socialLinks?.github && (
            <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all">
              GitHub
            </a>
          )}
          {profile?.socialLinks?.linkedin && (
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all">
              LinkedIn
            </a>
          )}
          {profile?.email && (
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
