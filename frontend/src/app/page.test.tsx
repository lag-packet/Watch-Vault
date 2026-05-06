import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the movie journal dashboard", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /your watch vault/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log watched/i })).toBeInTheDocument();
    expect(screen.getByText(/films logged/i)).toBeInTheDocument();
    expect(screen.getAllByText(/in the mood for love/i)).toHaveLength(2);
    expect(screen.getByText(/every hallway feels like a secret/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /diary/i })).toBeInTheDocument();
    expect(screen.getByText(/yi yi/i)).toBeInTheDocument();
  });
});
