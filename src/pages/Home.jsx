import TextoRotativo from "../components/TextoRotativo";
import LogosAnimadas from "../components/LogosAnimadas";
import CartaoResponsivo from "../components/CartaoResponsivo";
import Particulas from "../components/Particulas";
import GradualBlur from "../components/GradualBlur";
import ScrollReveal from "../components/ScrollReveal";

const devs = [
  {
    name: "Arthur Ferreira",
    role: "Desenvolvedor Front-end",
    bio: "Responsável pela experiência do usuário, layout responsivo e interações modernas da PosturAI."
  },
  {
    name: "Arthur Berlofa",
    role: "Desenvolvedor Full Stack",
    bio: "Cuida da arquitetura do projeto, integração entre front e back e organização geral do código."
  },
  {
    name: "Ulisses Ribeiro",
    role: "Engenheiro de Software",
    bio: "Focado na qualidade, testes, desempenho e boas práticas para manter a PosturAI escalável."
  }
];


export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex flex-col text-white bg-black z-30">

      
      {/* FUNDO DE PARTÍCULAS */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Particulas
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            Particulaspread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticulasOnHover={true}  
            alphaParticulas={false}
            disableRotation={false}
        />
        </div>


      {/* OVERLAY ESCURO SUAVE */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden" >
  
        <h1 className="
            text-4xl md:text-6xl lg:text-7xl 
            font-extrabold tracking-tight 
            flex flex-wrap justify-center items-center gap-4
        ">
          <span>Melhore sua&nbsp;</span>

          <span className="inline-flex items-center">
            <TextoRotativo
                texts={["Postura", "Saúde", "Vida"]}
                mainClassName="
                    inline-flex
                    items-center justify-center
                    px-3 py-1.5
                    rounded-lg bg-white/5 backdrop-blur-sm
                "
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

        <p className="max-w-2xl mt-6 text-lg md:text-xl text-white/80">
          O PosturAI monitora sua postura em tempo real usando Inteligência
          Artificial, prevenindo dores, lesões e melhorando sua qualidade de vida.
        </p>

        <div className="mt-10 flex gap-5">
          <a
            href="/download"
            className="px-7 py-3 text-black bg-[#AFC7FF] hover:bg-white/30 hover:text-white
                       backdrop-blur-lg border border-white/30 rounded-xl transition-all duration-300"
          >
            Baixar Aplicativo
          </a>

          <a
            href="#como-funciona"
            className="px-7 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg 
                       border border-white/20 rounded-xl transition-all duration-300"
          >
            Saiba Mais
          </a>
        </div>
      </section>

    {/* SEÇÃO DE DESENVOLVEDORES */}
<section id="devs" className="relative w-full py-24 bg-black/40 border-y border-white/5">
  <div className="max-w-5xl mx-auto px-6 space-y-24">
    
    <ScrollReveal baseOpacity={0} baseBlur={25} baseY={40}>
      <header className="text-center mb-6">
        <p className="text-xs tracking-[0.35em] uppercase text-white/40">
          equipe de desenvolvimento
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
          Software desenvolvido por
        </h2>
      </header>
    </ScrollReveal>

    {devs.map((dev, index) => (
      <ScrollReveal
        key={dev.name}
        baseOpacity={0}
        baseBlur={20}
        baseY={60}
      >
        <article className="min-h-[60vh] grid md:grid-cols-[1fr,1.5fr] gap-10 items-center">
          
          <div className="flex justify-center md:justify-start">
            <div className="h-44 w-44 md:h-52 md:w-52 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.85)] flex items-center justify-center overflow-hidden">
              <span className="text-xs md:text-sm text-white/60 text-center leading-relaxed">
                Foto do(a)
                <br />
                {dev.name}
              </span>
            </div>
          </div>

          <div className="text-left md:text-left space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Desenvolvedor {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold">{dev.name}</h3>
            <p className="text-sm md:text-base text-white/70">{dev.role}</p>
            <p className="text-sm md:text-base text-white/60 max-w-xl">{dev.bio}</p>

            <div className="mt-4 h-20 rounded-2xl border border-dashed border-white/15 bg-white/5/10 flex items-center justify-center text-xs text-white/40">
              Área reservada para efeitos e cards avançados da foto do dev.
            </div>
          </div>

        </article>
      </ScrollReveal>
    ))}

  </div>
</section>


      {/* LOGOS */}
      <LogosAnimadas />

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Como funciona?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <CartaoResponsivo>
            <h3 className="text-xl font-semibold mb-4">
              Monitoramento em tempo real
            </h3>
            <p className="opacity-80">
              A IA detecta sua postura automaticamente usando visão computacional.
            </p>
          </CartaoResponsivo>

          <CartaoResponsivo>
            <h3 className="text-xl font-semibold mb-4">Alertas inteligentes</h3>
            <p className="opacity-80">
              O sistema vibra, alerta ou mostra feedback visual quando você entorta.
            </p>
          </CartaoResponsivo>

          <CartaoResponsivo>
            <h3 className="text-xl font-semibold mb-4">
              Relatórios e progresso
            </h3>
            <p className="opacity-80">
              Acompanhe sua evolução e descubra quando sua postura melhora.
            </p>
          </CartaoResponsivo>
        </div>
      </section>
      <section></section>
      <GradualBlur
        preset="page-footer"
        target="page"
        curve="bezier"
        strength={1}
        divCount={6}
        opacity={0.6}
        exponential={true}
      />
    </div>
  );
}
