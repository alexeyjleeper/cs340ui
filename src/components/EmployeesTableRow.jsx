function EmployeesRow({employeeId, name, age}) {
    return (
        <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td align="right" >{eventId}</td>
            <td>{employeeId}</td>
            <td>{name}</td>
            <td>{age}</td>
        </tr>
    );
}

export default EmployeesRow;