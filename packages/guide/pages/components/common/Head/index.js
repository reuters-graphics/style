import { Helmet } from 'react-helmet';
import React from 'react';
import ShareImg from '../../../statics/images/share.jpg';
import { withRouter } from 'react-router';

const Head = (props) => (
  <Helmet>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
    <title>{props.title}</title>
    <meta name='description' content={props.description} />
    <link rel='canonical' href={`https://reuters-graphics.github.io/style${props.location.pathname}`} />
    <meta name='twitter:card' value='summary' />
    <meta property='og:title' content={props.title} />
    <meta property='og:description' content={props.description} />
    <meta property='og:type' content='article' />
    <meta property='og:url' content={`https://reuters-graphics.github.io/style${props.location.pathname}`} />
    <meta property='og:image' content={`https://reuters-graphics.github.io${ShareImg}`} />
  </Helmet>
);

Head.defaultProps = {
  title: 'style',
  description: 'Reuters Graphics web fashions',
};

const RoutedHead = withRouter(Head);

export default RoutedHead;

export const withHead = (Component, props = Head.defaultProps) => () => (
  <>
    <RoutedHead title={props.title} description={props.description} />
    <Component />
  </>
);
