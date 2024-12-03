import EmployeesRow from './EmployeesTableRow.jsx'

function EmployeesTable({employeesArr}){
    return (
        <table border="1" cellpadding="5">
            <thead>
                <tr>
                    <th><button>New</button></th>
                    <th></th>
                    <th>employee_id</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {employeesArr.map((item, i) => <EmployeesRow employeeId={item[0]}
                                                       name={item[1]}
                                                       age={item[2]}/>)}
            </tbody>
        </table>
    );
}

export default EmployeesTable;