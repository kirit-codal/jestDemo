/**
 * @format
 */

import 'react-native';
import sum from '../../src/utils/sum';

// We can execute the individual test case

// test('adds 5 + 5 to equal 10', () => {
//   expect(sum(5, 5)).toBe(10);
// });

//describe :- Which used for the multiple test execution

describe('multiple execution', () => {
  // expect function is used every time you want to test a value.
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // Modifier - Not is check the function value is not same with pass value
  test('1+2 is not 4', () => {
    expect(sum(1, 2)).not.toBe(4);
  });
});

// describe Only :- Which is used to skip other test execution...

// describe.only('multiple execution', () => {
//   // expect function is used every time you want to test a value.
//   test('adds 2 + 2 to equal 4', () => {
//     expect(sum(1, 2)).toBe(3);
//   });

//   // Modifier - Not is check the function value is not same with pass value
//   test('2+2 is 4', () => {
//     expect(sum(2, 2)).toBe(4);
//   });
// });

// describe.skip :- Skip the execution particular block
// describe.skip('SKIP', () => {
//   test('2+2 is 4', () => {
//     expect(sum(2, 2)).toBe(4);
//   });
// });

// describe.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [2, 1, 3],
//   [4, 4, 8],
// ])('.add(%i, %i)', (a, b, expected) => {
//   test(`returns ${expected}`, () => {
//     expect(a + b).toBe(expected);
//   });

//   test(`returned value not be greater than ${expected}`, () => {
//     expect(a + b).not.toBeGreaterThan(expected);
//   });

//   test(`returned value not be less than ${expected}`, () => {
//     expect(a + b).not.toBeLessThan(expected);
//   });
// });

// test is the predefine in jest in which first argument for name of the test case
// Second argument is the function which you want to test
// third is the timeout of the function execution, default is 5 second.

// toBeDefined:- Check with valid return value.

// test('toBeDefined', () => {
//   expect(sum(1, 2)).toBeDefined();
// });

// // toHaveReturnedWith :- Return with value of function.
// test('toHaveReturnedWith', () => {
//   const drink = jest.fn(() => sum(1, 2));
//   drink();
//   expect(drink).toHaveReturnedWith(3);
// });

// toHaveReturnedWithTime :- Return with value of function.
// test('toHaveReturnedWith', () => {
//   const drink = jest.fn(() => sum(1, 2));
//   drink();
//   drink();
//   drink();
//   drink();
//   expect(drink).toHaveReturnedTimes(4);
// });

// toHaveLength :- Check length
// describe('length test', () => {
//   test('length-1', () => {
//     expect('Apple').toHaveLength(5);
//   });
// });

// toHaveProperty :
// describe('props check', () => {
//   const userDetail = {
//     user: 'kmodi@gmail.com',
//     password: '123213',
//   };
//   test('toHaveProperty-1', () => {
//     expect(userDetail).toHaveProperty('user');
//   });
// });

describe('toMatchObject applied to arrays', () => {
  test('the number of elements must match exactly', () => {
    expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);
  });

  test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
    expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([
      {foo: 'bar'},
      {baz: 1},
    ]);
  });
});
