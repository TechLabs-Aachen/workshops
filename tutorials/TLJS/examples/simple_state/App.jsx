import 'Stylesheet/style.css';

function App() {
  return <p>Hello World</p>;
}

const rootElement = document.getElementById('root');
rootElement.appendChild(<App />);

export default App;
