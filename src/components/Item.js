import React, { Component } from 'react';

const DATA = [
  { id: 1, name: 'Alaska', capital: 'Juneau' },
  { id: 2, name: 'Hawaii', capital: 'Honolulu' },
  { id: 3, name: 'Oregon', capital: 'Salem' }
];

const Item = ({id}) => {
  const selectedItems = DATA.filter(item => id === item.id);
  const selectedItem = selectedItems[0];
  return <span><p>{selectedItem.name} - {selectedItem.capital}</p></span>;
}

export default Item;
