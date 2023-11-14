import "./InventoryItemDetails.scss";
import backButton from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function InventoryItemDetails() {
    const { id } = useParams();
    const [itemData, setItemData] = useState("");
    const [warehouseId, setWarehouseId] = useState("");
    const [warehouseName, setWarehouseName] = useState("");
    const warehouseArry = ['dummy', 'Manhattan', 'Washington', 'Jersey', 'SF', 'Santa Monica', 'Seattle', 'Miami', 'Boston'];

    useEffect(() => {
        async function getInventoryItem() {
            const response = await axios.get(`http://localhost:8080/api/inventories/${id}`);
            setItemData(response.data);
            setWarehouseId(itemData.warehouse_id)
            console.log(itemData);
        }
        getInventoryItem();
    }, [id]);

    function styleStockStat() {
        let stockStat = itemData.status;
        if (stockStat === "Out of Stock") {
            return stockStat = false;
        } else {
            return stockStat = true;
        };
    }


    return (
        <main>
            <Header />
            <section className="item">
                <div className="item__header-div">
                    <div className="item__title-div">
                        <img src={backButton} alt="blue arrow pointing left" className="item__image"></img>
                        <h1 className="item__page-header">{itemData.item_name}</h1>
                    </div>
                    <button type="button" className="item__edit-button">
                        <img src={editIcon} alt="pencil icon" className="item__edit-icon"></img>
                        <p className="item__button-text"> Edit</p>
                    </button>
                </div>
                <div className="item__description-div">
                    <div className="item__left-div">
                        <h3 className="item__category-header">ITEM DESCRIPTION:</h3>
                        <p className="item__category-description">{itemData.description}</p>
                        <h3 className="item__category-header">CATEGORY:</h3>
                        <p className="item__category-description">{itemData.category}</p>
                    </div>
                    <div className="item__right-div">
                        <div className="item__details-div">
                            <div className="item__status-quant-div">
                                <div className="item__status-div">
                                    <h3 className="item__category-header">STATUS:</h3>
                                    <p className={styleStockStat() ? "item__category-stock" : "item__category-stock--out"}>{itemData.status}</p>
                                </div>
                                <div className="item__quant-div">
                                    <h3 className="item__category-header">QUANTITY:</h3>
                                    <p className="item__category-description">{itemData.quantity}</p>
                                </div>
                            </div>
                        </div>
                        <div className="item__warehouse-div">
                            <h3 className="item__category-header">WAREHOUSE:</h3>
                            <p className="item__category-description">{warehouseArry[itemData.warehouse_id]}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default InventoryItemDetails;
