import React, { useState } from 'react';

import BtbCard from './components/BtbCard';

function App() {
  const [btns, setBtns] = useState([
    { id: 1, name: 'BTN1', value: 0 },
    { id: 1, name: 'BTN2', value: 0 },
    { id: 1, name: 'BTN3', value: 0 },
  ]);

  const addHandler = (index) => {
    const tempArray = [...btns];
    tempArray[index].value = tempArray[index].value + 1;
    setBtns([...tempArray]);
  };

  return (
    <div className="App">
      {btns.map((bt, i) => (
        <BtbCard bt={bt} addHandler={(e) => addHandler(i)} />
      ))}

      <h2>
        Total:{' '}
        {btns.reduce((acc, b) => {
          return b.value + acc;
        }, 0)}
      </h2>
    </div>
  );
}

export default App;
