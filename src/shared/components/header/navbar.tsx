import { Bell, Plus, Search, Sun, User } from "lucide-react";
import hanger from "@/shared/icons/clothes-hanger.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav
        className="
          flex items-center justify-between
          px-6 py-4
        "
      >
        <Link href="/" className="flex items-center">
          <div className="leading-tight">
            <h1 className="text-[1.5rem] font-semibold tracking-tight text-zinc-900">
              Look<span className="text-pink">.Book</span>
            </h1>
          </div>
        </Link>

        <div className="center gap-2 text-sm text-zinc-900">
          <Sun size={20} />
          <span>7C Oslo - Late Winter Archive</span>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/search">
            <Search size={20} />
          </Link>

          <Link href="/notifications" className="h-10 w-10 text-white bg-pink border-2 border-pink rounded-full center">
            <Bell size={20} />
          </Link>

          <button className="bg-black rounded-full min-w-12 py-2 px-4 center gap-2 text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02]">
            <Plus size={20} />
            <span>Post Look</span>
          </button>
        </div>
      </nav>
    </header>
  );
}