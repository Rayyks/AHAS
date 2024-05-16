import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-card";
import { testimonials } from "../../utils/data";

export default function Testimonials() {
  return (
    <div className="h-[40rem]  flex flex-col antialiased bg-gradient-to-t from-[#030303] to-[#363636] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
