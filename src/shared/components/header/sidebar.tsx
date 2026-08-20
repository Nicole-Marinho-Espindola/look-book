import { Bookmark, House, Shirt, Sparkles, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
    return (
        <nav className="relative h-screen flex items-start rounded-b-[20px] bg-white px-6 py-4 shadow flex-col">
           <Link href="/" className="center gap-2 hover:bg-pink/50 px-4 py-2 rounded-lg transition-colors duration-300">
              <House size={20} />
              <span>Explore</span>
           </Link>
           <Link href="/trends" className="center gap-2 hover:bg-pink/50 px-4 py-2 rounded-lg transition-colors duration-300">
              <Sparkles size={20} />
              <span>Trends</span>
           </Link>
           <Link href="/wardrobe" className="center gap-2 hover:bg-pink/50 px-4 py-2 rounded-lg transition-colors duration-300">
              <Shirt size={20} />
              <span>Wardrobe</span>
           </Link>
           <Link href="/wardrobe" className="center gap-2 hover:bg-pink/50 px-4 py-2 rounded-lg transition-colors duration-300">
              <Bookmark size={20} />
              <span>Saved</span>
           </Link>
           <Link href="/profile" className="center gap-2 hover:bg-pink/50 px-4 py-2 rounded-lg transition-colors duration-300">
            <User size={20} />
            <span>Profile</span>
          </Link>
        </nav>
    )
}