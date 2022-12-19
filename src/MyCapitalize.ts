const capitalizeTest = 'hello, world!'

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.zh-CN.md
 * @description 实现内置的Capitalize<T>类型
 * @example
 * type capitalized = MyCapitalize<'hello, world!'> // expected to be 'Hello, world!'
 * use `${infer F}${infer R}` to split string
 */

type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S

type capitalized = MyCapitalize<typeof capitalizeTest> // expected to be 'Hello, world!'
