import './style.css'
import { Game } from './Game.ts'
import { PluginKeyboard as Keyboard } from './PluginKeyboard.ts'
import { PluginLogger as Logger } from './PluginLogger.ts'

const game = new Game()
// console.log(game)
const pluginKeyboard = new Keyboard()
pluginKeyboard.addListener('keypress', (e: any) => {
  // console.log('test')
  game.exec(e.key)
})
game.run(pluginKeyboard)
// const pluginLogger = new PluginLogger()
game.use(Logger)

game.log('hello from game.log')
document.querySelector<HTMLDivElement>('#app')!.append(game.getView())
