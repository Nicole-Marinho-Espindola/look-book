import { Bell, Plus, Search, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-10 py-5">

        <div className="flex items-center justify-center gap-2 text-sm text-zinc-900">
          <Sun size={20} />
          <span>7C Oslo - Late Winter Archive</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
            aria-label="Buscar"
          >
            <Search size={20} />
          </Link>

          <Link
            href="/notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-pink bg-pink text-white transition-colors duration-300 hover:bg-white hover:text-pink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
            aria-label="Notificações"
          >
            <Bell size={20} />
          </Link>

          <button className="flex min-w-12 items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-pink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink">
            <Plus size={20} />
            <span>Post Look</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
