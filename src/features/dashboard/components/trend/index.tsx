import { trendsMock } from "../../mocks/trend";
import { ArrowRight, Flame } from "lucide-react";
import Link from "next/link";
import TrendContainer from "./components/trendContainer";

export default function Trend() {
  return(
    <aside className="rounded-3xl bg-white p-5 xl:sticky xl:top-5">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-pink">
          <Flame size={15} /> Em alta agora
        </span>

        <div className="mt-4">
          {trendsMock.map((trend) => (
            <TrendContainer key={trend.id} {...trend} />
          ))}
        </div>

        <p className="mt-4 text-xs leading-5 text-zinc-400 text-center">
          Atualizado há 5 min pela comunidade Look.Book
        </p>

        <Link
          href="/trends"
          className="mt-10 flex items-center justify-between rounded-xl bg-zinc-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-pink"
        >
          Explorar todas as trends
          <ArrowRight size={16} />
        </Link>

      </aside>
  )
}
