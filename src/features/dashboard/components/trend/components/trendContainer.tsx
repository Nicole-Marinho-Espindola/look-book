import type { TrendProps } from "@/types/trend";
import Link from "next/link";

export default function TrendContainer({
  position,
  trendText,
  category,
  posts,
}: TrendProps) {
  return (
    <Link
      href={`/trends?topic=${encodeURIComponent(trendText)}`}
      className="group flex items-center gap-3 border-b border-zinc-200/80 py-4 last:border-0"
    >
      <span className="font-instrument text-3xl text-zinc-300 transition group-hover:text-pink">
        {String(position).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <span className="block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-zinc-400">
          {category}
        </span>
        <div className="flex justify-between items-center">
          <span className="mt-1 block truncate font-semibold text-zinc-900">
            {trendText}
          </span>
          <span className="mt-1 block text-xs text-zinc-500">{posts}</span>
        </div>
      </div>
    </Link>
  );
}
