import Particulas from "../components/Particulas.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import DownloadEXE from "../components/DownloadEXE.jsx";

export default function SecaoDownload() {
  return (
    <section
      id="download-app"
      className="relative w-full py-32 px-6 text-white overflow-hidden"
    >

      {/* Fundo com partículas */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <Particulas
          particleColors={["#AFC7FF", "#ffffff"]}
          particleCount={120}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Gradiente escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B0C10]/60 to-[#05060A]/90 -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 drop-shadow-[0_0_20px_#AFC7FF55]" id="download-app">
            Baixe o PosturAI
          </h2>
        </ScrollReveal>

        {/* Subtítulo */}
        <ScrollReveal delay={0.15}>
          <p className="text-center text-xl md:text-3xl text-white/70 max-w-4xl mx-auto mb-16">
            Instale o <span className="text-[#AFC7FF] font-semibold">assistente inteligente</span>
            que monitora sua postura em tempo real e melhora sua qualidade de vida.
          </p>
        </ScrollReveal>

        {/* Cartão principal */}
        <ScrollReveal delay={0.25}>
          <div
            className="
              bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-3xl p-10 mx-auto max-w-4xl
              shadow-[0_0_30px_rgba(150,180,255,0.15)]
              flex flex-col items-center gap-8
            "
          >
            <h3 className="text-3xl font-semibold text-center">
              Disponível para Windows 🖥️
            </h3>

            {/* Botão de download original */}
            <div className="scale-110">
              <DownloadEXE />
            </div>

            <p className="text-white/60 text-center max-w-xl text-lg">
              Baixe, instale e comece a monitorar sua postura em segundos.  
              O PosturAI funciona totalmente offline e é 100% gratuito.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
