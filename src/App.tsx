/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AngolanPreset } from "./types";
import { ANGOLAN_PRESETS } from "./data/presets";
import BudgetCalculator from "./components/BudgetCalculator";
import CopyGenerator from "./components/CopyGenerator";
import WhatsAppLinkBuilder from "./components/WhatsAppLinkBuilder";
import BlueprintsList from "./components/BlueprintsList";
import { 
  Calculator, 
  MessageSquare, 
  TrendingUp, 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle,
  Flame,
  Building,
  DollarSign,
  PhoneCall
} from "lucide-react";

export default function App() {
  const [selectedPreset, setSelectedPreset] = useState<AngolanPreset>(ANGOLAN_PRESETS[0]);

  // Handler to sync current preset with simulator and other widgets
  const handlePresetSelection = (preset: AngolanPreset) => {
    setSelectedPreset(preset);
  };

  return (
    <div className="bg-[#080711] text-zinc-100 min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-black">
      
      {/* 1. Header Navigation */}
      <header className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 border-b border-zinc-900 bg-[#0c0b1a] gap-4" id="header-nav">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-sm flex items-center justify-center shadow-lg shadow-orange-500/10">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <span className="text-lg font-black tracking-widest uppercase font-display text-white">
            DIRECTO AO PONTO <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">ANGOLA</span>
          </span>
        </div>
        
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-orange-400 justify-center">
          <a href="#simulador" className="hover:text-white transition-colors">[ 1. Calculadora ROI ]</a>
          <a href="#anuncios" className="hover:text-white transition-colors">[ 2. Gerador Anúncios ]</a>
          <a href="#link" className="hover:text-white transition-colors">[ 3. Link Curto ]</a>
          <a href="#casos" className="hover:text-white transition-colors">[ 4. Roteiros Reais ]</a>
        </nav>

        <a 
          href={`https://wa.me/244923000000?text=Ol%C3%A1!%20Gostaria%20de%20uma%20mentoria%20de%20Tr%C3%A1fego%20Pago%20para%20vender%20no%20meu%20nicho%20em%20Angola.`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-5 py-2 w-full lg:w-auto text-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-xs font-bold uppercase tracking-widest transition-all"
          id="btn-talk-consultant"
        >
          Consultor de Vendas
        </a>
      </header>

      {/* 2. Hero Section and Live Case Study - Splitted layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-900" id="hero-showcase">
        {/* Left Hero */}
        <div className="lg:col-span-7 bg-[#080711] p-8 md:p-12 flex flex-col justify-center">
          <span className="text-orange-500 font-mono text-xs mb-3 tracking-widest uppercase block font-bold">
            [ algoritmos e estratégias ao vivo ]
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-6 font-display uppercase">
            VENDA MAIS NO <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>
              MERCADO ANGOLANO
            </span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            Esqueça teorias complicadas de marketing digital europeias ou brasileiras. 
            Em Angola, a venda real acontece no <strong className="text-white">WhatsApp</strong> através de tráfego pago de conversão rápida, preço transparente e confiança na entrega.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-orange-600 flex items-center justify-center font-bold text-xs text-white">L</div>
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-purple-700 flex items-center justify-center font-bold text-xs text-white">B</div>
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-[#161525] flex items-center justify-center font-bold text-xs text-white">C</div>
            </div>
            <p className="text-xs text-zinc-500">
              <span className="text-zinc-200 font-bold block sm:inline">Mais de 150 empreendedores</span> de Luanda, Benguela, Huambo e Lubango utilizam este funil prático para vender diariamente no WhatsApp.
            </p>
          </div>
        </div>

        {/* Right Metrics / Imobiliária Case Study */}
        <div className="lg:col-span-5 bg-[#0d0c1b] p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-900">
          <div className="space-y-6">
            <span className="text-3xs font-mono font-bold uppercase tracking-widest text-[#a855f7] block">
              [ Caso Real: Climatização & Bazar ]
            </span>
            
            <div className="space-y-4">
              <div className="bg-[#141226] border border-purple-950 p-5 relative overflow-hidden">
                <div className="absolute right-4 top-4 bg-orange-500/10 text-orange-400 border border-orange-500/25 px-2 py-0.5 text-4xs font-mono font-bold uppercase tracking-wider">
                  Testado
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Building className="h-3.5 w-3.5 text-orange-400" /> Imobiliária & AC em Talatona
                </div>
                <div className="text-3xl font-mono font-black text-white">142 Leads</div>
                <p className="text-xs text-zinc-405 mt-1">
                  Gerados em apenas <span className="text-white font-bold">7 dias</span> com investimento de 3.500 Kz/dia.
                </p>
              </div>

              <div className="bg-[#141226] border border-purple-950 p-5">
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 flex items-center gap-1.5 mb-1">
                  <DollarSign className="h-3.5 w-3.5 text-orange-400" /> Custo por conversa real
                </div>
                <div className="text-3xl font-mono font-black text-white">150 AOA</div>
                <p className="text-xs text-zinc-405 mt-1">
                  Média de custo por chat iniciado com público filtrado por localização exata.
                </p>
              </div>

              <div className="bg-[#141226] border border-purple-950 p-5">
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Flame className="h-3.5 w-3.5 text-purple-400" /> Canal Preferido
                </div>
                <div className="text-3xl font-mono font-black text-white">98.4% Mobile</div>
                <p className="text-xs text-zinc-405 mt-1">
                  Campanhas direcionadas exclusivamente para telemóveis Android e iOS no Facebook/Instagram.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-purple-950 pt-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a855f7] block mb-3 font-bold">Estratégias Chave em Angola:</span>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Anúncios realistas (sem fotos prontas de internet)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Preço nítido na imagem para pré-filtrar curiosos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Logística transparente: entrega em mão no ponto conhecido</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Main Workspace Containers */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 space-y-12 flex-1">
        
        {/* Step Banner Checklist */}
        <div className="bg-[#0e0c1f] border border-purple-950 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-white uppercase tracking-tight font-display text-sm">
              Estratégia Prática Selecionada: {selectedPreset.title}
            </h3>
            <p className="text-xs text-zinc-400">
              {selectedPreset.description}
            </p>
          </div>
          <div className="flex gap-4 font-mono text-3xs font-bold uppercase text-zinc-400 self-stretch md:self-auto justify-between md:justify-start">
            <div className="bg-[#14122d] px-3 py-2 border border-purple-950 text-center">
              <span>AOV Médio</span>
              <p className="text-orange-400 font-bold block mt-0.5">{selectedPreset.typicalAOV.toLocaleString()} Kz</p>
            </div>
            <div className="bg-[#14122d] px-3 py-2 border border-purple-950 text-center">
              <span>CPC Est.</span>
              <p className="text-orange-400 font-bold block mt-0.5">{selectedPreset.typicalCPC} Kz</p>
            </div>
            <div className="bg-[#14122d] px-3 py-2 border border-purple-950 text-center">
              <span>Conversão</span>
              <p className="text-purple-400 font-bold block mt-0.5">{selectedPreset.typicalCloseRate}%</p>
            </div>
          </div>
        </div>

        {/* Copy Generator Dashboard & Advanced Strategy Section */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <span className="text-3xs uppercase font-mono tracking-widest text-orange-500 font-bold">[ Passo 01]</span>
              <h2 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
                Estratégias, Copys prontas e Segmentação
              </h2>
            </div>
          </div>
          <CopyGenerator onPresetSelected={handlePresetSelection} />
        </div>

        {/* Interactive Math Simulator Section */}
        <div className="space-y-4 pt-4">
          <div>
            <span className="text-3xs uppercase font-mono tracking-widest text-orange-500 font-bold">[ Passo 02 ]</span>
            <h2 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
              Simule a Viabilidade Financeira das Suas Campanhas
            </h2>
          </div>
          <BudgetCalculator 
            initialAOV={selectedPreset.typicalAOV} 
            initialCPC={selectedPreset.typicalCPC} 
            initialCloseRate={selectedPreset.typicalCloseRate} 
          />
        </div>

        {/* WhatsApp URL generator with templates */}
        <div className="space-y-4 pt-4">
          <div>
            <span className="text-3xs uppercase font-mono tracking-widest text-[#a855f7] font-bold">[ Passo 03 ]</span>
            <h2 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
              Gerador de Links de Conversão Direta no WhatsApp
            </h2>
          </div>
          <WhatsAppLinkBuilder />
        </div>

        {/* Campaign BLUEPRINTS checklist (No theory) */}
        <div className="space-y-4 pt-4">
          <div>
            <span className="text-3xs uppercase font-mono tracking-widest text-[#a855f7] font-bold">[ Passo 04 ]</span>
            <h2 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
              Roteiros Detalhados de Execução do Tráfego Pago
            </h2>
          </div>
          <BlueprintsList />
        </div>

      </div>

      {/* 4. Footer CTA Bar matching Sophisticated Dark style precisely */}
      <footer className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 mt-12 border-t-2 border-white/10 shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="font-sans font-black text-lg md:text-xl uppercase italic tracking-tighter">
            Pronto para faturar no WhatsApp hoje sem enrolação?
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 w-full md:w-auto">
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="font-bold text-base flex items-center gap-1 font-mono">
              <PhoneCall className="h-4 w-4 shrink-0 text-white" />
              +244 923 000 000
            </span>
            <span className="text-[10px] uppercase font-bold tracking-tighter text-white/80">
              Apoio Técnico ao Vendedor • Luanda
            </span>
          </div>

          <a 
            href="#simulador"
            className="bg-black hover:bg-zinc-900 text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs transition-all shadow-xl hover:scale-105 duration-200 text-center w-full sm:w-auto"
          >
            Começar Simulação Agora
          </a>
        </div>
      </footer>
    </div>
  );
}
