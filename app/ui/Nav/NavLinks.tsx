"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  BanknotesIcon,
  CalendarIcon,
  SparklesIcon,
  FlagIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

export default function NavLinks() {
  const links = [
    { name: "Budget", href: "/", icon: BanknotesIcon },
    { name: "Calendar", href: "/calendar", icon: CalendarIcon },
    { name: "AI Assistant", href: "/assistant", icon: SparklesIcon },
    { name: "Goals", href: "/goals", icon: FlagIcon },
  ];

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-row lg:flex-col px-3 py-2 w-full">
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex flex-col items-center w-22.75 h-14.5"
          >
            <LinkIcon className="w-5.5 h-5.5" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
