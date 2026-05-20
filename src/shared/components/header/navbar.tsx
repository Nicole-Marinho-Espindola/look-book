import { Bell, Search, User } from "lucide-react";
import hanger from "@/shared/icons/clothes-hanger.svg";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <nav
        className="
          flex items-center justify-between
          rounded-[20px]
          border border-white/20
          bg-white/60
          px-6 py-4
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
        "
      >
        <div className="flex items-center">

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
            <span className="text-black/50 text-[12px]">Your fashion guide</span>
          </div>
        </div>

        <div
          className="
            hidden md:flex
            items-center gap-2
            rounded-full
            bg-pink/3
            p-1
          "
        >
          <button
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
            Explore
          </button>

          <button
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
            Trends
          </button>

          <button
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
            Wardrobe
          </button>

          <button
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
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button>
            <Search size={20} />
          </button>

          <button>
            <Bell size={20} />
          </button>

          <button
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
          </button>
        </div>
      </nav>
    </header>
  );
}