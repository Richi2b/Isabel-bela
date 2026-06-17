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
    <div className="bg-[#121212] rounded-none border border-zinc-800 overflow-hidden" id="link">
      <div className="bg-[#181818] border-b border-zinc-800 p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-bold font-display uppercase tracking-tight">Gerador de Links no WhatsApp</h3>
        </div>
        <span className="text-3xs font-mono text-zinc-500 uppercase tracking-widest">[ +244 Angola ]</span>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <h4 className="text-xs font-mono uppercase tracking-widest text-green-500 font-bold">Configuração Geral</h4>

          {/* Phone Input */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-mono text-zinc-400 mb-1">
              Terminal de Atendimento (Telemóvel)
            </label>
            <div className="flex overflow-hidden border border-zinc-800 bg-[#161616]">
              <span className="bg-[#1a1a1a] text-zinc-300 text-xs px-4 py-2.5 font-bold flex items-center border-r border-zinc-800 font-mono">
                +244
              </span>
              <input
                type="text"
                maxLength={9}
                placeholder="923123456"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-2.5 bg-[#161616] text-white text-xs font-bold font-mono focus:bg-[#1a1a1a] focus:outline-none"
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
                    ? "bg-zinc-900 border-green-500 text-green-400"
                    : "bg-[#161616] border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                🏷️ Preço / Entrega
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate("catalogo")}
                className={`px-3 py-2 text-3xs font-bold font-mono uppercase tracking-wide text-left border transition-all ${
                  selectedTemplate === "catalogo"
                    ? "bg-zinc-900 border-green-500 text-green-400"
                    : "bg-[#161616] border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                📖 Solicitar Catálogo
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate("bazar")}
                className={`px-3 py-2 text-3xs font-bold font-mono uppercase tracking-wide text-left border transition-all ${
                  selectedTemplate === "bazar"
                    ? "bg-zinc-900 border-green-500 text-green-400"
                    : "bg-[#161616] border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                👟 Verificar Tamanho
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemplate("servicos")}
                className={`px-3 py-2 text-3xs font-bold font-mono uppercase tracking-wide text-left border transition-all ${
                  selectedTemplate === "servicos"
                    ? "bg-zinc-900 border-green-500 text-green-400"
                    : "bg-[#161616] border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                🛠️ Reparação AC / Assistência
              </button>
            </div>

            <button
              onClick={() => setSelectedTemplate("custom")}
              className={`w-full text-center mt-2.5 border py-2 text-3xs font-bold uppercase tracking-wider transition-all ${
                selectedTemplate === "custom"
                  ? "bg-zinc-900 border-green-500 text-green-400"
                  : "bg-[#161616] border-zinc-800 text-zinc-400 hover:text-white"
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
                className="w-full px-4 py-2.5 bg-[#161616] text-white border border-zinc-800 text-xs focus:outline-none focus:border-green-500"
              />
            </div>
          )}
        </div>

        {/* Output Link Display */}
        <div className="bg-[#0f0f0f] border border-zinc-800 p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold mb-3">
              [ Seu Link Pronto a Copiar ]
            </h4>
            
            <div className="bg-[#121212] border border-zinc-850 p-4 break-all">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#00ff66] font-bold">Link de Envio (Destino)</span>
              <p className="text-xs font-mono font-bold text-zinc-300 mt-1 select-all">{generateLink()}</p>
            </div>

            <div className="mt-4 bg-[#141414] border border-zinc-850 p-4">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest font-mono block">Mensagem Inicial que o Cliente envia:</span>
              <p className="text-xs italic text-zinc-200 mt-1 leading-relaxed">
                "{getActiveText()}"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button
              onClick={handleCopy}
              className="bg-green-500 hover:bg-green-400 text-black font-bold uppercase tracking-wider py-3.5 text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
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
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-zinc-800 text-white font-bold uppercase tracking-wider py-3.5 text-xs flex items-center justify-center gap-2 transition-all text-center"
            >
              <ExternalLink className="h-4 w-4 text-green-500" />
              Testar no Zap
            </a>
          </div>

          <div className="mt-4 text-[10px] text-zinc-500 leading-relaxed font-mono flex gap-1.5 items-start border-t border-zinc-800 pt-4">
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
