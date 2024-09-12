import { React } from 'react';
import Header from "../header";
import { Outlet } from "react-router-dom";
//import Footer from '../footer';

export function Layout() {

    return(
        <div>
            <Header />
            <div className="outlet">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;