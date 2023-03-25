import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemSkeleton = () => (
  <ContentLoader
    className="item-block"
    speed={2}
    width={260}
    height={330}
    viewBox="0 0 260 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="448" y="213" rx="0" ry="0" width="206" height="29" />
    <rect x="56" y="30" rx="0" ry="0" width="150" height="150" />
    <rect x="90" y="190" rx="0" ry="0" width="80" height="20" />
    <rect x="40" y="250" rx="0" ry="0" width="180" height="20" />
    <rect x="40" y="219" rx="0" ry="0" width="180" height="20" />
    <rect x="40" y="290" rx="0" ry="0" width="43" height="20" />
    <rect x="121" y="285" rx="19" ry="19" width="110" height="35" />
  </ContentLoader>
);

export default ItemSkeleton;
