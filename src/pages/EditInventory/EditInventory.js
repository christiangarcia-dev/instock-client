import "./EditInventory.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorImg from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const EditInventory = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [item, setItem] = useState({});
  const [requiredStatus, setRequiredStatus] = useState({
    item_name: true,
    description: true,
    category: true,
    warehouse_id: true
  })
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

  const goBack = () => {
    navigate(-1)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
    setRequiredStatus({...requiredStatus, [name]: true})
  };

  const handleRadioChange = (e) => {
    setIsInStock(e.target.value === "In Stock");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const item_name = e.target.item_name.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const status = e.target.status.value;
    let quantity = e.target.quantity.value;
    const warehouse_id = e.target.warehouse_id.value;

    if (!item_name) {
      setRequiredStatus({...requiredStatus, item_name: false})
      return
    }
    if (!description) {
      setRequiredStatus({...requiredStatus, description: false})
      return
    }
    if (!category) {
      setRequiredStatus({...requiredStatus, category: false})
      return
    }
    if (!warehouse_id) {
      setRequiredStatus({...requiredStatus, warehouse_id: false})
      return
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

    try {
      await axios.put(
        `http://localhost:8080/api/inventories/${id}`,
        JSON.stringify(body)
      );
    } catch (e) {
      console.error(e)
      return
    }

    goBack()
  };

  return (
    <section>
      <Header />
      <div className="xform">
        <div className="xform__header-div">
          <img
            src={backArrow}
            alt="arrow pointing left"
            className="xform__back-arrow"
            onClick={goBack}
          />
          <h1 className="xform__header"> Edit Inventory Item</h1>
        </div>
        <form className="xform__form" onSubmit={handleSubmit}>
          <div className="xform__content-div">
            <div className="xform__warehouse-div">
              <h2 className="xform__subheader">Item Details</h2>
              <label htmlFor="item_name" className="xform__label">
                Item Name
                <input
                  type="text"
                  name="item_name"
                  id="item_name"
                  className="xform__field"
                  placeholder="Item Name"
                  value={item.item_name}
                  onChange={handleInputChange}
                  required
                ></input>
                <div
                  className={
                    requiredStatus.item_name
                      ? "xform__missing-input"
                      : "xform__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="xform__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="description" className="xform__label">
                Description
                <textarea
                  name="description"
                  id="description"
                  className="xform__field"
                  placeholder="Description"
                  value={item.description}
                  onChange={handleInputChange}
                ></textarea>
                <div
                  className={
                    requiredStatus.description
                      ? "xform__missing-input"
                      : "xform__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="xform__invalid-text">This field is required.</p>
                </div>
              </label>
              <label htmlFor="category" className="xform__label">
                Category
                <select
                  name="category"
                  id="category"
                  className="xform__field"
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
                    requiredStatus.category
                      ? "xform__missing-input"
                      : "xform__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="xform__invalid-text">This field is required.</p>
                </div>
              </label>
            </div>
            <div className="xform__warehouse-div">
              <h2 className="xform__subheader">Item Availability</h2>
              <div className="xedit-inventory__status">
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
                <div className="xedit-inventory__quantity">
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
              <label htmlFor="warehouse_id" className="xform__label">
                Warehouse
                <select
                  name="warehouse_id"
                  id="warehouse_id"
                  className="xform__field"
                  value={item.warehouse_id}
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
                    requiredStatus.warehouse_id
                      ? "xform__missing-input"
                      : "xform__missing-input--display"
                  }
                >
                  <img src={errorImg} alt="red exclamation point"></img>
                  <p className="xform__invalid-text">This field is required.</p>
                </div>
              </label>
            </div>
          </div>
          <div className="xform__buttons-div">
            <button type="button" className="xform__button" onClick={goBack}>
              {" "}
              Cancel{" "}
            </button>
            <button type="submit" className="xform__button xform__button--save">
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
