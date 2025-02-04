import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const idRef = useRef();
  const first_nameref = useRef();
  const last_nameref = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(json => setEmployees(json.data))
  }, []);


  const addEmployee = () => {
    // TODO: Add validations
    if(idRef.current.value === ""){
      setMessage("Missing ID")
      return;
    }
    if(first_nameref.current.value === ""){
      setMessage("Missing name")
      return;
    }
    if(emailRef === ""){
      setMessage("Missing Email");
      return;
    }
    if(avatarRef === "")
      setMessage("Missing Avatar")
    // TODO: Add an employee to the table

    const newEmployee = {
      id: idRef.current.value,
      first_name: first_nameref.current.value,
      last_name: last_nameref.current.value,
      email: emailRef.current.value,
      avatar: avatarRef.current.value,
    }

    employees.push(newEmployee);
    setEmployees(employees.slice());
    // slice teeb array koopia

    idRef.current.value = "";
    first_nameref.current.value = "";
    last_nameref.current.value = "";
    emailRef.current.value = "";
    avatarRef.current.value = "";
    return;
  }

  const deleteEmployee = (index) => {
    employees.splice(index, 1);
    setEmployees(employees.slice());  
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>

        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th>Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>

        <tbody>
        {employees.map((employee, index) =>
        <tr key={employee.id}>
            <td className="firsttd"> {employee.id} </td>
            <td> {employee.first_name + " " +  employee.last_name} </td>
            <td> {employee.email} </td>
            <td> <img src={employee.avatar} alt="" /> </td>
            <td> <button onClick={() => deleteEmployee(index)}> DELETE</button></td>
            </tr>
          )}
         
        <tr className="input-row">
          <td><input  type="text" ref={idRef} placeholder="ID" className="form-control"/></td>
          <td><input  type="text" ref={first_nameref} placeholder="First Name" className="form-control"/>
          <input  type="text" ref={last_nameref} placeholder="Last Name" className="form-control"/></td>
          <td><input  type="text" ref={emailRef} placeholder="Email" className="form-control"/></td>
          <td><input  type="text" ref={avatarRef}  placeholder="Avatar" className="form-control"/></td>
          <td><Button onClick={() => addEmployee()} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
      {message}
    </div>

  </div>)
}

export default Employees;