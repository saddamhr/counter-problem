import React from 'react';

const BtbCard = ({ bt, addHandler }) => {
  return (
    <div>
      <button onClick={addHandler}>{bt.name} <span>countValue:{bt.value} </span></button>
    </div>
  );
};

export default BtbCard;
