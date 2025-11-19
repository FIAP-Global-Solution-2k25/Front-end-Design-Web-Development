import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
            <Link to="/" className="hover:underline"><h1 className="font-bold text-xl">PosturAI</h1></Link>
            <div className="flex gap-4 items-center">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/download" className="hover:underline">Download</Link>
                <Link to="/about" className="hover:underline">About</Link>
            </div>
        </nav>
    );
}