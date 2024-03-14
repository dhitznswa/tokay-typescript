import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import HeaderLeft from "./hleft";
import HeaderRight from "./hright";

export default function Header() {
  return (
    <>
      <div className="w-full min-h-svh flex items-center flex-col md:flex-row md:justify-between gap-8 py-20">
        <div className="w-full md:w-1/2">
          <HeaderLeft />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <HeaderRight />
        </div>
      </div>
    </>
  );
}
