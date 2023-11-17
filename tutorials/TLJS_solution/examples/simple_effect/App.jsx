import tljs from "../../src/runtime/tljs"

function App() {
  tljs.useEffect(() => {
    setInterval(() => { console.log("Hello Mom")}, 1000);
  })

  tljs.useEffect(() => {
    setInterval(() => { console.log("Hello Dad")}, 2000);
  })
  return <p>Hello World</p>;
}

const rootElement = document.getElementById('root');
rootElement.appendChild(<App />);

export default App;
