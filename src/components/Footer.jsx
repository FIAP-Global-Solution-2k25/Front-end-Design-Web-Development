import Logo from "../assets/PosturAI-LOGO.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {

  const scrollParaHome = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "slow(0.7, 1.4, 0.7)",
      scrollTo: { y: 0 }
    });
  };

  const scrollParaSobreNos = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "slow(0.7, 1.4, 0.7)",
      scrollTo: { y: "#sobre-nos", offsetY: 120 }
    });
  };

  const scrollParaTutorial = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "slow(0.7, 1.4, 0.7)",
      scrollTo: { y: "#tutorial", offsetY: 120 }
    });
  };

  return (
    <footer className="w-full mt-32 bg-black border-t border-white/10 py-12 px-6 relative overflow-hidden">

      {/* Fundo suave */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-72 h-72 bg-[#AFC7FF] blur-3xl rounded-full -top-20 -left-10"></div>
        <div className="absolute w-64 h-64 bg-[#6F8DFF] blur-3xl rounded-full bottom-0 right-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-3 gap-12">

        {/* Logo com scroll para Home */}
        <div className="flex flex-col gap-4">
            
        <button onClick={scrollParaHome} className="w-fit">
            <img 
            src={Logo}
            alt="PosturAI Logo"
            className="w-20 opacity-90 cursor-pointer hover:opacity-100 transition drop-shadow-[0_0_12px_rgba(150,180,255,0.45)]"
            />
        </button>

        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Cuidar da sua postura hoje é investir na sua saúde amanhã, e claro, com o PosturAI ao seu lado.
        </p>

        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-3 text-white/80 text-lg">
          <h3 className="font-semibold text-white mb-2">Navegação</h3>

          {/* HOME */}
          <button
            onClick={scrollParaHome}
            className="text-left hover:text-[#AFC7FF] transition"
          >
            Home
          </button>

          {/* QUEM SOMOS */}
          <button
            onClick={scrollParaSobreNos}
            className="text-left hover:text-[#AFC7FF] transition"
          >
            Quem somos
          </button>

          {/* TUTORIAL COM SCROLL SUAVE */}
          <button
            onClick={scrollParaTutorial}
            className="text-left hover:text-[#AFC7FF] transition"
          >
            Tutorial
          </button>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col gap-3 text-white/80 text-lg">
          <h3 className="font-semibold text-white mb-2">Conecte-se</h3>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#AFC7FF] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/FIAP-Global-Solution-2k25"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#AFC7FF] transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#AFC7FF] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white/40 text-sm mt-10 relative z-10">
        © {new Date().getFullYear()} PosturAI — Todos os direitos reservados.
      </div>
    </footer>
  );
}
