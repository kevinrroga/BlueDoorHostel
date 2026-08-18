import { DoorIcon } from "./DoorIcon";
import { ADDRESS, BOOKING_URL } from "@/lib/hostel";

export function Footer() {
  return (
    <footer className="bg-foreground px-5 py-14 text-background">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <DoorIcon className="h-8 shrink-0" />
            <span className="font-display text-xl font-bold">Blue Door Hostel</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-background/70">{ADDRESS}</p>
          <p className="mt-3 max-w-sm text-sm italic text-gold">
            A symbol of peace and prosperity in Tirana, Albania.
          </p>
        </div>

        <div className="md:justify-self-end">
          <h3 className="font-display text-base font-bold">Book with us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="text-background/75 transition-colors hover:text-gold"
              >
                Hostelworld
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/searchresults.html?ss=Blue+Door+Hostel+Tirana"
                target="_blank"
                rel="noreferrer noopener"
                className="text-background/75 transition-colors hover:text-gold"
              >
                Booking.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-background/15 pt-6 text-xs text-background/50">
        © {new Date().getFullYear()} Blue Door Hostel. All rights reserved.
      </div>
    </footer>
  );
}
