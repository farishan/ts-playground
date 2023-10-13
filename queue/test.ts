import { Queue } from "./Queue";

const queue = new Queue()
queue.dequeue() // should be fine
queue.enqueue('alpha')
queue.en('beta')
queue.de() // beta
  .en('charlie') // beta, charlie
  .en('delta') // beta, charlie, delta
  .de() // charlie, delta

console.log(queue)
console.log(queue.get())