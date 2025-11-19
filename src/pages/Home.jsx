import Navbar from "../components/Navbar";
import DarkVeil from "../components/DarkVeil";
import RotatingText from '../components/RotatingText';
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

export default function Home() {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden flex flex-col">

            {/* NAV FIXO */}
            <Navbar />

            {/* BACKGROUND FIXO */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <DarkVeil />
            </div>

            {/* HERO */}
            <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-white pt-10">

                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg flex flex-wrap justify-center gap-3">
                    Melhore sua
                    <RotatingText
                        texts={['Postura', 'Saúde', 'Vida']}
                        mainClassName="
                            inline-block 
                            max-w-[250px] 
                            bg-[#3950FA] 
                            text-white 
                            px-3 
                            py-1 
                            rounded-md 
                            text-center 
                            overflow-hidden
                        "
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    com o <span className="text-[#3245d8]">PosturAI</span>
                </h1>

                <p className="max-w-2xl mt-4 md:mt-6 text-lg md:text-xl opacity-90">
                    Cuidar da sua saúde hoje é investir na saúde do seu amanhã.
                </p>

                <div className="mt-8 flex gap-4">
                    <a 
                        href="/download"
                        className="px-6 py-3 bg-[#400AB1] hover:bg-blue-600 text-white 
                                   font-semibold rounded-lg transition-all duration-300 
                                   shadow-md hover:shadow-blue-700/40 animate-pulse-slow"
                    >
                        Baixar Aplicativo
                    </a>

                    <a 
                        href="/about"
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md 
                                   border border-white/30 text-white font-semibold 
                                   rounded-lg transition-all duration-300"
                    >
                        Saiba Mais
                    </a>
                </div>

            </main>

            {/* SCROLL STACK */}
            <section className="w-full mt-[40vh] mb-[20vh] text-white">
                <ScrollStack useWindowScroll={true}>
                    <ScrollStackItem>
                        <h2 className="text-center text-xl font-bold">Card 1</h2>
                        <p className="text-center mt-2">Este é o primeiro card da pilha</p>
                    </ScrollStackItem>

                    <ScrollStackItem>
                        <h2 className="text-center text-xl font-bold">Card 2</h2>
                        <p className="text-center mt-2">Este é o segundo card da pilha</p>
                    </ScrollStackItem>

                    <ScrollStackItem>
                        <h2 className="text-center text-xl font-bold">Card 3</h2>
                        <p className="text-center mt-2">Este é o terceiro card da pilha</p>
                    </ScrollStackItem>
                </ScrollStack>
            </section>

        </div>
    );
}
