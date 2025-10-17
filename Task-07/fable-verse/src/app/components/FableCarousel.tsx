"use client";

import { useState } from "react";
import FableCard from "./FableCard";
import { Fable } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FableCarousel({ fables }: { fables: Fable[] }) {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % fables.length);
  const prev = () => setIdx((i) => (i - 1 + fables.length) % fables.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {fables.map((f) => (
            <div key={f.id} className="w-full flex-shrink-0">
              <FableCard fable={f} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}