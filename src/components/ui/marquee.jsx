import React from "react";
import { cn } from "../../lib/utils";

export function Marquee({
  children,
  className,
  duration = 20,
  pauseOnHover = false,
  direction = "left",
  fade = true,
  fadeAmount = 10,
  ...props
}) {
  const isVertical = direction === "up" || direction === "down";

  return (
    <>
      <style>
        {`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes scroll-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-vertical-reverse {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-marquee {
          animation: ${
            direction === "right"
              ? "scroll-reverse"
              : direction === "down"
              ? "scroll-vertical-reverse"
              : isVertical
              ? "scroll-vertical"
              : "scroll"
          } ${duration}s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
        `}
      </style>
      <div
        className={cn(
          "group relative flex overflow-hidden",
          isVertical ? "flex-col" : "flex-row",
          className
        )}
        style={{
          maskImage: fade
            ? `linear-gradient(${
                isVertical ? "to bottom" : "to right"
              }, transparent 0%, rgba(0, 0, 0, 1.0) ${fadeAmount}%, rgba(0, 0, 0, 1.0) ${
                100 - fadeAmount
              }%, transparent 100%)`
            : undefined,
          WebkitMaskImage: fade
            ? `linear-gradient(${
                isVertical ? "to bottom" : "to right"
              }, transparent 0%, rgba(0, 0, 0, 1.0) ${fadeAmount}%, rgba(0, 0, 0, 1.0) ${
                100 - fadeAmount
              }%, transparent 100%)`
            : undefined,
        }}
        {...props}
      >
        <div
          className={cn(
            "animate-marquee flex shrink-0 items-center justify-around gap-4",
            isVertical ? "flex-col" : "flex-row"
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            "animate-marquee flex shrink-0 items-center justify-around gap-4",
            isVertical ? "flex-col" : "flex-row"
          )}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </>
  );
}
