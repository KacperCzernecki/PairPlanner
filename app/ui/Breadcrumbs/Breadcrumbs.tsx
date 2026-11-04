"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export default function Breadcrumbs() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const pathname = usePathname();

  if (!isDesktop) return null;

  return (
    <div className="flex border-divider border-b items-center w-full h-19">
      <p className="px-9 text-">
        <span className="text-content-muted">Your Space / </span>
        <span className="text-content">
          {pathname === "/"
            ? "Bugdet"
            : `${pathname.slice(1)[0].toUpperCase()}${pathname.slice(2)}`}
        </span>
      </p>
    </div>
  );
}
