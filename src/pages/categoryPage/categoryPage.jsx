import React, { useEffect, useState } from 'react';
import './categoryPage.css';
import db from '../../firestore.js';
import Search from '../../search/search.jsx';
import ItemsOverview from '../../itemOverview/itemOverview.jsx';
import { Link } from 'react-router-dom';

const MainCategory = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    db.collection('categories')
      .get()
      .then((result) =>
        result.docs.map((e) => {
          const data = e.data();
          return {
            ...data,
            id: e.id,
          };
        }),
      )
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="demandPage">
      <h1>Kategorie</h1>
      <div className="categoryBtns">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="category"
            to={`/kategorie/${category.id}`}
          >
            <button>{category.name}</button>
          </Link>
        ))}
      </div>
      <div className="itemsOverviewElm">
        <ItemsOverview title="V nabídce:" sort="description" />
      </div>
    </div>
  );
};

export default MainCategory;
