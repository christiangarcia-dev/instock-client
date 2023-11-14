import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import './Warehouse-Details.scss'

function WarehouseDetails() {
  const { id } = useParams(); // Get the warehouse ID from the URL params
  const [warehouseData, setWarehouseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching warehouse data for ID:", id);

    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/warehouses/${id}`);
        if (response.status === 200) {
          setWarehouseData(response.data);
        } else {
          console.error("Failed to fetch warehouse data");
        }
    } catch (error) {
        console.error("Error fetching warehouse data:", error);
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
      } finally {
        setLoading(false);
      }
      
    };

    fetchWarehouseData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!warehouseData) {
    return <p>Warehouse not found</p>;
  }

  return (
    <section className="details">
      <div className="details__upper">
        <div className="details__upper-left">
          <Link to="/" className="details__upper-back">
            <img className="details__upper-backIcon" src={backIcon} alt="Back" />
          </Link>
          <h2 className="details__upper-title">{warehouseData.warehouse_name}</h2>
        </div>
        <div className="details__upper-right">
          <Link to="" className="details__upper-edit">
            <img className="details__upper-editIcon" src={editIcon} alt="Edit icon" />
          </Link>
        </div>
      </div>
      <section className="details__info">
        <div className="details__info-address">
          <h6 className="details__info-lbl">WAREHOUSE ADDRESS:</h6>
          <p className="details__info-location">
            {warehouseData.address}, {warehouseData.city}, {warehouseData.country}
          </p>
        </div>
        <div className="details__info-contact">
          <div className="details__info-name">
            <h6 className="details__info-lbl">CONTACT NAME:</h6>
            <p className="details__info-content">{warehouseData.contact_name}</p>
            <p className="details__info-content">{warehouseData.contact_position}</p>
          </div>
          <div className="details__info-contactinfo">
            <h6 className="details__info-lbl">CONTACT INFORMATION:</h6>
            <p className="details__info-number">{warehouseData.contact_phone}</p>
            <p className="details__info-email">{warehouseData.contact_email}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WarehouseDetails;
