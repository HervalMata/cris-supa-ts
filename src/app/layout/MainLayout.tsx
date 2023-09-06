"use client"

import TopMenu from "@/app/layout/includes/TopMenu";

// @ts-ignore
export default function MainLayout({ children }) {
    return (
        <>
            <div id="main_layout" className="min-w-[1056px] max-w-[1300px] mx-auto border">
                <div>
                    <TopMenu />
                </div>
            </div>
        </>
    );
}