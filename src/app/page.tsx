"use client";

import React from "react";
import {
  CreativeButton,
  SVGScrollPath,
  ArrowSlideButton,
  DotAnimatedButton,
  PositionAwareButton,
  MouseAwareCard,
} from "@/components";

export default function Home() {
  return (
    <>
      <SVGScrollPath />

      <CreativeButton />

      <ArrowSlideButton />

      <PositionAwareButton />
      <MouseAwareCard />

      <div className="!mt-4">
        <DotAnimatedButton />
      </div>

      <div style={{ height: "2000px" }} />
    </>
  );
}
