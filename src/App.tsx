import './App.css';
import RePigionProvider from './lib';
import Increment from './components/increment';
import Decrement from './components/decrement';
import Amount from './components/amount';
import Content from './components/content';
import Title from './components/title';
import { IAction, IState } from './lib/types';

const combineReducers = (reducers:any) => {
  return (state: IState, action: IAction): IState => {
    const newState: IState = {};
    Object.keys(reducers).forEach((reducerKey: string) => {
      const reducerFunction = reducers[reducerKey];
      const reducerState = state[reducerKey];
     console.log(state)
      newState[reducerKey] = reducerFunction(reducerState, action);
    });
  ;
    return newState;
  };
};

const counter = (state = { amount: 0 }, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        amount: state.amount + 1,
      };
    case 'DECREMENT': {
      return {
        ...state,
        amount: state.amount - 1,
      };
    }
    default:
      return state;
  }
};

const input = (state = { title: '', content: '' }, action: IAction) => {
  switch (action.type) {
    case 'TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'CONTENT': {
      return {
        ...state,
        content: action.payload,
      };
    }
    default:
      return state;
  }
};

function App() {
  return (
    <RePigionProvider reducer={combineReducers({ counter, input })}>
      <Increment />
      <Amount />
      <Decrement />
      <Title />
      <Content />
    </RePigionProvider>
  );
}

export default App;
