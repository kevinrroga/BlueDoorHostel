import { cn } from "@/lib/utils";

export function DoorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 96"
      role="img"
      aria-label="Cobalt blue door"
      className={cn("h-8 w-auto", className)}
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="92"
        rx="8"
        fill="var(--cobalt)"
        stroke="var(--cobalt-deep)"
        strokeWidth="3"
      />
      <rect x="11" y="12" width="42" height="30" rx="4" fill="var(--cobalt-deep)" opacity="0.55" />
      <rect x="11" y="50" width="42" height="34" rx="4" fill="var(--cobalt-deep)" opacity="0.55" />
      <circle cx="48" cy="48" r="3.6" fill="var(--gold)" />
    </svg>
  );
}
