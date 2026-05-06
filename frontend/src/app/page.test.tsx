import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the starter page", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /frontend foundation initialized/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/tanstack query and axios/i)).toBeInTheDocument();
  });
});
