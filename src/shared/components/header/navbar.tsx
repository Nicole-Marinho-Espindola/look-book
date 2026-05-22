import { Bell, Search, User } from "lucide-react";
import hanger from "@/shared/icons/clothes-hanger.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav
        className="
          flex items-center justify-between
          border border-white/20
          bg-white
          px-6 py-4
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
        "
      >
        <Link href="/" className="flex items-center">

          <div>
            <img
              src={hanger.src}
              alt="Look.Book Logo"
              className="w-10 h-10 object-cover rotate-35 text-pink"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-[1.5rem] font-semibold tracking-tight text-zinc-900">
              Look<span className="text-pink font-bold">.Book</span>
            </h1>
            {/* <span className="text-black/50 text-[12px]">Your fashion guide</span> */}
          </div>
        </Link>

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

        <div className="flex items-center gap-3">
          <Link href="/search">
            <Search size={20} />
          </Link>

          <Link href="/notifications">
            <Bell size={20} />
          </Link>

          <Link
            href="/profile"
            className="
              flex items-center gap-2
              rounded-full
              bg-pink
              h-10 w-10
              text-white
              center
            "
          >
            <User size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}