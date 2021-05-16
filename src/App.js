import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import Item from './item';
import './App.scss';

function App() {
  const mainData = [
    {
      type: '1',
      data: [
        {
          id: 1,
          name: 'name 1',
        },
        {
          id: 2,
          name: 'name 1',
        },
      ],
    },
    {
      type: '2',
      data: [
        {
          id: 1,
          name: 'name 2',
        },
        {
          id: 2,
          name: 'name 2',
        },
      ],
    },
    {
      type: '3',
      data: [
        {
          id: 1,
          name: 'name 3',
        },
        {
          id: 2,
          name: 'name 3',
        },
      ],
    },
    {
      type: '4',
      data: [
        {
          id: 1,
          name: 'name 4',
        },
        {
          id: 2,
          name: 'name 4',
        },
      ],
    },
    {
      type: '5',
      data: [
        {
          id: 1,
          name: 'name 5',
        },
        {
          id: 2,
          name: 'name 6',
        },
      ],
    },
    {
      type: '6',
      data: [
        {
          id: 1,
          name: 'name 6',
        },
        {
          id: 2,
          name: 'name 6',
        },
      ],
    },
    {
      type: '7',
      data: [
        {
          id: 1,
          name: 'name 7',
        },
        {
          id: 2,
          name: 'name 7',
        },
      ],
    },
    {
      type: '8',
      data: [
        {
          id: 1,
          name: 'name 8',
        },
        {
          id: 2,
          name: 'name 8',
        },
      ],
    },
    {
      type: '9',
      data: [
        {
          id: 1,
          name: 'name 9',
        },
        {
          id: 2,
          name: 'name 9',
        },
      ],
    },
  ];

  const [type1, setType1] = useState('1');
  const [type2, setType2] = useState('4');
  const [type3, setType3] = useState('7');

  const arr = [
    {
      type: 'streamerEarn',
      background: 'red',
    },
    {
      type: 'user',
      background: 'blue',
    },
    {
      type: 'userEarn',
      background: 'green',
    },
  ];

  return (
    <div className="app">
      <Item
        property={arr[0]}
        data={mainData}
        type={type1}
        setType1={setType1}
        change={1}
      />
      <Item
        property={arr[1]}
        data={mainData}
        type={type2}
        setType2={setType2}
        change={2}
      />
      <Item
        property={arr[2]}
        data={mainData}
        type={type3}
        setType3={setType3}
        change={3}
      />
    </div>
  );
}

export default App;
