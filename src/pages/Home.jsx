import TextoRotativo from "../components/TextoRotativo";
import LogosAnimadas from "../components/LogosAnimadas";
import CartaoResponsivo from "../components/CartaoResponsivo";
import Particulas from "../components/Particulas";
import GradualBlur from "../components/BlurGradual";
import ProfileCard from "../components/ProfileCard";
import RobotSection from "../components/FeaturesSection";
import reactLogo from "../assets/simbolos/React.png";
import gsapLogo from "../assets/simbolos/GSAP.png";

import tailwindLogo from "../assets/simbolos/tailwind.png";
import viteLogo from "../assets/simbolos/vite-js-logo.png";
import ConfigForm from "../components/ConfigForm";
import DownloadEXE from "../components/DownloadEXE.jsx";
import ScrollReveal from '../components/ScrollReveal.jsx';
import SobreNos from "../components/SobreNos.jsx";
import Footer from "../components/Footer";
import SecaoDownload from "../components/SecaoDownload";
import Tutorial from "../components/Tutorial";

import ArthurAvatar from "../assets/Integrantes/Arthur.png";
import BerlofaAvatar from "../assets/Integrantes/Berlofa.png";
import UlissesAvatar from "../assets/Integrantes/Ulisses.png";
import FeaturesSection from "../components/FeaturesSection";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex flex-col text-white bg-black z-30">

      {/* PARTICULAS */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute inset-0 -z-20">
          <Particulas
            particleColors={['#ffffff', '#ffffff']}
            particleCount={2000}
            particleSpread={20}
            speed={0.008}
            particleBaseSize={300}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            particleHoverFactor={3.5}
          />
        </div>
      </div>

      {/* DIV PRA ESCURECER  O FUNDO */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center overflow-hidden mt-25">

        <h1 className="text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight flex flex-wrap justify-center items-center gap-4 mb-5">
          <span>Melhore sua&nbsp;</span>

          <span className="inline-flex items-center">
            <TextoRotativo
              texts={["Postura", "Saúde", "Vida"]}
              mainClassName="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm"
              initial={{ y: "50%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1.05 }}
              exit={{ y: "-40%", opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 22, stiffness: 250 }}
            />
          </span>

          <span>&nbsp;com o</span>

          <span className="text-[#AFC7FF] drop-shadow-[0_0_15px_rgba(100,150,255,0.45)]">
            &nbsp;PosturAI
          </span>
        </h1>

        <p className="max-w-3xl text-lg md:text-2xl text-white/80">
          O PosturAI monitora sua postura em tempo real usando Inteligência Artificial, prevenindo dores, lesões e melhorando sua qualidade de vida.
        </p>

        {/* BOTÕES */}
        <div className="mt-10 w-full flex flex-col md:flex-row gap-5 items-center justify-center">

          {/* BOTAO ANCORA PRO DOWNLOAD */}
            <CartaoResponsivo className="px-0 py-0">
            <a
                href="#"
                onClick={(e) => {
                e.preventDefault();
                gsap.to(window, {
                    duration: 1.4,
                    ease: "slow(0.7, 1.5, 0.7)",
                    scrollTo: {
                    y: "#download-app",
                    offsetY: 80
                    }
                });
                }}
                className="relative px-11 py-5 text-xl text-center text-white 
                        backdrop-blur-lg border hover:border-[#AFC7FF] 
                        border-white/20 rounded-xl transition-all duration-300 
                        flex items-center justify-center cursor-pointer"
            >
                Baixe Aqui
            </a>
            </CartaoResponsivo>


            {/* SAIBA MAIS */}
            <CartaoResponsivo className="px-0 py-0">
            <a
                href="#como-funciona"
                className="relative px-11 py-5 text-xl text-center text-white bg- backdrop-blur-lg border hover:border-[#AFC7FF] border-white/20 rounded-xl transition-all duration-300 flex items-center justify-center"
            >
                Saiba Mais
            </a>
            </CartaoResponsivo>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-10 py-24">
        <div className="grid md:grid-cols-3 gap-15 max-w-6xl mx-auto">

          <ScrollReveal delay={0.1}>
            <CartaoResponsivo className="max-w-150">
              <h3 className="text-4xl font-semibold mb-4">Monitoramento em tempo real</h3>
              <p className="opacity-80 text-2xl">A IA detecta sua postura automaticamente usando visão computacional.</p>
            </CartaoResponsivo>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <CartaoResponsivo className="max-w-150">
              <h3 className="text-4xl font-semibold mb-4">Alertas inteligentes</h3>
              <p className="opacity-80 text-2xl">O sistema vibra e mostra feedback visual quando você entorta.</p>
            </CartaoResponsivo>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <CartaoResponsivo className="max-w-150">
              <h3 className="text-4xl font-semibold mb-4">Relatórios e estatísticas</h3>
              <p className="opacity-80 text-2xl">Acompanhe seu histórico e estatísticas de postura de forma visual.</p>
            </CartaoResponsivo>
          </ScrollReveal>

        </div>
      </section>

      <SobreNos id="sobre-nos" />

      <FeaturesSection />

      <SecaoDownload />

      <Tutorial />

      {/* FORM */}
      <ConfigForm />

      {/* DESENVOLVEDORES */}
      <section id="devs" className="px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">Responsáveis pelo projeto</h2>

        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-3">

          <ProfileCard
            name="Arthur Ferreira"
            title="Desenvolvedor Front-end"
            handle="tuturley"
            status="Online"
            avatarUrl={ArthurAvatar}
            miniAvatarUrl={ArthurAvatar}
            enableTilt={true}
            contactLink="https://www.linkedin.com/in/tuturley/"
          />

          <ProfileCard
            name="Arthur Berlofa"
            title="Integração IoT + JSON"
            handle="berloffabosi"
            status="Online"
            avatarUrl={BerlofaAvatar}
            miniAvatarUrl={BerlofaAvatar}
            enableTilt={true}
            contactLink="https://www.linkedin.com/in/arthurberlofa/"
          />

          <ProfileCard
            name="Ulisses Ribeiro"
            title="Solução de Computer Vision"
            handle="__ribeiroxz"
            status="Online"
            avatarUrl={UlissesAvatar}
            miniAvatarUrl={UlissesAvatar}
            enableTilt={true}
            contactLink="https://www.linkedin.com/in/ulisses-abreu/"
          />

        </div>
      </section>

      <LogosAnimadas />

      <GradualBlur preset="page-footer" target="page" curve="bezier" strength={10} divCount={1} opacity={0.8} exponential />

    </div>
  );
}
