import React from 'react';
import ProductTitleCategory from './ProductTitleCategory';

const Tiles = ({ filteredProducts }) => {
  const renderedCategories = {};

  return (
    <div>
      {Object.values(filteredProducts).map((group, index) => {
        const { category, type, boardWidth } = group;

        // Check if the category and type have already been rendered
        const hasRenderedCategory = !!renderedCategories[category];
        const hasRenderedType = !!(renderedCategories[category] && renderedCategories[category].includes(type));

        // Track the category and type so they aren't rendered again
        if (!renderedCategories[category]) {
          renderedCategories[category] = [];
        }
        if (!renderedCategories[category].includes(type)) {
          renderedCategories[category].push(type);
        }

        return (
          <ProductTitleCategory
            key={index}
            category={category}
            type={type}
            boardWidth={boardWidth}
            products={group.products}
            hasRenderedCategory={hasRenderedCategory}
            hasRenderedType={hasRenderedType}
          />
        );
      })}
    </div>
  );
};

export default Tiles;
