import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Postajob } from './components/Postajob';
import { Employersignup } from './components/Employersignup';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Routes>
        <Route path="/home" exact element={ <Home/> } />
        <Route path="/postnewjob" exact element={ <Postajob/> } />
        <Route path="/employsignup" exact element={ <Employersignup/> } />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
