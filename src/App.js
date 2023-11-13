import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import InventoryListPage from './pages/InventoryListPage/InventoryListPage';
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/warehouse-details' element={<WarehouseDetailsPage />} />
          <Route path='/warehouse-details/:id' element={<WarehouseDetailsPage />} />
          <Route path='/inventory'element={<InventoryListPage/>} />
          <Route path= '/edit-warehouse-form' element ={<EditWarehouse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
