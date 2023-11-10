import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/warehouse-details' element={<WarehouseDetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
