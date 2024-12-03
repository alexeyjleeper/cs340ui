import React from 'react';

function Vendors() {
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
    return (
        <>
            <div id="browse">
            <p><button onClick={showAll}>Display all forms</button> </p>
            <table border="1" cellpadding="5">
            <tr>
                <th><button onClick={newVendor}>New</button></th>
                <th></th>
                <th>vendor_id</th>
                <th>name</th>
                <th>description</th>
                <th>event_id</th>

            </tr>
            <tr>
                <td><button onClick={() => updateVendor('this.vendor_id')}>Edit</button></td>
                <td><button onclick={() => deleteVendor('this.vendor_id')}>Delete</button></td>
                <td align="right" >1</td>
                <td>Frosty's Ice Cream</td>
                <td>Ice cream stand with 32 flavors</td>
                <td>1</td>
            </tr>
            <tr>
                <td><button onClick={() => updateVendor('this.vendor_id')}>Edit</button></td>
                <td><button onclick={() => deleteVendor('this.vendor_id')}>Delete</button></td>
                <td align="right" >2</td>
                <td>Parks Merchandise</td>
                <td>Gift shop, apparel, brochures</td>
                <td>3</td>
            </tr>
            <tr>
                <td><button onClick={() => updateVendor('this.vendor_id')}>Edit</button></td>
                <td><button onclick={() => deleteVendor('this.vendor_id')}>Delete</button></td>
                <td align="right" >3</td>
                <td>Park Grille</td>
                <td>Food vendor with extensive menu</td>
                <td>4</td>
            </tr>
            </table>
            <p>&nbsp;</p>
            </div> 
            {/*<!-- browse -->*/}

            <div id="insert">
                <form method="POST" id="addVendor">
                    <legend><strong>Add Vendor</strong></legend>
                    <fieldset class="fields">
                        <label> name </label> <input type="text" name="name"></input>
                        <br/>
                        <label> description </label> <input type="number" name="description"></input>
                        <br/>
                        <label> event_id </label> <input type="number" name="event_id "></input>
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