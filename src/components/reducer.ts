import { IAction } from '../lib/types';

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        amount: state.amount++,
      };
    case 'DECREMENT':
      return {
        ...state,
        amount: state.amount--,
      };
    case 'TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'CONTENT':
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
