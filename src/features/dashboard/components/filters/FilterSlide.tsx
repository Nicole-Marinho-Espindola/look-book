import Link from "next/link";
import React from "react";

export default function SlideFilter() {
  return (
    <div
      className="
            hidden md:flex
            items-center gap-2
            rounded-full
            bg-pink/3
            p-1
          "
    >
      <Link
        href="/"
        className="
              rounded-full
             button-glass
              px-5 py-2
              text-sm font-medium text-pink
              shadow-sm
              transition-all
              duration-300
              hover:scale-[1.02]
            "
      >
        Winter
      </Link>

      <Link
        href="/trends"
        className="
              rounded-full
              px-5 py-2
              text-sm text-zinc-600
              transition-all
              duration-300
              hover:bg-pink/25
              hover:text-zinc-900
            "
      >
        Spring
      </Link>

      <Link
        href="/wardrobe"
        className="
              rounded-full
              px-5 py-2
              text-sm text-zinc-600
              transition-all
              duration-300
              hover:bg-white/70
              hover:text-zinc-900
            "
      >
        Summer
      </Link>

      <Link
        href="/saved"
        className="
              rounded-full
              px-5 py-2
              text-sm text-zinc-600
              transition-all
              duration-300
              hover:bg-white/70
              hover:text-zinc-900
            "
      >
        Fall
      </Link>
    </div>
  );
}
