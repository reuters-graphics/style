import React from 'react';
import blinder from 'color-blind';

const makeRow = (colors, name) => {
  const accessibleColors = colors.map(color => (
    <div
      key={color}
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
      <small>{name}</small>
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
      {makeRow(protanomaly, 'protanomaly')}
      {makeRow(protanopia, 'protanopia')}
      {makeRow(deuteranomaly, 'deuteranomaly')}
      {makeRow(deuteranopia, 'deuteranopia')}
      {makeRow(tritanomaly, 'tritanomaly')}
      {makeRow(tritanopia, 'tritanopia')}
      {makeRow(achromatomaly, 'achromatomaly')}
      {makeRow(achromatopsia, 'achromatopsia')}
    </div>
  );
};

export default Accessibility;
