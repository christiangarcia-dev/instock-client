import "../HomePage/HomePage.scss"
import Header from "../../components/Header/Header";
import WarehouseList from "../../components/Warehouse-List/Warehouse-List";
import Footer from "../../components/Footer/Footer";

function HomePage() {
    
    return (
        <div className="page-container">
            <Header />
            <main className="content">
                <WarehouseList />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;