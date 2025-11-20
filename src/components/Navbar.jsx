import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const linkBase = `
        relative 
        after:absolute after:left-0 after:bottom-[-2px] 
        after:h-[2px] after:w-0 after:bg-[#AFC7FF] 
        hover:after:w-full 
        hover:text-[#AFC7FF]
        transition-all duration-00
    `;

    const activeLink = `
        text-[#AFC7FF]
        after:w-full 
        font-semibold
        drop-shadow-[0_0_6px_rgba(150,180,255,0.6)]
    `;

    return (
        <nav
            className="
                fixed top-0 left-0 
                w-full z-50 
                bg-transparent
                px-6 py-4
                flex justify-around items-center
            "
        >

            {/* LOGO */}
            <Link to="/" className="pointer-events-auto">
                <h1 className="font-bold text-xl tracking-tight text-white">
                    <span className="text-[#AFC7FF]">Postur</span>
                    <span className="text-white/90">AI</span>
                </h1>
            </Link>

            {/* LINKS */}
            <div className="flex gap-6 items-center text-lg font-semibold text-white/80 pointer-events-auto">

                <Link
                    to="/"
                    className={`${linkBase} ${location.pathname === "/" ? activeLink : ""}`}
                >
                    Home
                </Link>

                <Link
                    to="/download"
                    className={` ${linkBase} ${location.pathname === "/download" ? activeLink : ""}`}
                >
                    Download
                </Link>

                <Link
                    to="/about"
                    className={`${linkBase} ${location.pathname === "/about" ? activeLink : ""}`}
                >
                    Sobre nós
                </Link>

            </div>
        </nav>
    );
}
