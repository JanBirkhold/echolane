import Link from "next/link";
import { contact } from "@/lib/content";
import { cn } from "@/lib/utils";
import { btnPrimaryOutline } from "@/lib/button-styles";
import { SocialLinks } from "@/components/sections/social-links";
import {
  getContactCopy,
  type ContactLocale,
} from "@/lib/contact-i18n";

type ContactDetailsProps = {
  locale: ContactLocale;
};

export function ContactDetails({ locale }: ContactDetailsProps) {
  const copy = getContactCopy(locale);

  const contactItems = [
    {
      label: copy.phone,
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      label: copy.mobile,
      value: contact.mobile,
      href: `tel:${contact.mobile.replace(/\s/g, "")}`,
    },
    {
      label: copy.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="border border-border/80 bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hot">
          {copy.studio}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          {contact.studio}
        </h2>
        <p className="mt-1 text-sm text-muted">{contact.name}</p>

        <address className="mt-6 space-y-1 text-sm not-italic text-muted">
          <p>{contact.address}</p>
          <p>
            {contact.city}, {contact.country}
          </p>
        </address>

        <Link
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            btnPrimaryOutline,
            "mt-6 gap-2 font-medium normal-case tracking-normal",
          )}
        >
          {copy.routePlan}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group border border-border/80 bg-surface/60 p-5 backdrop-blur-sm transition hover:border-accent-hot/30"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground transition group-hover:text-accent-hot">
              {item.value}
            </p>
          </a>
        ))}
      </div>

      <div className="border border-border/80 bg-surface/60 p-6 backdrop-blur-sm">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {copy.social}
        </p>
        <SocialLinks className="mt-4" variant="footer" />
      </div>
    </div>
  );
}
