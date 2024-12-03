function GolfCartsRow({cartId, lastServiced, employeeId}) {
    return (
        <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td align="right" >{cartId}</td>
            <td>{lastServiced}</td>
            <td>{employeeId}</td>
        </tr>
    );
}

export default GolfCartsRow;