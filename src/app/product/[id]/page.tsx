"use client";

import MainLayout from "@/app/layout/MainLayout";
import SimilarProducts from "@/app/(components)/SimilarProducts";

export default function Product() {
    const product = [
        {
            id: 1,
            title: "Brown Leather bag",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi totam quod! onsectetur adipisicing elit. Amet sequi totam quod!",
            url: "https://picsum.photos/id/7",
            price: 2500,
        }
    ];

    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex px-4 py-10">
                        {
                            // @ts-ignore
                            product?.url ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    className="w-[40%] rounded-lg"
                                    // @ts-ignore
                                    src={product?.url + "/280"}
                                    alt="product image"
                                />
                            ) : (
                                <div className="w-[40%]"></div>
                            )}
                        <div className="px-4 w-full">


                            <div className="text-xl font-bold">
                                {
                                    // @ts-ignore
                                    product?.title
                                }
                            </div>
                            <div className="text-sm text-gray-700 pt-2">
                                Produto Novo - Total Garantia
                            </div>
                            <div className="border-b py-1"/>
                            <div className="pt-3">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center">
                                        Preço:
                                        {
                                            // @ts-ignore
                                            product?.price ? (
                                                <div className="font-bold text-[20px] ml-2">
                                                    R$ {
                                                    // @ts-ignore
                                                    (product?.price / 100)
                                                        .toFixed(2)
                                                }
                                                </div>
                                            ) : null}
                                    </div>
                                    <button
                                        className="bg-pink-600 text-blue-900 py-2 px-20 rounded-full cursor-pointer">
                                        Adicionar para o carrinho
                                    </button>
                                </div>
                            </div>
                            <div className="border-b py-1"/>
                            <div className="pt-3">
                                <div className="font-semibold pb-1">
                                    Descrição:
                                </div>
                                <div className="text-sm">
                                    {
                                        // @ts-ignore
                                        product?.description
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimilarProducts/>
            </MainLayout>
        </>
    );
}