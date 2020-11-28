import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPreview from '../../itemPreview/itemPreview';
import categories from '../../data/category.json';
import './styles.css';

/* const category1 = {
  title: 'Detail kategorie',
  itemIds: [1, 2, 3, 4, 5, 6, 7, 8],
};

const category2 = {
  title: 'Detail kategorie2',
  itemIds: [1, 2, 3],
}; */

const CategoryDetail = (props) => {
  let { id } = useParams();
  const categoryId = parseInt(id);
  const category = categories.find((item) => item.id === categoryId);

  return (
    <div className="CategoryDetail mediaQueries">
      <div className="header">
        <h1>{category.name}</h1>
      </div>
      <div className="breadcrumbsBtn">
        <button>Drobek</button>
        <button>Drobek</button>
        <button>Drobek</button>
      </div>
      <div className="categoryDetailElm">
        {category.itemIds.map((id) => (
          <ItemPreview key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
