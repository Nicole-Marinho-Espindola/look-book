import { trendsMock } from "../../mocks/trend";
import { ArrowRight, Flame } from "lucide-react";
import Link from "next/link";

export default function Trend() {
  return(
    <aside className="rounded-3xl bg-white p-5 shadow-[0_12px_35px_rgba(24,24,27,0.05)] ring-1 ring-zinc-950/5 xl:sticky xl:top-5">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-pink">
          <Flame size={15} /> Em alta agora
        </span>

        <div className="mt-4">
          {trendsMock.map((trend) => (
            <Trend key={trend.id} {...trend} />
          ))}
        </div>

        <Link
          href="/trends"
          className="mt-3 flex items-center justify-between rounded-xl bg-zinc-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-pink"
        >
          Explorar todas as trends
          <ArrowRight size={16} />
        </Link>

        <p className="mt-4 text-xs leading-5 text-zinc-400 text-center">
          Atualizado há 5 minutos com sinais da comunidade Look.Book.
        </p>
      </aside>
  )
}