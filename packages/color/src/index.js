import baseScheme from '../schemes/base.csv';
import blueScheme from '../schemes/blue.csv';
import brandScheme from '../schemes/brand.csv';
import brewerBlueScheme from '../schemes/brewer-blue.csv';
import brewerGreenScheme from '../schemes/brewer-green.csv';
import brewerPurpleScheme from '../schemes/brewer-purple.csv';
import brewerRedScheme from '../schemes/brewer-red.csv';
import brewerWarmRedScheme from '../schemes/brewer-warm-red.csv';
import cyanScheme from '../schemes/cyan.csv';
import dawnScheme from '../schemes/dawn.csv';
import grayScheme from '../schemes/gray.csv';
import greenScheme from '../schemes/green.csv';
import khakiScheme from '../schemes/khaki.csv';
import magentaScheme from '../schemes/magenta.csv';
import navyScheme from '../schemes/navy.csv';
import nordScheme from '../schemes/nord.csv';
import orangeScheme from '../schemes/orange.csv';
import polsCaScheme from '../schemes/pols-ca.csv';
import polsEsScheme from '../schemes/pols-es.csv';
import polsUkScheme from '../schemes/pols-uk.csv';
import polsUsPrimaryScheme from '../schemes/pols-us-primary.csv';
import polsUsScheme from '../schemes/pols-us.csv';
import purpleScheme from '../schemes/purple.csv';
import redScheme from '../schemes/red.csv';
import scheme from './colorScheme';
import tangerineScheme from '../schemes/tangerine.csv';
import yellowScheme from '../schemes/yellow.csv';

export const base = scheme(baseScheme);
export const brand = scheme(brandScheme);

export const gray = scheme(grayScheme);
export const navy = scheme(navyScheme);
export const blue = scheme(blueScheme);
export const cyan = scheme(cyanScheme);
export const purple = scheme(purpleScheme);
export const magenta = scheme(magentaScheme);
export const red = scheme(redScheme);
export const green = scheme(greenScheme);
export const yellow = scheme(yellowScheme);
export const tangerine = scheme(tangerineScheme);
export const orange = scheme(orangeScheme);

export const khaki = scheme(khakiScheme);
export const dawn = scheme(dawnScheme);
export const nord = scheme(nordScheme);

export const polsCA = scheme(polsCaScheme);
export const polsES = scheme(polsEsScheme);
export const polsUK = scheme(polsUkScheme);
export const polsUS = scheme(polsUsScheme);
export const polsUSPrimary = scheme(polsUsPrimaryScheme);

export const brewerBlue = scheme(brewerBlueScheme);
export const brewerGreen = scheme(brewerGreenScheme);
export const brewerPurple = scheme(brewerPurpleScheme);
export const brewerRed = scheme(brewerRedScheme);
export const brewerWarmRed = scheme(brewerWarmRedScheme);

export default {
  base,
  brand,
  gray,
  navy,
  blue,
  cyan,
  purple,
  magenta,
  red,
  green,
  yellow,
  tangerine,
  orange,
  khaki,
  dawn,
  nord,
  brewerBlue,
  brewerGreen,
  brewerPurple,
  brewerRed,
  brewerWarmRed,
  polsCA,
  polsES,
  polsUK,
  polsUS,
  polsUSPrimary,
};
