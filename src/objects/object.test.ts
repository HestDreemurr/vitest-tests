import { test, expect } from "vitest";
import { Product } from "./objects";

test("Propriedades do produto instanciadas corretamente", () => {
  expect(new Product({
    id: 1,
    name: "Hest",
    price: 100
  })).toEqual({
    id: 1,
    name: "Hest",
    price: 100
  });
});