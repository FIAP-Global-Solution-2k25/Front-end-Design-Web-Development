import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

export default function UserLayout() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="">

                <Outlet />
            </div>
        </div>
    );
}
