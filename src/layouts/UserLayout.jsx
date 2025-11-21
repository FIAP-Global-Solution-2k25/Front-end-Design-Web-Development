import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

export default function UserLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            
            <div className="flex-1 bg-black">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}