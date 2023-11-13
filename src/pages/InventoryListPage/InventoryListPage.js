import '../InventoryListPage/InventoryListPage.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryList from '../../components/Inventory-List/Inventory-List';


function InventoryListPage() {

    return (
        <>
            <Header />
            <div className='inventoryPage'>
            <InventoryList/>
            </div>
            <Footer />
        </>
    )
}

export default InventoryListPage;