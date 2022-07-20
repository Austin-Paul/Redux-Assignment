import * as React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDeleteEmployeeMutation, useGetAllEmployeeQuery, useGetEmployeeByIdQuery } from './services/employee_service'

export default function Employee({onClose}) {

const navigate = useNavigate();
const { data, error, isLoading } = useGetAllEmployeeQuery();
const [deleteEmployee,result]=useDeleteEmployeeMutation();

return(
    <div>
      {
      error ? (
        <>Oh no, there was an error</>
      )
      : isLoading ? (
        <>Loading...</>
      ) 
      : data ? (
        <>
          {console.log(data[0])}

          <table>
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Joining Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          {data.map((item) => {
            return (
              <>
                
                  <tr>

                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.join_date}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
                    <td>{item.experience}</td>
                    <td><button onClick={()=>{navigate( `/edit/${item.id}`); onClose()}}>Edit</button></td>
                    <td><button onClick={()=>{deleteEmployee(item.id)}}>Delete</button></td>
                    
                  </tr>
                
              </>
            );
          })}
          </table>
         
        </>
      )
      : null
     }

    </div>
)
} 