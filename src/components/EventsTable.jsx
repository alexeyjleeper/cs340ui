import EventsRow from './EventsTableRow.jsx'

function EventsTable({eventsArr}){
    return (
        <table border="1" cellpadding="5">
            <thead>
                <tr>
                    <th><button>New</button></th>
                    <th></th>
                    <th>event_id</th>
                    <th>employee_id</th>
                    <th>event_name</th>
                    <th>vendor_id</th>
                    <th>time_start</th>
                </tr>
            </thead>
            <tbody>
                {eventsArr.map((item, i) => <EventsRow eventId={item[0]}
                                                       employeeId={item[1]}
                                                       eventName={item[2]}
                                                       vendorId={item[3]}
                                                       timeStart={item[4]}/>)}
            </tbody>
        </table>
    );
}

export default EventsTable;