import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type HelloWorld = string

type TestCases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
] // => [true, true]

const numberTest: HelloWorld = 11 // => ❌ can not assign number to TestCases
const stringTest: HelloWorld = '11' // => ✅

console.log(stringTest)
