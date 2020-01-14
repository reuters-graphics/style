import React from 'react';
import { onlyText } from 'react-children-utilities';
import slugify from 'slugify';

const HeadingRenderer = ({ level, children }) => {
  const text = onlyText(children);
  const slug = slugify(text, { remove: /[/*+~.()'"!:@]/g });

  switch (level) {
    case 1:
      return <h1 id={slug}>{children}</h1>;
    case 2:
      return <h2 id={slug}>{children}</h2>;
    case 3:
      return <h3 id={slug}>{children}</h3>;
    case 4:
      return <h4 id={slug}>{children}</h4>;
    case 5:
      return <h5 id={slug}>{children}</h5>;
    case 6:
      return <h6 id={slug}>{children}</h6>;
    default:
      return children;
  }
};

export default HeadingRenderer;
