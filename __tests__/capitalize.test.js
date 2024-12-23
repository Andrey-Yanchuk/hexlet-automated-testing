// tests/capitalize.test.js
import { capitalize } from "../src/index.js";
import { strict as assert } from "assert";
/*-----------------------------------------------------*/
// Use throw Error
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
// Use assert
// assert.equal(capitalize("hello"), "Hello", "Функция работает неверно!");
// assert.equal(capitalize("Hello"), "Hello", "Функция работает неверно!");
// assert.equal(capitalize(""), "", "Функция работает неверно!");
// assert.equal(capitalize(null), "", "Функция работает неверно!");
// console.log("Все тесты пройдены!");
/*-----------------------------------------------------*/
// Use jest
test('capitalize', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('Hello')).toEqual('Hello');
    expect(capitalize('')).toEqual('');
    expect(capitalize(null)).toEqual('');
});