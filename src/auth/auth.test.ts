import { test, expect, describe } from "vitest";
import { login } from "./auth";

describe("Testes de Log-in", () => {
  test("Credenciais válidas", () => {
    expect(login("admin", "admin")).toBe(true);
  });
  
  test("Credenciais inválidas", () => {
    expect(() => login("admin", "senha123")).toThrow("Credenciais inválidas");
  });
});