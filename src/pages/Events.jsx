import {React, useState, useEffect} from 'react';
import axios from 'axios';
import EventsTable from '../components/EventsTable.jsx';

function Events() {
    const [eventsArr, setEventsArr] = useState([]);

    const fetchEventsTable = async () => {
        try {
            // build url for the endpoint
            const URL = import.meta.env.VITE_API_URL + 'getEventsTable';
            // use axios to query
            const response = await axios.get(URL);
            setEventsArr(response.data);
        } catch (error) {
            //logging
            console.error('Error fetching golf cart data:', error);
            alert('Error fetching golf cart data from the server.');
        }
    }

    useEffect(() => {
        fetchEventsTable();
    }, []);
    return (
        <>
            <h1>Events</h1>
            <div id="browse">
                <EventsTable eventsArr={eventsArr}/>
                <p>&nbsp;</p>
            </div>
            <div id="insert">
                <form method="POST" id="addEvent">
                    <legend><strong>Add Event</strong></legend>
                    <fieldset class="fields">
                        <label> employee_id </label>
                        <input type="number" name="employee_id"></input>
                        <br/>
                        <label> event_name </label>
                        <input type="text" name="event_name"></input>
                        <label> vendor_id </label>
                        <input type="number" name="vendor_id"></input>
                        <label> time_start </label>
                        <input type="text" name="time_start"></input>
                    </fieldset>
                    <input class="btn" type="submit" id="addEvent" value="AddEvent"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browseEmployees()}></input>*/}
                </form>
            </div>
            <p>&nbsp;</p>
            <div id="update">
                <form method="POST" id="UpdateEvents">
                    <legend><strong>Update Events</strong></legend>
                    <fieldset class="fields">
                        <label> employee_id </label>
                        <input type="number" name="employee_id"></input>
                        <br/>
                        <label> event_name </label>
                        <input type="text" name="event_name"></input>
                        <br/>
                        <label> vendor_id </label>
                        <input type="number" name="vendor_id"></input>
                        <label> start_tame </label>
                        <input type="text" name="start_time"></input>
                    </fieldset>
                    <input class="btn" type="submit" id="updateEventsSubmit"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browsePeople()}></input>*/}
                </form> 
            </div>
            <p>&nbsp;</p>
            <div id="delete" style={{display: "block"}}>
                <form method="POST" id="deleteEvent">
                    <legend><strong>Delete Event</strong></legend>
                        <fieldset class="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <label><strong>event_id</strong></label>
                        </fieldset>
                    <input class="btn" type="submit" id="DeleteEvent"></input>
                    {/*<input class="btn" type="button" value="cancel" onClick={browsePeople()}></input>*/}
                </form> 
            </div>
        </>
    );
}

export default Events;