import './Inventory-List.scss';
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/api/inventories'
function InventoryList() {

    const [inventories, setInventories] = useState([]);

    useEffect( () => {
        async function getInventories(){
            const response = await axios.get('http://localhost:8080/api/inventories')
            setInventories(response.data)
        }
        getInventories();
    }, [])

  
    return (
        <section className='inventory__list' >
            <section className='inventorylist__containerOne'>
                <h2 className='inventorylist__containerOne-title'>Inventory</h2>
                <div className='inventory__nav'>
                    <input className='inventorylist__containerOne-search' type='text' placeholder='Search...'></input>
                    <button className='inventorylist__containerOne-add'>+ Add New Item</button>
                </div>
            </section>
            <div className='inventorylist__titles'>
                <h6 className='inventory__allInventories--titleWare'>INVENTORY ITEM</h6>
                <h6 className='inventory__allInventories--titleAddress'>CATEGORY</h6>
                <h6 className='inventory__allInventories--titleContact'>STATUS</h6>
                <h6 className='inventory__allInventories--titleQTY'>QTY</h6>
                <h6 className='inventory__allInventories--titleInfo'>INVENTORY</h6>
                <h6 className='inventory__allInventory-title'>ACTIONS</h6>
            </div>
            {
                inventories?.map((inventory) => (
                    <section key={inventory.id} className='inventorylist__containerTwo'>
                        <div className='inventory__allInventories'>
                            <div className='inventory__allInventories-one'>
                                <div className='inventory__'>
                                    <h6 className='inventory__allInventories-titleWare'>INVENTORY ITEM</h6>
                                    <p className='inventory__allInventories-typeItem'> {inventory.item_name}<img src={chevronRight} /></p>
                                </div>
                                <div>
                                    <h6 className='inventory__allInventories-titleAddress'>CATEGORY</h6>
                                    <p className='inventory__allInventories-category'>{inventory.category}</p>
                                </div>
                            </div>
                            <div className='inventory__allInventories-two'>
                                <h6 className='inventory__allInventories-titleContact'>STATUS</h6>
                                <p className='inventory__allInventories-stock'>{inventory.status}</p>
                                <h6 className='inventory__allInventories-titleInfo'>QTY</h6>
                                <p className='inventory__allInventoriescontact_phone'>{inventory.quantity}</p>
                                <h6 className='inventory__allInventories-titleAddress'>INVENTORY</h6>
                                <p className='inventory__allInventories-category'>{inventory.warehouse_name}</p>
                            </div>
                        </div>
                        <div className='inventory__allInventories-buttons'>
                            <img className='inventory__allInventories-delete' src={deleteIcon} />
                            <img className='inventory__allInventories-edit' src={editIcon} />
                        </div>
                    </section>
                ))
            }
        </section>
        

    // I HAVE TO ADD ALT FOR THR ICONS-IMAGES
    )

}

export default InventoryList;