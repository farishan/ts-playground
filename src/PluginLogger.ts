import { Plugin } from "./Plugin"

export class PluginLogger extends Plugin {
  constructor() {
    super()
  }

  log(message: string) {
    console.log(message)
  }

  observer(payload: any, game: any) {
    if(payload === '`') {
      // console.log('logger observer', payload, game)
      console.log('todo: switch to dev mode', game.log('hello from logger plugin'))
    }
  }

  run() {
    console.log('pluginLogger ran', this.observer)
  }
}