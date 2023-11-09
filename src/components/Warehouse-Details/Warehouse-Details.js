import './Warehouse-Details.scss';

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
         
    </section>
    )

}

export default WarehouseDetails;