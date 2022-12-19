/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.zh-CN.md
 * @description 实现一个通用的 StartsWith<T, U>，它接受两个字符串类型 T 和 U 作为参数。
 * 如果 T 以 U 开头，则返回 true，否则返回 false。
 * @example
 * type A = StartsWith<'abc', 'a'> // true
 */

type MyStartsWith<T, U> = T extends `${U}${infer R}` ? true : false

type A = MyStartsWith<'abc', 'a'> // true
