"use client";

import React from "react";
import Link from "next/link";

interface IProps {
    product: any;
}

const Product: React.FC<IProps> = ({ product }) => {
    return (
        <>
            <Link
                href={`/product/${product?.id}`}
                className="max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
            >
                {product?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        className="rounded cursor-pointer"
                        src={product.url + "/190"}
                        alt="product"
                    />
                ) : null}
                <div className="pt-2 px-1">
                    <div className="font-semibold text-[15px] hover:underline cursor-pointer">
                        {product?.title}
                    </div>
                    <div className="font-extrabold">
                        R$ {(product?.price / 100).toFixed(2)}
                    </div>
                </div>
                <div className="relative flex items-center text-[12px] text-gray-500">
                    <div className="line-through">
                        R$ {((product?.price * 1.2) / 100).toFixed(2)}
                    </div>
                    <div className="px-2">
                        -
                    </div>
                    <div className="line-through">
                        20%
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Product;