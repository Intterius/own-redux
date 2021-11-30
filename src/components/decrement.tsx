import { useDispatch } from '../lib/use-context';

function Decrement() {
 const dispatch = useDispatch()
  
  return (
    <button onClick={() => dispatch!({ type: 'DECREMENT' })}>DECREMENT</button>
  );
}

export default Decrement;
