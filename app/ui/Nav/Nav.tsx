import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <div className="flex flex-col lg:py-7 lg:px-5 bg-sidebar border-divider lg:border-r lg:gap-1">
      <Logo />
      <NavLinks />
    </div>
  );
}
