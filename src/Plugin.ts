export class Plugin {
  listenersByKey: any
  listeners: Function[]

  constructor() {
    this.listeners = []
    this.listenersByKey = {}
  }

  addListener(key: string, listener: Function) {
    console.log(key)
    if (!this.listenersByKey[key]) this.listenersByKey[key] = []
    this.listenersByKey[key].push(listener)
  }

  observer(payload: any, game: any) {
    console.log('plugin observer', payload, game)
  }

  run() {

  }
}