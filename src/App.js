import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/Warehouse-List/Warehouse-List';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';


import WarehouseDetails from './components/Warehouse-Details/Warehouse-Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
         <Route path='/' element={<WarehouseList/>}/>
        <Route path='/warehouse-details' element={<WarehouseDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
