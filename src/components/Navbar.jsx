import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="absolute top-0 left-0 w-full bg-transparent text-black px-6 py-4 flex justify-around items-center z-50 top-3">

                <Link to="/" className="">
                    <h1 className="font-bold text-xl">
                        <span className="text-gray-100 hover:text-gray-300">Postur</span><span className="text-[#3950FA] text-xl transition-colors duration-900">AI</span>
                    </h1>
                </Link>

                <div className="flex gap-6 items-center text-lg text-white">

                    <Link 
                        to="/" 
                        className="relative after:absolute after:left-0 after:bottom-[-1px] after:h-[2px] after:w-0 
                                   after:bg-[#5D65A6] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </Link>

                    <Link 
                        to="/download"
                        className="relative after:absolute after:left-0 after:bottom-[-1px] after:h-[2px] after:w-0 
                                   after:bg-[#5D65A6] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Download
                    </Link>

                    <Link 
                        to="/about"
                        className="relative after:absolute after:left-0 after:bottom-[-1px] after:h-[2px] after:w-0 
                                   after:bg-[#5D65A6] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About
                    </Link>

                </div>
            </nav>
        </>
    );
}
