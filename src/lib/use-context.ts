import { AppState } from './../App';
import { repigionContext } from './index';
import { useContext, useMemo } from 'react';

export const useDispatch = () => {
  const { dispatch } = useContext(repigionContext);
  return dispatch;
};

export const useSelector = <T>(
  selector: (state: AppState) => T
): ReturnType<typeof selector> => {
  const { state } = useContext(repigionContext);
  const selectedValue = useMemo(() => selector(state), [state, selector]);

  return selectedValue;
};
