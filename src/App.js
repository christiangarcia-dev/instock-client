// import './App.scss';
import AddNewWarehouse from './components/AddNewWarehouse/AddNewWarehouse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import InventoryListPage from './pages/InventoryListPage/InventoryListPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/warehouse-details' element={<WarehouseDetailsPage />} />
          <Route path='/warehouse-details/:id' element={<WarehouseDetailsPage />} />
          <Route path='/inventory'element={<InventoryListPage/>} />
        </Routes>
        <AddNewWarehouse />
      </BrowserRouter>
    </div>
  );
}

export default App;
