/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.zh-CN.md
 * @description 实现一个通用的 EndsWith<T, U>，它接受两个字符串类型 T 和 U 作为参数。
 * 如果 T 以 U 结尾，那么它的返回值类型为 true，否则为 false。
 * @example
 * type A = EndsWith<'abc', 'c'> // true
 */

type MyEndsWith<T, U> = T extends `${infer R}${U}` ? true : false

type A = MyEndsWith<'abc', 'c'> // true
