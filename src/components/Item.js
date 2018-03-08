import React, { Component } from 'react';

const DATA = [
  { id: 1, name: 'Alaska', capital: 'Juneau' },
  { id: 2, name: 'Hawaii', capital: 'Honolulu' },
  { id: 3, name: 'Oregon', capital: 'Salem' }
];

const Item = ({id}) => {
  const selectedItems = DATA.filter(item => id === item.id);
  // console.log(selectedItems);
  const selectedItem = selectedItems[0];
  // console.log(selectedItem);
  return <p>{selectedItem.name} - {selectedItem.capital}</p>;
}

export default Item;
