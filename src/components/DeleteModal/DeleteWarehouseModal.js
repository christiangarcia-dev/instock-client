import "../DeleteModal/DeleteWarehouseModal.scss";
import { useState } from "react";
import closeIcon from "../../assets/icons/close-24px.svg";;

function DeleteWarehouseModal({ showModal, closeModal, confirmDelete, warehouse }) {

    if(showModal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            {showModal && (
                <div className="delete-warehouse-modal">
                    <div onClick={closeModal} className="delete-warehouse-modal__overlay"></div>
                    <div className="delete-warehouse-modal__content">
                        <img onClick={closeModal} className="delete-warehouse-modal__close-icon" src={closeIcon} alt="Close" />
                        <div className="delete-warehouse-modal__text-container">
                            <h2 className="delete-warehouse-modal__header">Delete {warehouse?.warehouse_name} warehouse?</h2>
                            <p className="delete-warehouse-modal__confirmation">Please confirm that you’d like to delete the warehouse from the list of warehouses. You won’t be able to undo this action.</p>
                        </div>
                        <div className="delete-warehouse-modal__buttons">
                            <button className="delete-warehouse-modal__btn-close" onClick={closeModal}>Cancel</button>
                            <button className="delete-warehouse-modal__btn-delete" onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DeleteWarehouseModal;