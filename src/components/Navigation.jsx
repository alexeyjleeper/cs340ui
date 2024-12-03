import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Home</Link>| 
            <Link to="/employees">Employees</Link>|
            <Link to="/golfcarts">Golf Carts</Link>|
            <Link to="/vendors">Vendors</Link>|
            <Link to="/events">Events</Link>|
            <Link to="/roles">Roles</Link>|
            <Link to="/nextshifts">Next Shifts</Link>
        </nav>
    );
}
export default Navigation;