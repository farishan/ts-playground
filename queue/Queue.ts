/**
 * Basic Queue class
 * @class
 */
class Queue {
  private queue: any[] = []

  /**
   * @category Core
   * @param data
   * @alias en
   * @example ```
   * const q = new Queue()
   * q.enqueue('hello')
   * ```
   */
  enqueue(data: any): Queue {
    this.queue.push(data)
    return this
  }

  /**
   * @category Core
   * @alias de
   * @example ```
   * const q = new Queue()
   * q.dequeue()
   * ```
   */
  dequeue(): Queue {
    if (this.queue.length === 0) return this
    this.queue.shift()
    return this
  }

  /**
   * @category Core
   * @example ```
   * const q = new Queue()
   * q.get() // []
   * ```
   */
  get(): any[] {
    return this.queue
  }

  /**
   * @category Helper
   * @example ```
   * const q = new Queue()
   * q.toString()
   * ```
   */
  toString(): string {
    return JSON.stringify(this.queue)
  }

  /**
   * @category Aliases
   * @see {@link enqueue}
   */
  en(data: any): Queue { return this.enqueue(data) }

  /**
   * @category Aliases
   * @see {@link dequeue}
   */
  de(): Queue { return this.dequeue() }
}

export { Queue }