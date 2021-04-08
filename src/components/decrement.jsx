import { useContext } from 'react';
import { repigionContext } from '../lib';
import { usePigeonContext } from '../lib/use-context';

function Decrement() {
  // const { dispatch } = usePigeonContext();
  const { dispatch } = useContext(repigionContext);
  
  return (
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
  );
}

export default Decrement;
