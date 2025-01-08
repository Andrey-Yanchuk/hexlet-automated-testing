// __tests__/fill.test.js
import { fill } from "../src/index.js";
/*-----------------------------------------------------*/
let coll;
beforeEach(() => {
    coll = [1, 2, 3, 4];
});
/*-----------------------------------------------------*/
describe("fill function tests", () => {
    test("Fills central array values", () => {
        expect(fill(coll, '*', 1, 3)).toEqual([1, '*', '*', 4]);
    })
    test("Fills central array values", () => {
        expect(fill(coll, '*')).toEqual(['*', '*', '*', '*']);
    });
    test("Out-of-bounds start does not modify array", () => {
        expect(fill(coll, '*', 4)).toEqual([1, 2, 3, 4]);
    });
    test("End argument beyond array does not increase length", () => {
        expect(fill(coll, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
    });
    test("Argument start positive end negative", () => {
        expect(fill(coll, '*', 2, -1)).toEqual([1, 2, '*', 4]);
    });
    test("Argument start negative end positive", () => {
        expect(fill(coll, '*', -3, 4)).toEqual([1, '*', '*', '*']);
    });
    test("Argument start and end negative", () => {
        expect(fill(coll, '*', -3, -2)).toEqual([1, '*', 3, 4]);
    });
    test("Passing argument is not an array", () => {
        expect(fill("", 1, 4)).toBeNull();
    });
});
/*-----------------------------------------------------*/