"use client";

import React from "react";
import Link from "next/link";
import Product from "@/app/(components)/Products";
import {BiLoader} from "react-icons/bi";

export default function  SimilarProducts() {
    const products = [
        {
            id: 1,
            title: "Brown Leather bag",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi totam quod! onsectetur adipisicing elit. Amet sequi totam quod!",
            url: "https://picsum.photos/id/7",
            price: 2500,
        },
        {
            id: 2,
            title: "school books",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi totam quod! onsectetur adipisicing elit. Amet sequi totam quod!",
            url: "https://picsum.photos/id/20",
            price: 3500,
        },
    ];

    return (
        <>
            <div>
                <div className="border-b py-1 max-w-[1200px] mx-auto" />

                <div className="max-w-[1200px] mx-auto">
                    <div className="text-2x1 font-bold mt-4 py-2">
                        Produtos Similares
                    </div>
                    {products.length > 0 ? (
                        <div className="grid grid-cols-5 gap-4">
                            {products.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center gap-4 font-semibold">
                                <BiLoader size={30} className="text-pink-500 animate-spin" />
                                Carregando Produtos...
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}