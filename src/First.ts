type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

/**
 * @description Returns the type of the first element of the array
 * @example type a = First<['a', 'b', 'c']> // a
 * use `infer` keyword to get the type of the first element
 */

type First<T> = T extends [infer R, ...any[]] ? R : never
type Second<T> = T extends [any, infer R, ...any[]] ? R : never

const FitstString: First<arr1> = 'a' // GOOD
const SecondNumber: Second<arr2> = 2 // GOOD

const FirstStr: First<arr1> = 1 // Bad
const SecondNum: Second<arr2> = 1 // GOOD

