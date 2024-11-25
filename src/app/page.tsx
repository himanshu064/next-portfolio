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
import StyledCursor from "@/components/StyledCursor/indext";

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

      <StyledCursor />

      <div style={{ height: "2000px" }} />
    </>
  );
}
