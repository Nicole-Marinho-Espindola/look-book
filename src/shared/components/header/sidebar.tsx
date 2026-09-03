import { Bookmark, House, Shirt, Sparkles, User } from "lucide-react";
import Link from "next/link";
import styles from "./styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className="sticky top-0 flex h-screen flex-col gap-y-4 rounded-bl-2xl rounded-tl-2xl bg-white px-4 py-6 min-w-60 shadow">
      <Link href="/" className="flex justify-center items-center w-full">
        <div className="leading-tight ">
          <h1 className="text-[2.5rem] font-semibold tracking-[1.5px] font-instrument text-zinc-900 mb-5">
            Look<span className="text-pink">.Book</span>
          </h1>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <House size={20} />
        <span>Explore</span>
      </Link>
      <Link href="/trends" className={styles.item}>
        <Sparkles size={20} />
        <span>Trends</span>
      </Link>
      <Link href="/wardrobe" className={styles.item}>
        <Shirt size={20} />
        <span>Wardrobe</span>
      </Link>
      <Link href="/wardrobe" className={styles.item}>
        <Bookmark size={20} />
        <span>Saved</span>
      </Link>
      <Link href="/profile" className={styles.item}>
        <User size={20} />
        <span>Profile</span>
      </Link>
    </nav>
  );
}
