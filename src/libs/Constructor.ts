/**
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html#how-does-a-mixin-work
 */
export type Constructor<T = {}> = new (...args: any[]) => T;