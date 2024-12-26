// __tests__/validator.test.js
import { makeValidator } from "../src/index.js";
/*-----------------------------------------------------*/
test("validator.isValid", () => {
  const validator = makeValidator();
  expect(validator.isValid("some value")).toBe(true);
  expect(validator.isValid(10)).toBe(true);
  expect(validator.isValid(0)).toBe(true);
  expect(validator.isValid(-1)).toBe(true);
});
test("validator.addCheck", () => {
  const validator = makeValidator();
  expect(validator.isValid("some value")).toBe(true);
  validator.addCheck((v) => v > 5);
  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(10)).toBe(true);
  expect(validator.isValid(0)).toBe(false);
  expect(validator.isValid(-1)).toBe(false);
});
