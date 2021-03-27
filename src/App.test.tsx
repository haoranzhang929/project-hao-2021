import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders test text", () => {
  const { getByText } = render(<App />);
  const testElement = getByText("Init");
  expect(testElement).toBeInTheDocument();
});
