import MainLayout from "@/app/layout/MainLayout";
import CartItem from "@/app/(components)/CartItem";
import SimilarProducts from "@/app/(components)/SimilarProducts";

export default function Cart() {
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
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">
                        Carrinho de Compras
                    </div>
                    <div className="relative flex items-baseline justify-between gap-2">
                        <div className="w-[65%]">
                            <CartItem
                                // @ts-ignore
                                key={product.id}
                                product={product}
                            />
                        </div>
                        <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                            <div className="bg-white p-4 border">
                                <button className="flex items-center justify-center bg-pink-600 w-full text-blue-900 font-semibold p-3 rounded-full mt-4">
                                    Ir para o Pagamento
                                </button>
                                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                    <div>Itens (3)</div>
                                    <div>R$ 75,00</div>
                                </div>
                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Entrega</div>
                                    <div>Free</div>
                                </div>
                                <div className="border-b border-gray-300" />
                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <div>Subtotal</div>
                                    <div>R$ 75,00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    );
}