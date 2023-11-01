import {Link,Route,Routes,useNavigate,useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// component to success
export function ProfileSection()
{
    let {emailId}=useParams();
    let [profile,setProfile]=useState({});
    useEffect(()=>{
         let url=`http://localhost:9091/${emailId}`
         axios.get(url)
         .then(res=>setProfile(res.data))
         .catch(err=>console.log(err));
    },[]);

    return(
         <div className='row'>
             <div className='col-4'>
                <img src="data:image/jpeg;base64,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" width='100' height='100'></img>
                <p>Name : {profile.name}</p>
                <p>Dob : {profile.dob}</p>
                <p>Phone : {profile.phone}</p>
             </div>
             <div className='col-6'>
                <Link className='me-2' to='dashboard'>Dashboard</Link>
                <Link className='me-2' to='addContacts'>Add Contact</Link>
                <Link className='me-2' to='viewContacts'>View Contacts</Link>
                <Link className='me-2' to='wallet'>Wallet</Link>
                <div>
                    <Routes>
                        <Route path='' element={<div>Welcome, {emailId}</div>}></Route>
                        <Route path='dashboard'  element={<div>Welcome, {emailId}</div>}> </Route>
                        <Route path='addContacts'  element={<div>Welcome, {emailId} .. you can add contacts</div>}></Route>
                        <Route path='viewContacts'  element={<div>Welcome, {emailId} .. view contacts</div>}></Route>
                        <Route path='wallet'  element={<div>Welcome, {emailId} .. your wallet</div>} ></Route>
                    </Routes>
                </div>
             </div>
         </div>
    );
}

// component to register
export function ProfileRegistration()
{
    // profile need name,emailId, password, phone, dob
    let[emailId,setEmailId]=useState('');
    let[name,setName]=useState('');
    let[password,setPassword]=useState('');
    let[dob,setDob]=useState('');
    let[phone,setPhone]=useState('');

    let navivgate=useNavigate();
    let handleSubmit=(e)=>{
        e.preventDefault();
        // onve the data gos the backend you need to navigate to the login
        let profile={
            "name":name,
            "email_id":emailId,
            "password":password,
            "dob":dob,
            "phone":phone
        };
        let url="http://localhost:9091/new";
        console.log(profile);
        // import the axios library
        axios.post(url,profile)
        .then(res=>navivgate('/login'))
        .catch(err=>console.log(err));
        
    }

    return(
         <div className='container'>
               <h3>Registration Form</h3>
               <form onSubmit={handleSubmit}>
               <div className='w-25'>
                     <label>Enter your Name</label>
                     <input className='form-control mb-2 mt-3' type="text" onChange={(e)=>setName(e.target.value)}></input>
                  </div>
                  <div className='w-25'>
                     <label>Enter Email id</label>
                     <input className='form-control mb-2 mt-3' type="email" onChange={(e)=>setEmailId(e.target.value)}></input>
                  </div>
                  <div className='w-25'>
                     <label>Enter Password</label>
                     <input className='form-control mb-2 mt-3' type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                  </div>
                  <div className='w-25'>
                     <label>Enter Date of birth</label>
                     <input className='form-control mb-2 mt-3' type="date" onChange={(e)=>setDob(e.target.value)}></input>
                  </div>
                  <div className='w-25'>
                     <label>Enter Phone no</label>
                     <input className='form-control mb-2 mt-3' type="number" onChange={(e)=>setPhone(e.target.value)}></input>
                  </div>
                  <div className='w-25'>
                      <input   type='submit' value='Register' className='btn btn-warning mb-2'></input>
                  </div>
               </form>
               <div>
                 <Link to='/login'>Login</Link>
               </div>
         </div>
    );
}

// component to login
export function ProfileLogin(){
       let [emailId,setEmailId]=useState('');
       let [password,setPassword]=useState('');
    //to programmatically navigate
     let navigate =useNavigate();
       // authenticate the emailId and password
       let handleSubmit=(e)=>{
            e.preventDefault();
            let data={"email_id":emailId,"password":password};
            let url="http://localhost:9091/"+emailId+"/"+password;
             axios.post(url,undefined)
             .then(res=>navigate(`/success/${emailId}`))
             .catch(e=>console.log(e));
            // navigate('/success/'+emailId);  // url:- success/:emailId
       };

      return(
         <div className='container'>
               <h3>Login Form</h3> <hr/>
               <form onSubmit={handleSubmit}>
                  <div className='w-25'>
                        <input type='text' placeholder='Enter your email'
                        className='form-control' onChange={e=>setEmailId(e.target.value)} ></input>  
                  </div>
                  <div className='w-25'>
                        <input type='password' placeholder='Enter your password'
                        className='form-control' onChange={e=>setPassword(e.target.value)} ></input>  
                  </div>
                  <div>
                     <input type='submit' className='btn btn-secondary' value="Login"></input>
                  </div>
               </form>
               <div>
                   <Link to="/register">Register</Link>
               </div>
         </div>
      )

}