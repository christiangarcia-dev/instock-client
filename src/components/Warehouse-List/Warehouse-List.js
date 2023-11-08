import './Warehouse.scss';

function WarehouseDetails() {
    return (
    <section classname='warehouse__details' >
         {/* <button onClick= 'window.history("/")'></button> */}
         <section classname='warehousedetails__containerOne'>
            <button classname='warehousedetails__containerOne-button'>flecha</button>
            <h1 classname='warehousedetails__containerOne-title'>Washigton</h1>
            <button classname='warehousedetails__containerOne-edit'>EDIT</button>
         </section>
         <section className='warehousedetails__containerTwo'>
            <div className='warehouse__address'>
                <h4 className='warehouse__address-sub'>WAREHOUSE ADDRESS:</h4>
                <p className='warehouse__address-address'>Address</p>
            </div>
            <div className='warehouse__contact'>
                <div className='warehouse__contact-one'>
                    <h4 className='warehouse__contact-contactName'>CONTACT NAME:</h4>
                    <p className='warehouse__contact-name'>CONTACT</p>
                    <p className='warehouse__contact-position'>Position</p>
                </div>
                <div className='warehouse__contact-two'>
                    <h4 className='warehouse__contact-contactInfo'>CONTACT INFORMATION:</h4>
                    <p className='warehouse__contact-phone'>Number</p>
                    <p className='warehouse__contact-email'>Gmail</p>
                </div>
            </div>
         </section>
         <section className='warehousedetails__containerThree'>
            <div className='warehouse__inventory'>
                <div className='warehouse__inventory-one'>
                    <h4 className='warehouse__inventory-titleInve'>INVENTORY ITEM</h4>
                    <p className='warehouse__inventory-typeItem'>Item</p>
                    <h4 className='warehouse__inventory-titleCate'>CATEGORY</h4>
                    <p className='warehouse__inventory-category'>CategoryType</p>
                </div>
                <div className='warehouse__inventory-two'>
                    <h4 className='warehouse__inventory-titleStatus'>STATUS</h4>
                    <p className='warehouse__inventory-stock?'>In stock</p>
                    <h4 className='warehouse__inventory-titleQTY'>QTY</h4>
                    <p  className='warehouse__inventory-quantity'>Quantity</p>
                </div>
            </div>
            <div className='warehouse__inventory-buttons'>
                <button className='warehouse__inventory-delete'>DELETE</button>
                <button className='warehouse__inventory-edit'>EDIT</button>
            </div>
         </section>
    </section>
    )

}

export default WarehouseDetails;