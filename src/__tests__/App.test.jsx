// import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";
// import App from "../components/App";

// test("renders the correct child components", () => {
//   const { container } = render(<App />);
//   expect(container.querySelector(".App")).toBeInTheDocument();
//   expect(container.querySelector(".App header")).toBeInTheDocument();
//   expect(container.querySelector(".App aside")).toBeInTheDocument();
//   expect(container.querySelector(".App main")).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders blog name in Header", () => {
  render(<App />);
  const heading = screen.getByText(/my blog/i);
  expect(heading).toBeInTheDocument();
});

test("renders at least one article title", () => {
  render(<App />);
  const article = screen.getByText(/my first article/i);
  expect(article).toBeInTheDocument();
});