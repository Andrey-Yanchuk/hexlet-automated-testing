// __tests__/without.test.js
import { without } from '../src/index.js'
/*-----------------------------------------------------*/
test('without', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
    expect(without([2, 1, 2, 3])).toEqual([2, 1, 2, 3]);
    expect(without([2, 1, 2, 3], 1, 6, 7)).toEqual([2, 2, 3]);
    expect(without(0)).toEqual([]);
    expect(without([])).toEqual([]);
})