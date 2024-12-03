import GolfCartsRow from './GolfCartsTableRow.jsx'

function GolfCartsTable({golfCartsArr}){
    return (
        <table border="1" cellpadding="5">
            <thead>
                <tr>
                    <th><button>New</button></th>
                    <th></th>
                    <th>Golf Cart Id</th>
                    <th>Last Serviced</th>
                    <th>Employee Id</th>
                </tr>
            </thead>
            <tbody>
                {golfCartsArr.map((item, i) => <GolfCartsRow cartId={item[0]}
                                                       lastServiced={item[1]}
                                                       employeeId={item[2]}/>)}
            </tbody>
        </table>
    );
}

export default GolfCartsTable;