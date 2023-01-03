type ExampleType = Promise<string>
type ExampleType1 = Promise<{ name: string }>

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.zh-CN.md
 * @description 实现一个工具类型，用于获取 Promise 的返回值类型
 * @example
 * type result = MyAwaited<ExampleType> // expected to be string
 */

type MyAwaited<T> = T extends Promise<infer U> ? U : T

type result = MyAwaited<ExampleType> // expected to be string
type result1 = MyAwaited<ExampleType1> // expected to be { name: string }
