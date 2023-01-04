interface Todo {
  title: string
  description: string
  completed: boolean
}

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.zh-CN.md
 * @description 实现一个通用的 Readonly<T>，它接受一个类型 T 以及一个联合类型 K 作为参数，返回一个类型，将 T 的所有属性的可选性去掉，但是 K 中的属性除外。
 * use & to merge two types
 */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.completed = true // ✔️ GOOD
