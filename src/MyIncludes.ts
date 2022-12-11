const nameArray = ['Kars', 'Esidisi', 'Wamuu', 'Santana'] as const

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.zh-CN.md
 * @description Returns whether the array includes the element
 * @example type a = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // true
 * T[number] is the type of the element in the array
 *
 */

type MyIncludes<T extends readonly any[], K> = K extends T[number] ? true : false

type IsKarsIncluded = MyIncludes<typeof nameArray, 'Kars'> // ✅ GOOD
type IsEsidisiIncluded = MyIncludes<typeof nameArray, 'Wamuu1'> // ❌ BAD
