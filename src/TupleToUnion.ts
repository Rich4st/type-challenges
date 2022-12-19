type tuple = ['1', '2', '3']

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.zh-CN.md
 * @description 将元组转换为联合类型
 * @example
 * type tuple = ['1', '2', '3']
 * type result = TupleToUnion<tuple> // expected to be '1' | '2' | '3'
 * use T[number] to get the union type
 */

type TupleToUnion<T extends any[]> = T[number]

type result = TupleToUnion<tuple> // expected to be '1' | '2' | '3'
