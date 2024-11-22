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
import AnimatedImageCard from "@/components/AnimatedImageCard";

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

      <AnimatedImageCard />

      <div style={{ height: "2000px" }} />
    </>
  );
}
