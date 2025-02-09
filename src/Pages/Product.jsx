import React, { useContext } from 'react';
import Context from '../Context/Context';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DiscriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product} = useContext(Context)
    const {productId} = useParams()
    const product = all_product.find((e) => e.id === parseInt(productId))
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product= {product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
};

export default Product;