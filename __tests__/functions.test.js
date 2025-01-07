// __tests__/functions.test.js
import { getLodash, indexOfLodash, sliceLodash } from "../src/index.js";
/*-----------------------------------------------------*/
let arr;
beforeEach(() => {
  arr = [1, 2, 3, 4, 5];
});
/*-----------------------------------------------------*/
describe("Testing the function getLodash", () => {
  test("Testing for non-existent index", () => {
    expect(getLodash(arr, 5)).toBeNull();
  });
  test("Test for explicitly passed argument in defaultValue", () => {
    expect(getLodash(arr, 5, "nothing")).toBe("nothing");
  });
  test("Test for valid index", () => {
    expect(getLodash(arr, 1)).toBe(2);
  });
  test("Test for first element(index 0)", () => {
    expect(getLodash(arr, 0)).toBe(1);
  });
  test("Negative index with array support", () => {
    expect(getLodash(arr, -1)).toBe(5);
  });
  test("Passing argument is not an array", () => {
    expect(getLodash("", 0)).toBeNull();
  });
});
/*-----------------------------------------------------*/
describe("Testing the function indexOfLodash", () => {
  test("Test for element not found in the array", () => {
    expect(indexOfLodash(arr, 7)).toBe(-1);
  });
  test("Test for element absence starting from negative index", () => {
    expect(indexOfLodash(arr, 2, -3)).toBe(-1);
  });
  test("Test for valid element", () => {
    expect(indexOfLodash(arr, 3)).toBe(2);
  });
  test("Test for valid element absence starting from negative index", () => {
    expect(indexOfLodash(arr, 3, -3)).toBe(2);
  });
  test("Passing argument is not an array", () => {
    expect(indexOfLodash("", 3, -3)).toBe(-1);
  });
  test("fromIndex larger than array length", () => {
    expect(indexOfLodash(arr, 3, 10)).toBe(-1);
  });
  test("Negative fromIndex in the middle of the array", () => {
    expect(indexOfLodash(arr, 4, -3)).toBe(3);
  });
  test("Empty array", () => {
    expect(indexOfLodash([], 1)).toBe(-1);
  });
});
/*-----------------------------------------------------*/
describe("Testing the function sliceLodash", () => {
  test("Checking a function without passing arguments begin and end", () => {
    expect(sliceLodash(arr)).toEqual([1, 2, 3, 4, 5]);
  });
  test("Passing argument is not an array", () => {
    expect(sliceLodash("", 0)).toBeNull();
  });
  test("begin more than array length", () => {
    expect(sliceLodash(arr, 7)).toEqual([]);
  });
  test("end more than array length", () => {
    expect(sliceLodash(arr, 2, 10)).toEqual([3, 4, 5]);
  });
  test("Argument begin negative end positive", () => {
    expect(sliceLodash(arr, -4, 2)).toEqual([2]);
  });
  test("Argument begin positive end negative", () => {
    expect(sliceLodash(arr, 1, -1)).toEqual([2, 3, 4]);
  });
  test("Argument begin and end negative", () => {
    expect(sliceLodash(arr, -5, -1)).toEqual([1, 2, 3, 4]);
  });
  test("Argument begin and end positive", () => {
    expect(sliceLodash(arr, 3, 4)).toEqual([4]);
  });
  test("We do not pass the argument to end", () => {
    expect(sliceLodash(arr, 2)).toEqual([3, 4, 5]);
  });
});
