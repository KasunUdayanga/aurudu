"use client";

import { DotLottie } from "@lottiefiles/dotlottie-web";
import { useEffect, useMemo, useRef } from "react";

const BIRDS_SRC = "/lottie/Transparent%20Birds.lottie";
const BIRDS_COUNT = 5;

export default function TransparentBirdsBackdrop() {
  const canvasRefs = useRef([]);
  const lottieInstances = useRef([]);

  const items = useMemo(
    () =>
      Array.from({ length: BIRDS_COUNT }, (_, index) => {
        const seeded = (seed) => {
          const value = Math.sin(seed) * 10000;
          return value - Math.floor(value);
        };

        const base = index + 11;
        const startX = `${Math.round(seeded(base * 1.1) * 80 + 5)}vw`;
        const startY = `${Math.round(seeded(base * 2.2) * 60 + 5)}vh`;
        const endX = `${Math.round(seeded(base * 3.3) * 80 + 5)}vw`;
        const endY = `${Math.round(seeded(base * 4.4) * 60 + 10)}vh`;
        const size = `${Math.round(seeded(base * 5.5) * 70 + 90)}px`;
        const scale = `${(seeded(base * 6.6) * 0.25 + 0.7).toFixed(2)}`;
        const scaleEnd = `${(seeded(base * 7.7) * 0.25 + 0.85).toFixed(2)}`;
        const duration = `${Math.round(seeded(base * 8.8) * 8 + 12)}s`;
        const delay = `${Math.round(seeded(base * 9.9) * 6)}s`;

        return {
          id: `bird-${index}`,
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
            src: BIRDS_SRC,
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
