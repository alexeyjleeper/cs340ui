import {React, useState, useEffect} from 'react';
import VendorsTable from '../components/VendorsTable.jsx';
import axios from 'axios';

function Vendors() {
    const [vendorsArr, setVendorsArr] = useState([]);

    function showform(dowhat) {

            /*
            * four DIVS: browse, insert, update, delete
            * this function sets one visible the others not
            */
        if (document.getElementById('browse') && 
        document.getElementById('browse') &&
        document.getElementById('insert') &&
        document.getElementById('update') &&
        document.getElementById('delete')){
            if (dowhat == 'insert'){
                document.getElementById('browse').style.display = 'none';
                document.getElementById('insert').style.display = 'block';
                document.getElementById('update').style.display = 'none';
                document.getElementById('delete').style.display = 'none';
            }
            else if (dowhat == 'update'){
                document.getElementById('browse').style.display = 'none';
                document.getElementById('insert').style.display = 'none';
                document.getElementById('update').style.display = 'block';
                document.getElementById('delete').style.display = 'none';
            }
            else if (dowhat == 'delete'){
                document.getElementById('browse').style.display = 'none';
                document.getElementById('insert').style.display = 'none';
                document.getElementById('update').style.display = 'none';
                document.getElementById('delete').style.display = 'block';
            }
            else if (dowhat == 'all'){
                document.getElementById('browse').style.display = 'block';
                document.getElementById('insert').style.display = 'block';
                document.getElementById('update').style.display = 'block';
                document.getElementById('delete').style.display = 'block';
            }
            else { //by default display browse
                document.getElementById('browse').style.display = 'block';
                document.getElementById('insert').style.display = 'none';
                document.getElementById('update').style.display = 'none';
                document.getElementById('delete').style.display = 'none';
            }
        }
    }
    function newVendor() { showform('insert'); }
    function updateVendor(vendor_id) { showform('update'); }
    function deleteVendor(vendor_id) { showform ('delete'); }
    function browseVendors() { showform ('browse'); }
    function showAll() { showform ('all'); }

    const fetchVendorsTable = async () => {
        try {
            // build url for the endpoint
            const URL = import.meta.env.VITE_API_URL + 'getVendorsTable';
            // use axios to query
            const response = await axios.get(URL);
            setVendorsArr(response.data);
        } catch (error) {
            //logging
            console.error('Error fetching vendor data:', error);
            alert('Error fetching vendor data from the server.');
        }
    }

    const makeVendor = async (VendorData) => {
        document.getElementById('addVendor').addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent form from submitting traditionally
          
        try {
            const URL = import.meta.env.VITE_API_URL + 'createVendor';
            const response = axios.post(URL, VendorData);
            console.log('Request payload:', response);
            console.log('API URL test:', URL);
            // alert('Vendor added successfully!');
            fetchVendorsTable(); // Refresh the table after adding
        } catch (error) {
            console.error('Error adding new Vendor:', error);
            alert('Error adding Vendor to the server.');
        }

        })
    };

    useEffect(() => {
        fetchVendorsTable();
        makeVendor();
    }, []);

    return (
        <>
            <h1>Vendors</h1>
            <div id="browse">
                {<VendorsTable vendorsArr={vendorsArr}/>}
            </div>
            <p>&nbsp;</p>

            <div id="insert">
                <form method="POST" 
                    id="addVendor"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const VendorData = {
                            name: formData.get('name'),
                            description: formData.get('description'),
                            // description: formData.get('event_id'),
                        };
                        makeVendor(VendorData);
                    }}>
                    <legend><strong>Add Vendor</strong></legend>
                    <fieldset class="fields">
                        <label> name </label> <input type="text" name="name"></input>
                        <br/>
                        <label> description </label> <input type="text" name="description"></input>
                        <br/>
                        {/* <label> event_id </label> <input type="number" name="event_id "></input> */}
                </fieldset>
                    <input class="btn" type="submit" id="addVendor" value="Add Vendor"></input>
                    <input class="btn" type="button" value="cancel" onClick={browseVendors}></input>
                </form> 
            </div>{/*<!-- insert -->*/}

            <p>&nbsp;</p>
            <div id="update">
                <form method="POST" id="UpdateVendor">
                    <legend><strong>Update Vendor</strong></legend>
                    <fieldset class="fields">
                    {/*<!-- <input type="hidden" name="vendor_id" id="updatevendor_id" value="1"> -->*/}
                        <label> vendor_id </label> <input type="number" name="vendor_id"></input>
                        <br/>
                        <label> name </label> <input type="text" name="name"></input>
                        <br/>
                        <label> description </label> <input type="number" name="description"></input>
                        <br/>
                        <label> event_id </label> <input type="number" name="event_id "></input>
                </fieldset>
                    <input class="btn" type="submit" id="UpdateSaveVendor" value="Save Update Vendor"></input>
                    <input class="btn" type="button" value="cancel" onClick={browseVendors}></input>
                </form> 
            </div>{/*<!-- update -->*/}


            <p>&nbsp;</p>
            <div id="delete" style={{display: "block"}}>
            <form method="POST" id="deleteVendor">
                <legend><strong>Delete Vendor</strong></legend>
                    <fieldset class="fields">
                    <p>Are you sure you wish to delete the following?</p>
                    {/*<!-- <input type="hidden" name="vendor_id" id="deletevendor_id" value="1"> -->*/}
                    <label><strong>vendor_ID:</strong></label>
                    <label><strong>Name:</strong></label> <input type="text"></input>
                        
                </fieldset>
                <input class="btn" type="submit" id="DeleteVendor" value="Delete Vendor"></input>
                    <input class="btn" type="button" value="cancel" onClick={browseVendors}></input>
            </form>
            </div>{/*<!-- delete -->*/}
        </>
    );
}

export default Vendors;