import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

describe("Navbar", () => {
  it("renderiza atalhos e a ação de publicar um look", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Buscar" })).toHaveAttribute(
      "href",
      "/search",
    );
    expect(screen.getByRole("link", { name: "Notificações" })).toHaveAttribute(
      "href",
      "/notifications",
    );
    expect(
      screen.getByRole("button", { name: /post look/i }),
    ).toBeInTheDocument();
  });
});

describe("Sidebar", () => {
  it("renderiza a navegação principal", () => {
    render(<Sidebar />);

    expect(screen.getByRole("link", { name: "Explore" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Trends" })).toHaveAttribute(
      "href",
      "/trends",
    );
    expect(screen.getByRole("link", { name: "Wardrobe" })).toHaveAttribute(
      "href",
      "/wardrobe",
    );
    expect(screen.getByRole("link", { name: "Profile" })).toHaveAttribute(
      "href",
      "/profile",
    );
  });
});
