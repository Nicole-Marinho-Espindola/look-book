import Image from "next/image";
import type { CardProps } from "@/types/card";
import Link from "next/link";
import { Heart } from "lucide-react";

const formatClasses: Record<CardProps["format"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

export default function Card({
  title,
  image,
  userId,
  author,
  category,
  categoryColor,
  likes,
  format,
}: CardProps) {
  return (
    <article className="mb-4 break-inside-avoid overflow-hidden rounded-[1.35rem] bg-white shadow-[0_12px_35px_rgba(24,24,27,0.06)] ring-1 ring-zinc-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(24,24,27,0.12)]">
      <Link href={`/wardrobe/${userId}`} className="group block">
        <div className={`relative overflow-hidden bg-zinc-100 ${formatClasses[format]}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 25vw"
            className="object-cover transition duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent opacity-70 transition group-hover:opacity-90" />
          <div style={{ backgroundColor: categoryColor || "#fff" }} className={"absolute left-3 top-3 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-800 backdrop-blur"}>
            {category}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <div className="mt-3 flex items-center justify-between text-xs text-white/85">
              <span>{author}</span>
              <span className="flex items-center gap-1.5">
                <Heart size={14} />
                {likes.toLocaleString("pt-BR")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
