type foo = '   Hello World   '

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.zh-CN.md
 * @description 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
 * @example type result = MyTrim<foo>
 */

type MyTrim<T> = T extends ` ${infer P} `
  ? MyTrim<P>
  : T

type result = MyTrim<foo> // expected to be `Hello World`
