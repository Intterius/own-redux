import { useDispatch } from '../lib/use-context';

function Increment() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch!({ type: 'INCREMENT' })}>INCREMENT</button>
  );
}

export default Increment;
