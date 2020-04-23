import React from 'react';
import VIE from './VIE';
import ENG from './ENG';

const localeContext = React.createContext({ lang: "ENG", setLang: () => { } });

const getText = (loc, key, lang) => {
  if (lang === "VIE") {
    return VIE[loc][key];
  }
  return ENG[loc][key];
};

const getLongLineText = (lang, loc, key, inner) => {
  if (inner !== null) {
    if (lang === "VIE") {
      return VIE[loc][key][inner];
    }
    return ENG[loc][key][inner];
  } else {
    if (lang === "VIE") {
      return VIE[loc][key];
    }
    return ENG[loc][key];
  }
};

export default localeContext;
export { getText, getLongLineText };