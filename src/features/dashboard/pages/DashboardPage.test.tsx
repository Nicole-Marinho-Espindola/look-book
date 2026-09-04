import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { cardsMock } from "../mocks/card";
import { filterMock } from "../mocks/filters";
import { trendsMock } from "../mocks/trend";
import { DashboardPage } from ".";

vi.mock("../components/slider", () => ({
  default: () => <section aria-label="Mood slider" />,
}));

describe("DashboardPage", () => {
  it("compõe o feed com slider, filtros, cards e trends", () => {
    render(<DashboardPage />);

    expect(
      screen.getByRole("region", { name: "Mood slider" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Feed de looks" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(cardsMock.length);

    for (const filter of filterMock) {
      expect(
        screen.getByRole("button", { name: filter.name }),
      ).toBeInTheDocument();
    }
    for (const trend of trendsMock) {
      expect(screen.getByText(trend.trendText)).toBeInTheDocument();
    }
  });
});
