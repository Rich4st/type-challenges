interface Todo {
  title: string
  description: string
  completed: boolean
}

/**
 * @description Pick types from type
 * @example type TodoPreview = MyPick<Todo, 'title' | 'completed'> // { title: string; completed: boolean; }
 *
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
} // equals to Pick<T, K>

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
} // GOOD

/* const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  description: 'Clean the room', // ❌
} */
