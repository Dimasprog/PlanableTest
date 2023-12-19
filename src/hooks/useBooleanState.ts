import { useState } from 'react';

const useBooleanState = (defaultState = false) => {
  const [state, setState] = useState(defaultState);

  return {
    state,
    switchState: () => setState(prevState => !prevState),
    setStateTo: (nextState: boolean) => setState(nextState),
    setToTrue: () => setState(true),
    setToFalse: () => setState(false),
  };
};

export default useBooleanState;
