import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './component/Navi';
import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import Mainconponent from './component/Mainconponent';


function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Routes>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/' element={<Mainconponent></Mainconponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
