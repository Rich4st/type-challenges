const foo = (_arg1: string, _arg2: number): void => {}
const bar = (a: number, b: boolean) => boolean

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.zh-CN.md
 * @description 实现一个通用的 MyParameters<T>，它接受一个函数类型 T 作为参数，返回 T 的参数类型组成的元组类型。
 * @example type result = MyParameters<typeof foo> // expected to be ["string", number]
 */

type MyParameters<T> = T extends (...args: infer P) => any ? P : never

type result = MyParameters<typeof foo> // expected to be ["string", number]
type result1 = MyParameters<typeof bar>