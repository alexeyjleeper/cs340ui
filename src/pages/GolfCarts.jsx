import React from 'react';

function GolfCarts() {
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
    return (
        <>
            <div id="browse">
            <p><button onClick={showAll}>Display all forms</button> </p>
            <table border="1" cellpadding="5">
            <tr>
                <th><button onClick={newGolfCart}>New</button></th>
                <th></th>
                <th>golf_cart_id</th>
                <th>last_serviced</th>
                <th>employee_id</th>
            </tr>
            <tr>
                <td><button onClick={() => updateGolfCart('this.golf_cart_id')}>Edit</button></td>
                <td><button onclick={() => deleteGolfCart('this.golf_cart_id')}>Delete</button></td>
                <td align="right" >1</td>
                <td align="right">09-09-2024</td>
                <td>1</td>
            </tr>
            <tr>
                <td><button onClick={() => updateGolfCart('this.golf_cart_id')}>Edit</button></td>
                <td><button onclick={() => deleteGolfCart('this.golf_cart_id')}>Delete</button></td>
                <td align="right" >2</td>
                <td align="right" >05-12-2023</td>
                <td>3</td>
            </tr>
            <tr>
                <td><button onClick={() => updateGolfCart('this.golf_cart_id')}>Edit</button></td>
                <td><button onclick={() => deleteGolfCart('this.golf_cart_id')}>Delete</button></td>
                <td align="right" >3</td>
                <td align="right" >06-26-2024</td>
                <td>4</td>
            </tr>
            </table>
            <p>&nbsp;</p>
            </div> 
            {/*<-- browse -->*/}

            <div id="insert">
                <form method="POST" id="addGolfCart">
                    <legend><strong>Add GolfCart</strong></legend>
                    <fieldset class="fields">
                        <label> last_serviced </label> <input type="number" name="last_serviced"></input>
                        <br/>
                        <label> employee_id </label> <input type="text" name="employee_id"></input>
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