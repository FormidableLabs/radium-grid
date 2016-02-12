import StyleKeeper from "radium/lib/style-keeper";
import contains from "lodash.contains";
import sortMediaQueries from "sort-media-queries";

export default class GridStyleKeeper extends StyleKeeper {
  constructor(userAgent: string) {
    super(userAgent);
    this._cascadingCSS = [];
  }

  addCSS(css: string): {remove: () => void} {
    const cascade = css.indexOf("[CASCADE]") !== -1; // eslint-disable-line no-magic-numbers
    if (cascade) {
      const cleanRule = css.replace(/\[CASCADE\]/g, "");
      if (!contains(this._cascadingCSS, cleanRule)) {
        this._cascadingCSS.push(cleanRule);
        this._emitChange();
      }
    } else if (!this._cssSet[css]) {
      this._cssSet[css] = true;
      this._emitChange();
    }

    return {
      // Must be fat arrow to capture `this`
      remove: () => {
        if (cascade) {
          const index = this._cascadingCSS.indexOf(css);
          this._cascadingCSS.splice(index, 1);
        } else {
          delete this._cssSet[css];
        }
        this._emitChange();
      }
    };
  }

  getCSS(): string {
    return Object.keys(this._cssSet)
      .concat(sortMediaQueries(this._cascadingCSS))
      .join("\n");
  }
}
