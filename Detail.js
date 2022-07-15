import Slider from "./Slider";
import './style-slider.scss';
import { useDispatch } from "react-redux";
import { addAsync } from "./reducers/cartreducer";
import {useState } from "react";
const Detail = () => {

    const imagedata = [
            {
                image:
                  "https://ceklist.id/wp-content/uploads/2022/02/Outfit-Lebaran-Pria-Terbaik.jpg",
              },
              {
                image:
                  "https://lzd-img-global.slatic.net/g/p/673d9444e034b77cb287610ef5761085.jpg_720x720q80.jpg_.webp",
              },
               {
                image:
              
                   "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-20492348/no_brand_kaos_pria_basic_polos_hitam_kaos_distro_polosan_kaos_polos_hitam_kaos_polos_pria_full02_l9a6b0ot.jpg",
              },
              {
                image:
                  "https://cf.shopee.co.id/file/0aa987e720491a7d9ba228e88fd7b7ec",
              },
            
    ]
    const [AddToCartData, setAddToCartData] = useState({
        product_id: '',
        quantity: ''
      })
    const dispatch = useDispatch();
    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(addAsync(AddToCartData))
       }

    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-end Goback">
                    <div className="col-2">
                       <div className="istyle">
                         <a href="addtocart" color="white">
                           <i className="bi bi-cart-fill"></i>
                          </a>
                       </div>
                       <br></br>
                     <div className="fontGoBack">
                             <a href="/">
                                 <div className="A">
                                      <h2>Go Back</h2>
                                  </div>
                              </a>
                          
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="col-6">
                              <div className="picture">
                                <Slider slides={imagedata}/>
                              </div>
                            
                            
                      </div>
                          <div className="col-6-text-content">
                             <div className="textcontent">
                                  <h3>Color <br></br>
                                  <b> Item Type/Name </b>
                                  <br></br>
                                  </h3>
                                  <h4><b> $19.99 </b>
                                      <div className="del">
                                          <del>$39.99</del>
                                     </div>
                                     <br></br>
                                  </h4>
                                 <p>
                                     Baju Hot Promo  <br></br>
                                      <br></br>
                                      Baju Lebaran dan Baju kantoran, hot Promo, terbaik dengan kualitas bagus 
                                      dan harga terjangkau, hanya di Cilsy Foundation
                                      yuk, belanja
                                     <br></br>
                                  </p>
                                 
                                 <div className="mens">
                                     Mens <br></br>
                                     100% Cotton <br></br>
                                 </div>
                                 <div className='col-4'>
                                     <a href="/detail1">
                                         <button type="button" class="btn btn-dark">Detail Baju</button>
                                     </a>
                                  </div>
                                 
                              </div>
                           <div>
                     </div>
                  </div>
              </div>
                
        

            </div>
        </div>
        </div>
   )
}
export default Detail;