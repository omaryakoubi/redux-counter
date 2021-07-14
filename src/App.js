import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);

  return (
    <div style={{ textAlign: "center", marginTop: "1%" }}>
      <h1>Redux Counter</h1>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button color="primary" onClick={() => dispatch(decrementCount())}>
          -
        </Button>
        <h1>{count}</h1>
        <Button color="primary" onClick={() => dispatch(incrementCount())}>
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
