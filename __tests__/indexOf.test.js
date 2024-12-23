// tests/indexOf.test.js
import { indexOf } from "../src/index.js";
import { strict as assert } from "assert";
/*-----------------------------------------------------*/
// Use assert
// assert.equal(indexOf([1, 2, 1, 2], 2), 1);
// assert.equal(indexOf([1, 2, 1, 2], 2, 2), 3);
// assert.equal(indexOf([2, "one", "cat", false], 8), -1); 
// console.log("Все тесты пройдены!");
/*-----------------------------------------------------*/
// Use jest
test('indexOf', () => {
    expect(indexOf([1, 2, 1, 2], 2)).toEqual(1);
    expect(indexOf([1, 2, 1, 2], 2, 2)).toEqual(3);
    expect(indexOf([2, "one", "cat", false], 8)).toEqual(-1);
});