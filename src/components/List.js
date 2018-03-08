import React, { Component } from 'react';

const DATA = [
  { id: 1, name: 'Alaska', capital: 'Juneau' },
  { id: 2, name: 'Hawaii', capital: 'Honolulu' },
  { id: 3, name: 'Oregon', capital: 'Salem' }
];

const List = ({handleClick}) => {
  return (
    <ul>
      {DATA.map( item =>
        <li key={item.id} onClick={() => handleClick(item.id)}>
          <p>{item.name}</p>
        </li>
      )}
    </ul>
  );
}

export default List;
