const foo = '    Hello World!   '

type MyTrimLeft<T> = T extends `${infer L}${infer R}`
  ? L extends ' '
    ? MyTrimLeft<R>
    : T
  : T

type result = MyTrimLeft<typeof foo>
