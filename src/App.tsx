import {
  Decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Tech net</h1>
      <div className="flex mt-5 ">
        <button
          type="button"
          className="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
          onClick={() => dispatch(Decrement())}
        >
          Decrement
        </button>
        <div className="px-5">{count}</div>

        <button
          type="button"
          className="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          className="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          odd
        </button>
      </div>
    </div>
  );
}

export default App;
