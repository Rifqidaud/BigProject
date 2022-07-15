import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop,faSearch } from "@fortawesome/free-solid-svg-icons";



function Detail1(){
    return(
        <div>
           <nav class="navbar navbar-expand-sm bg-dark">
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
                  <li class="nav-item">
                       <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" name="search" style={{ border: "none", borderBottom: "1px solid #E7F0F2"}} />
                                   
                  </li>
                </ul>
            </div>
     </nav>
                   <div className='margin-detail1'>
                     <div className="col-12" style={{margintop:"20px"}} >
                        <div className='row d-flex-detail1 justify-content-start'style={{margintop:"20px"}}>
                                 <div className="col-4">
                                  <div className="card-detail1">
                                      <div className="card-body-detail1">
                                          <img className="card-img-top" src="https://ceklist.id/wp-content/uploads/2022/02/Outfit-Lebaran-Pria-Terbaik.jpg" height="100px" />
                                              <h5 className='card-title-detail1'>BajuLebaran putih</h5>
                                              <p>Harga : Rp 100.000.00</p>
                                              <div className="mb-2 mt-2">
                                                     <a href="/addtocart">
                                                       <button type="onsubmit" class="btn-primary-detail1">Add to Cart</button>
                                                     </a>
                                                   </div>
                                                
                                                    <div className="mb-2 mt-2">
                                                     <a href="/orderdetail">
                                                       <button type="onsubmit" class="btn-primary-detail1">Detail</button>
                                                      </a>
                                                    </div>

                                      </div>
                                 </div>
                             </div>
                             <div className="col-4">
                                  <div className="card-detail1">
                                      <div className="card-body-detail1">
                                          <img className="card-img-top" src="https://images.tokopedia.net/img/cache/500-square/product-1/2021/1/27/inv/inv_641330e7-56bc-4903-b9ab-56960e58a846_680_680.jpg" height="100px" />
                                              <h5 className='card-title-detail1'>BajuLebaran kuning</h5>
                                              <p>Harga : Rp. 150.000.00</p>
                                              <div className="mb-2 mt-2">
                                                     <a href="/addtocart">
                                                       <button type="onsubmit" class="btn-primary-detail1">Add to Cart</button>
                                                     </a>
                                                   </div>
                                                
                                                    <div className="mb-2 mt-2">
                                                     <a href="/orderdetail">
                                                       <button type="onsubmit" class="btn-primary-detail1">Detail</button>
                                                      </a>
                                                    </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="col-4">
                                  <div className="card-detail1">
                                      <div className="card-body-detail1">
                                          <img className="card-img-top" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-20492348/no_brand_kaos_pria_basic_polos_hitam_kaos_distro_polosan_kaos_polos_hitam_kaos_polos_pria_full02_l9a6b0ot.jpg" height="100px" />
                                              <h5 className='card-title-detail1'>Baju Kaos hitam</h5> 
                                                      <p>Harga : Rp. 100.000.00</p>  
                                                      <div className="mb-2 mt-2">
                                                     <a href="/addtocart">
                                                       <button type="onsubmit" class="btn-primary-detail1">Add to Cart</button>
                                                     </a>
                                                   </div>
                                                
                                                    <div className="mb-2 mt-2">
                                                     <a href="/orderdetail">
                                                       <button type="onsubmit" class="btn-primary-detail1">Detail</button>
                                                      </a>
                                                    </div>
                                      </div>
                                 </div>
                             </div>
                      </div>
                      <div className='margin-detail1'>
                               <div className='row d-flex-detail1 justify-content-start' style={{margintop:"20px"}}>
                           
                             <div className="col-4">
                                  <div className="card-detail1">
                                      <div className="card-body-detail1">
                                          <img className="card-img-top" src="https://modelbajukeluargaterbaru.com/wp-content/uploads/2021/09/Kemeja-Pria-Lengan-Pendek.bmp" height="100px" />
                                              <h5 className='card-title-detail'>BajuLebaran hijau</h5>
                                              <p>Harga : Rp. 100.000.00</p>
                                              <div className="mb-2 mt-2">
                                                     <a href="/addtocart">
                                                       <button type="onsubmit" class="btn-primary-detail1">Add to Cart</button>
                                                     </a>
                                                   </div>
                                                
                                                    <div className="mb-2 mt-2">
                                                     <a href="/orderdetail">
                                                       <button type="onsubmit" class="btn-primary-detail1">Detail</button>
                                                      </a>
                                                    </div>
                                      </div>
                                 </div>
                             </div>
                             <div className="col-4">
                                  <div className="card-detail1">
                                      <div className="card-body-detail1">
                                          <img className="card-img-top" src="https://i.pinimg.com/474x/35/0c/ac/350cacf424b307061eb8947767ee60b0.jpg" height="100px" />
                                                     <h5 className='card-title-detail1'>BajuLebaran abu</h5>
                                                    <p>Harga : Rp. 150.000.00</p>
                                                    <div className="mb-2 mt-2">
                                                     <a href="/addtocart">
                                                       <button type="onsubmit" class="btn-primary-detail1">Add to Cart</button>
                                                     </a>
                                                   </div>
                                                
                                                    <div className="mb-2 mt-2">
                                                     <a href="/orderdetail">
                                                       <button type="onsubmit" class="btn-primary-detail1">Detail</button>
                                                      </a>
                                                    </div>
                                      </div>
                                 </div>
                             </div>
                             <div className="col-4">
                                  <div className="card-detail1">
                                      <div className="card-body-detail1">
                                          <img className="card-img-top" src="https://cf.shopee.co.id/file/cfeebdc1f610059449eec79fb7c0231d" height="100px" />
                                              <h5 className='card-title-detail1'>Baju Lebaran Hijau</h5>
                                                  <p className='card-text-detail1'>
                                                     Harga: Rp. 200.000.00
                                                  </p>
                                        
                                                  <div className="mb-2 mt-2">
                                                     <a href="/addtocart">
                                                       <button type="onsubmit" class="btn-primary-detail1">Add to Cart</button>
                                                     </a>
                                                   </div>
                                                
                                                    <div className="mb-2 mt-2">
                                                     <a href="/orderdetail">
                                                       <button type="onsubmit" class="btn-primary-detail1">Detail</button>
                                                      </a>
                                                    </div>
                                       </div>


                                    
                                    </div>    
                                                 
                                              
                                      </div>
                                 </div>
                             </div>
                            </div>
                          </div>
                      </div>
                                
    )
}
export default Detail1;