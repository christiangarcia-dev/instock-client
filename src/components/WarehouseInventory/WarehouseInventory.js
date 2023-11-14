import './WarehouseInventory.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import sortIcon from '../../assets/icons/sort-24px.svg';
import DeleteInventoryModal from '../DeleteInventoryModal/DeleteInventoryModal';

function WarehouseInventory() {

    const { id } = useParams();
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [inventoryItems, setInventoryItems] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (itemId) => {
        const itemToDelete = inventoryItems.find(item => item.id === itemId);
        if (itemToDelete) {
            setSelectedItem(itemToDelete);
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const confirmDelete = async () => {
        if (selectedItem) {
            await handleDelete(selectedItem.id);
        }
    };

    const openDeleteModal = (itemId) => {
        const itemToDelete = inventoryItems.find(item => item.id === itemId);
        if (itemToDelete) {
            setSelectedItem(itemToDelete);
            setModalIsOpen(true);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchInventory = async () => {
            const url = `http://localhost:8080/api/warehouses/${id}/inventories`;
            console.log("Requesting URL:", url); // Log the URL
            try {
                const response = await axios.get(url);
                setInventoryItems(response.data);
            } catch (error) {
                console.error('Error fetching inventory data:', error);
            }
        };
        fetchInventory();
    }, [id]);

    const handleDelete = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8080/api/warehouses/${id}/inventories/${itemId}`);
            setInventoryItems(inventoryItems.filter(item => item.id !== itemId));
        }   catch (error) {
                console.error('Error deleting inventory item:', error);
            }
    };

    const handleEdit = (itemId) => {
        // TODO
    };

    if (isMobileView) {
        
        // Mobile JSX
        return (
            <section className="warehouse-inventoryMB">
                {inventoryItems.map((item) => (
                <article key={item.id} className="warehouse-inventoryMB__item">
                    <div>
                        <div className='warehouse-inventoryMB__flex--group'>
                            <div className='warehouse-inventoryMB__title--group'>
                                <h2 className="warehouse-inventoryMB__title warehouse-inventoryMB__label">Inventory Item:</h2>
                                <div className='warehouse-inventoryMB__title--text-icon'>
                                    <p className='warehouse-inventoryMB__title--value'>{item.item_name}<img className='warehouse-inventoryMB__detail-icon' src={rightArrowIcon} alt="Details"/></p>
                                </div>
                            </div>
                            <div className='warehouse-inventoryMB__status--group'>
                                <h2 className="warehouse-inventoryMB__status warehouse-inventoryMB__label">Status:</h2>
                                <p className={`warehouse-inventoryMB__status--value ${item.status === 'In Stock' ? 
                                'warehouse-inventoryMB__status--value-instock' : 'warehouse-inventoryMB__status--value-outofstock'}`}>{item.status}</p>
                            </div>
                        </div>
                        <div className='warehouse-inventoryMB__flex--group'>
                            <div className='warehouse-inventoryMB__category--group'>
                                <h2 className="warehouse-inventoryMB__category warehouse-inventoryMB__label">Category:</h2>
                                <p className='warehouse-inventoryMB__category--value'>{item.category}</p>
                            </div>
                            <div className='warehouse-inventoryMB__quantity--group'>
                                <h2 className="warehouse-inventoryMB__quantity warehouse-inventoryMB__label">Qty:</h2>
                                <p className='warehouse-inventoryMB__quantity--value'>{item.quantity}</p>
                            </div>
                        </div>
                    </div>
                        
                    <div className="warehouse-inventoryMB__actions">
                        <img
                            className='warehouse-inventoryMB__action warehouse-inventoryMB__action--delete'
                            src={deleteIcon}
                            alt="Delete"
                            onClick={() => openModal(item.id)}
                        />
                        <img
                            className='warehouse-inventoryMB__action warehouse-inventoryMB__action--edit'
                            src={editIcon}
                            alt="Edit"
                            onClick={() => handleEdit(item.id)}
                        />
                    </div>
                </article>
            ))}
            </section>
        );

    } else {
        // Tablet and desktop view JSX
        return (
            <div className="warehouse-inventory">
                <div className="warehouse-inventory__table">
                    <div className="warehouse-inventory__header">
                        <div className="warehouse-inventory__header-item">Inventory Item<img src={sortIcon} className="warehouse-inventory__sort-icon" /></div>
                        <div className="warehouse-inventory__header-item">Category<img src={sortIcon} className="warehouse-inventory__sort-icon" /></div>
                        <div className="warehouse-inventory__header-item">Status<img src={sortIcon} className="warehouse-inventory__sort-icon" /></div>
                        <div className="warehouse-inventory__header-item">Quantity<img src={sortIcon} className="warehouse-inventory__sort-icon" /></div>
                        <div className="warehouse-inventory__header-item warehouse-inventory__header-item--actions">Actions</div>
                    </div>
                    {inventoryItems.map((item) => (
                    <div className="warehouse-inventory__row" key={item.id}>
                        <div className="warehouse-inventory__row-item">{item.item_name}<img src={rightArrowIcon} className="warehouse-inventory__arrow-icon"></img></div>
                        <div className="warehouse-inventory__row-item">{item.category}</div>
                        <div className="warehouse-inventory__row-item"><p className={
                                `warehouse-inventory__row-item--status ${
                                    item.status === 'In Stock' ? 'warehouse-inventory__row-item--status-instock' : 'warehouse-inventory__row-item--status-outofstock'
                                }`
                            }>
                                {item.status}
                            </p></div>
                        <div className="warehouse-inventory__row-item">{item.quantity}</div>
                        <div className="warehouse-inventory__row-item warehouse-inventory__row-item--actions">
                            <img src={editIcon} alt="Edit" onClick={() => alert('Edit item id ' + item.id)}/>
                            <img src={deleteIcon} alt="Delete" onClick={() => openModal(item.id)}/>
                        </div>
                    </div>
                    ))}
                </div>
                <DeleteInventoryModal
                showModal={modalIsOpen}
                closeModal={closeModal}
                confirmDelete={confirmDelete}
                warehouse={selectedItem} // Make sure to pass the correct item information here
                />
            </div>
        );
    }
}

export default WarehouseInventory;