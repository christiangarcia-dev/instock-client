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
                <h1 className="">ITEM NAME</h1>
                <button type="button">
                    <img src={editIcon} alt="pencil icon"></img>
                </button>
            </div>
            <div className="item__description-div">
                <h3 className="item__">ITEM DESCRIPTION:</h3>
                <p className=""></p>
                <h3 className="">CATEGORY:</h3>
                <p className=""></p>
            </div>
            <div className="item__status-div">
                <div className="">
                    <h3 className="">STATUS:</h3>
                    <p className=""></p>
                </div>
                <div className="">
                    <h3 className="">QUANTITY:</h3>
                    <p className=""></p>
                </div>

            </div>

        </section>
    )
}

export default InventoryItemDetails
