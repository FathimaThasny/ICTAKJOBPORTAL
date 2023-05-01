import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Postajob } from './components/Postajob';
import { Employersignup } from './components/Employersignup';
import { LoginEmployer } from './components/LoginEmployer';
import { Adminhome } from './components/Adminhome';
import { Pendingemploy } from './components/Pendingemploy';
import {AlumniRegister} from './components/AlumniRegister';
import { PendingAlumni } from './components/PendingAlumni';
import { Editprofile } from './components/Editprofile';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Routes>
        <Route path="/home" exact element={ <Home/> } />
        <Route path="/postnewjob" exact element={ <Postajob/> } />
        <Route path="/employsignup" exact element={ <Employersignup/> } />
        <Route path="/employlogin" exact element={ <LoginEmployer/> } />
        <Route path='/adminhome' exact element={ <Adminhome/> } />
        <Route path='/pendingemployer' exact element={ <Pendingemploy/> } />
        <Route path='/alumni' exact element={ <AlumniRegister/> } />
        <Route path='/pendingalumni' exact element={ <PendingAlumni/> } />
        <Route path="/Editprofile" exact element={<Editprofile/>}/>
      
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;