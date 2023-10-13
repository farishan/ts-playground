import { Model } from "./Model";
import { View } from "./View";
import type { Constructor } from "./Constructor";

export function Controller<TBase extends Constructor>(Base: TBase) {
  return class ExtendedController extends Base {
    _model: Model = new Model()
    _view: View = new View()

    constructor(...rest: any[]) {
      super(...rest)
      if (rest[0]) this._model = rest[0]
      if (rest[1]) this._model = rest[1]
    }

    get model(): Model {
      return this._model
    }

    get view(): View {
      return this._view
    }
  }
}
