import logo from './logo.svg';
import './App.css';
import { EmployeeItem ,EmployeeList} from './components/Employee';

import { UserForm } from './components/Users';

function App() {
  let empoyee1={id:45, name:"Rohit Sharma",salary:500000,url:"https://1.bp.blogspot.com/-jKQKjzKXBFY/XSA2bi8wZaI/AAAAAAAAAyA/yORT6KI0kH024FGMsbeRkMP-2acB1NX7QCLcBGAs/s1600/IMG_20190706_111524.jpg"}
  let empoyee2={id:18, name:"Virat kohli",salary:500000,url:"https://popslider.com/wp-content/uploads/2020/10/untitled-3-1024x768.jpg"}
  let empoyee3={id:3, name:"Suresh Raina",salary:500000,url:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/15/919502-917625-820013-suresh-raina.jpg"}
  let empoyee4={id:7, name:"MSD",salary:500000,url:"https://th.bing.com/th/id/OIP.rZY6LhW9W23y1LOAWsaJLgHaJG?w=136&h=180&c=7&r=0&o=5&pid=1.7"}
  let employees=[empoyee1,empoyee2,empoyee3,empoyee4];
  let employeeMap=employees.map((value,index)=>
    <EmployeeItem key={index} employee={value}>
    </EmployeeItem>
);

  return (
    <>
      <UserForm></UserForm>
        {/* <EmployeeList employees={employees}></EmployeeList> */}

       {/* {employees.map((value,index)=>
    <EmployeeItem key={index} employee={value}>
    </EmployeeItem>
)}   
      <button className='btn btn-outline-success'>HEYY</button>
       */}
    </>
   
  );
}

export default App;
