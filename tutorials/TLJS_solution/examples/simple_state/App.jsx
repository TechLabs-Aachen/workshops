import {useEffect, useState} from "../../src/runtime/tljs"

function Counter(props){ 
  return <p>Counter: {props.count}</p>  
}

function App() {

  const [count0, setCount0] = useState(0)
  const [count1, setCount1] = useState(1)

  const click = () => {
    setCount0((c) => c + 1) 
    setCount1((c) => c + 1)
    console.log("click")
  }

  return (
    <div>
      <Counter count={count0()} />
      <Counter count={count1()} />
      <button onclick={click}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
rootElement.appendChild(<App />);

export default App;
