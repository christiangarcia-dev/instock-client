import './Inventory-List.scss';
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteInventory from '../DeleteInventory/DeleteInventory';
import{ Link } from "react-router-dom";
import sort from '../../assets/icons/sort-24px.svg';

function InventoryList() {

    const [inventories, setInventories] = useState([]);
    const [openModal, setOpenModal] =  useState(false);
    const [selectedInventory, setSelecetedInventory]= useState(null);

        const handleOpenPop = (selectedInventory) => {
            setSelecetedInventory(selectedInventory)
            setOpenModal(true)
        }

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
                <h6 className='inventory__allInventories--titleWare'>INVENTORY ITEM <img className='' src={sort} alt='sort icon' /></h6>
                <h6 className='inventory__allInventories--titleAddress'>CATEGORY <img className='' src={sort} alt='sort icon' /></h6>
                <h6 className='inventory__allInventories--titleContact'>STATUS <img className='' src={sort} alt='sort icon' /></h6>
                <h6 className='inventory__allInventories--titleQTY'>QTY <img className='' src={sort} alt='sort icon' /></h6>
                <h6 className='inventory__allInventories--titleInfo'>WAREHOUSE <img className='' src={sort} alt='sort icon' /></h6>
                <h6 className='inventory__allInventory-title'>ACTIONS </h6>
            </div>
            {
                inventories?.map((inventory) => (
                    <section key={inventory.id} className='inventorylist__containerTwo'>

                        <div className='inventory__allInventories'>
                            <div className='inventory__allInventories-one'>
                        <Link to={`/inventory-details/${inventory.id}`}>
                                <div className='inventory__ctg'>
                                    <h6 className='inventory__allInventories-titleWare'>INVENTORY ITEM</h6>
                                    <p className='inventory__allInventories-typeItem'> {inventory.item_name}<img src={chevronRight} /></p>
                                </div>
                        </Link>
                                <div className='inventory__details1'>
                                    <h6 className='inventory__allInventories-titleAddress'>CATEGORY</h6>
                                    <p className='inventory__allInventories-category'>{inventory.category}</p>
                                </div>
                            </div>
                            <div className='inventory__allInventories-two'>
                                <div className='inventory__details2 inventory__ctg'>
                                <h6 className='inventory__allInventories-titleContact'>STATUS</h6>
                                <p className='inventory__allInventories-stock'>{inventory.status}</p>
                                </div>
                                <div className='inventory__details3 inventory__ctg'>
                                <h6 className='inventory__allInventories-titleInfo'>QTY</h6>
                                <p className='inventory__allInventoriescontact_phone'>{inventory.quantity}</p>
                                </div>
                                <div className='inventory__details4'>
                                <h6 className='inventory__allInventories-titleAddress'>WAREHOUSE</h6>
                                <p className='inventory__allInventories-category'>{inventory.warehouse_name}</p>
                                </div>
                            </div>
                        </div>
                        <div className='inventory__allInventories-buttons'>
                            <img onClick={() => handleOpenPop(inventory)}className='inventory__allInventories-delete' src={deleteIcon} />
                            {/* <Link to={`/edit-warehouse-form`}> */}
                                <img className='inventory__allInventories-edit' src={editIcon}/>
                            {/* </Link> */}
                        </div>
                    </section>
                ))
            }
        
            {
                openModal && <DeleteInventory openDelete={setOpenModal} inventory={selectedInventory} />
            }
           
            </section>
    )

}

export default InventoryList;