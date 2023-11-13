import "./EditWarehouse.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorImg from "../../assets/icons/error-24px.svg";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function EditWarehouse() {
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
    const phoneValidation = /^\+\d{1,3}\s?\(\d{1,4}\)\s?\d{1,10}-?\d{1,10}$/;
    setPhoneInvalid(phoneNumberInput.match(phoneValidation));
  }

  function validateEmail(event) {
    const emailInput = event.target.value;
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setInputEmailRequired(emailInput.match(emailValidation));
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
      setInputWarehouseRequired(false);
    }
    if (!streetAddress) {
      setInputAddressRequired(false);
    }
    if (!city) {
      setInputCityRequired(false);
    }
    if (!country) {
      setInputCountryRequired(false);
    }
    if (!contactName) {
      setInputNameRequired(false);
    }
    if (!position) {
      setInputPositionRequired(false);
    }
    if (!phoneNumber) {
      setPhoneInvalid(false);
    }
    if (!email) {
      setInputEmailRequired(false);
    }
  }

  return (
    <section>
      <Header />
      <div className="form">
        <div className="form__header-div">
          <img
            src={backArrow}
            alt="arrow pointing left"
            className="form__back-arrow"
          ></img>
          <h1 className="form__header"> Edit Warehouse</h1>
        </div>
        <form className="form__form" onSubmit={submitHandler}>
          <div className="form__content-div">
            <div className="form__warehouse-div">
              <h2 className="form__subheader">Warehouse Details</h2>
              <label htmlFor="warehouseName" className="form__label">
                Warehouse Name
                <input
                  type="text"
                  name="warehouseName"
                  id="warehouseName"
                  className="form__field"
                  placeholder="Washington"
                ></input>
                <div
                  className={
                    inputWarehouseRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="streetAddress" className="form__label">
                Street Address
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  className="form__field"
                  placeholder="33 Pearl Street SW"
                ></input>
                <div
                  className={
                    inputAddressRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="city" className="form__label">
                City
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form__field"
                  placeholder="Washington"
                ></input>
                <div
                  className={
                    inputCityRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="country" className="form__label">
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="form__field"
                  placeholder="USA"
                ></input>
                <div
                  className={
                    inputCountryRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
            </div>
            <div className="form__contact-div">
              <h2 className="form__subheader">Contact Details</h2>
              <label htmlFor="contactName" className="form__label">
                Contact Name
                <input
                  type="text"
                  name="contactName"
                  id="contactName"
                  className="form__field"
                  placeholder="Graeme Lyon"
                ></input>
                <div
                  className={
                    inputNameRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="position" className="form__label">
                Position
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="form__field"
                  placeholder="Warehouse Manager"
                ></input>
                <div
                  className={
                    inputPositionRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
              <label
                htmlFor="phoneNumber"
                className="form__label"
                onChange={validatePhoneNumber}
              >
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="form__field"
                  placeholder="+1(647)504-0911"
                ></input>
                <div
                  className={
                    phoneInvaild
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">
                    Please enter phone number using the format +x(xxx)xxx-xxxx.
                  </p>
                </div>
              </label>
              <label htmlFor="email" className="form__label">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__field"
                  placeholder="glyon@instock.com"
                  onChange={validateEmail}
                ></input>
                <div
                  className={
                    inputEmailRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">
                    A valid email is required.
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div className="form__buttons-div">
            <button type="button" className="form__button">
              {" "}
              Cancel{" "}
            </button>
            <button type="submit" className="form__button form__button--save">
              {" "}
              Save{" "}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default EditWarehouse;
