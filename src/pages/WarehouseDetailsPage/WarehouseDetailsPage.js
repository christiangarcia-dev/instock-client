import '../WarehouseDetailsPage/WarehouseDetailsPage.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WarehouseDetails from "../../components/Warehouse-Details/Warehouse-Details";
import WarehouseInventory from '../../components/WarehouseInventory/WarehouseInventory';

function WarehouseDetailsPage() {

    return (
        <>
            <Header />
            <section className='content-background'>
                <section className='content-container'>
                    <WarehouseDetails />
                    <WarehouseInventory />
                </section>
            </section>
            <Footer />
        </>
    )
}

export default WarehouseDetailsPage;