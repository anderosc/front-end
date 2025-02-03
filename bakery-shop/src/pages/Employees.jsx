import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [newEmployees, setNewEmployees] = useState(employees);
  const [message, setMessage] = useState("");
  const idRef = useRef();
  const nameRef = useRef();
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
    if(nameRef.current.value === ""){
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
      first_name: nameRef.current.value.split(" ")[0],
      last_name: nameRef.current.value.split(" ")[1] || "",
      email: emailRef.current.value,
      avatar: avatarRef.current.value,
    }

    employees.push(newEmployee);
    console.log(employees)
    idRef.current.value = "";
    nameRef.current.value = "";
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
            <td> <button onClick={deleteEmployee}> DELETE</button></td>
            </tr>
          )}
         

        <tr className="input-row">
          <td><input ref={idRef} type="text" placeholder="ID" className="form-control"/></td>
          <td><input ref={nameRef} type="text" placeholder="Name" className="form-control"/></td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="text" placeholder="Avatar" className="form-control"/></td>
          <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
      {message}
    </div>

  </div>)
}

export default Employees;