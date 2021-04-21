import { useSelector } from '../lib/use-context';

function Amount() {
  const amount = useSelector((state) => state.counter.amount);
  return <p>{amount}</p>;
}

export default Amount;

//REAct
