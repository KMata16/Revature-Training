import './App.css';
import Hello from './Hello'
// import EventDemoComponent from './EventsDemoComponent';
import StateDemoComponent from './StateDemoComponent';
// import Assignment from './Assignment';
// import ListandKeysComponent from './ListandKeysComponent';
import AxiosGetDemo from './axiosdemo/AxiosGetDemo';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ToDoList from './todolist/ToDoList';
import AxiosPostDemo from './axiosdemo/AxiosPostDemo';
import AxiosDeleteDemo from './axiosdemo/AxiosDeleteDemo';
import AxiosPutDemo from './axiosdemo/AxiosPutDemo';

function App() {
  // const post = "My First Post"
  // const comments = [
  //   "Comment 1",
  //   "Comment 2",
  //   "Comment 3",
  //   "Comment 4",
  //   "Comment 5"
  // ]
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path='/hello' element={<Hello />} />
        <Route path="/sdc" element={<StateDemoComponent />} />
        <Route path="/getposts" element={<AxiosGetDemo />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/post" element={<AxiosPostDemo />} />
        <Route path="/delete" element={<AxiosDeleteDemo />} />
        <Route path="/put" element={<AxiosPutDemo />} />
      </Routes>
    </Router>

  );
}

export default App;
