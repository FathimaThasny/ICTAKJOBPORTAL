import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Postajob } from './components/Postajob';
import { Employersignup } from './components/Employersignup';
import { LoginEmployer } from './components/LoginEmployer';
import { Adminhome } from './components/Adminhome';
import { Pendingemploy } from './components/Pendingemploy';
import {AlumniRegister} from './components/AlumniRegister';
import { PendingAlumni } from './components/PendingAlumni';
import { Editprofile } from './components/Editprofile';
import { AlumniLogin } from './components/AlumniLogin';
import { AlumniProfile } from './components/AlumniProfile';
import { ViewAlumnis } from './components/ViewAlumnis';
import { ViewEmployers } from './components/ViewEmployers';



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
        <Route path="/alumnilogin" exact element={<AlumniLogin/>}/>
        <Route path="/alumniprofile" exact element={<AlumniProfile/>}/>
        <Route path="/Editprofile" exact element={<Editprofile/>}/>
        <Route path="/viewalumni" exact element={<ViewAlumnis/>}/>
        <Route path="/viewemployer" exact element={<ViewEmployers/>}/>

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
