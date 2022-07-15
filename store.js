import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./reducers/authreducer";
import cartreducer from "./reducers/cartreducer";
import orderreducer from "./reducers/orderreducer";
import productreducer from "./reducers/productreducer";


export default configureStore({
    reducer:{
        auth:authreducer,
        cart:cartreducer,
        order:orderreducer,
        product:productreducer

    }
})
    
