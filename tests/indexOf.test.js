// tests/indexOf.test.js
import { indexOf } from "../src/index.js";
import { strict as assert } from "assert";
/*-----------------------------------------------------*/
assert.equal(indexOf([1, 2, 1, 2], 2), 1);
assert.equal(indexOf([1, 2, 1, 2], 2, 2), 3);
assert.equal(indexOf([2, "one", "cat", false], 8), -1);
console.log("Все тесты пройдены!");
