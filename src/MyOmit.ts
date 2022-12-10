interface TodoOmit {
  title: string
  description: string
  completed: boolean
}

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.zh-CN.md
 * @description implement Omit without build-in Omit
 * @example type TodoPreview = MyOmit<Todo, 'description' | 'title'> // { completed: boolean }
 * use Exclude to get the keys that are not in K
 */

type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }

type TodoOmitPreview = MyOmit<TodoOmit, 'description' | 'title'>

const todo: TodoOmitPreview = {
  completed: false,
} // GOOD
