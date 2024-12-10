import {React, useState, useEffect} from 'react';
import axios from 'axios';
import RolesTable from '../components/RolesTable.jsx';

function Roles() {
    const [rolesArr, setRolesArr] = useState([]);

    const fetchRolesTable = async () => {
        try {
            // build url for the endpoint
            const URL = import.meta.env.VITE_API_URL + 'createRole';
            // use axios to query
            const response = await axios.get(URL);
            setRolesArr(response.data);
        } catch (error) {
            //logging
            console.error('Error fetching roles data:', error);
            alert('Error fetching roles data from the server.');
        }
    }

    const makeRole = async (roleData) => {
        document.getElementById('addRole').addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent form from submitting traditionally
          
        try {
            const URL = import.meta.env.VITE_API_URL + 'createRole';
            const response = axios.post(URL, roleData);
            console.log('Request payload:', response);
            console.log('API URL test:', URL);
            // alert('role added successfully!');
            fetchRolesTable(); // Refresh the table after adding
        } catch (error) {
            console.error('Error adding new role:', error);
            alert('Error adding role to the server.');
        }

        })
    };

    useEffect(() => {
        fetchRolesTable();
        makeRole();
    }, []);

    return (
        <>
            <h1>Roles</h1>
            <div id="browse">
                <RolesTable rolesArr={rolesArr}/>
                <p>&nbsp;</p>
            </div>
            <div id="insert">
                <form method="POST" 
                id="addRole"nSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const employeeData = {
                        description: formData.get('description'),
                        role_id: formData.get('role_id'),
                    };
                    makeEmployee(employeeData);
                }}>
                    <legend><strong>Add Role</strong></legend>
                    <fieldset class="fields">
                        <label> description </label>
                        <input type="text" name="description"></input>
                        <label> employee_id </label>
                        <input type="number" name="employee_id"></input>
                    </fieldset>
                    <input class="btn" type="submit" id="addRolesSubmit"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browseroles()}></input>*/}
                </form>
            </div>
            <p>&nbsp;</p>
            <div id="update">
                <form method="POST" id="UpdateRoles">
                    <legend><strong>Update Roles</strong></legend>
                    <fieldset class="fields">
                        <label> description </label>
                        <input type="text" name="description"></input>
                        <br/>
                        <label> employee_id </label>
                        <input type="text" name="employee_id"></input>
                    </fieldset>
                    <input class="btn" type="submit" id="updateRolesSubmit"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browsePeople()}></input>*/}
                </form> 
            </div>
            <p>&nbsp;</p>
            <div id="delete" style={{display: "block"}}>
                <form method="POST" id="deleteRole">
                    <legend><strong>Delete Role</strong></legend>
                        <fieldset class="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <label><strong>role_id</strong></label>
                        </fieldset>
                    <input class="btn" type="submit" id="DeleteRole"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browsePeople()}></input>*/}
                </form> 
            </div>
        </>
    )
}

export default Roles;