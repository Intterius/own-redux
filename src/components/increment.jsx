import { usePigeonContext } from '../lib/use-context';

function Increment() {
  const { dispatch } = usePigeonContext();
  return (
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
  );
}

export default Increment;
