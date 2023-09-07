import React from "react";
import { usePathname } from "next/navigation";

interface IProps {
    product: any;
}

const CheckOutItem:React.FC<IProps> = ({ product }) => {
    const pathname = usePathname();

    return (
        <>
            <div className="flex justify-start rounded-lg mb-2 border p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="rounded-md w-[150px] h-[150px]"
                    src={product?.url + "/150"}
                    alt="product"
                />

                <div className="overflow-hidden pl-2 w-full">

                        <div className="font-semibold">
                            {product?.title}
                        </div>
                        <div className="font-semibold text-lg">
                            <span className="font-bold">
                                R$ {(product?.price /100).toFixed(2)}
                            </span>

                        </div>

                    <div className="relative flex items-center text-[14px] text-gray-400">
                        <div className="line-through">
                            R$ {((product?.price * 1.2) / 100).toFixed(2)}
                        </div>
                        <div className="px-2">-</div>
                        <div className="line-through">20%</div>
                    </div>
                    <div className="text-sm mt-2">
                        {product?.description.substring(0, 130)}...
                    </div>
                    {pathname == "/cart" ? (
                        <div className="text-sm mt-2 w-full flex justify-end underline text-pink-500 cursor-pointer">
                            Remover
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default CheckOutItem;