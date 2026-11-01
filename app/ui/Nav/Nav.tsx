import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <div className="flex flex-col lg:py-7 px-5">
      <Logo />
      <NavLinks />
    </div>
  );
}
