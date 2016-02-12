/* eslint-disable new-cap */
import Enhancer from "radium/lib/enhancer";
import StyleRoot from "radium/lib/components/style-root";

import StyleKeeper from "./util/style-keeper";

const _getStyleKeeper = (instance) => {
  if (!instance._radiumStyleKeeper) {
    const userAgent = (
      instance.props.radiumConfig && instance.props.radiumConfig.userAgent
    ) || (
      instance.context._radiumConfig && instance.context._radiumConfig.userAgent
    );
    instance._radiumStyleKeeper = new StyleKeeper(userAgent);
  }

  return instance._radiumStyleKeeper;
};

class GridStyleRoot extends StyleRoot {
  constructor() {
    super(...arguments);

    this._radiumStyleKeeper = null;
    _getStyleKeeper(this);
  }
}

export default Enhancer(GridStyleRoot);
