import React from 'react';
import ContentLoader from 'react-content-loader';

const skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="286" rx="16" ry="16" width="280" height="25" />
    <rect x="0" y="322" rx="20" ry="20" width="280" height="90" />
    <rect x="0" y="421" rx="15" ry="15" width="123" height="45" />
    <rect x="157" y="421" rx="15" ry="15" width="123" height="45" />
  </ContentLoader>
);

export default skeleton;
