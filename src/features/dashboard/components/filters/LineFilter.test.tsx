import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import type { Filter } from "@/types/dashboard/filters";
import LineFilters from "./LineFilter";

const filters: Filter[] = [
  {
    id: "disabled",
    name: "Formal",
    slug: "formal",
    order: 3,
    isEnabled: false,
  },
  {
    id: "minimal",
    name: "Minimal",
    slug: "minimal",
    order: 2,
    isEnabled: true,
  },
  {
    id: "streetwear",
    name: "Streetwear",
    slug: "streetwear",
    order: 1,
    isEnabled: true,
  },
];

describe("LineFilters", () => {
  it("ordena os filtros e seleciona o primeiro filtro habilitado", () => {
    render(<LineFilters filters={filters} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.map((button) => button.textContent)).toEqual([
      "Streetwear",
      "Minimal",
      "Formal",
      "",
    ]);
    expect(screen.getByRole("button", { name: "Streetwear" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Formal" })).toBeDisabled();
  });

  it("altera o filtro selecionado quando o usuário clica", async () => {
    const user = userEvent.setup();
    render(<LineFilters filters={filters} />);

    await user.click(screen.getByRole("button", { name: "Minimal" }));

    expect(screen.getByRole("button", { name: "Minimal" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Streetwear" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("oferece um botão acessível para abrir filtros adicionais", () => {
    render(<LineFilters filters={filters} />);

    expect(
      screen.getByRole("button", { name: "Abrir filtros" }),
    ).toBeInTheDocument();
  });
});
