import './DeleteInventory.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import X from '../../assets/icons/close-24px.svg';



function DeleteInventory ({openDelete, inventory, inventoryID }) {
    const navigate = useNavigate();

    const deleteResponse  = async() => {
        try {
            await axios.delete(`http://localhost:8080/api/inventories/${inventory}`)
            openDelete(false);
            window.location.reload();
        }
        catch (error) {
            console.error('Dont have any inventory', error);
        }

    }
    const handleCancel = () => {
        openDelete(false); 
    };
   

    const deleteWarehouseItem  = async() => {
        try {
            await axios.delete(`http://localhost:8080/api/inventories/${inventoryID}`)
            openDelete(false);
            window.location.reload();
        }
        catch (error) {
            console.error('Dont have any inventory', error);
        }

    }


    return (
        <>
        <div onClick={openDelete} className="delete__inventory-overlay"></div>
        <div className='delete__inventory'>
            <div className='title-x'>
            <h2 className='delete__inventory-title'>Delete {inventory.item_name} inventory item?</h2>
            <img src={X} onClick={() => { openDelete(false); }} />
            </div>
            <p className='delete__inventory-explanation'>Please confirm that you'd like to delete {inventory.item_name} from the inventory list. You won't be able to undo this action.</p>
            <div className='buttons'>
            <button className='delete__inventory-cancel-button' onClick={handleCancel}>
                    Cancel
                </button>
                <button className='delete__inventory-delete-button' onClick={deleteResponse} >
                    Delete
                </button>
            </div>
        </div>
        
        </>
    )

}

export default DeleteInventory;