import { usePigeonContext } from '../lib/use-context';

function Decrement() {
  const { dispatch } = usePigeonContext();
  
  return (
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
  );
}

export default Decrement;
