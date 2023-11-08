import './WarehouseInventory.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../assets/icons/delete_outline-24px.svg';
import editIcon from '../assets/icons/edit-24px.svg';
import rightArrowIcon from '../assets/icons/chevron_right-24px.svg';

function WarehouseInventory({warehouseId}) {

    const [inventoryItems, setInventoryItems] = useState([]);

    // Get inventory items for specific specific warehouse 
    // useEffect(() => {
    //     const fetchInventory = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/warehouse/${warehouseId}/inventory`);
    //         setInventoryItems(response.data);
    //     }   catch (error) {
    //             console.error('Error fetching inventory data:', error);
    //         }
    // };

    // fetchInventory();
    // }, [warehouseId]);

    // // Delete specific inventory item for specific warehouse 
    // const handleDelete = async (itemId) => {
    //     try {
    //         await axios.delete(`http://localhost:8080/warehouse/${warehouseId}/inventory/${itemId}`);
    //         setInventoryItems(inventoryItems.filter(item => item.id !== itemId));
    //     }   catch (error) {
    //             console.error('Error deleting inventory item:', error);
    //         }
    // };

    // const handleEdit = (itemId) => {
    //     // Edit item 
    //     // Navigate to edit page (route has not been created yet)
    // };

    return (
        <section className="warehouse-inventory">
            <article className="warehouse-inventory__item">

                <section className='warehouse-inventory__details'>
                    <div className='warehouse-inventory__text-group'>
                        <div className='warehouse-inventory__subgroup'>
                            <h2 className='warehouse-inventory__label'>Inventory Item</h2>
                            <div className='warehouse-inventory__combo'>
                                <p className='warehouse-inventory__item-value'>Television</p>
                                <img
                                    className='warehouse-inventory__item-details-icon'
                                    src={rightArrowIcon}
                                    alt="Details"
                                />
                            </div>
                        </div>

                        <div className='warehouse-inventory__subgroup'>
                            <h2 className='warehouse-inventory__label'>Category</h2>
                            <p className="warehouse-inventory__category-value">Electronics</p>
                        </div>
                    </div>

                    <div className='warehouse-inventory__text-group'>
                        <div className='warehouse-inventory__subgroup'>
                            <h2 className='warehouse-inventory__label'>Status</h2>
                            <p className="warehouse-inventory__status-value">In Stock</p>
                        </div>
                        <div className='warehouse-inventory__subgroup'>
                            <h2 className='warehouse-inventory__label'>Qty</h2>
                            <p className="warehouse-inventory__quantity-value">500</p>
                        </div>
                    </div>
                </section>

                <div className="warehouse-inventory__actions">
                    <img
                        className='warehouse-inventory__actions-delete'
                        src={deleteIcon}
                        alt="Delete"
                        // onClick={() => handleDelete(item.id)}
                    />
                    <img
                        className='warehouse-inventory__actions-edit'
                        src={editIcon}
                        alt="Edit"
                        // onClick={() => handleEdit(item.id)}
                    />
                </div>
            </article>
        </section>
    );
}

export default WarehouseInventory;

// Review Questions: 
// Should i replace 8080 with 'PORT'?
// Double check endpoints (warehouse/warehouse-id/inventory/inventory-id