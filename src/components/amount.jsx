import { usePigeonContext } from '../lib/use-context';

function Amount() {
  const { state } = usePigeonContext();
  return <p>{state.amount}</p>;
}

export default Amount;
