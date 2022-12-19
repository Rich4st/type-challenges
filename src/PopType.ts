type popTest = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.zh-CN.md
 * @description 实现一个通用Pop<T>，它接受一个数组T，并返回一个由数组T的前length-1项以相同的顺序组成的数组。
 * @example type arr1 = ['a', 'b', 'c', 'd']
 * type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
 */

type PopType<T extends readonly any[]> = T extends [...infer U, infer R] ? U : never

type PopTest = PopType<popTest>
