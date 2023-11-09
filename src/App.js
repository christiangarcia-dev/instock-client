import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/Warehouse-List/Warehouse-List';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
         <Route path='/warehouse-list' element={<WarehouseList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
