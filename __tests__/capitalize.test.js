// tests/capitalize.test.js
import { capitalize } from "../src/index.js";
import { strict as assert } from "assert";
/*-----------------------------------------------------*/
// Before
// if (capitalize("hello") !== "Hello") {
//   throw new Error("Функция работает неверно!");
// }
// if (capitalize("") !== "") {
//   throw new Error("Функция работает неверно!");
// }
// if (capitalize(null) !== "") {
//   throw new Error("Функция null работает неверно!");
// }
// console.log("Все тесты пройдены!");
/*-----------------------------------------------------*/
// After
assert.equal(capitalize("hello"), "Hello", "Функция работает неверно!");
assert.equal(capitalize("Hello"), "Hello", "Функция работает неверно!");
assert.equal(capitalize(""), "", "Функция работает неверно!");
assert.equal(capitalize(null), "", "Функция работает неверно!");
console.log("Все тесты пройдены!");
