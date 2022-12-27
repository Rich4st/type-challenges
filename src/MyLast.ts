type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type MyLast<T extends any[]> = T extends [...any, infer L] ? L : never

type result = MyLast<arr1> // expected to be 'c'
type result2 = MyLast<arr2> // expected to be 1

