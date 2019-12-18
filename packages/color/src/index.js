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

import brewerBlueScheme from '../schemes/colorbrewer/brewer-blue.csv';
import brewerGreenScheme from '../schemes/colorbrewer/brewer-green.csv';
import brewerPurpleScheme from '../schemes/colorbrewer/brewer-purple.csv';
import brewerRedScheme from '../schemes/colorbrewer/brewer-red.csv';
import brewerWarmRedScheme from '../schemes/colorbrewer/brewer-warm-red.csv';

import gfxBlueScheme from "../schemes/gfx/gfx-blue.csv";
import gfxCyanScheme from "../schemes/gfx/gfx-cyan.csv";
import gfxForestScheme from "../schemes/gfx/gfx-forest.csv";
import gfxGrayScheme from "../schemes/gfx/gfx-gray.csv";
import gfxGreenScheme from "../schemes/gfx/gfx-green.csv";
import gfxLimeScheme from "../schemes/gfx/gfx-lime.csv";
import gfxMagentaScheme from "../schemes/gfx/gfx-magenta.csv";
import gfxNavyScheme from "../schemes/gfx/gfx-navy.csv";
import gfxOliveScheme from "../schemes/gfx/gfx-olive.csv";
import gfxOrangeScheme from "../schemes/gfx/gfx-orange.csv";
import gfxPurpleScheme from "../schemes/gfx/gfx-purple.csv";
import gfxRedScheme from "../schemes/gfx/gfx-red.csv";
import gfxRoseScheme from "../schemes/gfx/gfx-rose.csv";
import gfxTangerineScheme from "../schemes/gfx/gfx-tangerine.csv";
import gfxVioletScheme from "../schemes/gfx/gfx-violet.csv";
import gfxYellowScheme from "../schemes/gfx/gfx-yellow.csv";

export const base = scheme(baseScheme);
export const brand = scheme(brandScheme);
export const blue = scheme(blueScheme);
export const gray = scheme(grayScheme);
export const green = scheme(greenScheme);
export const purple = scheme(purpleScheme);
export const red = scheme(redScheme);
export const brewerPurpleGreen = scheme(purpleGreenScheme);
export const brewerRedBlue = scheme(redBlueScheme);
export const brewerRedYellowGreen = scheme(redYellowGreenScheme);

export const brewerBlue = scheme(brewerBlueScheme);
export const brewerGreen = scheme(brewerGreenScheme);
export const brewerPurple = scheme(brewerPurpleScheme);
export const brewerRed = scheme(brewerRedScheme);
export const brewerWarmRed = scheme(brewerWarmRedScheme);



export const gfxBlue = scheme(gfxBlueScheme);
export const gfxCyan = scheme(gfxCyanScheme);
export const gfxForest = scheme(gfxForestScheme);
export const gfxGray = scheme(gfxGrayScheme);
export const gfxGreen = scheme(gfxGreenScheme);
export const gfxLime = scheme(gfxLimeScheme);
export const gfxMagenta = scheme(gfxMagentaScheme);
export const gfxNavy = scheme(gfxNavyScheme);
export const gfxOlive = scheme(gfxOliveScheme);
export const gfxOrange = scheme(gfxOrangeScheme);
export const gfxPurple = scheme(gfxPurpleScheme);
export const gfxRed = scheme(gfxRedScheme);
export const gfxRose = scheme(gfxRoseScheme);
export const gfxTangerine = scheme(gfxTangerineScheme);
export const gfxViolet = scheme(gfxVioletScheme);
export const gfxYellow = scheme(gfxYellowScheme);


export default {
    // base,
    // brand,
    // blue,
    // gray,
    // green,
    // purple,
    // red,
    brewerPurpleGreen,
    brewerRedBlue,
    brewerRedYellowGreen,
    brewerBlue,
    brewerGreen,
    brewerPurple,
    brewerRed,
    brewerWarmRed,
    gfxYellow,
    gfxTangerine,
    gfxOrange,
    gfxLime,
    gfxOlive,
    gfxGreen,
    gfxForest,
    gfxBlue,
    gfxCyan,
    gfxNavy,
    gfxPurple,
    gfxViolet,
    gfxRose,
    gfxRed,
    gfxMagenta,
    gfxGray
};