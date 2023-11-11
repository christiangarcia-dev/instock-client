import "../EditWarehouse/EditWarehouse.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg"

function EditWarehouse() {

    function validatePhoneNumber(event) {
        event.preventDefault();
        const phoneNumber = event.target.phoneNumber.value;
        const inputValidation = new RegExp ("^\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-$")
        
        if (inputValidation.test (phoneNumber)){
            return true
        } else {
            alert ("Please enter phone number using the format +1(647)504-0911")
        }
    }
    
    function validateEmail (event) {
        const email = event.target.email.value;
        
    }

    function submitHandler(event) {
        event.preventDefault();

        const warehouseName = event.target.warehouseName.value;
        const streetAddress = event.target.streetAddress.value;
        const city = event.target.city.value;
        const country = event.target.country.value;
        const contactName = event.target.contactName.value;
        const position = event.target.position.value;
        const phoneNumber = event.target.phoneNumber.value;
        const email = event.target.email.value;

        if (!warehouseName ||
            !streetAddress ||
            !city ||
            !country ||
            !contactName ||
            !position ||
            !phoneNumber ||
            !email) {
            alert("Please complete all fields")
        }
    }


    return (
        <div className="form">
            <div className="form__header-div">
                <img src={backArrow} alt="arrow pointing left" className="form__back-arrow"></img>
                <h1 className="form__header"> Edit Warehouse</h1>
            </div>
            <form className="form__form" onSubmit={submitHandler}>
                <div className="form__content-div">
                    <div className="form__warehouse-div">
                        <h2 className="form__subheader">Warehouse Details</h2>
                        <label htmlFor="warehouseName" className="form__label">
                            Warehouse Name
                            <input type="text"
                                name="warehouseName"
                                id="warehouseName"
                                className="form__field"
                                placeholder="Washington"
                            >
                            </input>
                        </label>
                        <label htmlFor="streetAddress" className="form__label">
                            Street Address
                            <input type="text"
                                name="streetAddress"
                                id="streetAddress"
                                className="form__field"
                                placeholder="33 Pearl Street SW"
                            >
                            </input>
                        </label>
                        <label htmlFor="city" className="form__label">
                            City
                            <input type="text"
                                name="city"
                                id="city"
                                className="form__field"
                                placeholder="Washington"
                            >
                            </input>
                        </label>
                        <label htmlFor="country" className="form__label">
                            Country
                            <input type="text"
                                name="country"
                                id="country"
                                className="form__field"
                                placeholder="USA"
                            >
                            </input>
                        </label>
                    </div>
                    <div className="form__contact-div">
                        <h2 className="form__subheader">Contact Details</h2>
                        <label htmlFor="contactName" className="form__label">
                            Contact Name
                            <input type="text"
                                name="contactName"
                                id="contactName"
                                className="form__field"
                                placeholder="Graeme Lyon"
                            >
                            </input>
                        </label>
                        <label htmlFor="position" className="form__label">
                            Position
                            <input type="text"
                                name="position"
                                id="position"
                                className="form__field"
                                placeholder="Warehouse Manager"
                            >
                            </input>
                        </label>
                        <label htmlFor="phoneNumber" className="form__label"
                            onChange={validatePhoneNumber}>
                            Phone Number
                            <input type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="form__field"
                                placeholder="+1(647)504-0911"
                            >
                            </input>
                        </label>
                        <label htmlFor="email" className="form__label">
                            Email
                            <input type="email"
                                name="email"
                                id="email"
                                className="form__field"
                                placeholder="glyon@instock.com"
                            >
                            </input>
                        </label>
                    </div>
                </div>
                <div className="form__buttons-div">
                    <button type="button" className="form__button"> Cancel </button>
                    <button type="submit" className="form__button form__button--save"> Save </button>
                </div>

            </form>
        </div>

    )

}

export default EditWarehouse