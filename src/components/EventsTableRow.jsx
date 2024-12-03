function EventsRow({eventId, employeeId, eventName, vendorId, timeStart}) {
    return (
        <tr>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            <td align="right" >{eventId}</td>
            <td>{employeeId}</td>
            <td>{eventName}</td>
            <td>{vendorId}</td>
            <td>{timeStart}</td>
        </tr>
    );
}

export default EventsRow;