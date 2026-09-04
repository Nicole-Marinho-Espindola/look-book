import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { trendsMock } from "../../mocks/trend";
import Trend from ".";
import TrendContainer from "./components/trendContainer";

describe("TrendContainer", () => {
  it("codifica o tópico no endereço da trend", () => {
    render(
      <TrendContainer
        id={1}
        position={1}
        trendText="#Moda & Arte"
        category="Inspiração"
        posts="10 looks"
      />,
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/trends?topic=%23Moda%20%26%20Arte",
    );
    expect(screen.getByText("Inspiração")).toBeInTheDocument();
    expect(screen.getByText("10 looks")).toBeInTheDocument();
  });
});

describe("Trend", () => {
  it("renderiza todas as trends disponíveis", () => {
    render(<Trend />);

    for (const trend of trendsMock) {
      expect(screen.getByText(trend.trendText)).toBeInTheDocument();
    }
    expect(
      screen.getByRole("link", { name: /explorar todas as trends/i }),
    ).toHaveAttribute("href", "/trends");
  });
});
