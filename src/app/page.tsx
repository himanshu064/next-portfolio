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
import TextWheelButton from "@/components/CreativeButtons/TextWheelButton";
import NextPageScroller from "@/components/NextPageScroller";

export default function Home() {
  return (
    <>
      <SVGScrollPath />

      <CreativeButton />

      <ArrowSlideButton />

      <TextWheelButton />

      <PositionAwareButton />
      <MouseAwareCard />

      <div className="!mt-4">
        <DotAnimatedButton />
      </div>

      <AnimatedImageCard />

      <StyledCursor />

      <div style={{ height: "2000px" }} />
      <div className="mb-10">
        <NextPageScroller />
      </div>
    </>
  );
}
