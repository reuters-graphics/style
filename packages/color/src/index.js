import baseScheme from '../schemes/base.csv';
import blueScheme from '../schemes/blue.csv';
import brandScheme from '../schemes/brand.csv';
import grayScheme from '../schemes/gray.csv';
import greenScheme from '../schemes/green.csv';
import purpleGreenScheme from '../schemes/purpleGreen.csv';
import purpleScheme from '../schemes/purple.csv';
import redBlueScheme from '../schemes/redBlue.csv';
import redScheme from '../schemes/red.csv';
import redYellowGreenScheme from '../schemes/redYellowGreen.csv';
import scheme from './colorScheme';

export const base = scheme(baseScheme);
export const brand = scheme(brandScheme);
export const blue = scheme(blueScheme);
export const gray = scheme(grayScheme);
export const green = scheme(greenScheme);
export const purple = scheme(purpleScheme);
export const red = scheme(redScheme);
export const purpleGreen = scheme(purpleGreenScheme);
export const redBlue = scheme(redBlueScheme);
export const redYellowGreen = scheme(redYellowGreenScheme);

export default {
  base,
  brand,
  blue,
  gray,
  green,
  purple,
  red,
  purpleGreen,
  redBlue,
  redYellowGreen,
};
