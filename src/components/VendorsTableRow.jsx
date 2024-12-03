function VendorsRow({vendorId, name, description}) {
    return (
        <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td align="right" >{vendorId}</td>
            <td>{name}</td>
            <td>{description}</td>
        </tr>
    );
}

export default VendorsRow;