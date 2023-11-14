import "./WarehouseInventory.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightArrowIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useNavigate } from "react-router-dom";

function WarehouseInventory() {
  const { id: warehouseId } = useParams();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [inventoryItems, setInventoryItems] = useState([]);

  const navigate = useNavigate();

  // Get inventory items for specific specific warehouse
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        // make warehouse id dynamic with useParams once warehouse list is up
        const response = await axios.get(
          `http://localhost:8080/api/inventories`
        );
        const allInventories = response.data;
        const warehouseInventory = allInventories.filter(
          (item) => item.warehouse_id === Number(warehouseId)
        );
        setInventoryItems(warehouseInventory);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    fetchInventory();

    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [warehouseId]);

  // Delete specific inventory item for specific warehouse
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/warehouses/${warehouseId}/inventories/${itemId}`
      );
      setInventoryItems(inventoryItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  const handleEdit = (itemId) => {
    navigate(`/edit-inventory-form/${itemId}`);
  };

  if (isMobileView) {
    // Mobile JSX
    return (
      <section className="warehouse-inventoryMB">
        {inventoryItems.map((item) => (
          <article key={item.id} className="warehouse-inventoryMB__item">
            <div>
              <div className="warehouse-inventoryMB__flex--group">
                {/* item group*/}
                <div className="warehouse-inventoryMB__title--group">
                  <h2 className="warehouse-inventoryMB__title warehouse-inventoryMB__label">
                    Inventory Item:
                  </h2>
                  <div className="warehouse-inventoryMB__title--text-icon">
                    <p className="warehouse-inventoryMB__title--value">
                      {item.item_name}
                      <img
                        className="warehouse-inventoryMB__detail-icon"
                        src={rightArrowIcon}
                        alt="Details"
                      />
                    </p>
                  </div>
                </div>

                {/* status group */}
                <div className="warehouse-inventoryMB__status--group">
                  <h2 className="warehouse-inventoryMB__status warehouse-inventoryMB__label">
                    Status:
                  </h2>
                  {/* <p className='warehouse-inventoryMB__status--value'>{item.status}</p> */}
                  <p
                    className={`warehouse-inventoryMB__status--value ${
                      item.status === "In Stock"
                        ? "warehouse-inventoryMB__status--value-instock"
                        : "warehouse-inventoryMB__status--value-outofstock"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>
              </div>

              <div className="warehouse-inventoryMB__flex--group">
                {/* category group */}
                <div className="warehouse-inventoryMB__category--group">
                  <h2 className="warehouse-inventoryMB__category warehouse-inventoryMB__label">
                    Category:
                  </h2>
                  <p className="warehouse-inventoryMB__category--value">
                    {item.category}
                  </p>
                </div>

                {/* quantitiy group */}
                <div className="warehouse-inventoryMB__quantity--group">
                  <h2 className="warehouse-inventoryMB__quantity warehouse-inventoryMB__label">
                    Qty:
                  </h2>
                  <p className="warehouse-inventoryMB__quantity--value">
                    {item.quantity}
                  </p>
                </div>
              </div>
            </div>

            {/* action buttons group */}
            <div className="warehouse-inventoryMB__actions">
              <img
                className="warehouse-inventoryMB__action warehouse-inventoryMB__action--delete"
                src={deleteIcon}
                alt="Delete"
                onClick={() => handleDelete(item.id)}
              />
              <img
                className="warehouse-inventoryMB__action warehouse-inventoryMB__action--edit"
                src={editIcon}
                alt="Edit"
                onClick={() => handleEdit(item.id)}
              />
            </div>
          </article>
        ))}
      </section>
    );
  } else {
    // Tablet and desktop view JSX
    return (
      <div className="warehouse-inventory">
        <div className="warehouse-inventory__table">
          <div className="warehouse-inventory__header">
            <div className="warehouse-inventory__header-item">
              Inventory Item
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-inventory__sort-icon"
              />
            </div>
            <div className="warehouse-inventory__header-item">
              Category
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-inventory__sort-icon"
              />
            </div>
            <div className="warehouse-inventory__header-item">
              Status
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-inventory__sort-icon"
              />
            </div>
            <div className="warehouse-inventory__header-item">
              Quantity
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-inventory__sort-icon"
              />
            </div>
            <div className="warehouse-inventory__header-item warehouse-inventory__header-item--actions">
              Actions
            </div>
          </div>
          {inventoryItems.map((item) => (
            <div className="warehouse-inventory__row" key={item.id}>
              <div className="warehouse-inventory__row-item">
                {item.item_name}
                <img
                  src={rightArrowIcon}
                  alt="right arrow icon"
                  className="warehouse-inventory__arrow-icon"
                ></img>
              </div>
              <div className="warehouse-inventory__row-item">
                {item.category}
              </div>
              <div className="warehouse-inventory__row-item">
                <p
                  className={`warehouse-inventory__row-item--status ${
                    item.status === "In Stock"
                      ? "warehouse-inventory__row-item--status-instock"
                      : "warehouse-inventory__row-item--status-outofstock"
                  }`}
                >
                  {item.status}
                </p>
              </div>
              <div className="warehouse-inventory__row-item">
                {item.quantity}
              </div>
              <div className="warehouse-inventory__row-item warehouse-inventory__row-item--actions">
                <img
                  src={editIcon}
                  alt="Edit"
                  onClick={() => alert("Edit item id " + item.id)}
                />
                <img
                  src={deleteIcon}
                  alt="Delete"
                  onClick={() => alert("Delete item id " + item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WarehouseInventory;
