const tuple = ['tesla', 'model 3'] as const

/**
 * @description Convert tuple to Object
 * @example type a = TupleToObject<typeof tuple> // { 'tesla': 'tesla'; 'model 3': 'model 3'; }
 *
 */

type TupleToObject<T extends readonly any[]> = { [P in T[number]]: P }

const result: TupleToObject<typeof tuple> = {
  'tesla': 'tesla',
  'model 3': 'model 3',
} // GOOD

/* const result: TupleToObject<typeof tuple> = {
  'tesla': 'tesla',
  'model 3': 'model 3',
} */ // BAD
