import logo from './logo.svg';
import './App.css';
import {Link,Route,Routes} from 'react-router-dom';
import { ProfileLogin, ProfileRegistration,ProfileSection } from './components/Profile';

function App() {
  return (
      <>
         <div className="container-fluid">
          <div  className="alert alert-secondary">
           <h2 className="text-center">Wallet Application</h2> 
           </div> 
           <div>
               <Routes>
                  <Route path='/' Component={ProfileLogin}></Route>
                  <Route path='/login' Component={ProfileLogin}></Route>
                  <Route path='/register' Component={ProfileRegistration}></Route>
                  <Route path='/success/:emailId/*' Component={ProfileSection}></Route>
               </Routes>
           </div>
          
         </div>
      </>
  );
}

export default App;
