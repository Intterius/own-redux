import { useDispatch, useSelector } from '../lib/use-context';

function Content() {
  const { content } = useSelector((state) => state.input);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        onChange={(event) =>
          dispatch!({ type: 'CONTENT', payload: event.target.value })
        }
      />
      <p>Content: {content}</p>
    </div>
  );
}

export default Content;
