// __tests__/set.test.js
import { set } from "../src/index.js";
/*-----------------------------------------------------*/
let object;
beforeEach(() => {
  // Подготовка данных перед каждым тестом
  object = { a: [{ b: { c: 3 } }] };
});
test("set updates nested value in an object", () => {
  set(object, "a[0].b.c", 4);
  expect(set(object.a[0].b.c)).toBe(4);
});
test("set creates nested structure and assigns value", () => {
  set(object, ["x", "0", "y", "z"], 5);
  expect(set(object)).toEqual({ a: [{ b: { c: 3 } }], x: [{ y: { z: 5 } }] });
});
test("set handles empty path gracefully", () => {
  const originalObj = { a: 1 };
  expect(set(originalObj, [], 10)).toEqual(originalObj); // Путь пустой, объект не изменился
});
test("test mutates the original oblect", () => {
  set(object, "b", 2);
  expect(object).toEqual({ a: [{ b: { c: 3 } }], b: 2 });
});
test("set works with non-string path keys", () => {
  set(object, ["a", "0", "b", "c"], 6);
  expect(object.a[0].b.c).toBe(6);
});
test("set overwrites existing values", () => {
  set(object, "a[0].b.c", 10);
  expect(object.a[0].b.c).toBe(10);
});
