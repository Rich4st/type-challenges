const tuple = ['tesla', 'model 3'] as const

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md
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
