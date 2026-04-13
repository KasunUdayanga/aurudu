"use client";

import { DotLottie } from "@lottiefiles/dotlottie-web";
import { useEffect, useRef } from "react";

const SUN_SRC = "/lottie/Sun%20burst%20weather%20icon.lottie";

export default function SunLottieBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined;
    }

    let lottieInstance;

    try {
      lottieInstance = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: canvasRef.current,
        src: SUN_SRC,
      });
    } catch (error) {
      lottieInstance = null;
    }

    return () => {
      lottieInstance?.destroy();
    };
  }, []);

  return (
    <div className="sun-lottie-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} className="sun-lottie-canvas" />
    </div>
  );
}
