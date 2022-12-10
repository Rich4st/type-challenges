type NumberTuple = [1, 2, 3, 4, 5]
type StringTuple = ['a', 'b', 'c', 'd', 'e', 'f']

/**
 * @description Returns the length of the tuple
 * @example type NumberTupleLength = TupleLength<NumberTuple> // 5
 * use Tuple `length` property
 */

type TupleLength<T extends readonly any[]> = T['length']

type NumberTupleLength = TupleLength<NumberTuple> // 5
type StringTupleLength = TupleLength<StringTuple> // 6
