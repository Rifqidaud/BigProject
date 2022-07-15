import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import './style.scss'
import { Navigate } from "react-router-dom"
import { checkoutAsync } from "./reducers/orderreducer";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import {useState } from "react";
function Checkout () {
  
   const [checkoutData, setCheckoutData] = useState({
    })
    const ischeckout = useSelector((state) => state.order.ischeckout)
    const dispatch = useDispatch()
  
  const onSubmit = async (e) => {
      e.preventDefault()
      dispatch(checkoutAsync(checkoutData))
     
  }
  if(ischeckout==true){
   return<Navigate to='/confirmshop' />
  }
return(
    <div>
        <nav class="navbar navbar-expand-sm bg-light">
           <div className="container-fluid">
              <ul className="navbar-nav">
                 <li class="nav-item">
                      <a class="nav-link" href="/listproduct">List Product</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/detail">Detail</a>
                  </li>
                    <li class="nav-item">
                      <a class="nav-link"> <FontAwesomeIcon icon={faShop}  /> </a>
                  </li>
                </ul>
            </div>
        </nav>
          <div className="col-12">
            <div className="row">
                     <div className="card-body"></div>
                     <div className="card-body">Nama:</div>
                     <div className="card-body">Baju:</div>
                     <div className="card-body">Harga:</div>
               
             </div>
          </div>
          <div className="col-12">
             <div className="row">
                  Opsi pembayaran
                 <select class="form-select" name="Pilih pembayaran">
                   <option>Transfer ATM/Bank</option>
                   <option>Tokopedia</option>
                   <option>Shopee</option>
                   <option>Datang ke toko</option>
                  </select>
             </div>
            <div className="col-12">
               <div className="row">
                  Jenis Paket Pengiriman
                  <select class="form-select form-select-lg" name="Jenis paket pengiriman" placeholder="Jenis Pengiriman" input type="jenis pengiriman" id="jenis pengiriman" value="jenis pengiriman" required>
                     <oprion>J&T</oprion>
                     <option>Express</option>
                     <option>Go-Grab</option>
                     <option>Ambil di Toko</option>
                  </select>
                Mode Pengiriman
                 <select class="form-select form-select-lg" name="Jenis paket pengiriman" placeholder="Jenis Pengiriman" input type="jenis pengiriman" id="jenis pengiriman" value="jenis pengiriman" required>
                     <oprion>Kilat</oprion>
                     <option>Reguler</option>
                  </select>  
               </div>
                  
            </div>

          </div>
          <br></br>
         
              
                 
           
          <div className="container">
             <div className="row">
                <div className="col-6">
                     <button type="button" class="btn btn bg-warning">
                        Add to cart
                     </button>
                  </div>
                 <div className="col-6">
                     <button type="button" class="btn btn bg-warning" >
                        ConfirmShop
                     </button>
                  </div>
                  
             </div>
           </div>
                  
     </div>
     
)
}
export default Checkout;