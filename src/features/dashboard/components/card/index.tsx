import Image from "next/image";
import type { CardProps } from "@/types/card";

export default function Card({title, image}: CardProps) {
    return (
        <div className="relative group  w-[254px] h-auto rounded-sm overflow-hidden">
            <Image src={image} alt={title} width={300} height={200} className="h-full w-full object-fill" />
            <div className="p-4">
                <p className="group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 right-0 button-glass border-none! text-white p-2">{title}</p>
            </div>
        </div>
    )
}