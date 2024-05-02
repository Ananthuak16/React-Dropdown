import React from 'react';
import Dropdown from './Component/Dropdown';
import './App.css';

function App() {
  const items = ['Yes',
  'No',
  'Probably Not',
  'Probably Yes',
  'Mostly Yes',
  'Mostly No',
  'Definitely',
  'Certainly Not',
  'Likely',
  'Unlikely',
  'Absolutely',
  'Absolutely Not',
  'Certainly',
  'Absolutely Yes',
  'Absolutely No'];

  return (
    <div className="app">
      <h1>Should You Use A Dropdown?</h1>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
