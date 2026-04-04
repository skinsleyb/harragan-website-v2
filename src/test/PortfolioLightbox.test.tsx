import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PortfolioLightbox from "@/components/PortfolioLightbox";
import type { PortfolioImage } from "@/data/portfolioImages";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...actual,
    motion: {
      div: ({ children, onClick, className }: any) => <div onClick={onClick} className={className}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

const mockImages: PortfolioImage[] = [
  { src: "/img1.jpg", alt: "Block paving driveway installed by Andy Harragan & Sons, Essex", category: "Block Paving" },
  { src: "/img2.jpg", alt: "Resin bound driveway installed by Andy Harragan & Sons, Essex", category: "Resin" },
  { src: "/img3.jpg", alt: "Tarmac driveway installed by Andy Harragan & Sons, Essex", category: "Tarmac" },
];

describe("PortfolioLightbox", () => {
  it("renders the image at the initial index", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={1} onClose={onClose} />
    );
    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
  });

  it("navigates to next image when right arrow button is clicked", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Next image"));
    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
  });

  it("navigates to previous image when left arrow button is clicked", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={1} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Previous image"));
    expect(screen.getByAltText(mockImages[0].alt)).toBeInTheDocument();
  });

  it("wraps to last image when navigating back from index 0", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Previous image"));
    expect(screen.getByAltText(mockImages[2].alt)).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Close lightbox"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when Escape is pressed", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("navigates with keyboard arrow keys", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(screen.getByAltText(mockImages[0].alt)).toBeInTheDocument();
  });

  it("displays the alt text as a caption", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    expect(screen.getByText(mockImages[0].alt)).toBeInTheDocument();
  });
});
