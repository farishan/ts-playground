import { Plugin } from "./Plugin"
import windowEventProxy from "./libs/windowEventProxy";

export class PluginKeyboard extends Plugin {
  constructor() {
    super()

    windowEventProxy.addEventListener('keypress', 'plugin_keyboard', (e) => {
      const listeners = this.listenersByKey['keypress'];
      if (!listeners) return

      for (let index = 0; index < listeners.length; index++) {
        const listener = listeners[index];
        listener(e)
      }
    })

    windowEventProxy.debug()
  }

  observer(payload: any, game: any) {
    console.log('hello from pluginkeyboard observer', payload, game)
  }

  run() {

  }
}