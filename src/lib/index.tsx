import { createContext, ReactElement, useReducer } from 'react';
import { AppState } from '../App';
import { IAction, IRePigionProviderProps } from './types';
export const repigionContext = createContext<{
  dispatch?: (action: IAction) => void;
  state: AppState;
}>({} as any);
const { Provider } = repigionContext;

const RePigionProvider = ({
  children,
  reducer,
}: IRePigionProviderProps): ReactElement => {
  const value = reducer({}, { type: '' });
  const [state, dispatch]: [state: AppState, dispatch: any] = useReducer(
    reducer,
    value
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default RePigionProvider;
