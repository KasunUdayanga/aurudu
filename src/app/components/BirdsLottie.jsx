"use client";

import Lottie from "lottie-react";
import birdsAnimation from "../data/birds-lottie.json";

export default function BirdsLottie() {
  return (
    <div className="birds-lottie" aria-hidden="true">
      <Lottie animationData={birdsAnimation} loop autoplay />
    </div>
  );
}
