const myConcatTest = [1, 2, 3] as const

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.zh-CN.md
 * @description 实现一个通用的Concat<T, P>，它接受两个数组T和P作为参数，返回一个合并后的数组
 * @example type Result = Concat<[1], [2]> // expected to be [1, 2]
 * similar to MyPush
 */

type MyConcat<T extends any[], P extends any[]> = [...T, ...P]

const myConcat: MyConcat<[1, 2, 3], [4, 5, 6]> = [1, 2, 3, 4, 5, 6] // ✅ GOOD
const myConcat2: MyConcat<[1, 2, 3], [4, 5, 6]> = [1, 2, 3, 4, 5, 6, 7] // ❌ BAD
