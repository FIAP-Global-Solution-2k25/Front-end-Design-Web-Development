import { useState } from "react";

const initialConfig = {
  niveis_sensibilidade: ["fraco", "moderado", "forte"],
  sensibilidade: "moderado",
  hardware: {
    tem_cadeira_iot: false,
    ip_cadeira_iot: "0.tcp.sa.ngrok.io:13950",
    id_cadeira_iot: "Chair:001",
    atraso_vibracao: 10,
  },
  interface: {
    janela_sempre_topo: true,
    gerar_grafico_apos_encerramento: true,
  },
};

export default function ConfigForm() {
  const [config, setConfig] = useState(initialConfig);

  // sensibilidade (select)
  const handleSensibilidadeChange = (e) => {
    setConfig((prev) => ({
      ...prev,
      sensibilidade: e.target.value,
    }));
  };

  // campos de texto/numero dentro de hardware/interface
  const handleNestedChange = (section, field, parser = (v) => v) => (e) => {
    const value = parser(e.target.value);
    setConfig((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // booleans (sim/não)
  const handleNestedBoolean = (section, field) => (e) => {
    const value = e.target.value === "true";
    setConfig((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // se quiser “enviar” depois, aqui já está o JSON pronto
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Config JSON:", config);
    alert("Configuração gerada! Veja o JSON abaixo ou no console.");
  };

  return (
    <section className="w-full flex justify-center mt-20 px-4">
      <div className="w-full max-w-5xl bg-[#05060a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-3">
          Configure sua experiência
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl">
          Responda às perguntas abaixo para gerar o arquivo de configuração do
          PosturAI. As respostas são convertidas em um JSON automaticamente.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 md:grid-cols-2 text-sm md:text-base"
        >
          {/* COLUNA 1 – Sensibilidade & Hardware */}
          <div className="space-y-6">
            {/* Sensibilidade */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Nível de sensibilidade da postura
              </label>
              <select
                value={config.sensibilidade}
                onChange={handleSensibilidadeChange}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
              >
                {config.niveis_sensibilidade.map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
                  </option>
                ))}
              </select>
              <p className="text-xs text-white/50 mt-1">
                <strong>Fraco</strong> = menos alertas,{" "}
                <strong>Forte</strong> = corrige qualquer desvio.
              </p>
            </div>

            {/* Tem cadeira IoT */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Você está usando uma cadeira IoT?
              </label>
              <select
                value={String(config.hardware.tem_cadeira_iot)}
                onChange={handleNestedBoolean("hardware", "tem_cadeira_iot")}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
              >
                <option value="false">Não</option>
                <option value="true">Sim</option>
              </select>
              <p className="text-xs text-white/50 mt-1">
                Se não tiver cadeira inteligente, o PosturAI funciona usando
                apenas a câmera.
              </p>
            </div>

            {/* IP da cadeira */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                IP / Endereço da cadeira IoT
              </label>
              <input
                type="text"
                value={config.hardware.ip_cadeira_iot}
                onChange={handleNestedChange("hardware", "ip_cadeira_iot")}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
                placeholder="0.tcp.sa.ngrok.io:13950"
              />
              <p className="text-xs text-white/50 mt-1">
                Use o endereço público ou IP local da cadeira.
              </p>
            </div>
          </div>

          {/* COLUNA 2 – Hardware extra & Interface */}
          <div className="space-y-6">
            {/* ID da cadeira */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                ID da cadeira IoT
              </label>
              <input
                type="text"
                value={config.hardware.id_cadeira_iot}
                onChange={handleNestedChange("hardware", "id_cadeira_iot")}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
                placeholder="Chair:001"
              />
            </div>

            {/* Atraso de vibração */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Atraso para vibrar após detectar má postura (segundos)
              </label>
              <input
                type="number"
                min={0}
                value={config.hardware.atraso_vibracao}
                onChange={handleNestedChange(
                  "hardware",
                  "atraso_vibracao",
                  (v) => Number(v) || 0
                )}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
              />
            </div>

            {/* Janela sempre no topo */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Manter a janela do PosturAI sempre no topo?
              </label>
              <select
                value={String(config.interface.janela_sempre_topo)}
                onChange={handleNestedBoolean(
                  "interface",
                  "janela_sempre_topo"
                )}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
              >
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>

            {/* Gerar gráfico ao encerrar */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Gerar gráfico de desempenho ao encerrar a sessão?
              </label>
              <select
                value={String(
                  config.interface.gerar_grafico_apos_encerramento
                )}
                onChange={handleNestedBoolean(
                  "interface",
                  "gerar_grafico_apos_encerramento"
                )}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
              >
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>
          </div>

          {/* BOTÃO ENVIAR – largura total */}
          <div className="md:col-span-2 flex justify-end mt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors duration-200"
            >
              Gerar configuração
            </button>
          </div>
        </form>

        {/* JSON GERADO */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            JSON gerado
          </h3>
          <pre className="w-full bg-black/70 border border-white/10 rounded-2xl p-4 text-xs md:text-sm text-green-300 overflow-x-auto">
{JSON.stringify(config, null, 4)}
          </pre>
        </div>
      </div>
    </section>
  );
}
