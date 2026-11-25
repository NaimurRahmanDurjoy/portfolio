import { Laptop, LayoutDashboard, Sparkles, Lock, RotateCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LaptopMockupProps {
  src?: string;
  alt?: string;
  title?: string;
  category?: string;
  liveUrl?: string;
  variant?: "card" | "showcase";
  className?: string;
}

export function LaptopMockup({
  src,
  alt = "Project Preview",
  title = "Project Preview",
  category,
  liveUrl,
  variant = "card",
  className = "",
}: LaptopMockupProps) {
  const isShowcase = variant === "showcase";

  // Format clean display URL for browser bar
  const displayUrl = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `${title.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Ambient Backlight Glow on Hover */}
      <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

      {/* Screen Lid (Display Housing) */}
      <div
        className={`relative w-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] border border-zinc-700/80 transition-transform duration-500 ease-out ${
          isShowcase
            ? "rounded-t-[18px] sm:rounded-t-[26px] p-2 sm:p-3 md:p-3.5"
            : "rounded-t-[12px] sm:rounded-t-[16px] p-1.5 sm:p-2 group-hover:-translate-y-1"
        }`}
      >
        {/* Subtle camera / webcam lens notch */}
        <div className="relative flex justify-center mb-1.5 sm:mb-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-950 border border-zinc-700/80 shadow-inner flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-blue-500/60" />
          </div>
        </div>

        {/* Screen Display Container */}
        <div className="relative w-full overflow-hidden rounded-[6px] sm:rounded-[10px] bg-zinc-950 border border-zinc-800/90 shadow-inner flex flex-col">
          {/* Simulated macOS Browser Window Top Bar */}
          <div
            className={`bg-zinc-900/95 border-b border-zinc-800/80 flex items-center justify-between shrink-0 select-none ${
              isShowcase
                ? "h-7 sm:h-9 px-3 sm:px-4"
                : "h-5 sm:h-6 px-2"
            }`}
          >
            {/* Traffic Light Window Buttons */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
            </div>

            {/* Address Bar Pill */}
            <div
              className={`rounded-md bg-zinc-950/80 border border-zinc-800/80 text-muted-foreground font-mono flex items-center justify-center gap-1.5 shadow-inner mx-2 sm:mx-4 ${
                isShowcase
                  ? "px-3 py-0.5 text-[10px] sm:text-xs max-w-xs sm:max-w-md w-full"
                  : "px-2 py-0 text-[8px] sm:text-[9px] max-w-[140px] sm:max-w-[180px] w-full"
              }`}
            >
              <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
              <span className="text-foreground/80 font-medium truncate">{displayUrl}</span>
            </div>

            {/* Reload / Action Icon */}
            <div className="flex items-center justify-end shrink-0">
              <RotateCw className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Screen Content Viewport */}
          {src ? (
            <div
              className={`relative w-full bg-zinc-950 flex items-center justify-center overflow-hidden ${
                isShowcase
                  ? "min-h-[220px]"
                  : "aspect-[16/9]"
              }`}
            >
              <img
                src={src}
                alt={alt}
                className={`w-full block ${
                  isShowcase
                    ? "h-auto max-h-[580px] lg:max-h-[640px] object-contain object-top"
                    : "h-full object-contain object-top"
                } transition-transform duration-700 ease-out group-hover:scale-[1.01]`}
                loading="lazy"
              />
              {/* Glass Reflection / Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none" />
            </div>
          ) : (
            /* Fallback Mock UI when no image is available */
            <div
              className={`w-full relative flex flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-background justify-between ${
                isShowcase
                  ? "aspect-[16/9] sm:aspect-[16/8.5] p-6 sm:p-10"
                  : "aspect-[16/9] p-3 sm:p-4"
              }`}
            >
              {/* Centered Mock Dashboard Content */}
              <div className="flex flex-col items-center justify-center text-center my-auto px-2">
                <div
                  className={`rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/10 ${
                    isShowcase
                      ? "w-14 h-14 sm:w-16 sm:h-16 mb-4"
                      : "w-8 h-8 sm:w-10 sm:h-10 mb-2"
                  }`}
                >
                  <Laptop className={isShowcase ? "w-7 h-7 sm:w-8 sm:h-8" : "w-4 h-4 sm:w-5 sm:h-5"} />
                </div>
                <h4
                  className={`font-bold text-foreground tracking-tight line-clamp-1 ${
                    isShowcase
                      ? "text-lg sm:text-2xl"
                      : "text-xs sm:text-sm"
                  }`}
                >
                  {title}
                </h4>
                {category && (
                  <Badge
                    variant="outline"
                    className={`mt-1.5 border-primary/30 text-primary bg-primary/5 ${
                      isShowcase
                        ? "text-xs px-3 py-0.5"
                        : "text-[9px] sm:text-[10px] px-2 py-0"
                    }`}
                  >
                    <Sparkles className="w-2.5 h-2.5 mr-1 text-primary" />
                    {category}
                  </Badge>
                )}

                {/* Simulated Dashboard Stat Bars */}
                <div
                  className={`w-full flex items-center gap-1.5 opacity-75 ${
                    isShowcase
                      ? "max-w-[320px] sm:max-w-[400px] mt-6"
                      : "max-w-[160px] sm:max-w-[200px] mt-3"
                  }`}
                >
                  <div className="h-1.5 flex-1 rounded-full bg-primary/50" />
                  <div className="h-1.5 flex-1 rounded-full bg-emerald-500/50" />
                  <div className="h-1.5 flex-1 rounded-full bg-accent/50" />
                </div>
              </div>

              {/* Simulated Bottom App Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[9px] sm:text-[10px] text-muted-foreground/70">
                <div className="flex items-center gap-1.5">
                  <LayoutDashboard className="w-3 h-3 text-primary" />
                  <span>Production Live System</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium text-emerald-500">Active</span>
                </div>
              </div>

              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
            </div>
          )}
        </div>
      </div>

      {/* Laptop Hinge */}
      <div
        className={`bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-t border-zinc-700/50 mx-auto ${
          isShowcase
            ? "w-[94%] h-2 sm:h-2.5"
            : "w-[92%] h-1.5"
        }`}
      />

      {/* Laptop Base (Keyboard Chassis & Lip) */}
      <div
        className={`relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-b-xl border-t border-zinc-500/60 shadow-2xl flex justify-center ${
          isShowcase
            ? "w-[104%] h-4 sm:h-5 md:h-6"
            : "w-[102%] h-2.5 sm:h-3"
        }`}
      >
        {/* Center Opening Thumb Notch */}
        <div
          className={`bg-zinc-950/90 rounded-b-md border-b border-zinc-700/60 ${
            isShowcase
              ? "w-20 sm:w-28 md:w-32 h-1.5 sm:h-2"
              : "w-10 sm:w-14 h-1"
          }`}
        />
      </div>

      {/* Under-Laptop Ambient Shadow */}
      <div
        className={`bg-black/60 blur-xl rounded-full pointer-events-none mx-auto ${
          isShowcase
            ? "w-[90%] h-4 sm:h-6 -mt-2"
            : "w-[85%] h-2.5 -mt-1"
        }`}
      />
    </div>
  );
}
