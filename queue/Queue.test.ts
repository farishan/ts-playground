import { Queue } from "./Queue";

describe('Queue Test', () => {
  let q: Queue;

  beforeEach(() => {
    q = new Queue()
  })

  test(`Queue's enqueue method should return the queue obj itself`, () => {
    expect(q.enqueue(1)).toBe(q)
  })

  test(`Queue's toString method should return string`, () => {
    expect(typeof q.toString()).toBe('string')
  })

  test(`Queue's get method should return the queue data`, () => {
    expect(JSON.stringify(q.get())).toBe(JSON.stringify([]))
  })

  test(`Queue's dequeue method should move the queue forward`, () => {
    q.enqueue(1)
    q.dequeue()
    expect(JSON.stringify(q.dequeue().get())).toBe(JSON.stringify([]))
  })

  test(`aliases`, () => {
    const q1 = new Queue()
    expect(q.en(1).get()[0]).toBe(q1.enqueue(1).get()[0])
    expect(q.de().get()[0]).toBe(q1.dequeue().get()[0])
  })
})