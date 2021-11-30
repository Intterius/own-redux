import { ReactElement } from 'react';

export interface IAction {
  type: string;
  payload?: unknown;
}

export interface IRePigionProviderProps {
  children: ReactElement | ReactElement[];
  reducer: (state: IState, action: IAction) => state;
}

export interface IReducer {
  [key: string]: (state: any, action: IAction) => typeof state;
}
