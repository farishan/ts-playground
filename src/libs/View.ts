/**
 * @example ```
 * const view = new View()
 * view.get()
 * ```
 */
export class View {
  private dom = {
    root: document.createElement('div')
  }

  constructor() {
    this.dom.root.innerHTML = 'hello. check console and type something'
  }

  get() {
    return this.dom.root
  }
}