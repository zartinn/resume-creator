// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Canvas from './canvas/canvas';
import Shell from './shell/shell';


export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Shell/>}/>
          {/* <Route path="/canvas" element={<Canvas/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
