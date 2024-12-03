import { resolvePath } from 'react-router-dom';
import RolesTable from '../components/RolesTable.jsx';

function Roles() {
    const rolesArr = [[1, "Ranger", 1],
                      [2, "Manager", 4],
                      [3, "Director", 2],
                      [4, "Groundskeeper", 3],
                      [5, "Scout", 1]];
    return (
        <>
            <div id="browse">
                <RolesTable rolesArr={rolesArr}/>
                <p>&nbsp;</p>
            </div>
            <div id="insert">
                <form method="POST" id="addRoles">
                    <legend><strong>Add Role</strong></legend>
                    <fieldset class="fields">
                        <label> description </label>
                        <input type="text" name="description"></input>
                        <label> employee_id </label>
                        <input type="number" name="employee_id"></input>
                    </fieldset>
                    <input class="btn" type="submit" id="addRolesSubmit"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browseEmployees()}></input>*/}
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