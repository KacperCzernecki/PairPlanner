import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 w-96 h-20 lg:w-45 lg:h-10">
      <Image
        src={"/logo/logo.svg"}
        alt="Pair Planner Logo"
        width={42}
        height={42}
        className="shrink-0 w-10.5 h-10.5"
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold">Pair Planner</span>
        <span className="text-[0.625rem] font-normal">
          Plan Together. Live Together
        </span>
      </div>
    </div>
  );
}
