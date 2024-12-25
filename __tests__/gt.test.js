// __tests__/gt.test.js
import { gt } from "../src/index.js";
/*-----------------------------------------------------*/
test("gt", () => {
  expect(gt(3, 1)).toBe(true); // true
  expect(gt(3, 3)).toBe(false); // false
  expect(gt(1, 3)).toBe(false); // false
  expect(gt(-1, -3)).toBe(true); // true
  expect(gt(-3, -1)).toBe(false); // false
  expect(gt(0, -1)).toBe(true); // true
  expect(gt(0, 1)).toBe(false); // false
});
