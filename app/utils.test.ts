import { isDigit, validateEmail } from "./utils";

test("validateEmail returns false for non-emails", () => {
  expect(validateEmail(undefined)).toBe(false);
  expect(validateEmail(null)).toBe(false);
  expect(validateEmail("")).toBe(false);
  expect(validateEmail("not-an-email")).toBe(false);
  expect(validateEmail("n@")).toBe(false);
});

test("validateEmail returns true for emails", () => {
  expect(validateEmail("kody@example.com")).toBe(true);
});

test("isDigit returns true for numbers", () => {
  expect(isDigit(1 as unknown as string)).toBe(true);
})

test("isDigit returns false for strings", () => {
  expect(isDigit("a")).toBe(false);
})

test("isDigit returns false if more than one character is provided", () => {
  expect(isDigit(12 as unknown as string)).toBe(false)
})
