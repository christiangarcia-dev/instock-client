import "../AddNewWarehouse/AddNewWarehouse.scss";
import errorImg from "../../assets/icons/error-24px.svg";
import { useState } from "react";

function AddNewWarehouse () {
    const [phoneInvaild, setPhoneInvalid] = useState(true);
    const [inputWarehouseRequired, setInputWarehouseRequired] = useState(true);
    const [inputAddressRequired, setInputAddressRequired] = useState(true);
    const [inputCityRequired, setInputCityRequired] = useState(true);
    const [inputCountryRequired, setInputCountryRequired] = useState(true);
    const [inputNameRequired, setInputNameRequired] = useState(true);
    const [inputPositionRequired, setInputPositionRequired] = useState(true);
    const [inputEmailRequired, setInputEmailRequired] = useState(true);
    

    function validatePhoneNumber(event) {
        const phoneNumberInput = event.target.value;
        console.log(typeof phoneNumberInput);

        const phoneValidation =/^\+\d{1,3}\s?\(\d{1,4}\)\s?\d{1,10}-?\d{1,10}$/;

        console.log(!phoneNumberInput.match(phoneValidation));

        if (!phoneNumberInput.match(phoneValidation)) {
            setPhoneInvalid(false);
        }

    }

    function validateEmail(event) {
        const email = event.target.email.value;
        const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!email.match(emailValidation)){
            setInputEmailRequired(false)
        } 
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

        if (!warehouseName) {
            setInputWarehouseRequired(false)
        } 
        if (!streetAddress) {
            setInputAddressRequired(false)
        } 
        if (!city) {
            setInputCityRequired(false)
        } 
        if (!country) {
            setInputCountryRequired(false)
        }  
        if (!contactName) {
            setInputNameRequired(false)
        }  
        if (!position) {
            setInputPositionRequired(false)
        }  
        if (!phoneNumber) {
            setPhoneInvalid(false)
        }  
        if (!email) {
            setInputEmailRequired(false)
        }  
    }

    return (
        <div className="add-form">
            <div className="add-form__header-div">
                <h1 className="add-form__header"> Add Warehouse</h1>
            </div>
            <form className="add-form__form">
                <div className="add-form__warehouse-div">
                    <h2 className="add-form__subheader">Warehouse Details</h2>
                    <label htmlFor="warehouseName" className="add-form__label">
                        Warehouse Name
                        <input type="text"
                            name="warehouseName"
                            id="warehouseName"
                            className="add-form__field"
                            placeholder="Warehouse Name"
                        >
                        </input>
                    </label>
                    <label htmlFor="streetAddress" className="add-form__label">
                        Street Address
                        <input type="text"
                            name="streetAddress"
                            id="streetAddress"
                            className="add-form__field"
                            placeholder="Street Address"
                        >
                        </input>
                    </label>
                    <label htmlFor="city" className="add-form__label">
                        City
                        <input type="text"
                            name="city"
                            id="city"
                            className="add-form__field"
                            placeholder="City"
                        >
                        </input>
                    </label>
                    <label htmlFor="country" className="add-form__label">
                        Country
                        <input type="text"
                            name="country"
                            id="country"
                            className="add-form__field"
                            placeholder="Country"
                        >
                        </input>
                    </label>
                </div>
                <div className="add-form__contact-div">
                    <h2 className="add-form__subheader">Contact Details</h2>
                    <label htmlFor="contactName" className="add-form__label">
                        Contact Name
                        <input type="text"
                            name="contactName"
                            id="contactName"
                            className="add-form__field"
                            placeholder="Contact Name"
                        >
                        </input>
                    </label>
                    <label htmlFor="position" className="add-form__label">
                        Position
                        <input type="text"
                            name="position"
                            id="position"
                            className="add-form__field"
                            placeholder="Position"
                        >
                        </input>
                    </label>
                    <label htmlFor="phoneNumber" className="add-form__label">
                        Phone Number
                        <input type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="add-form__field"
                            placeholder="Phone Number"
                        >
                        </input>
                    </label>
                    <label htmlFor="email" className="add-form__label">
                        Email
                        <input type="email"
                            name="email"
                            id="email"
                            className="add-form__field"
                            placeholder="Email"
                        >
                        </input>
                    </label>
                </div>
                <div className="add-form__buttons-div">
                    <button type="button" className="add-form__button"> Cancel </button>
                    <button type="submit" className="add-form__button add-form__button--secondary"> +Add Warehouse </button>
                </div>

            </form>
        </div>

    )
}

export default AddNewWarehouse