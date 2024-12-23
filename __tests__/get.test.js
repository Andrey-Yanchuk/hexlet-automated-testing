// tests/get.test.js
import { get } from "../src/index.js";
/*-----------------------------------------------------*/
if (get({ hello: "world" }, "hello") !== "world") {
  throw new Error("Функция работает неверно!");
}
if (get({ hello: "world" }, "hello", "kitty") !== "world") {
  throw new Error("Функция работает неверно!");
}
if (get({}, "hello", "kitty") !== "kitty") {
  throw new Error("Функция работает неверно!");
}
console.log("Все тесты пройдены!");
