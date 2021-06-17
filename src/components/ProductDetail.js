import React,{useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.productReducer.product);
    //const { image, title, price, category, description } = product;
    const dispatch = useDispatch(); 
    
  console.log(product);
  //console.log(image);
    const fetchProductDetails = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log('Err ', err);
            });
            console.log(response);
            dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId])

    return  (
        
        <div className="ui placeholder segment">
        <h1>hi there</h1>
          </div>
      
      );
}

export default ProductDetail;

