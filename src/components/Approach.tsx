"use client";

import dynamic from "next/dynamic";
import type { CanvasRevealEffect as CanvasRevealEffectType } from "@/components/ui/canvas-reveal-effect";
import { AceternityIcon } from "./ui/AceternityIcon";
import { Card } from "./ui/Card";
import { approach } from "@/Data";

const CanvasRevealEffect = dynamic<typeof CanvasRevealEffectType>(
  () =>
    import("@/components/ui/canvas-reveal-effect").then(
      (mod) => mod.CanvasRevealEffect
    ),
  { ssr: false }
);

export default function Approach() {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        {approach.map((items) => (
          <Card
            key={items.id}
            title={items.title}
            icon={<AceternityIcon order={items.order} />}
            des={items.des}
          >
            <CanvasRevealEffect
              animationSpeed={items.animationSpeed}
              containerClassName={items.containerClassName}
              colors={items.colors}
              dotSize={items.dotSize}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
