// tests/get.test.js
import { get } from "../src/index.js";
/*-----------------------------------------------------*/
// Use throw Error
// if (get({ hello: "world" }, "hello") !== "world") {
//   throw new Error("Функция работает неверно!");
// }
// if (get({ hello: "world" }, "hello", "kitty") !== "world") {
//   throw new Error("Функция работает неверно!");
// }
// if (get({}, "hello", "kitty") !== "kitty") {
//   throw new Error("Функция работает неверно!");
// }
// console.log("Все тесты пройдены!");
/*-----------------------------------------------------*/
// Use jest
test("get", () => {
  expect(get({ hello: "world" }, "hello")).toEqual("world");
  expect(get({ hello: "world" }, "hello", "kitty")).toEqual("world");
  expect(get({}, "hello", "kitty")).toEqual("kitty");
});
