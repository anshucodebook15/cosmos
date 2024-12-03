import React from "react";
import "./Layout.scss";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Glassmorph from "../components/Glassmorph/Glassmorph";

const Layout = ({ imguri }) => {
    return (
        <div className="layout">
            <Glassmorph uri={imguri} />

            <Navbar />

            <div className="content">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
