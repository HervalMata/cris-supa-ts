"use client"

import TopMenu from "@/app/layout/includes/TopMenu";
import SubMenu from "@/app/layout/includes/SubMenu";
import React from "react";
import MainHeader from "@/app/layout/includes/MainHeader";
import Footer from "@/app/layout/includes/Footer";

interface IProps {
    children: any;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <div id="main_layout" className="min-w-[1056px] max-w-[1300px] mx-auto border">
                <div>
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default MainLayout;