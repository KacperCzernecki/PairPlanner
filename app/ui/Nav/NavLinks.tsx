"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  BanknotesIcon,
  CalendarIcon,
  SparklesIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

export default function NavLinks() {
  const links = [
    { name: "Budget", href: "/", icon: BanknotesIcon },
    { name: "Calendar", href: "/calendar", icon: CalendarIcon },
    { name: "AI Assistant", href: "/assistant", icon: SparklesIcon },
    { name: "Goals", href: "/goals", icon: FlagIcon },
  ];

  const pathname = usePathname();

  return (
    <div className="flex flex-row lg:flex-col px-3 py-2 w-full justify-between bg-white lg:bg-sidebar border-y border-divider lg:border-y-0 lg:gap-2">
      <p className="hidden lg:block text-content-muted">Your Space</p>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex flex-col md:flex-row items-center justify-center md:justify-start  w-22.75 h-14.5 md:w-full md:h-12 gap-1.25 lg:gap-3 lg:px-3 rounded-[10px]",
              {
                "bg-primary": pathname == link.href,
                "bg-white lg:bg-sidebar": pathname != link.href,
              },
            )}
          >
            <LinkIcon
              className={clsx("w-5.5 h-5.5", {
                "text-accent": pathname == link.href,
                "text-content-muted": pathname != link.href,
              })}
            />
            <span
              className={clsx("", {
                "text-white": pathname == link.href,
                "text-content": pathname != link.href,
              })}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
