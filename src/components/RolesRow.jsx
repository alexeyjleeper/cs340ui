function RolesRow({roleId, description, employeeId}) {
    return (
        <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td align="right" >{roleId}</td>
            <td>{description}</td>
            <td>{employeeId}</td>
        </tr>
    );
}

export default RolesRow;