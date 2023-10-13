import './style.css'
import './main.js'
import { Game } from './Game.ts'

const game = new Game()
const view = game.view.get()

document.querySelector<HTMLDivElement>('#app')!.append(view)
