import "../DeleteWarehouseModal/DeleteWarehouseModal.scss";
import { useState } from "react";
import closeIcon from "../../assets/icons/close-24px.svg";;

function DeleteWarehouseModal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="delete-warehouse-modal__btn">
                Open
            </button>

            {modal && (
                <div className="delete-warehouse-modal">
                    <div onClick={toggleModal} className="delete-warehouse-modal__overlay"></div>
                    <div className="delete-warehouse-modal__content">
                        <img 
                            onClick={toggleModal} 
                            className="delete-warehouse-modal__close-icon" 
                            src={closeIcon}>
                        </img>
                        <h2 className="delete-warehouse-modal__header">Delete Washington Warehouse?</h2>
                        <p className="delete-warehouse-modal__confirmation">Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</p>
                        <div className="delete-warehouse-modal__buttons">
                            <button className="delete-warehouse-modal__btn-close" onClick={toggleModal}>
                                Cancel
                            </button>
                            <button className="delete-warehouse-modal__btn-delete" onClick={toggleModal}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DeleteWarehouseModal;