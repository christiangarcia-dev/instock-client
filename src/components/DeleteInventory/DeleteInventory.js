import './DeleteInventory.scss'
import axios from 'axios';



function DeleteInventory ({openDelete, inventory, }) {

    const deleteResponse  = async() => {
        try {
            await axios.delete(`http://localhost:8080/api/inventories/${inventory.id}`)
            openDelete(false);
        }
        catch (error) {
            console.error('Dont have any inventory', error);
        }

    }


    return (
        <div className='delete__inventory'>
            <h2 className='delete__inventory-title'>Delete  inventory item?</h2>
            <p className='delete__inventory-explanation'>Please confirm that you'd like to delete from the inventory list. You won't be able to undo this action.</p>
            <div className='buttons'>
            <button className='delete__inventory-cancel-button' >
                    Cancel
                </button>
                <button className='delete__inventory-delete-button' >
                    Delete
                </button>
            </div>
        </div>
    )

}

export default DeleteInventory;