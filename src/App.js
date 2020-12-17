import React from 'react';
import Coin from './components/Coin.js';

function App() {
  const [state, setState] = React.useState({
    flipping: false,
    coin: null,
    heads: 0,
    tails: 0,
  });

  const clickHandler = () => {
    fetch('http://flipacoinapi.com/json')
      .then((res) => res.json())
      .then((data) => {
        if (data === 'Heads') {
          setState((oldState) => {
            return {
              ...oldState,
              flipping: true,
              heads: oldState.heads + 1,
            };
          });
        } else {
          setState((oldState) => {
            return {
              ...oldState,
              flipping: true,
              tails: oldState.tails + 1,
            };
          });
        }

        setTimeout(() => {
          setState((oldState) => {
            return {
              ...oldState,
              flipping: false,
              coin: data,
            };
          });
        }, 500);
      });
  };
  return (
    <div className='coin'>
      <Coin flipping={state.flipping} coin={state.coin} />
      <p>
        heads {state.heads} tails {state.tails}
      </p>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
