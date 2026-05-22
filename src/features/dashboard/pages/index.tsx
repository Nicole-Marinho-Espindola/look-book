import Card from "../components/card/index";
import image from "@/shared/images/image.jpeg";

export function DashboardPage() {
    return (
        <main className="mt-5">
            <div className="flex flex-wrap gap-2">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <Card key={index} title={`Card ${index + 1}`} image={image.src} />
                    ))
                }
            </div>
        </main>
    );
}