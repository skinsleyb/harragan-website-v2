import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";

vi.mock("@/data/portfolioImages", () => ({
  CATEGORIES: ["All", "Resin", "Tarmac"],
  portfolioImages: [
    { src: "/r1.jpg", alt: "Resin bound driveway installed by Andy Harragan & Sons, Essex", category: "Resin" },
    { src: "/r2.jpg", alt: "Resin bound driveway installed by Andy Harragan & Sons, Essex", category: "Resin" },
    { src: "/t1.jpg", alt: "Tarmac driveway installed by Andy Harragan & Sons, Essex", category: "Tarmac" },
  ],
}));

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
      h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
      p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

const renderPortfolio = () =>
  render(
    <MemoryRouter>
      <Portfolio />
    </MemoryRouter>
  );

describe("Portfolio page", () => {
  it("renders the page hero title", () => {
    renderPortfolio();
    expect(screen.getByText("Our Portfolio")).toBeInTheDocument();
  });

  it("renders all category tabs including All", () => {
    renderPortfolio();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Resin" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tarmac" })).toBeInTheDocument();
  });

  it("shows all images when All tab is active (default)", () => {
    renderPortfolio();
    const images = screen.getAllByRole("img").filter(
      (el) => el.getAttribute("alt")?.includes("Andy Harragan")
    );
    expect(images).toHaveLength(3);
  });

  it("filters to only Resin images when Resin tab is clicked", () => {
    renderPortfolio();
    fireEvent.click(screen.getByRole("button", { name: "Resin" }));
    const images = screen.getAllByRole("img").filter(
      (el) => el.getAttribute("alt")?.includes("Andy Harragan")
    );
    expect(images).toHaveLength(2);
    images.forEach((img) =>
      expect(img.getAttribute("alt")).toContain("Resin")
    );
  });

  it("filters to only Tarmac images when Tarmac tab is clicked", () => {
    renderPortfolio();
    fireEvent.click(screen.getByRole("button", { name: "Tarmac" }));
    const images = screen.getAllByRole("img").filter(
      (el) => el.getAttribute("alt")?.includes("Andy Harragan")
    );
    expect(images).toHaveLength(1);
  });

  it("opens lightbox when an image is clicked", () => {
    renderPortfolio();
    const imageButtons = screen.getAllByRole("button").filter(
      (btn) => btn.querySelector("img")
    );
    fireEvent.click(imageButtons[0]);
    expect(screen.getByLabelText("Close lightbox")).toBeInTheDocument();
  });
});
