import { screen, render } from "@testing-library/react";

import App from "../App";

describe("main app", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).not.toBeInTheDocument();
  });
});
