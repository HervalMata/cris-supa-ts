"use client";

import MainLayout from "@/app/layout/MainLayout";
import {AiOutlineCheckCircle} from "react-icons/ai";
import Link from "next/link";

export default function Success() {
    return (
        <>
            <MainLayout>
                <div id="SuccessPage" className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
                        <div>
                            <div className="flex items-center text-xl">
                                <AiOutlineCheckCircle className="text-green-500" size={35} />
                                <span className="pl-4">Pagamento Realizado com sucesso</span>
                            </div>
                            <p className="text-sm">
                                Obrigado! Nós recebemos seu pagamento.
                            </p>
                            <Link href="/" className="w-full">
                                <div className="w-full text-center bg-pink-600 text-sm font-semibold text-blue-900 p-[11px] mt-4">
                                    Voltar para a loja
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}