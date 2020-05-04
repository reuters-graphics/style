import React from 'react';
import blinder from 'color-blind';

const makeRow = (colors, name, prevalence = null) => {
  const accessibleColors = colors.map((color, i) => (
    <div
      key={name + color + i}
      className='accessible-block'
      style={{ background: color }}
    />
  ));
  return (
    <div className='accessible-row'>
      <div
        className='accessible-block-container'
      >{accessibleColors}
      </div>
      <small>{name} <br /> <span>{prevalence}</span></small>
    </div>
  );
};

const Accessibility = (props) => {
  const { colors } = props;
  const protanomaly = colors.map(c => blinder.protanomaly(c.hex));
  const protanopia = colors.map(c => blinder.protanopia(c.hex));
  const deuteranomaly = colors.map(c => blinder.deuteranomaly(c.hex));
  const deuteranopia = colors.map(c => blinder.deuteranopia(c.hex));
  const tritanomaly = colors.map(c => blinder.tritanomaly(c.hex));
  const tritanopia = colors.map(c => blinder.tritanopia(c.hex));
  const achromatomaly = colors.map(c => blinder.achromatomaly(c.hex));
  const achromatopsia = colors.map(c => blinder.achromatopsia(c.hex));
  return (
    <div className='accessibility'>
      {makeRow(colors.map(c => c.hex), '')}
      {makeRow(deuteranomaly, 'deuteranomaly', '5% of men / <1% of women')}
      {makeRow(deuteranopia, 'deuteranopia', '1% of men / <0.1% of women')}
      {makeRow(protanomaly, 'protanomaly', '1% of men / <0.1% of women')}
      {makeRow(protanopia, 'protanopia', '1% of men / <1% of women')}
      {makeRow(tritanomaly, 'tritanomaly', '<0.1% of men & women')}
      {makeRow(tritanopia, 'tritanopia', '<0.1% of men & women')}
      {makeRow(achromatomaly, 'achromatomaly', 'rare')}
      {makeRow(achromatopsia, 'achromatopsia', 'rare')}
    </div>
  );
};

export default Accessibility;
