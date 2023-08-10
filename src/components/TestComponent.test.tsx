import { screen, render } from "@testing-library/react";
import { TestComponent } from "./TestComponent";

test("TestComponent renders", () => {
  render(<TestComponent />);
  expect(screen.getByLabelText("Test Component")).toBeTruthy();
});
