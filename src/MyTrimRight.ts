type foo = '    Hello World!   '

/**
 * @description remove right spaces
 * @example type result = MyTrimRight<foo>
 */

type MyTrimRight<T> = T extends `${infer R} `
  ? MyTrimRight<R>
  : T

type result = MyTrimRight<foo>
