import Link from "next/link";
import React from "react";

export default function Menu() {
    return (
        <nav className="">
           <Link href="/trends">Trends</Link>
           <Link href="/dashboard">Explore</Link>
           <Link href="/wardrobe">Wardrobe</Link>
           <Link href="/wardrobe">Saved</Link>
        </nav>
    )
}