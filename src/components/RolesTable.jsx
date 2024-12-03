import RolesRow from './RolesRow.jsx'

function RolesTable({rolesArr}){
    return (
        <table border="1" cellpadding="5">
            <thead>
                <tr>
                    <th><button>New</button></th>
                    <th></th>
                    <th>vendor_id</th>
                    <th>description</th>
                    <th>employee_id</th>
                </tr>
            </thead>
            <tbody>
                {rolesArr.map((item, i) => <RolesRow roleId={item[0]}
                                                       description={item[1]}
                                                       employeeId={item[2]}/>)}
            </tbody>
        </table>
    );
}

export default RolesTable;