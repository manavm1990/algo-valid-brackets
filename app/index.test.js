import { expect, it } from "vitest";
import { isValidBracketsBracesParentheses } from "./index.js";

it('should return true if given the string "( hello )"', () => {
  expect(isValidBracketsBracesParentheses("( )")).toBe(true);
});

it('should return true if given the string "[ ( ) ]"', () => {
  expect(isValidBracketsBracesParentheses("[ ( ) ]")).toBe(true);
});

it('should return true if given the string "{ } [ ( [] ) ]"', () => {
  expect(isValidBracketsBracesParentheses("{ } [ ( [] ) ]")).toBe(true);
});

it('should return true if given the string "( )[ ]{ }"', () => {
  expect(isValidBracketsBracesParentheses("( )[ ]{ }")).toBe(true);
});

it('should return false if given the string "( ]"', () => {
  expect(isValidBracketsBracesParentheses("( ]")).toBe(false);
});

it('should return false if given the string "( [ ) ]"', () => {
  expect(isValidBracketsBracesParentheses("( [ ) ]")).toBe(false);
});

it('should return false if given the string "console.log("', () => {
  expect(isValidBracketsBracesParentheses('console.log("')).toBe(false);
});
