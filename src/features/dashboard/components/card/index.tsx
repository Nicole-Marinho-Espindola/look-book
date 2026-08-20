import Image from "next/image";
import type { CardProps } from "@/types/card";
import Link from "next/link";

export default function Card({title, image, userId}: CardProps) {
    return (
        <Link href={`/wardrobe/${userId}`} className="relative group w-full h-auto rounded-2xl overflow-hidden">
            <Image src={image} alt={title} width={300} height={200} className="h-full w-full object-fill" />
            <div className="p-4">
                <p className="group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 right-0 button-glass border-none! text-white p-2">{title}</p>
            </div>
        </Link>
    )
}