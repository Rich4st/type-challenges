interface X {
  foo: string
  bar: {
    baz: number
  }
}

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.zh-CN.md
 * @description 实现一个通用的 DeepReadonly<T>，它将对象的所有属性设置为只读（包括嵌套的对象
 * 递归实现为：如果是对象，递归调用为类型添加readonly，否则直接返回该类型
 */

type MyDeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? MyDeepReadonly<T[P]>
    : T[P]
}

const readonlyX: MyDeepReadonly<X> = {
  foo: 'Hello',
  bar: {
    baz: 42,
  },
}

readonlyX.foo = 'World' // ❌ BAD
readonlyX.bar.baz = 100 // ❌ BAD
