import './App.scss';
import WarehouseInventoryPage from './pages/WarehouseInventoryPage/WarehouseInventoryPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/Warehouse-List/Warehouse-List';
import Header from "./components/Header/Header";
import WarehouseDetails from './components/Warehouse-Details/Warehouse-Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/warehouse-details' element={<WarehouseDetails />} />
          <Route path='/warehouse-list' element={<WarehouseList />}/>
          <Route path='/warehouse-inventory' element={<WarehouseInventoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
