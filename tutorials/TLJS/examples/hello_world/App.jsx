function HelloWorld() {
  return <div>Hello World!</div>;
}

function App() {
  return <HelloWorld />;
}

const rootElement = document.getElementById('root');
rootElement.appendChild(<App />);

export default App;
