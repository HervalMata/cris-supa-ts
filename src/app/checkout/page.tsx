"use client";

import MainLayout from "@/app/layout/MainLayout";
import CheckOutItem from "@/app/(components)/CheckOutItem";

export default function Checkout() {
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
                <div id="CheckoutPage" className="max-w-[1200px] mx-auto mt-4">
                    <div className="text-2xl font-bold mt-4 mb-4">
                        Pagamento
                    </div>
                    <div className="relative flex items-baseline justify-between mx-auto w-full">
                        <div className="w-[65%]">
                            <div className="bg-white rounded-lg p-4 border">
                                <div className="text-xl font-semibold mb-2">
                                    Endereço de Entrega
                                </div>
                                <div>
                                    <ul className="text-sm mt-2">
                                        <li>Nome: teste</li>
                                        <li>Endereço: teste</li>
                                        <li>CEP: teste</li>
                                        <li>Cidade: teste</li>
                                        <li>Estado: teste</li>
                                        <li>País: teste</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="Items" className="bg-white rounded-lg mt-4">
                                <CheckOutItem
                                    // @ts-ignore
                                    key={product.id}
                                    product={product}
                                />
                            </div>
                        </div>
                        <div id="PlaceOrder" className="w-[33%] relative -top-[6px] border rounded-lg">
                            <div className="p-4">
                                <div className="flex items-baseline justify-between text-sm mb-1">
                                    <div>Itens (4)</div>
                                    <div>R$ 100,00</div>
                                </div>
                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Entrega</div>
                                    <div>Free</div>
                                </div>
                                <div className="border-t" />
                                <div className="flex items-center justify-between my-4 ">
                                    <div className="font-semibold">Total da Compra</div>
                                    <div className="text-2xl font-semibold">R$ 100,00</div>
                                </div>

                                <form>
                                    <div className="border border-gray-500 p-2 rounded-sm" id="card-element" />
                                    <p id="card-error" role="alert" className="text-red-700 text-center font-semibold relative top-2" />
                                    <button type="submit" className="mt-4 bg-pink-600 text-lg w-full text-blue-900 font-semibold p-3 rounded-full">
                                        <div>Confirmar e Pagar</div>
                                    </button>
                                </form>
                            </div>
                            <div className="flex items-center p-4 justify-center gap-2 border-t">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img width={50} src="/images/logo.svg" alt="logo" />
                                <div className="font-light mb-2 mt-2">
                                    Satisfação Garantida
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}