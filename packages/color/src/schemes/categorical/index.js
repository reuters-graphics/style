import makeColorScheme from './../../makeColorScheme';

import baseLiteScheme from './baseLite';
import baseScheme from './base';
import polsCaScheme from './polsCa';
import polsEsScheme from './polsEs';
import polsUkScheme from './polsUk';

export const baseLite = makeColorScheme(baseLiteScheme);
export const base = makeColorScheme(baseScheme);
export const polsCa = makeColorScheme(polsCaScheme);
export const polsEs = makeColorScheme(polsEsScheme);
export const polsUk = makeColorScheme(polsUkScheme);
