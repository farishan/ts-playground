
type EventListenerMap = {
  [eventKey: string]: {
    [key: string]: EventListenerOrEventListenerObject
  }
}

class WindowEventProxy {
  namespace = 'WindowEventProxy'
  eventListenerMap: EventListenerMap = {}

  constructor() {
    if (!window) throw Error('`window` is not defined. This module is for browser environment.')
  }

  addEventListener(eventKey: string, key: string, func: EventListenerOrEventListenerObject) {
    // set default value
    if (!this.eventListenerMap[eventKey]) this.eventListenerMap[eventKey] = {}

    // save listener
    this.eventListenerMap[eventKey][key] = func

    // add listener to real window
    window.addEventListener(eventKey, func)
  }

  removeEventListener(eventKey: string, key: string) {
    // remove listener from real window first
    window.removeEventListener(eventKey, this.eventListenerMap[eventKey][key])

    // remove listener
    delete this.eventListenerMap[eventKey][key]
  }

  debug() {
    let debugWindow = document.getElementById(this.namespace)
    if (debugWindow) document.body.removeChild(debugWindow)

    debugWindow = document.createElement('div')
    debugWindow.id = this.namespace
    debugWindow.style.border = '1px solid'
    debugWindow.style.padding = '1rem'

    const listeners: string[] = []
    Object.keys(this.eventListenerMap).forEach((eventKey: string) => {
      Object.keys(this.eventListenerMap[eventKey]).forEach(key => {
        listeners.push(eventKey + '/' + key)
      });
    });

    debugWindow.innerHTML = `<pre><code>${JSON.stringify(listeners, [' '], 2)}</code></pre>`
    document.body.appendChild(debugWindow)
    console.log(this)
  }
}

const windowEventProxy = new WindowEventProxy()

export default windowEventProxy