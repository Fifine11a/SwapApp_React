import React, { useEffect, useState } from 'react';
import '../pages/categoryPage/categoryPage.css';
// import Button from '../../button/button';
import db from '../firestore.js';
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; */
import ItemPreview from '../itemPreview/itemPreview.jsx';
import { Link } from 'react-router-dom';

const ItemOverview = (props) => {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    db.collection('items')
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
      .then((data) => setOverview(data));
  }, []);

  return (
    <>
      {overview.map((products) => (
        <div className="itemOverviewElm">
          {(products ?? []).map((item) => (
            <ItemPreview key={item.id} id={item.id} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ItemOverview;