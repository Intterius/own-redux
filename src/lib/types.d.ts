import { ReactElement } from 'react';

export interface IAction {
  type: string;
  payload?: { [key: string]: unknown };
}

export interface IRePigionProviderProps {
  children: ReactElement | ReactElement[];
  reducer: (state: unknown, action: IAction) => state;
}
