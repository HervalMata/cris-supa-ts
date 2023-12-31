"use client";

import React from "react";

interface IProps {
    product: any;
}

const CartItem: React.FC<IProps> = ({ product }) => {
    return (
        <>
            <div className="relative flex justify-start my-2 border w-full p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={product?.url + "/150"}
                    className="rounded-md w-[150px] h-[150px]"
                    alt="product"
                />

                <div className="overflow-hidden pl-2 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
                            {product?.title}
                        </div>
                        <div className="font-bold text-lg">
                            R$ {(product?.price /100).toFixed(2)}
                        </div>
                    </div>
                    <div className="font-semibold mt-2">NOVO</div>
                    <div className="text-sm mt-2">
                        {product?.description.substring(0, 150)}...
                    </div>
                    <div className="absolute right-0 bottom-0 p-4 text-sm">
                        <button className="underline text-pink-500">Remover</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;