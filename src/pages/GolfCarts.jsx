import {React, useState, useEffect} from 'react';
import axios from 'axios';
import GolfCartsTable from '../components/GolfCartsTable.jsx';

function GolfCarts() {
    const [golfCartsArr, setGolfCartsArr] = useState([]);

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
    function newGolfCart() { showform('insert'); }
    function updateGolfCart(golf_cart_id) { showform('update'); }
    function deleteGolfCart(golf_cart_id) { showform ('delete'); }
    function browseGolfCarts() { showform ('browse'); }
    function showAll() { showform ('all'); }

    const fetchGolfCartsTable = async () => {
        try {
            // build url for the endpoint
            const URL = import.meta.env.VITE_API_URL + 'getGolfCartsTable';
            // use axios to query
            const response = await axios.get(URL);
            setGolfCartsArr(response.data);
        } catch (error) {
            //logging
            console.error('Error fetching golf cart data:', error);
            alert('Error fetching golf cart data from the server.');
        }
    }

    const makeGolfCart = async (GolfCartData) => {
        document.getElementById('addGolfCart').addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent form from submitting traditionally
          
        try {
            const URL = import.meta.env.VITE_API_URL + 'createGolfCart';
            const response = axios.post(URL, GolfCartData);
            console.log('Request payload:', response);
            console.log('API URL test:', URL);
            // alert('GolfCart added successfully!');
            fetchGolfCartsTable(); // Refresh the table after adding
        } catch (error) {
            console.error('Error adding new GolfCart:', error);
            alert('Error adding GolfCart to the server.');
        }

        })
    };

    useEffect(() => {
        fetchGolfCartsTable();
        makeGolfCart();
    }, []);

    return (
        <>
            <h1>Golf Carts</h1>
            <div id="browse">
                {<GolfCartsTable golfCartsArr={golfCartsArr}/>}
            </div>
            <p><button onClick={showAll}>Display all forms</button> </p>
            <p>&nbsp;</p> 
            {/*<-- browse -->*/}

            <div id="insert">
                <form method="POST" 
                    id="addGolfCart"                    
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const golfCartData = {
                            last_serviced: formData.get('last_serviced'),
                            golf_cart_id: formData.get('golf_cart_id'),
                        };
                        makeGolfCart(golfCartData);
                    }}>
                    <legend><strong>Add GolfCart</strong></legend>
                    <fieldset class="fields">
                        <label> last_serviced </label> <input type="number" name="last_serviced" id="last_serviced"></input>
                        <br/>
                        <label> golf_cart_id </label> <input type="text" name="golf_cart_id" id="golf_cart_id"></input>
                    </fieldset>
                    <input class="btn" type="submit" id="addGolfCart" value="Add GolfCart"></input>
                    <input class="btn" type="button" value="cancel" onClick="browseGolfCarts()"></input>
                </form> 
            </div>{/*<!-- insert -->*/}

            <p>&nbsp;</p>
            <div id="update">
                <form method="POST" id="UpdateGolfCart">
                    <legend><strong>Update GolfCart</strong></legend>
                    <fieldset class="fields">
                    {/*<!-- <input type="hidden" name="golf_cart_id" id="updategolf_cart_id" value="1"> -->*/}
                        <label> golf_cart_id </label> <input type="number" name="golf_cart_id" value=""></input>
                        <br/>
                        <label> last_serviced </label> <input type="number" name="last_serviced"></input>
                        <br/>
                        <label> employee_id </label> <input type="text" name="employee_id"></input>
                </fieldset>
                    <input class="btn" type="submit" id="UpdateSaveGolfCart" value="Save Update GolfCart"></input>
                    <input class="btn" type="button" value="cancel" onClick="browsePeople()"></input>
                </form> 
            </div>{/*<!-- update -->*/}


            <p>&nbsp;</p>
            <div id="delete" style={{display: "block"}}>
            <form method="POST" id="deleteGolfCart">
                <legend><strong>Delete GolfCart</strong></legend>
                    <fieldset class="fields">
                    <p>Are you sure you wish to delete the following?</p>
                    {/*<!-- <input type="hidden" name="golf_cart_id" id="deletegolf_cart_id" value="1"> -->*/}
                    <label><strong>golf_cart_id:</strong></label> <input type="number"></input> 
                        
                </fieldset>
                <input class="btn" type="submit" id="DeleteGolfCart" value="Delete GolfCart"></input>
                    <input class="btn" type="button" value="cancel" onClick="browsePeople()"></input>
            </form>
            </div>
        </>
    );
}

export default GolfCarts;