import { createContext, ReactElement, useContext, useReducer } from 'react';
import { IRePigionProviderProps } from './types';
export const repigionContext = createContext({});
const { Provider } = repigionContext;

const RePigionProvider = ({
  children,
  reducer,
}: IRePigionProviderProps): ReactElement => {
  
  const [state, dispatch] = useReducer(reducer,()=> reducer({}, { type: 'INIT' }));

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default RePigionProvider;


//create use selector
//create useDispatch
//resolve problem with state;
