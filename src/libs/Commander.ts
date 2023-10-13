import { Constructor } from "./Constructor"

export class Commander {
  execute(line: string) {
    console.log('executing:', line)
  }
}

export type Commandable = Constructor<Commander>