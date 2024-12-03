function NextShifts() {
    return (
        <div>
            <form method="POST" id="addRoles">
                <legend><strong>View Upcoming Shifts</strong></legend>
                <fieldset class="fields">
                    <label> employee_id </label>
                    <input type="text"></input>
                </fieldset>
                <input class="btn" type="submit"></input>
            </form>
        </div>
    );
}

export default NextShifts;