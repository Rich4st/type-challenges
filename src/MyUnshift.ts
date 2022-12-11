const numberArray = [1, 2] as const

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.zh-CN.md
 * @description 实现一个通用的 Unshift<T, U>，它接受一个数组 T 和一个元素 U 并返回一个包含 U 和 T 的数组。
 * @example type Result = Unshift<[1, 2], 0> // [0, 1, 2]
 * use ... spread operator
 */

type MyUnshift<T extends readonly any[], P> = [P, ...T]

type Result = MyUnshift<typeof numberArray, 3> // [3, 1, 2]

// <----------------------->

type MyUnshift2<T extends any[], P> = [P, ...T]
type Result2 = MyUnshift2<[1, 2], 0> // [0, 1, 2]
