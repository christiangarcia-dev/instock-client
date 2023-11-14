import "./EditInventory.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorImg from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const EditInventory = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [warehouses, setWarehouses] = useState([]);
  const [isInStock, setIsInStock] = useState(false);

  useEffect(() => {
    async function getItemDetails() {
      const response = await axios.get(
        `http://localhost:8080/api/inventories/${id}`
      );
      const data = response.data;
      setItem(data);
      setIsInStock(data.status === "In Stock");
    }

    async function getWarehouses() {
      const response = await axios.get(`http://localhost:8080/api/warehouses`);
      setWarehouses(response.data);
    }

    getItemDetails();
    getWarehouses();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setIsInStock(e.target.value === "In Stock");
  };

  const [inputItemNameRequired, setInputItemNameRequired] = useState(true);
  const [inputDescriptionRequired, setInputDescriptionRequired] =
    useState(true);
  const [inputCategoryRequired, setInputCategoryRequired] = useState(true);
  const [inputWarehouseRequired, setInputWarehouseRequired] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const item_name = e.target.item_name.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const status = e.target.status.value;
    let quantity = e.target.quantity.value;
    const warehouse_id = e.target.warehouse.value;

    if (!item_name) {
      setInputItemNameRequired(false);
    }
    if (!description) {
      setInputDescriptionRequired(false);
    }
    if (!category) {
      setInputCategoryRequired(false);
    }
    if (!warehouse_id) {
      setInputWarehouseRequired(false);
    }

    if (!status) {
      quantity = 0;
    }

    const body = {
      warehouse_id,
      item_name,
      description,
      category,
      status,
      quantity,
    };

    const response = await axios.put(
      `http://localhost:8080/api/inventories/${id}`,
      JSON.stringify(body)
    );

    // add routing
  };

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
          <h1 className="form__header"> Edit Inventory Item</h1>
        </div>
        <form className="form__form" onSubmit={handleSubmit}>
          <div className="form__content-div">
            <div className="form__warehouse-div">
              <h2 className="form__subheader">Item Details</h2>
              <label htmlFor="item_name" className="form__label">
                Item Name
                <input
                  type="text"
                  name="item_name"
                  id="item_name"
                  className="form__field"
                  placeholder="Item Name"
                  value={item.item_name}
                  onChange={handleInputChange}
                  required
                ></input>
                <div
                  className={
                    inputItemNameRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="description" className="form__label">
                Description
                <textarea
                  name="description"
                  id="description"
                  className="form__field"
                  placeholder="Description"
                  value={item.description}
                  onChange={handleInputChange}
                ></textarea>
                <div
                  className={
                    inputDescriptionRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="category" className="form__label">
                Category
                <select
                  name="category"
                  id="category"
                  className="form__field"
                  placeholder="Description"
                  value={item.category}
                  onChange={handleInputChange}
                >
                  <option value="">Please select</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health">Health</option>
                </select>
                <div
                  className={
                    inputCategoryRequired
                      ? "form__missing-input"
                      : "form__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="form__invalid-text">This field is required.</p>
                </div>
              </label>
            </div>
            <div className="form__warehouse-div">
              <h2 className="form__subheader">Item Availability</h2>
              <div className="edit-inventory__status">
                <label htmlFor="statusInStock">
                  <input
                    type="radio"
                    id="statusInStock"
                    name="status"
                    value="In Stock"
                    checked={isInStock}
                    onChange={handleRadioChange}
                  />
                  In Stock
                </label>
                <label htmlFor="statusOutOfStock">
                  <input
                    type="radio"
                    id="statusOutOfStock"
                    name="status"
                    value="Out of Stock"
                    checked={!isInStock}
                    onChange={handleRadioChange}
                  />
                  Out of Stock
                </label>
              </div>

              {isInStock && (
                <div className="edit-inventory__quantity">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={item.quantity}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
              )}
              <label htmlFor="warehouse" className="form__label">
                Warehouse
                <select
                  name="warehouse"
                  id="warehouse"
                  className="form__field"
                  value={item.warehouse}
                  onChange={handleInputChange}
                >
                  <option value="">Please select</option>
                  {warehouses.map((warehouse, index) => {
                    return (
                      <option key={index} value={warehouse.id}>
                        {warehouse.warehouse_name}
                      </option>
                    );
                  })}
                </select>
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
};

export default EditInventory;
