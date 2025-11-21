import Stack from "./Stack";

// importa as logos
import reactLogo from "../assets/simbolos/React.png";
import gsapLogo from "../assets/simbolos/GSAP.png";
import tailwindLogo from "../assets/simbolos/tailwind.png";
import viteLogo from "../assets/simbolos/vite-js-logo.png";

const techCards = [
  { id: 1, img: reactLogo },
  { id: 2, img: gsapLogo },
  { id: 4, img: tailwindLogo },
  { id: 5, img: viteLogo }
];

export default function FeaturesSection() {
  return (
    <section className="w-full flex justify-center px-4 mb-32">
      <div
        className="
          relative w-full max-w-7xl 
          bg-[black] border border-[#AFC7FF] 
          rounded-3xl p-10 overflow-hidden
        "
      >

        {/* Glow de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent blur-3xl -z-10"></div>

        {/* CONTAINER CENTRAL */}
        <div className="flex justify-center relative z-10">

          {/* COLUNA OCUPANDO 50% DO CARD */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#AFC7FF] drop-shadow-[0_0_15px_rgba(100,150,255,0.45)]">
              Ferramentas utilizadas
            </h2>

            <p className="text-white/70 text-lg max-w-md">
              As tecnologias e ferramentas responsáveis por tornar o PosturAI possível.
            </p>

            {/* STACK CENTRALIZADO */}
            <div className="mt-10 flex justify-center w-full">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cardDimensions={{ width: 170, height: 170 }}
                cardsData={techCards}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
