import React from 'react';
import heads from '../assets/heads.jpg';
import tails from '../assets/tails.jpg';

function Coin({ flipping, coin }) {
  if (!flipping) {
    return <img src={coin === 'Heads' ? heads : tails} alt='coin' />;
  }
  return <div>Please click on the button to flip the coin</div>;
}

export default Coin;
