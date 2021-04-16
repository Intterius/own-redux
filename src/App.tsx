import './App.css';
import RePigionProvider from './lib';
import Increment from './components/increment';
import Decrement from './components/decrement';
import Amount from './components/amount';
import Content from './components/content';
import Title from './components/title';
import { IAction } from './lib/types';

const combineReducers = <
  T extends {
    [key: string]: (state: any, action: IAction) => typeof state;
  }
>(
  reducers: T
) => (state: T, action: IAction) => {
  const result: { [K in keyof T]: ReturnType<T[K]> } = {} as any;

  for (let key in reducers) {
    result[key] = reducers[key]?.(state[key], action);
  }
  return result;
};

const counter = (
  state: { amount: number } = { amount: 0 },
  action: IAction
): { amount: number } => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        amount: state.amount + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        amount: state.amount - 1,
      };
    default:
      return state;
  }
};

const input = (
  state = { title: '', content: '' },
  action: any
): { title: string; content: string } => {
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

const reducers = { counter, input };
const rootReducers = combineReducers<typeof reducers>(reducers);
export type AppState = ReturnType<typeof rootReducers>;

function App() {
  return (
    <RePigionProvider reducer={rootReducers}>
      <Increment />
      <Amount />
      <Decrement />
      <Title />
      <Content />
    </RePigionProvider>
  );
}

export default App;

//uSE sEELECTOR
