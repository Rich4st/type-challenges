type GetSecondArgOfAnyFunction<T> = T extends (first: any, second: infer R, ...args: any[]) => any ? R : never

/**
 *
 * @description Returns the type of the second argument of the function
 * @example type a = GetSecondArgOfAnyFunction<typeof getMyAge> // number
 * use infer to get the type of the second argument
 */

const getMyAge = (name: string, age: number) => {
  return age
}

type SecondArg = GetSecondArgOfAnyFunction<typeof getMyAge> // number

const MyAge: SecondArg = 22 // GOOD
const MyAge1: SecondArg = '22' // BAD
