/* source of truth for all game data */

export class MemoryManager {
  private data: any = {}

  set(key: string, value: any): MemoryManager {
    this.data[key] = value
    return this
  }

  get(key: string): any {
    return this.data[key]
  }
}
