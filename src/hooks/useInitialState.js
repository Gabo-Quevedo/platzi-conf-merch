import { UseState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = UseState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items = items.id !== payload.id)),
    });
  };

  return {
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
