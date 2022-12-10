type GetSecondArgOfAnyFunction<T> = T extends (first: any, second: infer R, ...args: any[]) => any ? R : never

const getMyAge = (name: string, age: number) => {
  return age
}

type SecondArg = GetSecondArgOfAnyFunction<typeof getMyAge> // number

const MyAge: SecondArg = 22 // GOOD
const MyAge1: SecondArg = '22' // BAD
