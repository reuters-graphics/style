import baseScheme from '../schemes/base.csv';
import brandScheme from '../schemes/brand.csv';
import grayScheme from '../schemes/gray.csv';
import scheme from './colorScheme';

export const base = scheme(baseScheme);
export const gray = scheme(grayScheme);
export const brand = scheme(brandScheme);

export default {
  base,
  gray,
  brand,
};
