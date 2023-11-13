// import './App.scss';
import AddNewWarehouse from './pages/AddNewWarehouse/AddNewWarehouse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import InventoryListPage from './pages/InventoryListPage/InventoryListPage';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';
import EditWarehouse from './pages/EditWarehouse/EditWarehouse';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/warehouse-details/:id' element={<WarehouseDetailsPage />} />
          <Route path='/inventory'element={<InventoryListPage/>} />
          <Route path= '/edit-warehouse-form/:id' element ={<EditWarehouse />} />
          <Route path='/add-warehouse-form' element = {<AddNewWarehouse />} />
        </Routes>
        <InventoryItemDetails />
      </BrowserRouter>
    </div>
  );
}

export default App;
