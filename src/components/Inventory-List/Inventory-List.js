import "./Inventory-List.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteInventory from "../DeleteInventory/DeleteInventory";
import { Link } from "react-router-dom";
import sort from "../../assets/icons/sort-24px.svg";

function InventoryList() {
  const [inventories, setInventories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedInventory, setSelecetedInventory] = useState(null);

  const handleOpenPop = (selectedInventory) => {
    setSelecetedInventory(selectedInventory);
    setOpenModal(true);
  };

  useEffect(() => {
    async function getInventories() {
      const response = await axios.get("http://localhost:8080/api/inventories");
      setInventories(response.data);
    }
    getInventories();
  }, []);

  return (
    <section className="inventory__list">
      <section className="inventorylist__containerOne">
        <h2 className="inventorylist__containerOne-title">Inventory</h2>
        <div className="inventory__nav">
          <input
            className="inventorylist__containerOne-search"
            type="text"
            placeholder="Search..."
          ></input>
          <Link
            className="inventorylist__container-link"
            to={`/add-inventory-form`}
          >
            <button className="inventorylist__containerOne-add">
              + Add New Inventory
            </button>
          </Link>
        </div>
      </section>

      <div className="inventorylist__titles">
        <h6 className="inventory__allInventories--titleWare">
          INVENTORY ITEM
          <img
            className="inventory__allInventories--sort"
            src={sort}
            alt="sort icon"
          />
        </h6>
        <h6 className="inventory__allInventories--titleAddress">
          CATEGORY
          <img
            className="inventory__allInventories--sort"
            src={sort}
            alt="sort icon"
          />
        </h6>
        <h6 className="inventory__allInventories--titleContact">
          STATUS
          <img
            className="inventory__allInventories--sort"
            src={sort}
            alt="sort icon"
          />
        </h6>
        <h6 className="inventory__allInventories--titleContact">
          QTY
          <img
            className="inventory__allInventories--sort"
            src={sort}
            alt="sort icon"
          />
        </h6>
        <h6 className="inventory__allInventories--titleInfo">
          WAREHOUSE
          <img
            className="inventory__allInventories--sort"
            src={sort}
            alt="sort icon"
          />
        </h6>
        <h6 className="inventorylist__titles-titleAct">ACTIONS</h6>
      </div>

      {inventories?.map((inventory) => (
        <section
          key={inventory.id}
          className="inventorylist__containerTwo--tablet"
        >
          <Link to={`/inventory-details/${inventory.id}`}>
            <p className="inventory__allInventories-typeItem">
              {" "}
              {inventory.item_name}
              <img src={chevronRight} alt="chevron right for inventory" />
            </p>
          </Link>
          <div className="address-info-tablet">
            <p className="inventory__allInventories-address">
              {inventory.category}
            </p>
          </div>
          <p
            className={`inventory__allInventories-name inventory__allInventories-name1 ${
              inventory.status === "In Stock"
                ? "inventory__allInventories-name--green"
                : "inventory__allInventories-name--red"
            }`}
          >
            {inventory.status}
          </p>
          <p className="inventory__allInventories-name">{inventory.quantity}</p>
          <div className="contact-info">
            <p className="inventory__allInventoriescontact_phone">
              {inventory.warehouse_name}
            </p>
          </div>
          <div className="inventory__allInventories-buttons">
            <img
              className="inventory__allInventories-delete"
              src={deleteIcon}
              alt="delete icon"
              onClick={() => handleOpenPop(inventory.id)}
            />
            <Link to={`edit-inventory-form/${inventory.id}`}>
              <img
                className="inventory__allInventories-edit"
                src={editIcon}
                alt="edit icon"
              />
            </Link>
          </div>
        </section>
      ))}

      {inventories?.map((inventory) => (
        <section key={inventory.id} className="inventorylist__containerTwo">
          <div className="inventory__allInventories">
            <div className="inventory__allInventories-one">
              <div className="inventory">
                <h6 className="inventory__allInventories-titleWare">
                  INVENTORY ITEM
                </h6>
                <Link to={`/inventory-details/${inventory.id}`}>
                  <p className="inventory__allInventories-typeItem">
                    {" "}
                    {inventory.item_name}
                    <img src={chevronRight} alt="chevron right for inventory" />
                  </p>
                </Link>
              </div>
              <div className="address">
                <h6 className="inventory__allInventories-titleAddress">
                  CATEGORY
                </h6>
                <p className="inventory__allInventories-address">
                  {inventory.category}
                </p>
              </div>
            </div>
            <div className="inventory__allInventories-two">
              <h6 className="inventory__allInventories-titleContact">STATUS</h6>
              <p
                className={`inventory__allInventories-name inventory__allInventories-name1 ${
                  inventory.status === "In Stock"
                    ? "inventory__allInventories-name--green"
                    : "inventory__allInventories-name--red"
                }`}
              >
                {inventory.status}
              </p>
              <h6 className="inventory__allInventories-titleContact">QTY</h6>
              <p className="inventory__allInventories-name">
                {inventory.quantity}
              </p>
              <h6 className="inventory__allInventories-titleContact">
                WAREHOUSE
              </h6>
              <p className="inventory__allInventories-name">
                {inventory.warehouse_name}
              </p>
            </div>
          </div>
          <div className="inventory__allInventories-buttons">
            <img
              className="inventory__allInventories-delete"
              src={deleteIcon}
              alt="delete icon"
              onClick={() => handleOpenPop(inventory.id)}
            />
            <Link to={`edit-inventory-form/${inventory.id}`}>
              <img
                className="inventory__allInventories-edit"
                src={editIcon}
                alt="edit icon"
              />
            </Link>
          </div>
        </section>
      ))}
      {openModal && (
        <DeleteInventory
          openDelete={setOpenModal}
          inventory={selectedInventory}
        />
      )}
    </section>
  );
}

export default InventoryList;
