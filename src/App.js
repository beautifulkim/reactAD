import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './component/Navi';
import Banner from './component/Banner';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Banner></Banner>
      <div>
        <div style={{height: '100vh'}} id='procss' className='border-top'></div>
        <div style={{height: '100vh'}} id='review' className='border-top bg-dark'></div>
        <div style={{height: '100vh'}} id='qna' className='border-top'></div>
      </div>
    </div>
  );
}

export default App;
