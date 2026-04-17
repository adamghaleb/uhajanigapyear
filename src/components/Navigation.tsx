"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "Home" },
  { href: "/roundtable", label: "Roundtable" },
  { href: "/sunk-cost", label: "Sunk Cost" },
  { href: "/the-gap", label: "The Gap" },
  { href: "/permission", label: "Permission" },
  { href: "/letter", label: "Letter" },
  { href: "/roi", label: "ROI" },
  { href: "/parents", label: "For Parents" },
  { href: "/now", label: "Now" },
];

export default function Navigation() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-bg/80 backdrop-blur-md border-b border-white/5">
      <Link
        href="/"
        className="font-display text-lg text-text hover:text-accent transition-colors"
      >
        AQ
      </Link>
      <div className="flex gap-6">
        {routes.slice(1).map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`text-sm font-mono transition-colors ${
              pathname === route.href
                ? "text-accent"
                : "text-text-secondary hover:text-text"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
