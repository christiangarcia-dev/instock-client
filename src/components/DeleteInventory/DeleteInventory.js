import './DeleteInventory.scss'

function DeleteInventory () {
    return (
        <div className='delete__inventory'>
            <h2 className='delete__inventory-title'>Delete Television inventory item?</h2>
            <p className='delete__inventory-explanation'>Please confirm that you'd like to delete ... from the inventory list. You won't be able to undo this action.</p>
            <div className='buttons'>
                <button className='delete__inventory-cancel-button'>Cancel</button>
                <button className='delete__inventory-delete-button'>Delete</button>
            </div>
        </div>
    )

}

export default DeleteInventory;