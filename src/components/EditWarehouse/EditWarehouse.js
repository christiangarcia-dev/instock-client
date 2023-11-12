import "../EditWarehouse/EditWarehouse.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorImg from "../../assets/icons/error-24px.svg";
import { useState } from "react";

function EditWarehouse() {

    const [phoneInvaild, setPhoneInvalid] = useState(true);
    const [inputRequired, setInputRequired] = useState(false);


    function validatePhoneNumber(event) {
        const phoneNumberInput = event.target.value;

        const inputValidation = new RegExp("^\\+[1-9]{1}[0-9]{0,2}\([0-9]{0,3}\)[2-9]{1}[0-9]{2}-[0-9]{4}$/g");
        console.log(inputValidation.test(phoneNumberInput));

        if (inputValidation.test(phoneNumberInput) === false) {
            setPhoneInvalid(false);
        } else {
            setPhoneInvalid (true)
        }

    }

    function validateEmail(event) {
        const email = event.target.email.value;

    }

    function requiredFieldValidate(event) {
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
            setInputRequired(false)
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
                            <div className={inputRequired ? "form__missing-input" : "form__missing-input--display"}>
                                <img src={errorImg} alt="red exclamation point"></img>
                                <p className="form__invalid-text">
                                    This field is required.
                                </p>
                            </div>
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
                            <div className={inputRequired ? "form__missing-input" : "form__missing-input--display"}>
                                <img src={errorImg} alt="red exclamation point"></img>
                                <p className="form__invalid-text">
                                    This field is required.
                                </p>
                            </div>
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
                            <div className={inputRequired ? "form__missing-input" : "form__missing-input--display"}>
                                <img src={errorImg} alt="red exclamation point"></img>
                                <p className="form__invalid-text">
                                    This field is required.
                                </p>
                            </div>
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
                            <div className={inputRequired ? "form__missing-input" : "form__missing-input--display"}>
                                <img src={errorImg} alt="red exclamation point"></img>
                                <p className="form__invalid-text">
                                    This field is required.
                                </p>
                            </div>
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
                            <div className={inputRequired ? "form__missing-input" : "form__missing-input--display"}>
                                <img src={errorImg} alt="red exclamation point"></img>
                                <p className="form__invalid-text">
                                    This field is required.
                                </p>
                            </div>
                        </label>
                        <label htmlFor="phoneNumber" className="form__label"
                            onChange={validatePhoneNumber}
                        >
                            Phone Number
                            <input type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="form__field"
                                placeholder="+1(647)504-0911"
                            >
                            </input>
                            <div className={phoneInvaild ? "form__missing-input" : "form__missing-input--display"}>
                                <img src={errorImg} alt="red exclamation point"></img>
                                <p className="form__invalid-text">
                                    Please enter phone number using the format +x(xxx)xxx-xxxx.
                                </p>
                            </div>
                        </label>
                        <label htmlFor="email" className="form__label">
                            Email
                            <input type="email"
                                name="email"
                                id="email"
                                className="form__field"
                                placeholder="glyon@instock.com"
                                onChange={requiredFieldValidate}
                            >
                            </input>
                            <div className={inputRequired ? "form__missing-input" : "form__missing-input--display"}>
                                <img src={errorImg} alt="red exclamation point"></img>
                                <p className="form__invalid-text">
                                    A valid email is required.
                                </p>
                            </div>
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