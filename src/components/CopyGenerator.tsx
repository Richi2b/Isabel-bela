/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ANGOLAN_PRESETS } from "../data/presets";
import { AngolanPreset, SalesStrategy, CopywritingResult } from "../types";
import { 
  Sparkles, 
  Copy, 
  Check, 
  MapPin, 
  Target, 
  Smartphone, 
  UserCheck, 
  TrendingUp, 
  Loader2,
  Info,
  Layers
} from "lucide-react";

interface CopyGeneratorProps {
  onPresetSelected: (preset: AngolanPreset) => void;
}

export default function CopyGenerator({ onPresetSelected }: CopyGeneratorProps) {
  const [selectedPresetId, setSelectedPresetId] = useState<string>("perucas-cabelos");
  const [customNiche, setCustomNiche] = useState<string>("");
  const [customPrice, setCustomPrice] = useState<string>("");
  const [customAudience, setCustomAudience] = useState<string>("");
  const [customFulfillment, setCustomFulfillment] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);
  
  // Strategy container
  const [currentStrategy, setCurrentStrategy] = useState<SalesStrategy>(
    ANGOLAN_PRESETS[0].strategy
  );

  const [copiedTextId, setCopiedTextId] = useState<string | null>(null);

  // Switch to preset
  const handlePresetChange = (presetId: string) => {
    setSelectedPresetId(presetId);
    setErrorInfo(null);
    const preset = ANGOLAN_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setCurrentStrategy(preset.strategy);
      onPresetSelected(preset);
    }
  };

  // Generate dynamic AI Strategy
  const handleGenerateAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customNiche.trim()) return;

    setLoading(true);
    setErrorInfo(null);

    try {
      const response = await fetch("/api/strategy/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nicheName: customNiche,
          avgPrice: customPrice ? `${customPrice} Kz` : "Preço sob consulta",
          targetAudience: customAudience,
          localFulfillment: customFulfillment,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setCurrentStrategy(result.data);
      } else {
        const errMsg = result.error || "Não foi possível contactar o servidor de IA.";
        setErrorInfo(
          errMsg.includes("GEMINI_API_KEY") 
            ? "Para gerar campanhas sob medida para o seu nicho com Inteligência Artificial, adicione a sua chave de API no painel 'Secrets' do AI Studio. Entretanto, selecionámos a nossa melhor estratégia padrão abaixo!"
            : `Houve um erro no servidor: ${errMsg}`
        );
        
        // Fallback or matched preset selection
        const matchedPreset = ANGOLAN_PRESETS.find(p => 
          p.title.toLowerCase().includes(customNiche.toLowerCase()) ||
          p.id.includes(customNiche.toLowerCase())
        );
        if (matchedPreset) {
          setCurrentStrategy(matchedPreset.strategy);
          onPresetSelected(matchedPreset);
        }
      }
    } catch (err: any) {
      console.error(err);
      setErrorInfo(
        "A ligação ao servidor falhou. Ative o GEMINI_API_KEY para campanhas inteligentes personalizadas ou utilize as campanhas reais testadas abaixo."
      );
    } finally {
      setLoading(false);
    }
  };

  // Helper copy to clipboard
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTextId(id);
    setTimeout(() => setCopiedTextId(null), 2000);
  };

  return (
    <div className="space-y-6" id="anuncios">
      {/* Selector Tabs or Nav bar styled like Dark Tech elements */}
      <div className="bg-[#121212] p-1.5 border border-zinc-800 flex gap-2 overflow-x-auto scroller-hide">
        {ANGOLAN_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => handlePresetChange(preset.id)}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
              selectedPresetId === preset.id && !loading
                ? "bg-green-500 text-black"
                : "text-zinc-400 hover:text-zinc-100 bg-[#161616]"
            }`}
          >
            <span>{preset.emoji}</span>
            <span>{preset.title}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Custom Niche Creator Input Form */}
        <div className="lg:col-span-5 bg-[#121212] border border-zinc-800 p-6 space-y-6">
          <div>
            <h3 className="font-bold font-display uppercase tracking-tight text-md text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-green-500" />
              Estratégia sob Medida (IA)
            </h3>
            <p className="text-[11px] text-zinc-400 leading-normal mt-1">
              Vende outro produto em Angola? Insira as informações abaixo e nossa inteligência artificial do mercado angolano escreverá scripts perfeitos sem rodeios teóricos.
            </p>
          </div>

          <form onSubmit={handleGenerateAI} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-zinc-400 mb-1">
                Serviço ou Produto do Negócio *
              </label>
              <input
                type="text"
                placeholder="Ex. Venda de Peças de Carro em Viana, Pizza..."
                value={customNiche}
                required
                onChange={(e) => setCustomNiche(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#161616] border border-zinc-800 text-xs text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-zinc-400 mb-1">
                Preço médio estimado (Kwanzas)
              </label>
              <input
                type="number"
                placeholder="Ex. 25000"
                value={customPrice}
                onChange={(e) => setCustomPrice(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#161616] border border-zinc-800 text-xs text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-zinc-400 mb-1">
                Local do Público / Clientes
              </label>
              <input
                type="text"
                placeholder="Ex. Universitários, Moradores do Kilamba..."
                value={customAudience}
                onChange={(e) => setCustomAudience(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#161616] border border-zinc-800 text-xs text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-zinc-400 mb-1">
                Modo de Despacho / Entrega
              </label>
              <textarea
                rows={2}
                placeholder="Ex. Estafeta de moto entrega em mão em Talatona, Maianga ou enviamos via transportadora Real Trans..."
                value={customFulfillment}
                onChange={(e) => setCustomFulfillment(e.target.value)}
                className="w-full px-4 py-3 bg-[#161616] border border-zinc-800 text-xs text-white focus:outline-none focus:border-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-black font-bold uppercase tracking-wider py-3 text-xs hover:bg-green-400 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Mapeando Tráfego Pago...
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5" />
                  Gerar Campanha Direta
                </>
              )}
            </button>
          </form>

          {errorInfo && (
            <div className="bg-zinc-900 border border-zinc-800 p-4 flex gap-2.5 text-2xs text-zinc-300">
              <Info className="h-4 w-4 shrink-0 mt-0.5 text-green-500" />
              <div>
                <p className="font-bold text-zinc-100 mb-0.5 uppercase tracking-wider">Modo Demonstração de Presets:</p>
                {errorInfo}
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Display of Strategy */}
        <div className="lg:col-span-7 space-y-6">
          {/* Section: Copywriting examples */}
          <div className="bg-[#121212] border border-zinc-800 p-6 space-y-5">
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
              <span className="text-xs font-mono tracking-widest text-[#00ff66] font-bold uppercase">
                {currentStrategy.nicheName}
              </span>
              <span className="text-[10px] uppercase bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 font-bold">
                WhatsApp Direct-To-Sale
              </span>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold font-display uppercase tracking-tight text-sm text-white flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-green-500" />
                Copys de Anúncio Reais (Prontos a Colar)
              </h4>

              {currentStrategy.copyExamples.map((copy: CopywritingResult, idx: number) => {
                const fullText = `*${copy.headline}*\n\n${copy.hook}\n\n${copy.bodyText}\n\n${copy.callToAction}`;
                return (
                  <div key={idx} className="bg-[#161616] border border-zinc-800 p-5 relative group">
                    <button
                      onClick={() => copyToClipboard(fullText, `copy-${idx}`)}
                      className="absolute top-4 right-4 bg-[#0d0d0d] hover:bg-[#1f1f1f] text-zinc-400 border border-zinc-800 rounded-sm px-2.5 py-1 transition-all flex items-center gap-1.5 text-3xs font-mono uppercase font-bold"
                    >
                      {copiedTextId === `copy-${idx}` ? (
                        <>
                          <Check className="h-3 w-3 text-green-400" />
                          <span className="text-green-400">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copiar Copy</span>
                        </>
                      )}
                    </button>

                    <div className="space-y-3 font-sans pr-24">
                      <div>
                        <span className="text-3xs uppercase tracking-widest font-mono text-green-500 font-bold">Título do Anúncio</span>
                        <p className="text-xs font-bold text-white block mt-0.5 font-display">{copy.headline}</p>
                      </div>
                      <div>
                        <span className="text-3xs uppercase tracking-widest font-mono text-zinc-500 font-bold">Gancho de Atenção</span>
                        <p className="text-xs italic text-zinc-300 block mt-0.5 leading-relaxed">"{copy.hook}"</p>
                      </div>
                      <div>
                        <span className="text-3xs uppercase tracking-widest font-mono text-zinc-500 font-bold">Informações Legenda</span>
                        <p className="text-xs text-zinc-400 whitespace-pre-line mt-1 font-mono leading-relaxed">{copy.bodyText}</p>
                      </div>
                      <div className="border-t border-zinc-800 pt-2.5 mt-2">
                        <span className="text-3xs uppercase tracking-widest font-mono text-[#00ff66] font-bold">Chamada de clique</span>
                        <p className="text-xs font-bold text-green-400 mt-0.5 font-display">{copy.callToAction}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Custom targeting in Facebook Ads manager for Angola */}
          <div className="bg-[#121212] border border-zinc-800 p-6 space-y-4">
            <h4 className="font-bold text-sm font-display uppercase tracking-tight text-white flex items-center gap-2">
              <Target className="h-4 w-4 text-green-500" />
              Segmentação Exata Recomendada no Meta Ads
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#161616] p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-3xs font-bold text-green-500 font-mono uppercase tracking-wider">
                  <MapPin className="h-3 w-3" /> Locais Selecionados
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {currentStrategy.targeting.locations.map((loc, i) => (
                    <span key={i} className="text-3xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 font-mono">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#161616] p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-3xs font-bold text-rose-400 font-mono uppercase tracking-wider">
                  <Layers className="h-3 w-3" /> Excluir do Orçamento
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {currentStrategy.targeting.exclusions.map((exc, i) => (
                    <span key={i} className="text-3xs bg-zinc-900 border border-zinc-850 text-rose-300 px-2 py-0.5 font-mono">
                      {exc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#161616] p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-3xs font-bold text-zinc-400 font-mono uppercase tracking-wider">
                  <UserCheck className="h-3 w-3" /> Idade / Géneros
                </div>
                <p className="mt-2 text-xs font-bold text-zinc-200 uppercase font-mono">
                  {currentStrategy.targeting.genders} • {currentStrategy.targeting.ageRange}
                </p>
              </div>

              <div className="bg-[#161616] p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-3xs font-bold text-green-400 font-mono uppercase tracking-wider">
                  <TrendingUp className="h-3 w-3" /> Interesses Práticos
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {currentStrategy.targeting.interests.map((interest, i) => (
                    <span key={i} className="text-3xs bg-zinc-900 border border-zinc-850 text-[#00ff66] px-2 py-0.5 font-mono">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 pt-3 border-t border-zinc-800 text-xs text-zinc-400 leading-relaxed">
              <p className="font-bold text-zinc-200">Conselho de Posicionamento:</p>
              {currentStrategy.targeting.placementAdvice}
            </div>
          </div>

          {/* Tips and Advice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-850 p-5">
              <h5 className="font-bold text-zinc-100 uppercase font-display text-xs tracking-wider mb-3 flex items-center gap-1.5 border-b border-zinc-800 pb-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                Orçamento de Teste
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                {currentStrategy.budgetAdvice}
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-850 p-5">
              <h5 className="font-bold text-zinc-100 uppercase font-display text-xs tracking-wider mb-3 flex items-center gap-1.5 border-b border-zinc-800 pb-2">
                <Sparkles className="h-4 w-4 text-green-500" />
                Gatilhos de Fecho (WhatsApp)
              </h5>
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                {currentStrategy.fastSaleTips.map((tip, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="bg-green-500/10 text-green-400 border border-green-550 h-4.5 w-4.5 text-3xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-sans leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
