/**
 * Every game instance should have:
 * 1. View component. Player should see (or hear) something. Maybe change the term to 'output component'? Visual or audio or both.
 * 2. Controller component. As a player, I should be able to input something so that I can interact with the game. 'Input component'/'GameInput component'?
 */

/**
 * Open-Closed Principle
 * requires that classes should be open for extension and closed to modification.
 */

import type { Constructor } from "./libs/Constructor"

import { MemoryManager } from "./MemoryManager"
import { Plugin } from "./Plugin.type"
import { PluginKeyboard } from "./PluginKeyboard"
import { Commander } from "./libs/Commander"
import { Controller } from "./libs/Controller"
// import { PluginLogger } from "./PluginLogger"
import windowEventProxy from "./libs/windowEventProxy"

const GameBase = Controller(Commander);

function GameMixin<TBase extends Constructor>(Base: TBase) {
  return class ExtendedGame extends Base {
    memoryManager = new MemoryManager()
    listeners: Function[] = []

    constructor(...rest: any[]) {
      super(...rest)
      this.memoryManager.set('game_name', 'test')
      console.log(this.memoryManager.get('game_name'))

      // this.listeners = []
      windowEventProxy.debug()

      /* set built-in plugins */
      new PluginKeyboard().addListener('keypress', (e: KeyboardEvent) => {
        this.execute(e.key)
      })

      // new PluginLogger()
    }

    log(message: string) {
      console.log(message)
    }

    addListener(listener: Function) {
      this.listeners.push(listener)
      console.log('listener added.')
    }

    /* how to type this? */
    use(Plugin: any, callback?: Function) {
      const plugin = new Plugin()
      console.log('plugged in:', plugin)

      this.addListener(plugin.observer)

      if (callback) callback(this, plugin)
    }

    run(p: Plugin) {
      p.run(this)
    }
  };
}

export const Game = GameMixin(GameBase)
