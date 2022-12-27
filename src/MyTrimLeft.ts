const foo = '    Hello World!   '

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.zh-CN.md
 * @description remove left spaces
 * @example type result = MyTrimLeft<typeof foo>
 */

type MyTrimLeft<T> = T extends `${infer L}${infer R}`
  ? L extends ' '
    ? MyTrimLeft<R>
    : T
  : T

type result = MyTrimLeft<typeof foo> // expected `Hello World!   `
