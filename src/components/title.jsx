import { usePigeonContext } from '../lib/use-context';

function Title() {
  const {
    state: {
      input: { title },
    },
    dispatch,
  } = usePigeonContext();

  return (
    <div>
      <input
        onChange={(event) =>
          dispatch({ type: 'TITLE', payload: event.target.value })
        }
      />
      <p>Title: {title}</p>
    </div>
  );
}

export default Title;
