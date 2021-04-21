import { useDispatch, useSelector } from '../lib/use-context';

function Title() {
  const { title } = useSelector((state) => state.input);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        onChange={(event) =>
          dispatch!({ type: 'TITLE', payload: event.target.value })
        }
      />
      <p>Title: {title}</p>
    </div>
  );
}

export default Title;
