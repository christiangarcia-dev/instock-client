import './DeleteInventory.scss'

function DeleteInventory ({ onCancel, onConfirm, inventoryName }) {
    return (
        <div className='delete__inventory'>
            <h2 className='delete__inventory-title'>Delete {inventoryName} inventory item?</h2>
            <p className='delete__inventory-explanation'>Please confirm that you'd like to delete {inventoryName} from the inventory list. You won't be able to undo this action.</p>
            <div className='buttons'>
            <button className='delete__inventory-cancel-button' onClick={onCancel}>
                    Cancel
                </button>
                <button className='delete__inventory-delete-button' onClick={onConfirm}>
                    Delete
                </button>
            </div>
        </div>
    )

}

export default DeleteInventory;