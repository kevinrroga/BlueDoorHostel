import { cn } from "@/lib/utils";

interface DoorIconProps {
  className?: string;
  animated?: boolean;
}

export function DoorIcon({ className, animated = false }: DoorIconProps) {
  const panel = (
    <>
      <rect x="2" y="2" width="60" height="92" rx="8" fill="var(--cobalt)" stroke="var(--cobalt-deep)" strokeWidth="3" />
      <rect x="11" y="12" width="42" height="30" rx="4" fill="var(--cobalt-deep)" opacity="0.55" />
      <rect x="11" y="50" width="42" height="34" rx="4" fill="var(--cobalt-deep)" opacity="0.55" />
      <circle cx="48" cy="48" r="3.6" fill="var(--gold)" />
    </>
  );

  if (!animated) {
    return (
      <svg
        viewBox="0 0 64 96"
        role="img"
        aria-label="Cobalt blue door"
        className={cn("h-8 w-auto", className)}
      >
        {panel}
      </svg>
    );
  }

  return (
    <div
      className={cn("relative aspect-[2/3]", className)}
      style={{ perspective: "320px" }}
    >
      {/* Warm interior — fades in as door opens */}
      <svg
        viewBox="0 0 64 96"
        className="absolute inset-0 h-full w-full"
        style={{ animation: "door-interior 6s ease-in-out infinite" }}
        aria-hidden
      >
        <defs>
          <radialGradient id="warm-light" cx="50%" cy="55%" r="62%">
            <stop offset="0%" stopColor="oklch(0.97 0.19 78)" />
            <stop offset="55%" stopColor="oklch(0.78 0.16 55)" />
            <stop offset="100%" stopColor="oklch(0.52 0.1 45)" />
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="60" height="92" rx="8" fill="url(#warm-light)" />
      </svg>

      {/* Door panel — swings open on its left hinge */}
      <svg
        viewBox="0 0 64 96"
        role="img"
        aria-label="Cobalt blue door opening"
        className="absolute inset-0 h-full w-full"
        style={{ transformOrigin: "left center", animation: "door-swing 6s ease-in-out infinite" }}
      >
        {panel}
      </svg>
    </div>
  );
}
