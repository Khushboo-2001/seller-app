// PropertyPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './Slidebar/sidedata';
import { list } from './Slidebar/data';


const PropertyPage = () => {
  const { id } = useParams();
  const property = list[id];

  return (
    <div>
      <h1>Property Page</h1>
      <SideBar property={property} />
    </div>
  );
};

export default PropertyPage;
