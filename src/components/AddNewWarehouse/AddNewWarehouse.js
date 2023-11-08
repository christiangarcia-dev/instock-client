import "../AddNewWarehouse/AddNewWarehouse.scss";

function AddNewWarehouse () {

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