import { useRef, useState } from "react";

const arquivo_directory = "/src/assets/PosturAI/PosturAI.rar";

export default function DownloadEXE() {
    const divRef = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMove = (e) => {
        const rect = divRef.current.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMove}
            onMouseEnter={() => setOpacity(0.6)}
            onMouseLeave={() => setOpacity(0)}
            className={`
                relative z-20 rounded-xl 
                border border-neutral-800 
                bg-neutral-900 
                overflow-hidden 
                p-0
                transition-all duration-500
                hover:border-[#AFC7FF]
                hover:shadow-[0_0_15px_#AFC7FF55]
                cursor-pointer
            `}
            style={{ width: "fit-content" }}
        >
            {/* EFEITO DO HOLO SPOTLIGHT */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(175,199,255,0.35), transparent 80%)`
                }}
            />

            <a
                href={arquivo_directory}
                download="PosturAI.rar"
                rel="noopener noreferrer"
                className="relative block px-10 py-5 text-xl text-center 
                           bg-transparent z-10"
            >
                Baixe agora!
            </a>
        </div>
    );
}
