import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseDetails from './components/Warehouse-Details/Warehouse-Details';

import EditWarehouse from './components/EditWarehouse/EditWarehouse';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
         <Route path='/warehouse-details' element={<WarehouseDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
