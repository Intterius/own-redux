import './App.css';
import RePigionProvider from './lib';
import Increment from './components/increment';
import Decrement from './components/decrement';
import Amount from './components/amount';
import Content from './components/content';
import Title from './components/title';

const combineReducers = (reducers: any) => {
  return (state: any = {}, action: any) => {
    const newState: any = {};
    Object.keys(reducers).forEach((reducerKey: string) => {
      const reducerFunction = reducers[reducerKey];
      const reducerState = state[reducerKey];
      newState[reducerKey] = reducerFunction(reducerState, action);
    });
    return newState;
  };
};

const counter = (state: any = { amount: 0 }, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state);
      return {
        ...state,
        amount: state.amount + 1,
      };
      case 'DECREMENT': {
      console.log(state);
      return {
        ...state,
        amount: state.amount - 1,
      };
    }
    default:
      return state;
  }
};

const input = (state: any = { title: '', content: '' }, action: any) => {
  switch (action.type) {
    case 'TITLE':
      console.log(state)
      return {
        ...state,
        title: action.payload,
      };
      case 'CONTENT': {
      console.log(state)
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
