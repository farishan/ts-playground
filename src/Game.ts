/**
 * Every game instance should have:
 * 1. View component. Player should see (or hear) something. Maybe change the term to 'output component'? Visual or audio or both.
 * 2. Controller component. As a player, I should be able to input something so that I can interact with the game. 'Input component'/'GameInput component'?
 */

import { Plugin } from "./Plugin.type"

export class Game {
  listeners: Function[] = []
  view = {
    get() {
      const root = document.createElement('div')
      root.innerHTML = 'hello. check console and type something'
      return root
    }
  }

  constructor() {
    // this.listeners = []
  }

  exec(command: string) {
    if (command === '`') {
      
    } else {
      console.log('unknown command. try tilde key')
    }

    for (let index = 0; index < this.listeners.length; index++) {
      const listener = this.listeners[index];
      listener(command, this)
    }
  }

  log(message: string) {
    console.log(message)
  }

  addListener(listener: Function) {
    this.listeners.push(listener)
    console.log('listener added.')
  }

  /* how to type this? */
  use(Plugin: any) {
    const p = new Plugin()
    console.log(p)

      this.addListener(p.observer)
  }

  run(p: Plugin) {
    p.run(this)
  }

  getView() {
    return this.view.get()
  }
}