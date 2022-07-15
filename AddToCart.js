import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faHouseChimneyUser, faPlus, faSearch, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { addAsync } from "./reducers/cartreducer"
import { useState, useEffect} from "react"
import "./style.scss"
import axios from "axios"
import { saveAsync } from "./reducers/orderreducer";

const AddToCart = () => {
  const [AddToCartData, setAddToCartData] = useState({
    product_id: '',
    quantity: ''
  })
  const [loading, setLoading] = useState(false);
  const issucces = useSelector((state) => state.cart.issucces);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("ADA PERUBAHAN");
  }, [issucces]);

const handleOrder = async (e) => {
  e.preventDefault()
  const username = e.target.username.value;
  const password = e.target.password.value;
  console.log(username, password);
  setLoading(true);
  dispatch(addAsync(AddToCartData));

}
if (issucces == true) {
  return <Navigate to='/confirmshop' />
}


return (
  <div>
    <div className="row">
      <div className="col-4">
        Cart
      </div>
      <div className="col-4">
        <FontAwesomeIcon icon={faHouseChimneyUser} />
      </div>
      <div className="col-4">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" name="search"
          style={{ border: "none", borderBottom: "1px solid #E7F0F2" }} FontAwesomeIcon icon={faSearch} />


      </div>
    </div>
    <br></br>
    <div className="Border-addtocart">
      <div className="row">
        <div className="col-4">
          <label>
            <input className={"input-addtocart"} type={"checkbox"} />

          </label>
          <div className="card">
            <img src="https://i.pinimg.com/474x/35/0c/ac/350cacf424b307061eb8947767ee60b0.jpg" width="100px" height="100 px" />
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>Baju Lebaran warna merah</li>
            <li>variasi m</li>
            <li>Rp 100.000.00</li>
          </ul>
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faFloppyDisk} />
        </div>
      </div>

    </div>
    <br></br>
    <br></br>
    <button class="btn btn-warning" type="button" onSubmit={handleOrder}>Checkout</button>
  </div>





);
}
export default AddToCart;