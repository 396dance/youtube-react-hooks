import {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react";
import "./App.css";
import MiiContext from "./main";
import SomeChild from "./SomeChild";

const reducer = (state, action) => {
  // actionのtypeが"increment"だったら＋1、"decrement"だったら-1、どちらでもなければそのまま返す
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const miiInfo = useContext(MiiContext);
  const ref = useRef();

  // useReducer
  // const [管理したい値, dispatch通知を出すための関数] = useReducer(裏側の仕組みを書いた変数, 初期値)
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleRef = () => {
    console.log(ref.current.value);
  };

  // useEffect
  useEffect(() => {
    console.log("useEffect実行");
  }),
    [];

  // useMemo 値のメモ化
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    console.log("クリックされました");
    return count02 * count02;
  }, [count02]);

  // useCallback　関数のメモ化
  const [counter, setCounter] = useState(0);
  // const showCount = () => {
  //   alert("これは重い処理です");
  // };

  const showCount = useCallback(() => {
    alert("これは重い処理です");
  }, [counter]);

  return (
    <>
      <div className="App">
        <h1>useState,useEffect</h1>
        <div>{count}</div>
        <button onClick={handleClick}>カウントアップ</button>
        <hr />
        <h1>useContext</h1>
        <p>名前：{miiInfo.name}</p>
        <p>年齢：{miiInfo.age}</p>
        <hr />
        <h1>useRef</h1>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>UseRef</button>
        <hr />
        <h1>useReducer</h1>
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "increment" })}>＋</button>
        <button onClick={() => dispatch({ type: "decrement" })}>ー</button>
        <hr />
        <h1>useMemo</h1>
        <p>カウント01：{count01}</p>
        <p>カウント02：{count02}</p>
        <p>カウント02を二乗した値：{square}</p>
        <button onClick={() => setCount01(count01 + 1)}>＋</button>
        <button onClick={() => setCount02(count02 + 1)}>＋</button>
        <hr />
        {/* <h1>useCallback</h1>
        <p>カウンター：{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>＋</button>
        <SomeChild showCount={showCount} /> */}
      </div>
    </>
  );
}

export default App;
