import Link from "next/link";
import {BsChevronDown} from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";

export default function TopMenu() {
    return (
        <>
            <div id="top_menu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul id="top_menu_left" className="flex items-center px-2 h-8 text-[11px] text-[#333]">
                        <li className="relative px-3">
                            <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                                <div>Entre</div>
                                <BsChevronDown />
                            </Link>
                            <div id="auth_drop_down" className="hidden absolute bg-white w-[200px] text-[#333] z-40 top-[20px] left-0 border shadow-lg">
                                <div className="flex items-center justify-start gap-1 p-3">
                                    <img width={50} src="https://picsum.photos/200/" alt="demo" />
                                    <p className="font-bold text-[13px]">John Weeks</p>
                                </div>
                                <div className="border-b" />
                                <ul className="bg-white">
                                    <li className="text-[11px] py-2 px-4 hover:underline text-pink-400 hover:text-pink-400 cursor-pointer">
                                        Sair
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="px-3 hover:underline cursor-pointer">
                            Vendas Diárias
                        </li>
                        <li className="px-3 hover:underline cursor-pointer">
                            Ajuda e Contato
                        </li>
                    </ul>
                    <ul id="top_menu_right" className="flex items-center px-2 h-8 text-[11px] text-[#333]">
                        <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                            <img width={32} src="/images/br.png" alt="br" />
                            Entregas Para
                        </li>
                        <li className="px-3 hover:underline cursor-pointer">
                            <div className="relative">
                                <AiOutlineShoppingCart />
                                <div className="absolute text-[10px] -top-[5px] -right-[5px] bg-pink-400 w--[14px] h-[14px] rounded-full text-white">
                                    <div className="flex items-center justify-center -mt-[1px]">
                                        3
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}