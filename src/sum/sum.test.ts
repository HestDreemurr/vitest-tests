import { test, expect, describe } from "vitest";
import { sum } from "./sum";

describe("Números somados corretamente", () => {
  test("Somar 1 + 2, resultando em 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test("Somar 2 + 2, resultando em 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
})