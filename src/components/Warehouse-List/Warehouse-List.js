import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteWarehouseModal from '../DeleteModal/DeleteWarehouseModal'; // Adjust the path as necessary
import './Warehouse-List.scss';
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import chevronRight from '../../assets/icons/chevron_right-24px.svg';

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);

    useEffect(() => {
        async function getWarehouses() {
            const response = await axios.get(API);
            setWarehouses(response.data);
        }
        getWarehouses();
    }, []);

    const openModal = (warehouseId) => {
        setSelectedWarehouseId(warehouseId);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const confirmDelete = async () => {
        if (selectedWarehouseId) {
            await handleDeleteWarehouse(selectedWarehouseId);
        }
    };

    const handleDeleteWarehouse = async (warehouseId) => {
        try {
            await axios.delete(`${API}/${warehouseId}`);
            setWarehouses(warehouses.filter(warehouse => warehouse.id !== warehouseId));
            closeModal();
        } catch (error) {
            console.error('Error deleting warehouse:', error);
        }
    };


    return (
        <section className='warehouse__list' >
            <section className='warehouselist__containerOne'>
                <h2 className='warehouselist__containerOne-title'>Warehouses</h2>
                <div className='warehouse__nav'>
                    <input className='warehouselist__containerOne-search' type='text' placeholder='Search...'></input>
                    <button className='warehouselist__containerOne-add'>+ Add New Warehouse</button>
                </div>
            </section>
            <div className='warehouselist__titles'>
                <h6 className='warehouse__allWarehouses--titleWare'>WAREHOUSE</h6>
                <h6 className='warehouse__allWarehouses--titleAddress'>ADDRESS</h6>
                <h6 className='warehouse__allWarehouses--titleContact'>CONTACT NAME</h6>
                <h6 className='warehouse__allWarehouses--titleInfo'>CONTACT INFORMATION</h6>
                <h6 className='warehouse__allWarehouse-title'>ACTIONS</h6>
            </div>
            {warehouses?.map((warehouse) => (
                <section key={warehouse.id} className='warehouselist__containerTwo'>
                    <div className='warehouse__allWarehouses'>
                        <div className='warehouse__allWarehouses-one'>
                            <div>
                                <h6 className='warehouse__allWarehouses-titleWare'>WAREHOUSE</h6>
                                <p className='warehouse__allWarehouses-typeItem'> {warehouse.city}<img src={chevronRight} alt="Details"/></p>
                            </div>
                            <div>
                                <h6 className='warehouse__allWarehouses-titleAddress'>ADDRESS</h6>
                                <p className='warehouse__allWarehouses-category'>{warehouse.address}</p>
                            </div>
                        </div>
                        <div className='warehouse__allWarehouses-two'>
                            <h6 className='warehouse__allWarehouses-titleContact'>CONTACT NAME</h6>
                            <p className='warehouse__allWarehouses-stock'>{warehouse.contact_name}</p>
                            <h6 className='warehouse__allWarehouses-titleInfo'>CONTACT INFORMATION</h6>
                            <p className='warehouse__allWarehousescontact_phone'>{warehouse.contact_phone}</p>
                            <p className='warehouse__allWarehousescontact_email'>{warehouse.contact_email}</p>
                        </div>
                    </div>
                    <div className='warehouse__allWarehouses-buttons'>
                        <img className='warehouse__allWarehouses-delete' src={deleteIcon} alt="Delete" onClick={() => openModal(warehouse.id)}/>
                        <img className='warehouse__allWarehouses-edit' src={editIcon} alt="Edit"/>
                    </div>
                </section>
            ))}
            <DeleteWarehouseModal showModal={modalIsOpen} closeModal={closeModal} confirmDelete={confirmDelete} warehouseId={selectedWarehouseId} />
        </section>
    );
    

}

export default WarehouseList;