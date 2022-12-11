type MyExclude<T, K> = T extends K ? never : T

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.zh-CN.md
 * @description Exclude from T those types that are assignable to U
 * @example type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 *
 */

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

const bar: Result = 'b' // ✅ GOOD
const bar: Result = 'a' // ❌ BAD
