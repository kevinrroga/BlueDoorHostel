import { MessageCircle, Mail, Instagram } from "lucide-react";
import { DoorIcon } from "./DoorIcon";
import { ADDRESS, BOOKING_URL, PHONE_DISPLAY, WHATSAPP_URL, EMAIL, MAILTO_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/hostel";
import { useT } from "@/lib/useT";

export function Footer() {
  const t = useT();
  return (
    <footer className="bg-foreground px-5 py-14 text-background">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <DoorIcon className="h-8 shrink-0" />
            <span className="font-display text-xl font-bold">Blue Door Hostel</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-background/70">{ADDRESS}</p>
          <p className="mt-3 max-w-sm text-sm italic text-gold">{t.footer.tagline}</p>
        </div>

        <div className="md:justify-self-end">
          <h3 className="font-display text-base font-bold">{t.footer.book_with_us}</h3>
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

        <div className="md:justify-self-end">
          <h3 className="font-display text-base font-bold">{t.footer.contact_us}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2.5 text-background/75 transition-colors hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a
                href={MAILTO_URL}
                className="flex items-center gap-2.5 text-background/75 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>{EMAIL}</span>
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2.5 text-background/75 transition-colors hover:text-gold"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-background/15 pt-6 text-xs text-background/50">
        © {new Date().getFullYear()} Blue Door Hostel. {t.footer.copyright}
      </div>
    </footer>
  );
}
