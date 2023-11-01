import {useState} from 'react'

export function UserForm(){
       let [name,setName]=useState();
       let [phone,setPhone]=useState();

    //    function nameChange(){
    //           setName("Viren")
    //    }
    //    function prevChange(){
    //     setName("Sarthak")
    //   }

    //   let prevChange =(e)=>{
    //     setName("Sarthak")
    //   }
     function handleClick(e){
           e.preventDefault();
           setName('');
           setPhone('');

     }

       return(
          <div className='w-25 mt-4 ms-4'>
              <h3>Hello {name} {phone}</h3>
              <form onSubmit={handleClick}>
                  <input onChange={(e)=>setName(e.target.value)} type='text' value={name}  className='form-control' placeholder='Enter name'></input>
                  <input onChange={(e)=>setPhone(e.target.value)} value={phone} type='number'  className='form-control' placeholder='Enter phone no'></input>
                  <button  className='btn btn-success' type='submit'>Register</button>
              </form>
             
          </div>
       )

}