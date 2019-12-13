import React from 'react';
import xtend from 'xtend';

const getCoreProps = (props) => props['data-sourcepos'] ?
  { 'data-sourcepos': props['data-sourcepos'] } : {};

const TableCell = (props) => {
  const style = props.align ? { textAlign: props.align } : undefined;
  const coreProps = getCoreProps(props);
  const createProps = style ? xtend({ style }, coreProps) : coreProps;
  return props.isHeader ? (
    <th
      {...createProps}
    >
      {props.children}
    </th>
  ) : (
    <td
      {...createProps}
    >
      {props.children}
    </td>
  );
};

export default TableCell;
