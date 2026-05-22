import Link from "next/link";
import React from "react";

export default function Sidebar() {
    return (
        <nav className="relative h-screen flex items-center justify-between 
          rounded-b-[20px]
          border border-white/20
          bg-white
          px-6 py-4
          shadow-lg
          backdrop-blur-2xl flex-col w-96">
           <Link href="/trends">Trends</Link>
           <Link href="/dashboard">Explore</Link>
           <Link href="/wardrobe">Wardrobe</Link>
           <Link href="/wardrobe">Saved</Link>
        </nav>
    )
}