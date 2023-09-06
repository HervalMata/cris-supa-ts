"use client";

export default function SubMenu() {
    const menuItems = [
        {
            id: 1,
            name: "Home",
        },
        {
            id: 2,
            name: "Laços",
        },
        {
            id: 3,
            name: "Tiaras",
        },
        {
            id: 4,
            name: "Viseiras",
        },
        {
            id: 5,
            name: "Faixas",
        },
    ];

    return (
        <>
            <div id="sub_menu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul id="top_menu_left" className="flex items-center px-2 h-8 text-[13px] text-[#333]">
                        {menuItems.map((item, key) => (
                            <li key={key} className="px-3 hover:underline cursor-pointer">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}