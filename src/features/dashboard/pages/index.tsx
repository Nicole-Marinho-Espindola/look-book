import Card from "../components/card/index";
import Trend from "../components/trend/index";
import { cardsMock } from "../mocks/card";
import { trendsMock } from "../mocks/trend";
import { ArrowRight, Flame, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export function DashboardPage() {
  return (
    <main className="w-full bg-[#faf9f7] px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <section className="mb-7 flex flex-col justify-between gap-5 border-b border-zinc-200 pb-6 md:flex-row md:items-end">
        <div className="flex flex-wrap items-center gap-2">
          {["Para você", "Streetwear", "Minimal", "Vintage"].map(
            (filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-4 py-2 text-sm transition ${
                  index === 0 ? "bg-zinc-950 text-white" : ""
                }`}
              >
                {filter}
              </button>
            ),
          )}
          <button
            type="button"
            aria-label="Abrir filtros"
            className="center h-9 w-9 rounded-full text-zinc-600 transition hover:text-pink"
          >
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </section>

      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <section
          aria-label="Feed de looks"
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 2xl:columns-4"
        >
          {cardsMock.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </section>

        <Trend />
      </div>
    </main>
  );
}
