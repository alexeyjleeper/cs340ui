import VendorsRow from './VendorsTableRow.jsx'

function VendorsTable({vendorsArr}){
    return (
        <table border="1" cellpadding="5">
            <thead>
                <tr>
                    <th><button>New</button></th>
                    <th></th>
                    <th>Vendor Id</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {vendorsArr.map((item, i) => <VendorsRow vendorId={item[0]}
                                                       name={item[1]}
                                                       description={item[2]}/>)}
            </tbody>
        </table>
    );
}

export default VendorsTable;