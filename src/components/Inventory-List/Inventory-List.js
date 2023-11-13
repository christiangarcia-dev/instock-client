import './Inventory-List.scss';
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteInventory from '../DeleteInventory/DeleteInventory';
import{ Link }from "react-router-dom";

function InventoryList() {

    const [inventories, setInventories] = useState([]);
    const [openModal, setOpenModal] =  useState(false);
    const [selectedInventory, setSelecetedInventory]= useState(null);

        const handleOpenPop = (selectedInventory) => {
            setSelecetedInventory(selectedInventory)
            setOpenModal(true)
        }
        console.log(selectedInventory)

        // const handleDelete = async () => {
        //     setInventories((prevInventories) =>
        //         prevInventories.filter((inventory) => inventory.id !== selectedInventory.id)
        //     );
        //     setOpenModal(false); 
        // };
console.log(openModal);
    
    useEffect( () => {
        async function getInventories(){
            const response = await axios.get('http://localhost:8080/api/inventories')
            setInventories(response.data)
        }
        getInventories();
    }, [])

   
    return (
    <section className='warehouse__list' >
        <section className='warehouselist__containerOne'>
            <h2 className='warehouselist__containerOne-title'>Inventory</h2>
            <div className='warehouse__nav'>
                <input className='warehouselist__containerOne-search' type='text' placeholder='Search...'></input>
                <button className='warehouselist__containerOne-add'>+ Add New Item</button>
            </div>
        </section>
            <div className='warehouselist__titles'>
                <h6 className='warehouse__allWarehouses--titleWare'>INVENTORY ITEM</h6>
                <h6 className='warehouse__allWarehouses--titleAddress'>CATEGORY</h6>
                <h6 className='warehouse__allWarehouses--titleContact'>STATUS</h6>
                <h6 className='warehouse__allWarehouses--titleQTY'>QTY</h6>
                <h6 className='warehouse__allWarehouses--titleInfo'>WAREHOUSE</h6>
                <h6 className='warehouse__allWarehouse-title'>ACTIONS</h6>
            </div>
            {
                inventories?.map ((inventory) => (

                    <section key={inventory.id} className='warehouselist__containerTwo'>
                        <div className='warehouse__allWarehouses'>
                            <div className='warehouse__allWarehouses-one'>
                                <div>
                                    <h6 className='warehouse__allWarehouses-titleWare'>INVENTORY ITEM</h6>
                                    <p className='warehouse__allWarehouses-typeItem'> {inventory.item_name}<img src={chevronRight}/></p>
                                </div>
                                <div>
                                    <h6 className='warehouse__allWarehouses-titleAddress'>CATEGORY</h6>
                                    <p className='warehouse__allWarehouses-category'>{inventory.category}</p>
                                </div>
                            </div>
                            <div className='warehouse__allWarehouses-two'>
                                <h6 className='warehouse__allWarehouses-titleContact'>STATUS</h6>
                                <p className='warehouse__allWarehouses-stock'>{inventory.status}</p>
                                <h6 className='warehouse__allWarehouses-titleInfo'>QTY</h6>
                                <p  className='warehouse__allWarehousescontact_phone'>{inventory.quantity}</p>
                                <h6 className='warehouse__allWarehouses-titleAddress'>WAREHOUSE</h6>
                                <p className='warehouse__allWarehouses-category'>{inventory.warehouse_name}</p>
                            </div>
                        </div>
                        <div className='warehouse__allWarehouses-buttons'>
                            <img onClick={() => handleOpenPop(inventory)}className='warehouse__allWarehouses-delete' src={deleteIcon} />
                            <Link to={`/edit-warehouse-form`}>
                                <img className='warehouse__allWarehouses-edit' src={editIcon}/>
                            </Link>
                        </div>
                    </section>
            ))}
            {
                openModal && <DeleteInventory openDelete={setOpenModal} inventory={selectedInventory} />
            }
           
    </section>
    )

}

export default InventoryList;