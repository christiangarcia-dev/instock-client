import './Warehouse-Details.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
// import { Link } from 'react-router-dom';

function WarehouseDetails() {
    const goBack = () => {
        return window.history.go(-1)
    }

    // const edit = () => {
    //     <Link to={}
    // }
    return (
    <section className='warehouse__details' >
         <section className='warehousedetails__containerOne'>
            <img onClick={goBack} className='warehousedetails__containerOne-button' src={arrowBack}/>
            <h2 className='warehousedetails__containerOne-title'>Washigton</h2>
            <img className='warehousedetails__containerOne-edit' src={editIcon}/>
         </section>
         <section className='warehousedetails__containerTwo'>
            <div className='warehouse__address'>
                <h6 className='warehouse__address-sub'>WAREHOUSE ADDRESS:</h6>
                <p className='warehouse__address-address'>Address</p>
            </div>
            <div className='warehouse__contact'>
                <div className='warehouse__contact-one'>
                    <h6 className='warehouse__contact-contactName'>CONTACT NAME:</h6>
                    <p className='warehouse__contact-name'>Contact</p>
                    <p className='warehouse__contact-position'>Position</p>
                </div>
                <div className='warehouse__contact-two'>
                    <h6 className='warehouse__contact-contactInfo'>CONTACT INFORMATION:</h6>
                    <p className='warehouse__contact-phone'>Number</p>
                    <p className='warehouse__contact-email'>Gmail</p>
                </div>
            </div>
         </section>
         <section className='warehousedetails__containerThree'>
            <div className='warehouse__inventory'>
                <div className='warehouse__inventory-one'>
                    <h6 className='warehouse__inventory-titleInve'>INVENTORY ITEM</h6>
                    <p className='warehouse__inventory-typeItem'>Item</p>
                    <h6 className='warehouse__inventory-titleCate'>CATEGORY</h6>
                    <p className='warehouse__inventory-category'>CategoryType</p>
                </div>
                <div className='warehouse__inventory-two'>
                    <h6 className='warehouse__inventory-titleStatus'>STATUS</h6>
                    <p className='warehouse__inventory-stock'>In stock</p>
                    <h6 className='warehouse__inventory-titleQTY'>QTY</h6>
                    <p  className='warehouse__inventory-quantity'>Quantity</p>
                </div>
            </div>
            <div className='warehouse__inventory-buttons'>
                <img className='warehouse__inventory-delete' src={deleteIcon}/>
                <img className='warehouse__inventory-edit' src={editIcon}/>
            </div>
         </section>
    </section>
    )

}

export default WarehouseDetails;