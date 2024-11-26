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
import HorizontalPageScroll from "@/components/HorizontalPageScroll";

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

      <HorizontalPageScroll />

      <div style={{ height: "2000px" }} />
      <div className="mb-10">
        <NextPageScroller />
      </div>
    </>
  );
}
