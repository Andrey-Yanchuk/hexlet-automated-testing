// __tests__/reverse.test.js
import { reverse } from "../src/index.js";
/*-----------------------------------------------------*/
// Use jest
test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});