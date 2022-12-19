type IfType<C, T, F> = C extends true ? T : F

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.zh-CN.md
 * @description 实现一个条件类型 If，它接受三个参数 C、T 和 F。如果 C 为 true，那么它的返回值类型是 T，否则为 F。
 * @example
 * type a = IfType<true, 'a', 'b'> // expected to be 'a'
 */

const a: IfType<true, 'a', 'b'> = 'a' // GOOD ✅
const b: IfType<true, 'a', 'b'> = 'b' // BAD ❌

const test: IfType<true, Record<number, string>, string> = { 1: 'a' } // GOOD ✅
