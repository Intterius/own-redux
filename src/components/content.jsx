import { usePigeonContext } from '../lib/use-context';
function Content() {
  const { state:{input:{content}}, dispatch } = usePigeonContext();
  return (
    <div>
      <input
        onChange={(event) =>
          dispatch({ type: 'CONTENT', payload: event.target.value })
        }
      />
      <p>Content: {content}</p>
    </div>
  );
}

export default Content;
