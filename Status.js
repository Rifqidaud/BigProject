import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowAltCircleLeft, faBell, faShop } from "@fortawesome/free-solid-svg-icons";
import './style.scss';
import "./img.css/pattern-vintage.png";

import { useDispatch,useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
//import { statusAsync } from "./reducers/authreducer"
import { useState } from "react"
import "./style.scss"
import axios from "axios"
function Status() {
 const isstatus=useSelector((state)=>state.auth.isstatus)
  const dispatch = useDispatch()
const [statusData, setStatusData] = useState({})

  
 // const onSubmit = async (e) => {
    //e.preventDefault()
    //dispatch(statusAsync(statusData))

//}
//if(isstatus==true){
   // return<Navigate to='/confirmshop' />
//}

return(
    <div>
            <div className="row pt-3">
                <div className="col-12">
                  <nav class="navbar navbar-expand-sm bg-success navbar-success fixed-top">
                         <div className="col-8">
                           <div className="status.padding-left-cicle">
                                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                               </div>
                          </div>
                           <div className="col-3">
                              
                              <svg className="svg-inline--fa fa-shop">
                                  
                                   <a href="/detail">
                                       <FontAwesomeIcon icon={faShop}   />    
                                   </a>
                                </svg>
                                     <FontAwesomeIcon icon={faBell} />
                                
                               </div>  
                       
                    </nav>       
              </div>    
                    Jumlah belanja
                    <div className="Status">
                           <a href="/detail">
                                <FontAwesomeIcon icon={faShop}  />
                           </a>
                   </div>
              
              
                <div className="Status">
                  <div className="col-12">
                        <br></br>
                       Status Transaksi<br>
                      </br>
                      Selesiakan transaksi pembayaran,<br></br>
                      transaksimu akan segera diproses, Periksa detail pembayaran dari notifikasi email<br></br>
                 </div>
                 <div className='row d-flex justify-content-center'>
                     <div className='col-12-card'>
                        <br></br>
                          <div className='cardstatus'>
                              <div className='card bg-white text-black'>
                                     <h5 className='card-title-status'>Total belum dibayar</h5>
                                     <p>Rp.250.000</p>

                              </div>
                          </div>
                       
                        </div> 
                  </div>
     
                 </div>
              
            </div>
        
         
 </div>
        
)
}
export default Status;