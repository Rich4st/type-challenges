interface Todo {
  title: string
  description: string
  completed: boolean
}

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md
 * @description Make all properties in T readonly
 * @example type TodoPreview = MyReadonly<Todo> // { readonly title: string; readonly description: string; readonly completed: boolean; }
 *
 */

type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

const todo: MyReadonly<Todo> = {
  title: 'Delete inactive users',
  description: 'Remove all users who have not logged in in the last 30 days',
  completed: false,
} // GOOD

todo.completed = true // ❌ Cannot assign to 'completed' because it is a read-only
