import { ReactElement } from 'react';

export interface IAction {
  type: string;
  payload?: { [key: string]: unknown };
}

export interface IRePigionProviderProps {
  children: ReactElement | ReactElement[];
  reducer: (state: IState, action: IAction) => state;
}

interface IObject {
  [key: string]: unknown;
}

export interface IState {
  [key: string]: IObject;
}

export interface IReducer {
  (state: IObject, action: IAction): IObject;
}

export interface ICombinedReducers {
  [key: string]: (state: IState, action: IAction)=>IState
}
