"use client";

import React from "react";
import { CreativeButton, SVGScrollPath } from "@/components";
import ArrowSlideButton from "@/components/ArrowSlideButton";
import DotAnimatedButton from "@/components/DotAnimatedButton";

export default function Home() {
  return (
    <>
      <SVGScrollPath />

      <CreativeButton />

      <ArrowSlideButton />

      <div className="!mt-4">
        <DotAnimatedButton />
      </div>

      <div style={{ height: "2000px" }} />
    </>
  );
}
