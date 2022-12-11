const myPushTest = [1, 2, 3] as const

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.zh-CN.md
 * @description 实现一个通用的 Push<T, U>，它接受一个数组 T 和一个元素 U 并返回一个包含 T 和 U 的数组。
 * @example type Result = Push<[1, 2], 3> // [1, 2, 3]
 * similar to MyUnshift
 */

type MyPush<T extends readonly any[], P> = [...T, P]

type Result = MyPush<typeof myPushTest, 4> // [1, 2, 3, 4]
