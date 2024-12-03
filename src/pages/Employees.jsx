import {React, useState, useEffect} from 'react';
import axios from 'axios';
import EmployeesTable from '../components/EmployeesTable.jsx';

function Employees() {
    const [employeesArr, setEmpArr] = useState([]);

    function showform(dowhat) {
        /*
        * four DIVS: browse, insert, update, delete
        * this function sets one visible the others not
        */
        if (document.getElementById('browse') && 
            document.getElementById('browse') &&
            document.getElementById('insert') &&
            document.getElementById('update') &&
            document.getElementById('delete')){
            if (dowhat == 'insert'){
                document.getElementById('browse').style.display = 'none';
                document.getElementById('insert').style.display = 'block';
                document.getElementById('update').style.display = 'none';
                document.getElementById('delete').style.display = 'none';
            }
            else if (dowhat == 'update'){
                document.getElementById('browse').style.display = 'none';
                document.getElementById('insert').style.display = 'none';
                document.getElementById('update').style.display = 'block';
                document.getElementById('delete').style.display = 'none';
            }
            else if (dowhat == 'delete'){
                document.getElementById('browse').style.display = 'none';
                document.getElementById('insert').style.display = 'none';
                document.getElementById('update').style.display = 'none';
                document.getElementById('delete').style.display = 'block';
            }
            else if (dowhat == 'all'){
                document.getElementById('browse').style.display = 'block';
                document.getElementById('insert').style.display = 'block';
                document.getElementById('update').style.display = 'block';
                document.getElementById('delete').style.display = 'block';
            }
            else { //by default display browse
                document.getElementById('browse').style.display = 'block';
                document.getElementById('insert').style.display = 'none';
                document.getElementById('update').style.display = 'none';
                document.getElementById('delete').style.display = 'none';
            }
        }
    }
    /* k */ 
    function newEmployee() { showform('insert'); }
    function updateEmployee(employee_id) { showform('update'); }
    function deleteEmployee(employee_id) { showform ('delete'); }
    function browseEmployees() { showform ('browse'); }
    function showAll() { showform ('all'); }

    const fetchEmployeesTable = async () => {
        try {
            // build url for the endpoint
            const URL = import.meta.env.VITE_API_URL + 'getEmployeesTable';
            // use axios to query
            const response = await axios.get(URL);
            console.log(response.data);
        } catch (error) {
            //logging
            console.error('Error fetching employee data:', error);
            alert('Error fetching employee data from the server.');
        }
    }

    useEffect(() => {
        fetchEmployeesTable();
    }, []);

    return (
        <>
            <h1>Employees</h1>
            <div id="browse">
                {<EmployeesTable employeesArr={employeesArr}/>}
            </div>
            <div id="insert">
                <form method="POST" id="addEmployee">
                    <legend><strong>Add Employee</strong></legend>
                    <fieldset class="fields">
                        <label> name </label>
                        <input type="text" name="name"></input>
                        <br/>
                        <label> age </label>
                        <input type="number" name="age"></input>
                    </fieldset>
                    <input class="btn" type="submit" id="addEmployee" value="Add Employee"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browseEmployees()}></input>*/}
                </form>
            </div>
            <p>&nbsp;</p>
            <div id="update">
                <form method="POST" id="UpdateEmployee">
                    <legend><strong>Update Employee</strong></legend>
                    <fieldset class="fields">
                        <input type="hidden" name="employee_id" id="updateemployee_id" value="1"></input>
                        <label> employee_id </label>
                        <input type="number" name="employee_id" value=""></input>
                        <br/>
                        <label> name </label>
                        <input type="text" name="name" value=""></input>
                        <br/>
                        <label> age </label>
                        <input type="number" name="age" value=""></input>
                    </fieldset>
                    <input class="btn" type="submit" id="UpdateSaveEmployee" value="Save Update Employee"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browsePeople()}></input>*/}
                </form> 
            </div>
            <p>&nbsp;</p>
            <div id="delete" style={{display: "block"}}>
                <form method="POST" id="deleteEmployee">
                    <legend><strong>Delete Employee</strong></legend>
                        <fieldset class="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="employee_id" id="deleteemployee_id" value="1"></input>
                            <label><strong>ID:</strong></label> 
                            <label><strong>Name:</strong></label>
                        </fieldset>
                    <input class="btn" type="submit" id="DeleteEmployee" value="Delete Employee"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browsePeople()}></input>*/}
                </form> 
            </div>
        </>
  );
}

export default Employees;