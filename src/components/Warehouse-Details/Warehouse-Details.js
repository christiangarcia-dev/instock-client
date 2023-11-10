import "./Warehouse-Details.scss";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseDetails() {
  return (
    <section className="details">
      <div className="details__upper">
        <div className="details__upper-left">
        <Link to="/" className="details__upper-back">
          <img className="details__upper-backIcon" src={backIcon} />
        </Link>
        <h2 className="details__upper-title">Washington</h2>
        </div>
        <div className="details__upper-right">
        <Link to="" className="details__upper-edit">
            <img className="details__upper-editIcon" src={editIcon} />
        </Link>
        </div>
      </div>
      <section className="details__info">
        <div className="details__info-address">
          <h6 className="details__info-lbl">WAREHOUSE ADDRESS:</h6>
          <p className="details__info-location">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="details__info-contact">
          <div className="details__info-name">
            <h6 className="details__info-lbl">CONTACT NAME:</h6>
            <p className="details__info-content">Graeme Lyon</p>
            <p className="details__info-content">Warehouse Manager</p>
          </div>
          <div className="details__info-contactinfo">
            <h6 className="details__info-lbl">CONTACT INFORMATION:</h6>
            <p className="details__info-number">+1 (647) 504-911</p>
            <p className="details__info-email">glyon@instock.com</p>
          </div>
        </div>
      </section>
    </section>
  );
}
export default WarehouseDetails;
