import './App.css';
import RePigionProvider from './lib';
import Reducer from './components/reducer';
import Increment from './components/increment';
import Decrement from './components/decrement';
import Amount from './components/amount';
import Content from './components/content';
import Title from './components/title';

const combineReducers = (reducers: any) => {
  return (state: any = {}, action: any) => {
    console.log(state);
    const newState: any = {};
    Object.keys(reducers).forEach((reducerKey: string) => {
      const reducerFunction = reducers[reducerKey];
      const reducerState = state[reducerKey];
      newState[reducerKey] = reducerFunction(reducerState, action);
    });
    return newState;
  };
};

const counter = (state: any, action: any) => {
  return state || {};
};

const input = (state: any, action: any) => {
  return state || {};
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
