

export function EmployeeItem(props)
{
   let employee=props.employee;


   return (
       <> 
            <td><Picture url={employee.url}></Picture></td>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.salary}</td>
       </>
   );
}

export function EmployeeList(props)
{
    let employees= props.employees;

    return(
        <div>
            <table className="table table-bordered w-50">
                <thead>
                    <tr >
                        <th className="w-50">Image</th>
                        <th className="w-25">Id</th>
                        <th className="w-25">Name</th>
                        <th className="w-25">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((value,index)=> 
                    <tr key={index}>
                        <EmployeeItem employee={value}></EmployeeItem>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

 function Picture(props)
{
    let imageurl=props.url;
     return(
            <div>
                <img className="roundImage" src={imageurl} width="100" height="100"></img>
            </div>
     )
}