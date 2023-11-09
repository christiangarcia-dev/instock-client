import './WarehouseInventory.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../assets/icons/delete_outline-24px.svg';
import editIcon from '../assets/icons/edit-24px.svg';
import rightArrowIcon from '../assets/icons/chevron_right-24px.svg';
import sortIcon from '../assets/icons/sort-24px.svg';

function WarehouseInventory({warehouseId}) {

    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [inventoryItems, setInventoryItems] = useState([]);

    // Get inventory items for specific specific warehouse 
    useEffect(() => {
        const fetchInventory = async () => {
            try {
            // make warehouse id dynamic with useParams once warehouse list is up 
            const response = await axios.get(`http://localhost:8080/api/warehouses/1/inventories`);
            console.log('LOOK HERE: ', response.data)
            setInventoryItems(response.data);
            } catch (error) {
            console.error('Error fetching inventory data:', error);
            }
        };
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        fetchInventory();

        // Set up event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => window.removeEventListener('resize', handleResize);
    }, [warehouseId]);

        

    // Delete specific inventory item for specific warehouse 
    const handleDelete = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8080/api/warehouses/${warehouseId}/inventories/${itemId}`);
            setInventoryItems(inventoryItems.filter(item => item.id !== itemId));
        }   catch (error) {
                console.error('Error deleting inventory item:', error);
            }
    };

    const handleEdit = (itemId) => {
        // Edit item 
        // Navigate to edit page (route has not been created yet)
    };

    if (isMobileView) {
        
        // Mobile JSX
        return (
            <section className="warehouse-inventoryMB">
                {inventoryItems.map((item) => (
                <article key={item.id} className="warehouse-inventoryMB__item">
                    <div>
                        <h2 className="warehouse-inventoryMB__title">Inventory Item: {item.item_name}</h2>
                        <img
                            className='warehouse-inventoryMB__detail-icon'
                            src={rightArrowIcon}
                            alt="Details"
                        />
                        {/* Additional details can be added here */}
                        <div className="warehouse-inventoryMB__details">
                            <span className="warehouse-inventoryMB__category">Category: {item.category}</span>
                            <span className={`warehouse-inventoryMB__status warehouse-inventoryMB__status--${item.status.toLowerCase().replace(/\s/g, '-')}`}>
                                Status: {item.status}
                            </span>
                            <span className="warehouse-inventoryMB__quantity">Qty: {item.quantity}</span>
                        </div>
                        <div className="warehouse-inventoryMB__actions">
                            <img
                                className='warehouse-inventoryMB__action warehouse-inventoryMB__action--delete'
                                src={deleteIcon}
                                alt="Delete"
                                onClick={() => handleDelete(item.id)}
                            />
                            <img
                                className='warehouse-inventoryMB__action warehouse-inventoryMB__action--edit'
                                src={editIcon}
                                alt="Edit"
                                onClick={() => handleEdit(item.id)}
                            />
                        </div>
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
                            <img src={deleteIcon} alt="Delete" onClick={() => alert('Delete item id ' + item.id)}/>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default WarehouseInventory;

