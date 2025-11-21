import { useState } from "react";

const initialConfig = {
  niveis_sensibilidade: ["fraco", "moderado", "forte"],
  sensibilidade: "moderado",
  hardware: {
    tem_cadeira_iot: false,
    ip_cadeira_iot: "0.tcp.sa.ngrok.io:13950",
    id_cadeira_iot: "Chair:001",
    atraso_vibracao: 5000
  },
  interface: {
    janela_sempre_topo: true,
    gerar_grafico_apos_encerramento: true,
    id_webcam: 0
  }
};

export default function ConfigForm() {
  const [config, setConfig] = useState(initialConfig);

  const handleSensibilidadeChange = (e) => {
    setConfig((prev) => ({
      ...prev,
      sensibilidade: e.target.value,
    }));
  };

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

  const handleDownloadJson = () => {
    const jsonString = JSON.stringify(config, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "preferences.json";

    document.body.appendChild(link);
    link.click();

    link.remove();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Config pronta:", config);
  };

  const baseInput =
    "w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white " +
    "focus:outline-none focus:ring-2 focus:ring-cyan-400/70 " +
    "hover:border-cyan-400 transition-all duration-500";

  return (
    <section className="w-full flex justify-center mt-20 px-4">
      <div className="w-full max-w-5xl bg-[#05060a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">

        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-3">
          Configure sua experiência
        </h2>

        <p className="text-white/70 mb-8 max-w-2xl">
          Responda para gerar automaticamente o arquivo JSON usado pelo PosturAI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 md:grid-cols-2 text-sm md:text-base"
        >

          {/* COLUNA 1 */}
          <div className="space-y-6">

            {/* Sensibilidade */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Nível de sensibilidade da postura
              </label>

              <select
                value={config.sensibilidade}
                onChange={handleSensibilidadeChange}
                className={baseInput}
              >
                {config.niveis_sensibilidade.map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
                  </option>
                ))}
              </select>

              <p className="text-xs text-white/50 mt-1">
                Define quanto o sistema será rígido para detectar desvios.
              </p>
            </div>

            {/* Cadeira IoT */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Você está usando uma cadeira IoT?
              </label>

              <select
                value={String(config.hardware.tem_cadeira_iot)}
                onChange={handleNestedBoolean("hardware", "tem_cadeira_iot")}
                className={baseInput}
              >
                <option value="false">Não</option>
                <option value="true">Sim</option>
              </select>

              <p className="text-xs text-white/50 mt-1">
                Ative apenas se estiver usando a cadeira inteligente integrada.
              </p>
            </div>

            {/* IP */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                IP / Endereço da cadeira IoT
              </label>

              <input
                type="text"
                value={config.hardware.ip_cadeira_iot}
                onChange={handleNestedChange("hardware", "ip_cadeira_iot")}
                className={baseInput}
              />

              <p className="text-xs text-white/50 mt-1">
                Endereço usado para comunicação entre o software e a cadeira.
              </p>
            </div>

            {/* ID */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                ID da cadeira IoT
              </label>

              <input
                type="text"
                value={config.hardware.id_cadeira_iot}
                onChange={handleNestedChange("hardware", "id_cadeira_iot")}
                className={baseInput}
              />

              <p className="text-xs text-white/50 mt-1">
                Identificador único da sua cadeira no sistema.
              </p>
            </div>
          </div>

          {/* COLUNA 2 */}
          <div className="space-y-6">

            {/* Atraso */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Atraso para vibrar (ms)
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
                className={baseInput}
              />

              <p className="text-xs text-white/50 mt-1">
                Tempo de espera antes da cadeira emitir a vibração corretiva.
              </p>
            </div>

            {/* Webcam */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                ID da Webcam
              </label>

              <input
                type="number"
                min={0}
                value={config.interface.id_webcam}
                onChange={handleNestedChange(
                  "interface",
                  "id_webcam",
                  (v) => Number(v) || 0
                )}
                className={baseInput}
              />

              <p className="text-xs text-white/50 mt-1">
                Alterado apenas se você utilizar uma webcam alternativa.
              </p>
            </div>

            {/* Sempre no topo */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Manter janela sempre no topo?
              </label>

              <select
                value={String(config.interface.janela_sempre_topo)}
                onChange={handleNestedBoolean("interface", "janela_sempre_topo")}
                className={baseInput}
              >
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>

              <p className="text-xs text-white/50 mt-1">
                Mantém o PosturAI acima de outros aplicativos enquanto usado.
              </p>
            </div>

            {/* Gráfico */}
            <div>
              <label className="block font-medium mb-2 text-white/90">
                Gerar gráfico ao encerrar sessão?
              </label>

              <select
                value={String(config.interface.gerar_grafico_apos_encerramento)}
                onChange={handleNestedBoolean(
                  "interface",
                  "gerar_grafico_apos_encerramento"
                )}
                className={baseInput}
              >
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>

              <p className="text-xs text-white/50 mt-1">
                Gera um relatório visual da sua postura ao final da sessão.
              </p>
            </div>
          </div>

          {/* BOTÕES */}
          <div className="md:col-span-2 flex justify-end mt-2 space-x-4">
            <button
              type="button"
              onClick={handleDownloadJson}
              className="px-6 py-2.5 rounded-xl border border-cyan-500 text-cyan-400 font-semibold transition-all duration-200 hover:bg-cyan-500/10 shadow-lg"
            >
              Baixar Arquivo .json
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors duration-200 shadow-lg"
            >
              Gerar configuração
            </button>
          </div>
        </form>

        {/* PREVIEW */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            JSON gerado (Pré-visualização)
          </h3>

          <pre className="w-full bg-black/70 border border-white/10 rounded-2xl p-4 text-xs md:text-sm text-green-300 overflow-x-auto">
            {JSON.stringify(config, null, 4)}
          </pre>
        </div>
      </div>
    </section>
  );
}
