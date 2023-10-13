export class Observable {
  private observers: Function[] = []

  public subscribe(subscriber: Function) {
    this.observers.push(subscriber)
  }

  public unsubscribe(subscriber: Function) {
    this.observers = this.observers.filter(f => f !== subscriber)
  }

  public notify(data: any) {
    for (let index = 0; index < this.observers.length; index++) {
      const observer = this.observers[index];
      observer(data)
    }
  }
}
