import './Warehouse-List.scss';
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
// import { Link } from 'react-router-dom';
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import { NavLink } from 'react-router-dom';

function WarehouseList() {
    // const hanldeAddNew = () => {
    //    return <NavLink to={<Warehouse-Details>}>
    // }
    return (
    <section className='warehouse__list' >
         <section className='warehouselist__containerOne'>
            <h2 className='warehouselist__containerOne-title'>Warehouses</h2>
            <div>
                <input className='warehouselist__containerOne-search' type='text' placeholder='Search...'></input>
                <button className='warehouselist__containerOne-add'>+ Add New Warehouse</button>
            </div>
         </section>
        
         <section className='warehouselist__containerTwo'>
            <div className='warehouse__allWarehouses'>
                <div className='warehouse__allWarehouses-one'>
                    <h6 className='warehouse__allWarehouses-titleWare'>WAREHOUSE</h6>
                        <p className='warehouse__allWarehouses-typeItem'>Item <img src={chevronRight}/> </p>
                    <h6 className='warehouse__allWarehouses-titleAddress'>ADDRESS</h6>
                    <p className='warehouse__allWarehouses-category'>CategoryType</p>
                </div>
                <div className='warehouse__allWarehouses-two'>
                    <h6 className='warehouse__allWarehouses-titleContact'>CONTACT NAME</h6>
                    <p className='warehouse__allWarehouses-stock'>In stock</p>
                    <h6 className='warehouse__allWarehouses-titleInfo'>CONTACT INFORMATION</h6>
                    <p  className='warehouse__allWarehouses-quantity'>Quantity</p>
                </div>
            </div>
            <div className='warehouse__allWarehouses-buttons'>
                <img className='warehouse__allWarehouses-delete' src={deleteIcon}/>
                <img className='warehouse__allWarehouses-edit' src={editIcon}/>
            </div>
         </section>
    </section>

    // I HAVE TO ADD ALT FOR THR ICONS-IMAGES
    )

}

export default WarehouseList;