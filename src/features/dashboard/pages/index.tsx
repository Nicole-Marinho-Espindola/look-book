import Card from "../components/card/index";
import Trend from "../components/trend/index";
import image from "@/shared/images/image.jpeg";

export function DashboardPage() {
    return (
        <main className="mt-5 flex w-full">
            <div className="grid grid-cols-3 gap-2 w-9/10">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <Card key={index} title={`Card ${index + 1}`} image={image.src} />
                    ))
                }
            </div>
            <div className="w-1/10">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <Trend key={index} season={`Card ${index + 1}`} trendText={image.src} />
                    ))
                }
            </div>
        </main>
    );
}