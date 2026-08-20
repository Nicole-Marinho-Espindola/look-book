import Link from "next/link";
import type { TrendProps } from "@/types/trend";

export default function Card({id, season, trendText}: TrendProps) {
    return (
        <Link href={`/wardrobe/${id}`} className="relative group min-w-7xl h-auto rounded-2xl overflow-hidden">
            <div className="p-4">
                <p className="group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 right-0 button-glass border-none! text-white p-2">{trendText}</p>
            </div>
        </Link>
    )
}