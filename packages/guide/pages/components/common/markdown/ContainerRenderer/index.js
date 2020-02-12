import React from 'react';

const ContainerRenderer = ({ data, children }) => {
  const { hName: type, hProperties: properties } = data;
  const { className } = properties;
  switch (type) {
    case 'aside':
      return <aside className={className}>{children}</aside>;
    case 'article':
      return <article className={className}>{children}</article>;
    case 'section':
      return <section className={className}>{children}</section>;
    default:
      return <div className={className}>{children}</div>;
  }
};

export default ContainerRenderer;
