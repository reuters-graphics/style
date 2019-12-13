import React from 'react';

const ParagraphRenderer = ({ children }) => {
  const hasImage = !!children.find(
    (child) => typeof child === 'object' && child.key && !!child.key.match(/image/g)
  );
  return hasImage ? children : <p>{children}</p>;
};

export default ParagraphRenderer;
