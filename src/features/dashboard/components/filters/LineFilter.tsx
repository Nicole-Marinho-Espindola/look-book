"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import type { FilterProps, LineFiltersProps } from "@/types/dashboard/filters";

function FilterButton({
  filter,
  isSelected,
  onSelect,
}: FilterProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      disabled={!filter.isEnabled}
      onClick={() => onSelect(filter.slug)}
      className={`rounded-full px-4 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 ${
        isSelected ? "bg-zinc-950 text-white" : ""
      }`}
    >
      {filter.name}
    </button>
  );
}

export default function LineFilters({ filters }: LineFiltersProps) {
  const orderedFilters = useMemo(
    () => [...filters].sort((a, b) => a.order - b.order),
    [filters],
  );
  const [selectedSlug, setSelectedSlug] = useState<string | null>(
    () => orderedFilters.find((filter) => filter.isEnabled)?.slug ?? null,
  );

  return (
    <section className="mb-7 flex flex-col justify-between gap-5 pb-6 md:flex-row md:items-end">
      <div className="flex flex-wrap items-center gap-2">
        {orderedFilters.map((filter) => (
          <FilterButton
            key={filter.id}
            filter={filter}
            isSelected={selectedSlug === filter.slug}
            onSelect={setSelectedSlug}
          />
        ))}

          <button
            type="button"
            aria-label="Abrir filtros"
            className="center h-9 w-9 rounded-full text-zinc-600 transition hover:text-pink"
          >
            <SlidersHorizontal size={16} />
          </button>
      </div>
    </section>
  );
}
