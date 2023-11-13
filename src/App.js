import './App.scss';
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
          <Route path='/warehouse-details/:id' element={<WarehouseDetailsPage />} />
          <Route path='/inventory'element={<InventoryListPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
