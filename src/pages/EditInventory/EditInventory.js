import "./EditInventory.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorImg from "../../assets/icons/error-24px.svg";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const EditInventory = () => {
  // // State for the form fields
  // const [inventoryItem, setInventoryItem] = useState({
  //   itemName: "",
  //   description: "",
  //   category: "",
  //   status: "In Stock", // default to 'In Stock'
  //   quantity: "",
  //   warehouse: "",
  // });

  const fetchedInventoryItem = {
    itemName: "Television",
    description:
      'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
    category: "Electronics",
    status: "In Stock", // Assuming 'In Stock' or 'Out of Stock' is returned by the API
    quantity: 500,
    warehouse: "Washington",
  };

  // Categories and warehouses should be fetched from the backend or defined
  const categories = ["Electronics", "Furniture", "Apparel"]; // Example categories
  const warehouses = ["New York", "Los Angeles", "Chicago"]; // Example warehouses

  // State for the form fields, initially set to the fetched inventory item
  const [inventoryItem, setInventoryItem] = useState(fetchedInventoryItem);

  const [validation, setValidation] = useState({
    itemName: true,
    description: true,
    category: true,
    status: true, // assuming you want to validate status as well
    quantity: true,
    warehouse: true,
  });

  // Function to handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventoryItem({ ...inventoryItem, [name]: value });
    // Reset validation for the changed field
    setValidation({ ...validation, [name]: true });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    const newValidation = {
      itemName: !!inventoryItem.itemName,
      description: !!inventoryItem.description,
      category: !!inventoryItem.category,
      quantity:
        inventoryItem.status === "In Stock"
          ? !isNaN(inventoryItem.quantity) && inventoryItem.quantity > 0
          : true,
      warehouse: !!inventoryItem.warehouse,
    };

    setValidation(newValidation);

    // Check if all validations are true
    const isValid = Object.values(newValidation).every((value) => value);

    if (isValid) {
      // Make the API request to submit the data
      // Replace console.log with actual API call
      console.log("Submitted data:", inventoryItem);
      // You would typically have an API call here
      // axios.put('/api/inventory/' + inventoryItem.id, inventoryItem)
      //   .then(response => {
      //     // handle success
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     // handle error
      //     console.log(error);
      //   });
    }
  };

  // Function to toggle In Stock/Out of Stock status
  const toggleStatus = () => {
    setInventoryItem({
      ...inventoryItem,
      status: inventoryItem.status === "In Stock" ? "Out of Stock" : "In Stock",
      quantity: "", // Clear quantity when status changes
    });
  };

  // Function to handle cancel action
  const handleCancel = () => {
    // You can redirect the user to the previous page or clear the form
    // history.goBack() with react-router or simply reset the form
    setInventoryItem({
      itemName: "",
      description: "",
      category: "",
      status: "In Stock",
      quantity: "",
      warehouse: "",
    });
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
          />
          <h1 className="form__header">Edit Inventory Item</h1>
        </div>
        <form className="form__form" onSubmit={handleSubmit}>
          <div className="form__content-div">
            <div className="form__details-div">
              <h2 className="form__subheader">Item Details</h2>
              <label htmlFor="itemName" className="form__label">
                Item Name
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  className={`form__field ${
                    validation.itemName ? "" : "form__field--error"
                  }`}
                  placeholder="Item Name"
                  value={inventoryItem.itemName}
                  onChange={handleInputChange}
                />
                {!validation.itemName && (
                  <p className="form__invalid-text">Item Name is required.</p>
                )}
              </label>
              <label htmlFor="description" className="form__label">
                Description
                <textarea
                  name="description"
                  id="description"
                  className={`form__field form__field--textarea ${
                    validation.description ? "" : "form__field--error"
                  }`}
                  placeholder="Description"
                  value={inventoryItem.description}
                  onChange={handleInputChange}
                />
                {!validation.description && (
                  <p className="form__invalid-text">Description is required.</p>
                )}
              </label>
              <label htmlFor="category" className="form__label">
                Category
                <select
                  name="category"
                  id="category"
                  className={`form__field ${
                    validation.category ? "" : "form__field--error"
                  }`}
                  value={inventoryItem.category}
                  onChange={handleInputChange}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {!validation.category && (
                  <p className="form__invalid-text">Category is required.</p>
                )}
              </label>
            </div>
            {/* The rest of the item availability section will continue from here */}
          </div>
          {/* ... */}
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default EditInventory;
