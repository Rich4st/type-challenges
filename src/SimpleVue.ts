type GetComputed<C> = C extends Record<string, (...args: any[]) => any>
  ? { [S in keyof C]: ReturnType<C[S]> }
  : never

/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.zh-CN.md
 * @description Simple Vue
 *
 */

declare function SimpleVue<D, C, M>(
  options: {
    data: () => D
    computed: C
    methods: M
  } & ThisType<D & M & GetComputed<C>>
)

const vue = SimpleVue({
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    double() {
      return this.count * 2
    },
    triple() {
      return this.count * 3
    },
  },
  methods: {
    increment() {
      this.count++
    },
  },
})
