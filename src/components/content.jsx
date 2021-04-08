import { usePigeonContext } from '../lib/use-context';
function Content() {
  const { state, dispatch } = usePigeonContext();
  return (
    <div>
      <input
        onChange={(event) =>
          dispatch({ type: 'CONTENT', payload: event.target.value })
        }
      />
      <p>Content: {state.content}</p>
    </div>
  );
}

export default Content;
