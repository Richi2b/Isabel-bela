/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageSquare, Copy, Check, ExternalLink, HelpCircle } from "lucide-react";

export default function WhatsAppLinkBuilder() {
  const [phoneNumber, setPhoneNumber] = useState<string>("923000000"); // Standard Angola mobile prefix
  const [selectedTemplate, setSelectedTemplate] = useState<string>("preco");
  const [customText, setCustomText] = useState<string>("");

  const [copied, setCopied] = useState<boolean>(false);

  // Template pre-filled messages with high-converting Angolan contexts
  const templates: Record<string, string> = {
    preco: "Olá! Vi o vosso anúncio do produto em Luanda e gostaria de confirmar o preço com entrega rápida pelo estafeta, por favor.",
    catalogo: "Olá! Vi o anúncio no feed e gostaria de receber a tabela de tamanhos e modelos disponíveis para entrega imediata.",
    bazar: "Olá! Vi as fotos no bazar e gostaria de saber se as sapatilhas tamanho 41 ainda estão disponíveis.",
    servicos: "Olá! Gostaria de agendar a manutenção ou higienização completa do meu aparelho de Ar Condicionado.",
    custom: ""
  };

  const getActiveText = () => {
    if (selectedTemplate === "custom") {
      return customText;
    }
    return templates[selectedTemplate];
  };

  const generateLink = () => {
    const formattedPhone = phoneNumber.replace(/\s+/g, "").replace("+", "");
    const cleanPhone = formattedPhone.startsWith("244") ? formattedPhone : "244" + formattedPhone;
    const encodedText = encodeURIComponent(getActiveText());
    return `https://wa.me/${cleanPhone}/?text=${encodedText}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLink());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0e0c20]/60 rounded-none border border-purple-950/40 overflow-hidden" id="link">
      <div className="bg-[#131128] border-b border-purple-950/40 p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-5 w-5 text-orange-500" />
          <h3 className="text-lg font-bold font-display uppercase tracking-tight">Gerador de Links no WhatsApp</h3>
        </div>
        <span className="text-3xs font-mono text-zinc-500 uppercase tracking-widest">[ +244 Angola ]</span>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <h4 className="text-xs font-mono uppercase tracking-widest text-orange-500 font-bold">Configuração Geral</h4>

          {/* Phone Input */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-mono text-zinc-400 mb-1">
              Terminal de Atendimento (Telemóvel)
            </label>
            <div className="flex overflow-hidden border border-purple-950/30 bg-[#14122d]">
              <span className="bg-[#1c183a] text-zinc-300 text-xs px-4 py-2.5 font-bold flex items-center border-r border-purple-950/30 font-mono">
                +244
              </span>
              <input
                type="text"
                maxLength={9}
                placeholder="923123456"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-2.5 bg-[#14122d] text-white text-xs font-bold font-mono focus:bg-[#1a173b] focus:outline-none focus:border-orange-500"
              />
            </div>
            <p className="text-[10px] text-zinc-500 mt-1 font-mono">
              Digite apenas os 9 dígitos habituais (Unitel/Movicel). O prefixo de Angola (+244) é ajustado na rota automaticamente.
            </p>
          </div>

          {/* Templates */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-mono text-zinc-400 mb-2">
              Mensagem Padrão de Boas-Vindas
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedTemplate("preco")}
                className={`px-3 py-2 text-3xs font-bold font-mono uppercase tracking-wide text-left border transition-all ${
                  selectedTemplate === "preco"
                    ? "bg-[#16132f] border-orange-500 text-orange-400"
                    : "bg-[#14122d]/40 border-purple-950/15 text-zinc-400 hover:text-white hover:bg-[#1c183c]"
                }`}
              >
                🏷️ Preço / Entrega
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate("catalogo")}
                className={`px-3 py-2 text-3xs font-bold font-mono uppercase tracking-wide text-left border transition-all ${
                  selectedTemplate === "catalogo"
                    ? "bg-[#16132f] border-orange-500 text-orange-400"
                    : "bg-[#14122d]/40 border-purple-950/15 text-zinc-400 hover:text-white hover:bg-[#1c183c]"
                }`}
              >
                📖 Solicitar Catálogo
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate("bazar")}
                className={`px-3 py-2 text-3xs font-bold font-mono uppercase tracking-wide text-left border transition-all ${
                  selectedTemplate === "bazar"
                    ? "bg-[#16132f] border-orange-500 text-orange-400"
                    : "bg-[#14122d]/40 border-purple-950/15 text-zinc-400 hover:text-white hover:bg-[#1c183c]"
                }`}
              >
                👟 Verificar Tamanho
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate("servicos")}
                className={`px-3 py-2 text-3xs font-bold font-mono uppercase tracking-wide text-left border transition-all ${
                  selectedTemplate === "servicos"
                    ? "bg-[#16132f] border-orange-500 text-orange-400"
                    : "bg-[#14122d]/40 border-purple-950/15 text-zinc-400 hover:text-white hover:bg-[#1c183c]"
                }`}
              >
                🛠️ Reparação AC / Assistência
              </button>
            </div>

            <button
              onClick={() => setSelectedTemplate("custom")}
              className={`w-full text-center mt-2.5 border py-2 text-3xs font-bold uppercase tracking-wider transition-all ${
                selectedTemplate === "custom"
                  ? "bg-[#16132f] border-orange-500 text-orange-400"
                  : "bg-[#14122d]/40 border-purple-950/15 text-zinc-400 hover:text-white hover:bg-[#1c183c]"
              }`}
            >
              ✍️ Escrever Mensagem Personalizada
            </button>
          </div>

          {selectedTemplate === "custom" && (
            <div>
              <textarea
                rows={2}
                placeholder="Escreva a resposta padrão do cliente..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#14122d] text-white border border-purple-950/30 text-xs focus:outline-none focus:border-orange-500"
              />
            </div>
          )}
        </div>

        {/* Output Link Display */}
        <div className="bg-[#0c0a1a] border border-purple-950/30 p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#a855f7] font-bold mb-3">
              [ Seu Link Pronto a Copiar ]
            </h4>
            
            <div className="bg-[#14122d] border border-purple-950/20 p-4 break-all">
              <span className="text-[9px] uppercase font-mono tracking-widest text-orange-450 font-bold text-orange-400">Link de Envio (Destino)</span>
              <p className="text-xs font-mono font-bold text-zinc-300 mt-1 select-all">{generateLink()}</p>
            </div>

            <div className="mt-4 bg-[#14122e]/80 border border-purple-950/20 p-4">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest font-mono block">Mensagem Inicial que o Cliente envia:</span>
              <p className="text-xs italic text-zinc-200 mt-1 leading-relaxed">
                "{getActiveText()}"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold uppercase tracking-wider py-3.5 text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copiar Link
                </>
              )}
            </button>

            <a
              href={generateLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16132f] hover:bg-[#25204d] border border-purple-950/30 text-white font-bold uppercase tracking-wider py-3.5 text-xs flex items-center justify-center gap-2 transition-all text-center"
            >
              <ExternalLink className="h-4 w-4 text-orange-400" />
              Testar no Zap
            </a>
          </div>

          <div className="mt-4 text-[10px] text-zinc-500 leading-relaxed font-mono flex gap-1.5 items-start border-t border-purple-950/25 pt-4">
            <HelpCircle className="h-3.5 w-3.5 text-zinc-500 shrink-0 mt-0.5" />
            <span>
              Insira esse link no botão 'Enviar Mensagem' do Facebook Ads. Economiza tempo eliminando perguntas genéricas do tipo "Quem está aí?" e direciona a negociação para a venda veloz.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
