import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/Warehouse-Details/Warehouse-List';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
        <Routes>
         <Route path='/warehouse-list' element={<WarehouseList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
