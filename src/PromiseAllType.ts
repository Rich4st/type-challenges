const promise1 = Promise.resolve(3)
const promise2 = 42 as const
const promise3 = new Promise<string>((resolve, _reject) => {
  setTimeout(resolve, 100, 'foo')
})

const PromiseAllType = <T extends any[]>(promises: readonly [...T]) => {
  return Promise.all(promises) as { [K in keyof T]: K extends Promise<infer U> ? U : Awaited<T[K]> }
}

const result = PromiseAllType([promise1, promise2, promise3]) // expected to be [number, 42, string]
