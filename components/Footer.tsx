"use client";

import posthog from "posthog-js";

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Get Started",
    href: "#get-started",
  },
];

const Footer = () => {
  const handleFooterLinkClick = (label: string) => {
    posthog.capture("footer_link_clicked", {
      link_label: label.toLowerCase().replace(" ", "_"),
    });
  };

  const handleEmailClick = () => {
    posthog.capture("footer_email_clicked");
  };

  return (
    <div className="w-full flex justify-between items-center px-4 py-2">
      <a
        href="mailto:hello@get-colibri.com"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
        onClick={handleEmailClick}
      >
        hello@get-colibri.com
      </a>
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-accent"
            onClick={() => handleFooterLinkClick(item.label)}
          >
            {item.label}
          </a>
        ))}
      </div>
      <span className="text-sm text-muted-foreground"> 2026 get-colibri</span>
    </div>
  );
};

export default Footer;
