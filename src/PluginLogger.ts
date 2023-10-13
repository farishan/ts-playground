import { Plugin } from "./Plugin"

class Command {
  execute
  constructor(func: Function) {
    this.execute = func
  }
}

class LogCommand extends Command {
  constructor() {
    super((logManagerModel:any) => {
      console.log('hello from log command', {logManagerModel})
    })
  }
}

class LogManager {
  model: any = {
    namespace: 'LogManager'
  }
  execute(command: Command, ...args: any[]) {
    return command.execute(this.model, ...args)
  }
}

const logManager = new LogManager()
logManager.execute(new LogCommand())

export class PluginLogger extends Plugin {
  constructor() {
    super()
  }

  log(message: string) {
    console.log(message)
  }

  observer(payload: any, game: any) {
    if (payload === '`') {
      // console.log('logger observer', payload, game)
      console.log('todo: switch to dev mode', game.log('hello from logger plugin'))
    }
  }

  run() {
    console.log('pluginLogger ran', this.observer)
  }
}
