import Particulas from "../components/Particulas.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import CartaoResponsivo from "./CartaoResponsivo.jsx";

export default function Tutorial() {
  return (
    <section
      className="relative w-full py-32 px-6 text-white overflow-hidden"
    >

      {/* Fundo animado */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <Particulas
          particleColors={["#AFC7FF", "#ffffff"]}
          particleCount={140}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Gradiente escuro suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0B0E]/60 to-[#05060A]/90 -z-10"></div>

      <div className="max-w-6xl mx-auto" id="tutorial">

        {/* Título */}
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-8 drop-shadow-[0_0_20px_#AFC7FF55]">
            Tutorial do PosturAI
          </h2>
        </ScrollReveal>

        {/* Subtítulo */}
        <ScrollReveal delay={0.1}>
          <p className="text-center text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-20">
            Veja como instalar, configurar e usar o <span className="text-[#AFC7FF] font-semibold">PosturAI</span> 
            na sua máquina em poucos minutos.
          </p>
        </ScrollReveal>

        {/* Vídeo + Card */}
        <ScrollReveal delay={0.2}>
          <div
            className="
              bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl p-10 mx-auto max-w-4xl
              shadow-[0_0_40px_rgba(150,180,255,0.15)]
              flex flex-col items-center gap-8
            "
          >
            <h3 className="text-3xl font-semibold text-center mb-4">
              Assista ao Guia Completo
            </h3>

            {/* Vídeo sem parecer YouTube */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(150,180,255,0.4)]">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/B-DyjLL_hKs"
                title="Tutorial PosturAI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl border border-white/10 shadow-xl"
            ></iframe>
            </div>

            <p className="text-white/60 text-center max-w-xl text-lg">
              Este vídeo explica passo a passo como instalar, configurar e começar a usar o PosturAI na sua rotina.
            </p>
          </div>
        </ScrollReveal>

        {/* Linha decorativa */}
        <div className="w-full flex justify-center my-20">
          <div className="h-[2px] w-full max-w-3xl bg-gradient-to-r from-transparent via-[#AFC7FF] to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Etapa 1 */}
            <ScrollReveal delay={0.35}>
                <CartaoResponsivo>
                <h4 className="text-2xl font-semibold text-[#AFC7FF] mb-3">
                    1. Personalize o arquivo JSON
                </h4>
                <p className="text-white/70">
                    Escolha as melhores configurações possíveis para tornar o PosturAI adequado ao seu uso.
                </p>
                </CartaoResponsivo>
            </ScrollReveal>

            {/* Etapa 2 */}
            <ScrollReveal delay={0.45}>
                <CartaoResponsivo>
                <h4 className="text-2xl font-semibold text-[#AFC7FF] mb-3">
                    2. Baixe o JSON gerado pelo quiz
                </h4>
                <p className="text-white/70">
                    Faça o download do arquivo preferences.json no local desejado no seu computador.
                </p>
                </CartaoResponsivo>
            </ScrollReveal>

            {/* Etapa 3 */}
            <ScrollReveal delay={0.55}>
                <CartaoResponsivo>
                <h4 className="text-2xl font-semibold text-[#AFC7FF] mb-3">
                    3. Coloque na pasta do app
                </h4>
                <p className="text-white/70">
                    Insira o preferences.json na pasta do PosturAI descompactado e comece a usar.
                </p>
                </CartaoResponsivo>
            </ScrollReveal>

            </div>
      </div>
    </section>
  );
}
