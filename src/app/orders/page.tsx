"use client";

import MainLayout from "@/app/layout/MainLayout";
import {CiDeliveryTruck} from "react-icons/ci";
import Link from "next/link";

export default function Orders() {
    const orders = [
        {
            id: 1,
            stripe_id: "1212121",
            name: "teste",
            address: "teste",
            zipcode: "teste",
            city: "teste",
            country: "teste",
            total: 12099,
            orderItem: [
                {
                    id: 1,
                    title: "Brown Leather bag",
                    url: "https://picsum.photos/id/7",
                },
            ],
        },
    ];

    return (
        <>
            <MainLayout>
                <div id="OrdersPage" className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    <div className="bg-white w-full p-6 min-h-[150px]">
                        <div className="flex items-center text-xl">
                            <CiDeliveryTruck size={35} className="text-green-500" />
                            <span className="pl-4">Ordens</span>
                        </div>
                        {orders.length < 1 ? (
                            <div className="flex items-center justify-center">
                                Você não tem nenhuma ordem antiga
                            </div>
                        ) : null}
                        {orders.map((order) => (
                            <div key={order?.id} className="text-sm pl-[50px]">
                                <div className="border-b py-1">
                                    <div className="pt-2">
                                        <span className="font-bold mr-2">
                                            Strip ID:
                                        </span>
                                        {order?.stripe_id}
                                    </div>
                                    <div className="pt-2">
                                        <span className="font-bold mr-2">
                                            Endereço de Entrega:
                                        </span>
                                        {order?.name}, {order?.address}, {order?.zipcode},{""}
                                        {order?.city}, {order?.country}
                                    </div>
                                    <div className="pt-2">
                                        <span className="font-bold mr-2">
                                            Total:
                                        </span>
                                        R$ {order?.total / 100}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {order?.orderItem.map((item) => (
                                            <div key={item.id} className="flex items-center">
                                                <Link href="/" className="py-1 hover:underline text-pink-500 font-bold">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        width="120"
                                                        className="rounded"
                                                        src={item.url + "/120"}
                                                        alt="order item"
                                                    />
                                                    {item.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout>
        </>
    );
}