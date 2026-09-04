import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AuthPage } from "./auth/pages";
import { ChatPage } from "./chat/pages";
import { ProfilePage } from "./profile/pages";
import { TrendsPage } from "./trends/pages";
import { WardrobePage } from "./wardrobe/pages";

describe.each([
  ["autenticação", AuthPage, "Auth Page"],
  ["chat", ChatPage, "Chat Page"],
  ["perfil", ProfilePage, "Profile Page"],
  ["trends", TrendsPage, "Trends Page"],
  ["guarda-roupa", WardrobePage, "Wardrobe Page"],
])("página de %s", (_name, Page, heading) => {
  it("renderiza o título principal", () => {
    render(<Page />);

    expect(
      screen.getByRole("heading", { level: 1, name: heading }),
    ).toBeInTheDocument();
  });
});
