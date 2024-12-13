import './App.css';
// import Hello from './Hello'
// import EventDemoComponent from './EventsDemoComponent'
// import StateDemoComponent from './StateDemoComponent';
import Assignment from './Assignment';

function App() {
  const post = "My First Post"
  const comments = [
    "Comment 1",
    "Comment 2",
    "Comment 3",
    "Comment 4",
    "Comment 5"
  ]
  return (
    <div className="App">
      {/* <h2>Hello React</h2>
      <Hello firstName="Kevin" lastName="Mata" />
      <Hello firstName="John" lastName="Doe" />
      <EventDemoComponent />
      <hr />
      <StateDemoComponent />
      <hr />
      <Assignment /> */}
      <Assignment content={post} comment={comments} />
    </div>
  );
}

export default App;
