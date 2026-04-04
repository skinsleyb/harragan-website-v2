import { describe, it, expect } from "vitest";
import { portfolioImages, CATEGORIES } from "@/data/portfolioImages";

describe("portfolioImages", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(portfolioImages)).toBe(true);
    expect(portfolioImages.length).toBeGreaterThan(0);
  });

  it("every image has src, alt, and category fields", () => {
    for (const img of portfolioImages) {
      expect(typeof img.src).toBe("string");
      expect(img.src.length).toBeGreaterThan(0);
      expect(typeof img.alt).toBe("string");
      expect(img.alt.length).toBeGreaterThan(0);
      expect(typeof img.category).toBe("string");
    }
  });

  it("CATEGORIES starts with All and contains all 8 service types", () => {
    expect(CATEGORIES[0]).toBe("All");
    expect(CATEGORIES).toContain("Block Paving");
    expect(CATEGORIES).toContain("Resin");
    expect(CATEGORIES).toContain("Slab Paving");
    expect(CATEGORIES).toContain("Tarmac");
    expect(CATEGORIES).toContain("Groundworks");
    expect(CATEGORIES).toContain("Landscape");
    expect(CATEGORIES).toContain("Pathway");
    expect(CATEGORIES).toContain("Fencing");
  });

  it("all image categories are valid CATEGORIES values", () => {
    const validCategories = new Set<string>(CATEGORIES.filter((c) => c !== "All"));
    for (const img of portfolioImages) {
      expect(validCategories.has(img.category)).toBe(true);
    }
  });
});
