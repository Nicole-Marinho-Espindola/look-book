import Card from "../components/card/index";
import LineFilters from "../components/filters/LineFilter";
import Trend from "../components/trend/index";
import Slider from "../components/slider";
import { cardsMock } from "../mocks/card";
import { filterMock } from "../mocks/filters";

export function DashboardPage() {
  return (
    <main className="w-full px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <Slider />
      <LineFilters filters={filterMock} />

      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <section
          aria-label="Feed de looks"
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 2xl:columns-4"
        >
          {cardsMock.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </section>

        <Trend />
      </div>
    </main>
  );
}
