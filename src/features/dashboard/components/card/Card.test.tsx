import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from ".";

describe("Card", () => {
  it("renderiza os dados do look e aponta para o guarda-roupa do autor", () => {
    render(
      <Card
        id={1}
        title="Look de inverno"
        image="/look.jpg"
        userId={42}
        author="@nina"
        category="Winter"
        categoryColor="#ffffff"
        likes={1280}
        format="portrait"
      />,
    );

    expect(
      screen.getByRole("img", { name: "Look de inverno" }),
    ).toHaveAttribute("src", expect.stringContaining("look.jpg"));
    expect(screen.getByRole("link")).toHaveAttribute("href", "/wardrobe/42");
    expect(screen.getByText("@nina")).toBeInTheDocument();
    expect(screen.getByText("Winter")).toBeInTheDocument();
    expect(screen.getByText("1.280")).toBeInTheDocument();
  });

  it("usa fundo branco quando a categoria não possui cor", () => {
    render(
      <Card
        id={1}
        title="Look"
        image="/look.jpg"
        userId={1}
        author="@autor"
        category="Classic"
        categoryColor=""
        likes={10}
        format="square"
      />,
    );

    expect(screen.getByText("Classic")).toHaveStyle({
      backgroundColor: "#fff",
    });
  });
});
