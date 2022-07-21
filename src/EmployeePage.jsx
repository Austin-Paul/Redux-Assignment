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

          <div className='table'>
            <div className="table-heading">
            
              <div className='column-name' >Employee Name</div>
              <div className='column-id'>Employee ID</div>
              <div className='column-date'>Joining Date</div>
              <div className='column-role'>Role</div>
              <div className='column-status'>Status</div>
              <div className='column-experience'>Experience</div>
              <div className='column-action'>Action</div>
            
            </div>
          {data.map((item) => {
            return (
              <>
              <div className='table-body'> 
                  
              
                    <div className='column-name'>{item.name}</div>
                    <div className='column-id'>{item.id}</div>
                    <div className='column-date'>{item.join_date}</div>
                    <div className='column-role'>{item.role}</div>
                    <div className='column-status'>{item.status}</div>
                    <div className='column-experience'>{item.experience}</div>
                    <div className='column-action'>
                      <button  onClick={()=>{navigate( `/edit/${item.id}`); onClose()}}>Edit</button>
                      <button   onClick={()=>{deleteEmployee(item.id)}}>Delete</button>
                    </div>
                  
              </div> 
              
              </>
            );
          })}
          </div>
         
        </>
      )
      : null
     }

    </div>
)
} 