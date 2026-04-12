"use client";

import Lottie from "lottie-react";
import sunriseAnimation from "../data/sunrise-lottie.json";

export default function SunriseLottie() {
  return (
    <div className="sunrise-lottie" aria-hidden="true">
      <Lottie animationData={sunriseAnimation} loop autoplay />
    </div>
  );
}
