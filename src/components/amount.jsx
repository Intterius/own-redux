import { usePigeonContext } from '../lib/use-context';

function Amount() {
  const {
    state: { counter:{amount} },
  } = usePigeonContext();
  return <p>{amount}</p>;
}

export default Amount;
