import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import InventoryList from './components/Inventory-List/Inventory-List'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/warehouse-details' element={<WarehouseDetailsPage />} />
          <Route path='/inventory'element={<InventoryList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
