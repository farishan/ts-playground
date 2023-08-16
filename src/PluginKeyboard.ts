import { Plugin } from "./Plugin"

export class PluginKeyboard extends Plugin {
  constructor() {
    super()
  }

  run() {
    window.addEventListener('keypress', (e) => {
      const listeners = this.listenersByKey['keypress'];
      if (listeners) {
        for (let index = 0; index < listeners.length; index++) {
          const listener = listeners[index];
          listener(e)
        }
      }
    })
  }
}