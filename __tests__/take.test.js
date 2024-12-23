// tests/take.test.js
import { take } from "../src/index.js";
import { strict as assert } from "assert";
/*-----------------------------------------------------*/
assert.deepEqual(take([], 2), [], "AssertionError:"); // проверяет, что пустой массив остаётся пустым независимо от n
assert.deepEqual(take([1, 2, 3]), [1], "AssertionError:"); // проверяет поведение с массивом, если n не указан (по умолчанию n = 1)
assert.deepEqual(take([1, 2, 3], 2), [1, 2], "AssertionError:"); // проверяет возврат первых двух элементов
assert.deepEqual(take([4, 3], 9), [4, 3], "AssertionError:"); // проверяет, что если n больше длины массива, возвращается весь массив
console.log("Все тесты пройдены!");
