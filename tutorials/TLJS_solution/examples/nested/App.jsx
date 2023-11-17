import 'Stylesheet/style.css';

function Wrapper(props) {
  return <div>{props.children}</div>;
}
function HelloWorld() {
  return (
    <div id="main">
      <h1>Hello Friend</h1>
      <h2>Check if also the attribute 'id' is working</h2>
      <p>This is a little bit more complicated</p>
      <p>It has some nested Elements!</p>
      <p> It also bundles the css file!</p>
      <div>
        Event more nested Elements!
        <h2>Does your code still works?</h2>
        <div>
          <p>What about now?</p>
          <p>Recursion can be tricky hehe</p>
        </div>
      </div>
      <Wrapper>
        <div>I am wrappend!</div>
        <div>
          <p>And Nested too!</p>
          <Wrapper>
            <div>WrapCEPTION</div>
          </Wrapper>
        </div>
      </Wrapper>
    </div>
  );
}

function App() {
  return <HelloWorld />;
}

const rootElement = document.getElementById('root');
rootElement.appendChild(<App />);

export default App;
