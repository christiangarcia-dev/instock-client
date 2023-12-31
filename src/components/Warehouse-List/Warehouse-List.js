import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehouseModal"; // Adjust the path as necessary
import "./Warehouse-List.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link, useParams } from "react-router-dom";

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    useEffect(() => {
    async function getWarehouses() {
        const response = await axios.get("http://localhost:8080/api/warehouses");
        setWarehouses(response.data);
    }
    getWarehouses();
    }, []);

    const openModal = (warehouseId) => {
        const warehouseToDelete = warehouses.find(warehouse => warehouse.id === warehouseId);
        if (warehouseToDelete) {
            setSelectedWarehouse(warehouseToDelete);
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };

    const confirmDelete = async () => {
        if (selectedWarehouse) {
            await handleDeleteWarehouse(selectedWarehouse.id);
        }
    };

    const handleDeleteWarehouse = async (warehouseId) => {
        try {
            await axios.delete(`http://localhost:8080/api/warehouses/${warehouseId}`);
            setWarehouses(warehouses.filter((warehouse) => warehouse.id !== warehouseId));
            closeModal();
        } catch (error) {
            console.error("Error deleting warehouse:", error);
        }
    };

    return (
    <section className="warehouse__list">
        <section className="warehouselist__containerOne">
        <h2 className="warehouselist__containerOne-title">Warehouses</h2>
        <div className="warehouse__nav">
            <input
            className="warehouselist__containerOne-search"
            type="text"
            placeholder="Search..."
            ></input>
            <Link className="warehouselist__container-link" to={`/add-warehouse-form`}>
                <button className="warehouselist__containerOne-add">
                + Add New Warehouse
                </button>
            </Link>
        </div>
        </section>

        <div className="warehouselist__titles">
        <h6 className="warehouse__allWarehouses--titleWare">
            WAREHOUSE
            <img className="warehouse__allWarehouses--sort" src={sortIcon} alt="sort icon" />
        </h6>
        <h6 className="warehouse__allWarehouses--titleAddress">
            ADDRESS
            <img className="warehouse__allWarehouses--sort" src={sortIcon} alt="sort icon" />
        </h6>
        <h6 className="warehouse__allWarehouses--titleContact">
            CONTACT NAME
            <img className="warehouse__allWarehouses--sort" src={sortIcon} alt="sort icon" />
        </h6>
        <h6 className="warehouse__allWarehouses--titleInfo">
            CONTACT INFORMATION
            <img className="warehouse__allWarehouses--sort" src={sortIcon} alt="sort icon" />
        </h6>
        <h6 className="warehouselist__titles-titleAct">ACTIONS</h6>
        </div>

        {warehouses?.map((warehouse) => (
        <section
            key={warehouse.id}
            className="warehouselist__containerTwo--tablet"
        >
            <Link to={`/warehouse-details/${warehouse.id}`}>
            <p className="warehouse__allWarehouses-typeItem">
                {" "}
                {warehouse.warehouse_name}
                <img src={chevronRight} alt="chevron right for warehouse" />
            </p>
            </Link>
            <div className="address-info-tablet">
            <p className="warehouse__allWarehouses-address">
                {warehouse.address}
            </p>
            <p>
                {warehouse.city}, {warehouse.country}
            </p>
            </div>
            <p className="warehouse__allWarehouses-name">
            {warehouse.contact_name}
            </p>
            <div className="contact-info">
            <p className="warehouse__allWarehousescontact_phone">
                {warehouse.contact_phone}
            </p>
            <p className="warehouse__allWarehousescontact_email">
                {warehouse.contact_email}
            </p>
            </div>
            <div className="warehouse__allWarehouses-buttons">
                <img
                    className="warehouse__allWarehouses-delete"
                    src={deleteIcon}
                    alt="delete icon"
                    onClick={() => openModal(warehouse.id)}
                />
                <Link to={`edit-warehouse-form/${warehouse.id}`}>
                    <img
                        className="warehouse__allWarehouses-edit"
                        src={editIcon}
                        alt="edit icon"
                    />
                </Link>
            </div>
        </section>
        ))}

        {warehouses?.map((warehouse) => (
        <section key={warehouse.id} className="warehouselist__containerTwo">
            <div className="warehouse__allWarehouses">
            <div className="warehouse__allWarehouses-one">
                <div className="warehouse">
                <h6 className="warehouse__allWarehouses-titleWare">
                    WAREHOUSE
                </h6>
                <Link to={`/warehouse-details/${warehouse.id}`}>
                    <p className="warehouse__allWarehouses-typeItem">
                    {" "}
                    {warehouse.warehouse_name}
                    <img src={chevronRight} alt="chevron right for warehouse" />
                    </p>
                </Link>
                </div>
                <div className="address">
                <h6 className="warehouse__allWarehouses-titleAddress">
                    ADDRESS
                </h6>
                <p className="warehouse__allWarehouses-address">
                    {warehouse.address}
                </p>
                <p>
                    {warehouse.city}, {warehouse.country}
                </p>
                </div>
            </div>
            <div className="warehouse__allWarehouses-two">
                <h6 className="warehouse__allWarehouses-titleContact">
                CONTACT NAME
                </h6>
                <p className="warehouse__allWarehouses-name">
                {warehouse.contact_name}
                </p>
                <h6 className="warehouse__allWarehouses-titleInfo">
                CONTACT INFORMATION
                </h6>
                <div className="contact-info">
                <p className="warehouse__allWarehousescontact_phone">
                    {warehouse.contact_phone}
                </p>
                <p className="warehouse__allWarehousescontact_email">
                    {warehouse.contact_email}
                </p>
                </div>
            </div>
            </div>
            <div className="warehouse__allWarehouses-buttons">
            <img
                className="warehouse__allWarehouses-delete"
                src={deleteIcon}
                alt="delete icon"
                onClick={() => openModal(warehouse.id)}
            />
            <img
                className="warehouse__allWarehouses-edit"
                src={editIcon}
                alt="edit icon"
            />
            </div>
        </section>
        ))}
        <DeleteWarehouseModal
            showModal={modalIsOpen}
            closeModal={closeModal}
            confirmDelete={confirmDelete}
            warehouse={selectedWarehouse} 
        />
    </section>
    );
}

export default WarehouseList;
