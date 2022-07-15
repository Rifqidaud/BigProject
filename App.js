import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Home  from './Home';
import  Detail  from './Detail'
import ListProduct  from './ListProduct'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import ConfirmShop from './ConfirmShop'
import AddToCart from './AddToCart'
import Checkout from './Checkout'
import Status from './Status'
import Detail1 from './Detail1'
import OrderDetail from './OrderDetail'
import CRUDProduct from './CRUDProduct'

import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  return (
    
    <Router>
      <div className='container'>
      <Routes>
          <Route element={<Register/>} path="/" exact />
          <Route element={<Login/>} path="/login" />
          <Route element={<Detail />} path="/detail" />
          <Route element={<Home/>} path="/home" />
          <Route element={<ListProduct/>} path="/listproduct" />
          <Route element={<Logout/>} path="/logout" />
          <Route element={<ConfirmShop/>} path="/confirmshop" />
          <Route element={<AddToCart/>} path="/addtocart" />
          <Route element={<Checkout/>} path="/checkout" />
          <Route element={<Status/>} path="/status" />
          <Route element={<Detail1/>} path="/detail1" />
          <Route element={<OrderDetail/>} path="/orderdetail" />
          <Route element={<CRUDProduct/>} path="/crudproduct" />
         
      </Routes>
      </div>
      <div className='footer d-flex justify-content-center'>
        <i class="bi bi-grid-3x3-gap-fill"></i>
      </div>
    </Router>
  );
}

export default App;