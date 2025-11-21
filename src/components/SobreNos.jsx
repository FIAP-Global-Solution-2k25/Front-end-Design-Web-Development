import Particulas from "./Particulas";
import ScrollReveal from "./ScrollReveal";

export default function SobreNos({ id }) {
  return (
    <section id={id} className="relative w-full py-32 px-6 text-white overflow-hidden">

      <div className="absolute inset-0 -z-20 opacity-30">
        <Particulas
          particleColors={["#AFC7FF", "#ffffff"]}
          particleCount={120}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={60}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B0C10]/60 to-[#05060A]/90 -z-10"></div>

      <div className="max-w-6xl mx-auto">

        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-10 drop-shadow-[0_0_20px_#AFC7FF55]">
            Sobre Nós
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-center text-xl md:text-3xl text-white/70 max-w-5xl mx-auto mt-30 mb-5">
            A <span className="text-[#AFC7FF] font-semibold">PosturAI</span> é uma empresa especializada em 
            <span className="text-[#AFC7FF] font-semibold"> visão computacional</span> e bem-estar digital, 
            combinando engenharia, ciência de dados e inovação para criar soluções práticas e acessíveis que 
            melhoram a qualidade de vida dos nossos usuários. Nosso compromisso é oferecer um assistente inteligente 
            capaz de monitorar e corrigir a postura no ambiente de home office, promovendo saúde, conforto e produtividade.
          </p>
        </ScrollReveal>

        <div className="w-full flex justify-center my-20">
          <div className="h-[2px] w-full max-w-3xl bg-gradient-to-r from-transparent via-[#AFC7FF] to-transparent drop-shadow-[0_0_10px_#AFC7FF] mb-30 mt-30"></div>
        </div>

        <ScrollReveal>
          <h3 className="text-4xl font-bold text-center mb-16">
            Nossa Jornada
          </h3>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto mb-28">

          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#AFC7FF] to-transparent"></div>

          <div className="space-y-20">

            <ScrollReveal>
              <div className="relative w-full flex items-center">
                <div className="w-1/2 pr-10 text-right">
                  <h4 className="text-2xl font-semibold">O problema</h4>
                  <p className="text-white/60">
                    Identificamos a crescente incidência de problemas posturais devido ao home office.
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#AFC7FF] rounded-full shadow-[0_0_25px_#AFC7FF]"></div>
                <div className="w-1/2"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative w-full flex items-center">
                <div className="w-1/2"></div>
                <div className="w-10 h-10 bg-[#AFC7FF] rounded-full shadow-[0_0_25px_#AFC7FF]"></div>
                <div className="w-1/2 pl-10 text-left">
                  <h4 className="text-2xl font-semibold">A Ideia</h4>
                  <p className="text-white/60">
                    Desenvolvemos o conceito do PosturAI, focando em IA e visão computacional.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="relative w-full flex items-center">
                <div className="w-1/2 pr-10 text-right">
                  <h4 className="text-2xl font-semibold">PosturAI V1</h4>
                  <p className="text-white/60">
                    Primeira versão funcional rodando em IDEs, com detecção básica.
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#AFC7FF] rounded-full shadow-[0_0_25px_#AFC7FF]"></div>
                <div className="w-1/2"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="relative w-full flex items-center">
                <div className="w-1/2"></div>
                <div className="w-10 h-10 bg-[#AFC7FF] rounded-full shadow-[0_0_25px_#AFC7FF]"></div>
                <div className="w-1/2 pl-10 text-left">
                  <h4 className="text-2xl font-semibold">PosturAI Atual</h4>
                  <p className="text-white/60">
                    Sistema fluido e robusto, integração com Arduino e personalização via JSON.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}
