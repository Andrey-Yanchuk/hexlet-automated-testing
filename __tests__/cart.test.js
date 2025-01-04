// __tests__/cart.test.js
import { makeCart } from "../src/index.js";
/*-----------------------------------------------------*/
let cart;
beforeEach(() => {
  cart = makeCart();
});

test("Newly created cart is empty", () => {
  expect(cart.getItems()).toEqual([]);
  expect(cart.getCost()).toBe(0);
  expect(cart.getCount()).toBe(0);
});
test("Adding an item with count 1 works correctly", () => {
  cart.addItem({ name: "notebook", price: 0.5 }, 1);
  expect(cart.getItems()).toEqual([
    { good: { name: "notebook", price: 0.5 }, count: 1 },
  ]);
  expect(cart.getCost()).toBe(0.5);
  expect(cart.getCount()).toBe(1);
});
test("Adding multiple items works correctly", () => {
  cart.addItem({ name: "car", price: 3 }, 2);
  expect(cart.getItems()).toEqual([
    { good: { name: "car", price: 3 }, count: 2 },
  ]);
});
test("Updating the quantity of an existing item works", () => {
  cart.addItem({ name: "car", price: 3 }, 2);
  cart.addItem({ name: "car", price: 3 }, 5);
  expect(cart.getItems()).toEqual([
    { good: { name: "car", price: 3 }, count: 7 },
  ]);
});
test("Adding a new item works correctly", () => {
  cart.addItem({ name: "car", price: 3 }, 7);
  cart.addItem({ name: "house", price: 10 }, 2);
  expect(cart.getItems()).toEqual([
    { good: { name: "car", price: 3 }, count: 7 },
    { good: { name: "house", price: 10 }, count: 2 },
  ]);
});
test("Calculating total cost works as expected", () => {
  cart.addItem({ name: "car", price: 3 }, 7);
  cart.addItem({ name: "house", price: 10 }, 2);
  expect(cart.getCost()).toBe(41);
});
test("Calculating total count of items works correctly", () => {
  cart.addItem({ name: "car", price: 3 }, 7);
  cart.addItem({ name: "house", price: 10 }, 2);
  expect(cart.getCount()).toBe(9);
});
test("Adding an item with zero count returns an error message", () => {
  const message = cart.addItem({ name: "phone", price: 0.2 }, 0);
  expect(message).toBe("Please enter the correct quantity of goods!");
  expect(cart.getItems()).toEqual([]);
  expect(cart.getCost()).toBe(0);
  expect(cart.getCount()).toBe(0);
});
test("Adding an item with negative count does not modify the cart", () => {
  const message = cart.addItem({ name: "laptop", price: 0.4 }, -2);
  expect(message).toBe("Please enter the correct quantity of goods!");
  expect(cart.getItems()).toEqual([]);
  expect(cart.getCost()).toBe(0);
  expect(cart.getCount()).toBe(0);
});
