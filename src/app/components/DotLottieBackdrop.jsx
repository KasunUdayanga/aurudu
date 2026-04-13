"use client";

import { DotLottie } from "@lottiefiles/dotlottie-web";
import { useEffect, useMemo, useRef } from "react";

const FIREWORKS_SRC = "/lottie/Confetti.lottie";
const FIREWORKS_COUNT = 6;

export default function DotLottieBackdrop() {
  const canvasRefs = useRef([]);
  const lottieInstances = useRef([]);

  const items = useMemo(
    () =>
      Array.from({ length: FIREWORKS_COUNT }, (_, index) => {
        const seeded = (seed) => {
          const value = Math.sin(seed) * 10000;
          return value - Math.floor(value);
        };

        const base = index + 1;
        const startX = `${Math.round(seeded(base * 1.1) * 80 + 5)}vw`;
        const startY = `${Math.round(seeded(base * 2.2) * 70 + 5)}vh`;
        const endX = `${Math.round(seeded(base * 3.3) * 80 + 5)}vw`;
        const endY = `${Math.round(seeded(base * 4.4) * 70 + 5)}vh`;
        const size = `${Math.round(seeded(base * 5.5) * 90 + 110)}px`;
        const scale = `${(seeded(base * 6.6) * 0.35 + 0.7).toFixed(2)}`;
        const scaleEnd = `${(seeded(base * 7.7) * 0.35 + 0.85).toFixed(2)}`;
        const duration = `${Math.round(seeded(base * 8.8) * 6 + 10)}s`;
        const delay = `${Math.round(seeded(base * 9.9) * 6)}s`;

        return {
          id: `firework-${index}`,
          style: {
            "--start-x": startX,
            "--start-y": startY,
            "--end-x": endX,
            "--end-y": endY,
            "--size": size,
            "--scale": scale,
            "--scale-end": scaleEnd,
            "--duration": duration,
            "--delay": delay,
          },
        };
      }),
    []
  );

  useEffect(() => {
    lottieInstances.current = canvasRefs.current
      .map((canvas) => {
        if (!canvas) {
          return null;
        }

        try {
          return new DotLottie({
            autoplay: true,
            loop: true,
            canvas,
            src: FIREWORKS_SRC,
          });
        } catch (error) {
          return null;
        }
      })
      .filter(Boolean);

    return () => {
      lottieInstances.current.forEach((instance) => instance?.destroy());
      lottieInstances.current = [];
    };
  }, [items]);

  return (
    <div className="dotlottie-backdrop" aria-hidden="true">
      {items.map((item, index) => (
        <div key={item.id} className="dotlottie-item" style={item.style}>
          <canvas
            ref={(el) => {
              canvasRefs.current[index] = el;
            }}
            className="dotlottie-canvas"
          />
        </div>
      ))}
    </div>
  );
}
