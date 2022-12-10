const fn = (v: boolean) => {
  if (v)
    return 1

  return 0
}

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.zh-CN.md
 * @description Returns the return type of a function
 * @example type T1 = MyReturnType<typeof fn> // 0 | 1
 * use `infer` keyword
 */

type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any

type T1 = MyReturnType<typeof fn> // 0 | 1
