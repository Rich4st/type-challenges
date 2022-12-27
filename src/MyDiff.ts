interface Foo {
  a: string
  b: number
}
interface Bar {
  a: string
  c: boolean
}

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.zh-CN.md
 * @description 实现一个通用的 MyDiff<T, K>，它接受两个类型 T 和 K 作为参数。
 * 它的返回值应该是一个包含 T 中但不在 K 中的属性的类型。
 * @example type result = MyDiff<Foo, Bar> // { b: number; c: boolean }
 */

type MyDiff<T, K, A = T & K> = {
  [P in Exclude<keyof A, keyof K> | Exclude<keyof A, keyof T>]: A[P]
}

type result = MyDiff<Foo, Bar> // { b: number; c: boolean }
