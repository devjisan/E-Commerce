import React, { useContext } from 'react';
import star_icon from '../Assets/icons/star_icon.png';
import star_dull_icon from '../Assets/icons/star_dull_icon.png';
import Context from '../../Context/Context';

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(Context);

    return (
        <div className="flex flex-col md:flex-row mx-6 md:mx-[170px] mb-10">
            {/* Left Side - Small Images */}
            <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                    {[...Array(4)].map((_, i) => (
                        <img key={i} className="h-[163px]" src={product.image} alt={`Thumbnail ${i}`} />
                    ))}
                </div>
                {/* Main Product Image */}
                <div className="flex flex-col mx-6 md:mx-[70px]">
                    <img className="w-full md:w-[586px] h-auto md:h-[700px]" src={product.image} alt="Product" />
                </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="mt-6 md:mt-0 md:ml-6">
                <h1 className="text-[#3d3d3d] text-3xl md:text-[40px] font-bold">{product.name}</h1>

                {/* Star Ratings */}
                <div className="flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
                    {[...Array(4)].map((_, i) => (
                        <img key={i} src={star_icon} alt="Star" />
                    ))}
                    <img src={star_dull_icon} alt="Star" />
                    <p>(122)</p>
                </div>

                {/* Pricing */}
                <div className="flex my-6 gap-6 text-xl md:text-2xl font-bold">
                    <div className="text-[#818181] line-through">${product.old_price}</div>
                    <div className="text-[#ff4141]">${product.new_price}</div>
                </div>

                {/* Description */}
                <p className="text-[#656565]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis beatae optio, labore atque assumenda.
                </p>

                {/* Size Selection */}
                <div>
                    <h1 className="mt-10 text-[#656565] text-lg font-semibold">Select Size</h1>
                    <div className="flex my-6 gap-4">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div key={size} className="py-3 px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer hover:bg-gray-200 transition">
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={() => addToCart(product)}
                    className="py-4 px-6 w-[200px] text-white text-lg font-semibold bg-[#FF4141] hover:bg-[#ff5757] transition rounded mb-6 cursor-pointer"
                >
                    ADD TO CART
                </button>

                {/* Category & Tags */}
                <p className="mt-3"><span className="font-semibold">Category :</span> Women, T-Shirt, Crop Top</p>
                <p className="mt-3"><span className="font-semibold">Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
