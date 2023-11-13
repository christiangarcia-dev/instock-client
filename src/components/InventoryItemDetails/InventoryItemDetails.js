import "../InventoryItemDetails/InventoryItemDetails.scss";
import backButton from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import axios from "axios";
import { useParams } from "react-router-dom";

function InventoryItemDetails() {



    return (
        <section className="item">
            <div className="item__header-div">
                <img src={backButton} alt="blue arrow pointing left" className="item__image"></img>
                <h1 className="item__page-header">ITEM NAME</h1>
                <button type="button" className="item__edit-button">
                    <img src={editIcon} alt="pencil icon"></img>
                </button>
            </div>
            <div className="item__description-div">
                <h3 className="item__category-header">ITEM DESCRIPTION:</h3>
                <p className="item__category-description"></p>
                <h3 className="item__category-header">CATEGORY:</h3>
                <p className="item__category-description"></p>
            </div>
            <div className="item__status-div">
                <div className="">
                    <h3 className="item__category-header">STATUS:</h3>
                    <p className="item__category-description">Decription</p>
                </div>
                <div className="">
                    <h3 className="item__category-header">QUANTITY:</h3>
                    <p className="item__category-description">000</p>
                </div>
            </div>
        </section>
    )
}

export default InventoryItemDetails
