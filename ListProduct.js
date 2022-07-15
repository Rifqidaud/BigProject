import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import './style-slider.scss';
import axios from "axios";
//import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {findAllAsync, findByIdAsync} from "./reducers/productreducer";
import {productAsync} from "./reducers/productreducer";
function ListProduct() {
    const [category, setCategory] = useState(0)
    const [search, setSearch] = useState()
    const listProducts = [
        { category: 1,image:"https://lzd-img-global.slatic.net/g/p/673d9444e034b77cb287610ef5761085.jpg_720x720q80.jpg_.webp wi" },
        { category: 3,image:"https://i.pinimg.com/474x/35/0c/ac/350cacf424b307061eb8947767ee60b0.jpg"},
        { category: 2,image:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/11/13/ecc83b4a-7ead-4b83-a581-1478dc576027.jpg"},
        { category: 1,image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-20492348/no_brand_kaos_pria_basic_polos_hitam_kaos_distro_polosan_kaos_polos_hitam_kaos_polos_pria_full02_l9a6b0ot.jpg"},
        { category: 2,image:"https://ceklist.id/wp-content/uploads/2022/02/Outfit-Lebaran-Pria-Terbaik.jpg"},
        { category: 1,image:"https://modelbajukeluargaterbaru.com/wp-content/uploads/2021/09/Kemeja-Pria-Lengan-Pendek.bmp"},
        { category: 3,image:"https://images.tokopedia.net/img/cache/500-square/product-1/2021/1/27/inv/inv_641330e7-56bc-4903-b9ab-56960e58a846_680_680.jpg"},
        { category: 3,image:"https://cf.shopee.co.id/file/cfeebdc1f610059449eec79fb7c0231d"},
        { category: 1,image:"https://cf.shopee.co.id/file/0aa987e720491a7d9ba228e88fd7b7ec"},
    ];
    const [listproductData, setProductData] = useState({
    })
    const onChangeField = (e) => {
      setListProductData({
        ...listproductData,
        [e.target.name]: e.target.value
      })
    }
    const isfindAll = useSelector((state) => state.auth.isfindAll)
    useEffect(() => {
      console.log("ADA PERUBAHAN");
    }, [isfindAll]);
  
    const handledetail = async (e) => {
      e.preventDefault()
      setLoading(true);
      dispatch(findAllAsync(listproductData));
    }
    if (isfindAll == true) {
      console.log(isfindAll)
      console.log("ada2")
      return <Navigate to='/detail' />
    }
  

        
        
    
    
    const [products, setProducts] = useState()
    function onChangeCategory(value) {
        setCategory(value);
    }
    
    function handleChange(e) {
        setSearch(e.target.value)
        //console.log(search)
    }
    function handleSearch(e) {
        e.preventDefault()
        console.log(search)
        var list_search = listProducts.filter(function(item){
        return item.category == parseInt(search)
        })
        console.log(list_search)
        setProducts(list_search)
    }
   useEffect(()=> { 
        setProducts(listProducts)  
     },[])
     


  return (
      <div>
           <div className='container'>
               <div className='row pt-3'>
                   <div className='col-7'>
                             <h1>Your Shop Now</h1>
                          </div>
                      <div className="col-3">
                          <div class="input-group mb-3">
                               <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" name="search" onChange={handleChange}
                                  style={{ border: "none", borderBottom: "1px solid #E7F0F2"}} />
                                    <div class="input-group-append">
                                       <span class="input-group-text" id="basic-addon2" onClick={handleSearch}>
                                           <FontAwesomeIcon icon={faSearch} />
                                       </span>
                                 </div>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="stylefashoping">
                                 <div class="input-group-append border:none bg-white">
                                     <div className="input-group-text">
                                         <span class="input-group-text p-10 mr-100 bg-white" id="basic-addon2">
                                              <a href="/detail">
                                                   <div className="Adetail">
                                                       <FontAwesomeIcon icon={faCartShopping}  />
                                                  </div>
                                               </a>
                                         </span>
                                       </div>
                                   </div>
                          </div>
                       </div>             
              </div>
               <div className="row">
                 <div className="col-2">
                     <div className="margin-featured">
                          FEATURED
                          <br></br>
                          <span
                            style={{ cursor: "pointer"}}
                            onClick={() => onChangeCategory(0)}
                           >
                               ALL CATEGORY
                            </span>
                            <br></br>
                           <span
                             style={{ cursor: "pointer "}}
                             onClick={() => onChangeCategory(1)}
                           >
                              CATEGORY 1
                           </span>
                           <br></br>
                           <span
                            style={{ cursor: "pointer "}}
                            onClick={() => onChangeCategory(2)}
                          >  
                             CATEGORY 2
                             </span>
                          <br></br>
                           <span
                              style={{cursor: "pointer "}}
                              onClick={() => onChangeCategory(3)}
                            >
                          CATEGORY 3
                            </span>
                          <br></br>
                      </div>
                 </div>
                 <div className="col-8">
                     <div className="row">
                          {products && (products
                           .filter((item) =>
                              category !==0 
                                ? item.category === category
                                  ? item
                                  : null
                                : item
                           )
                           .map((item) => (
                              <div className="col-4">
                                  <div className='card-List'>
                                      <div className='card bg-secondary text-white'>
                                        <img src={item.image} width="50 px" height="50px" />
                                          <h5 className='card-title-List'>Category  {item?.category} </h5>
                                              <p className='card-text-List'>
                                                   SUBTITLE
                                              </p>
                                       </div>
                                  </div>
                              </div>
                            )))}
                      </div>
                  </div>
                 <div className="col-2 float-right">
                     <div className="borderall">
                          All
                         <br></br>
                          <b>
                             <a href="/">
                                <div className="A">
                                  FILTER 1
                                </div>
                              </a>
                           </b>
                          FILTER 2
                         <br></br>
                          FILTER 3
                         <br></br>
                         FILTER 4
                         <br></br>
                         FILTER 5
                          <br></br>
                          <br></br>   
                       </div>
                   </div>
                   
                
                </div>
               
               <ul class="pagination bg-light text-dark justify-content-center pt-3">
                  <li class="page-item active">
                      <a class="page-link" href="/login">1</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="/addtocart">2</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="/detail1">3</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="#">4</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="#">5</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="#">6</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="#">7</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="#">8</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="#">9</a>
                  </li>
               </ul>
            </div>
      </div>
   )
  }



export default ListProduct;