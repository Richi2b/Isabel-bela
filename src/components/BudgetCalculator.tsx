/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DollarSign, MessageCircle, TrendingUp, ShoppingBag, Calculator, Sparkles, HelpCircle } from "lucide-react";

interface BudgetCalculatorProps {
  initialAOV?: number;
  initialCPC?: number;
  initialCloseRate?: number;
}

export default function BudgetCalculator({
  initialAOV = 45000,
  initialCPC = 120,
  initialCloseRate = 12,
}: BudgetCalculatorProps) {
  const [dailyBudget, setDailyBudget] = useState<number>(5000);
  const [cpc, setCpc] = useState<number>(initialCPC);
  const [closeRate, setCloseRate] = useState<number>(initialCloseRate);
  const [aov, setAov] = useState<number>(initialAOV);

  // Sync inputs if props change from preset selection
  React.useEffect(() => {
    setCpc(initialCPC);
    setCloseRate(initialCloseRate);
    setAov(initialAOV);
  }, [initialCPC, initialCloseRate, initialAOV]);

  // Math Calculations (Monthly - 30 days)
  const monthlyBudget = dailyBudget * 30;
  const estimatedChats = Math.round(monthlyBudget / cpc);
  const estimatedSales = Math.round(estimatedChats * (closeRate / 100));
  const grossRevenue = estimatedSales * aov;
  const netProfit = grossRevenue - monthlyBudget;
  const roas = monthlyBudget > 0 ? (grossRevenue / monthlyBudget).toFixed(1) : "0.0";

  // Format Helper for Kwanza (AOA)
  const formatKwanza = (val: number) => {
    return new Intl.NumberFormat("pt-AO", {
      style: "currency",
      currency: "AOA",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-[#121212] rounded-none border border-zinc-800 overflow-hidden" id="simulador">
      {/* Header Banner */}
      <div className="bg-[#181818] border-b border-zinc-800 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calculator className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white">
            Simulador de Tráfego & ROI (Kwanzas - AOA)
          </h3>
        </div>
        <span className="text-3xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
          [ Métrica Segura ]
        </span>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#00ff66] font-bold">
            Parâmetros das Campanhas
          </h4>

          {/* Daily Budget */}
          <div className="space-y-2 bg-[#161616] p-4 border border-zinc-850">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-zinc-300 flex items-center gap-1.5">
                <DollarSign className="h-4 w-4 text-green-500" /> Orçamento Diário (Meta Ads)
              </label>
              <span className="font-bold text-green-400 font-mono text-sm">{formatKwanza(dailyBudget)} / dia</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={dailyBudget}
              onChange={(e) => setDailyBudget(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-4xs text-zinc-500 font-mono">
              <span>1.000 Kz</span>
              <span>15.000 Kz</span>
              <span>30.000 Kz</span>
              <span>50.000 Kz</span>
            </div>
          </div>

          {/* Cost Per WhatsApp Chat initiated (CPC) */}
          <div className="space-y-2 bg-[#161616] p-4 border border-zinc-850">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-zinc-300 flex items-center gap-1.5">
                <MessageCircle className="h-4 w-4 text-green-500" /> Custo por conversa iniciada (Kz)
              </label>
              <span className="font-bold text-green-400 font-mono text-sm">{formatKwanza(cpc)}</span>
            </div>
            <input
              type="range"
              min="30"
              max="500"
              step="5"
              value={cpc}
              onChange={(e) => setCpc(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-4xs text-zinc-500 font-mono">
              <span>30 Kz (Fluido)</span>
              <span>150 Kz (Padrão)</span>
              <span>300 Kz</span>
              <span>500 Kz (Caro/Saturado)</span>
            </div>
          </div>

          {/* Close Rate */}
          <div className="space-y-2 bg-[#161616] p-4 border border-zinc-850">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-zinc-300 flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-green-500" /> Taxa de Fechamento no WhatsApp (%)
              </label>
              <span className="font-bold text-green-400 font-mono text-sm">{closeRate}% das conversas</span>
            </div>
            <input
              type="range"
              min="2"
              max="45"
              step="1"
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-4xs text-zinc-500 font-mono">
              <span>2% (Apenas texto)</span>
              <span>12% (WhatsApp Business + Áudios)</span>
              <span>25% (Estilo Humanizado)</span>
              <span>45% (Equipa de Vendas Afiada)</span>
            </div>
          </div>

          {/* Average Order Value (AOV) */}
          <div className="space-y-2 bg-[#161616] p-4 border border-zinc-850">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-zinc-300 flex items-center gap-1.5">
                <ShoppingBag className="h-4 w-4 text-green-500" /> Ticket Médio de Venda (AOV - Preço)
              </label>
              <span className="font-bold text-green-400 font-mono text-sm">{formatKwanza(aov)}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="150000"
              step="1000"
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-4xs text-zinc-500 font-mono">
              <span>2.000 Kz (Gigas)</span>
              <span>45.000 Kz (Peruca Média)</span>
              <span>90.000 Kz</span>
              <span>150.000 Kz (Eletrónicos)</span>
            </div>
          </div>

          <div className="bg-[#161616]/70 border border-zinc-800 p-4 flex gap-3 text-xs leading-relaxed text-zinc-400">
            <Sparkles className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-zinc-200 mb-1">Nota Real de Conversão em Angola:</p>
              Em Luanda, se o seu custo por mensagem iniciada no WhatsApp ultrapassar <strong className="text-white">250 Kz</strong>, pare as campanhas na hora. Isso indica que a foto do produto ou a chamada principal do anúncio está fraca ou confusa. Refine a oferta!
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-[#0f0f0f] border border-zinc-800 p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold mb-4">
              [ Previsão Financeira Mensal ]
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#121212] border border-zinc-800 p-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">Faturação Total (Meta Ads)</span>
                <p className="text-base font-bold text-zinc-100 font-mono mt-1">{formatKwanza(monthlyBudget)}</p>
              </div>

              <div className="bg-[#121212] border border-zinc-800 p-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">Mensagens no Zap</span>
                <p className="text-base font-bold text-green-400 font-mono mt-1">{estimatedChats} conversas</p>
              </div>

              <div className="bg-[#121212] border border-zinc-800 p-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">Vendas Esperadas</span>
                <p className="text-base font-bold text-green-400 font-mono mt-1">{estimatedSales} fechadas</p>
              </div>

              <div className="bg-[#121212] border border-zinc-800 p-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">Retorno ROAS</span>
                <p className="text-base font-bold text-zinc-100 font-mono mt-1">{roas}x investimento</p>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-800 pt-6">
              <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider block">Faturação Bruta Estimada</span>
              <p className="text-3xl font-black text-white font-mono mt-1">{formatKwanza(grossRevenue)}</p>
            </div>

            <div className="mt-4 bg-[#141414] border border-zinc-800 p-4 flex justify-between items-center">
              <div>
                <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider font-mono">Retorno Líquido Final</span>
                <p className={`text-xl font-bold font-mono mt-1 ${netProfit >= 0 ? "text-green-400" : "text-rose-500"}`}>
                  {formatKwanza(netProfit)}
                </p>
              </div>
              <span className={`text-[10px] uppercase px-2.5 py-1 font-bold ${netProfit >= 0 ? "bg-green-500/10 text-green-400" : "bg-rose-500/10 text-rose-500"}`}>
                {netProfit >= 0 ? "Altamente Viável" : "Reavaliar Oferta"}
              </span>
            </div>
          </div>

          <div className="mt-6 text-[10px] text-zinc-500 font-mono leading-relaxed border-t border-zinc-800 pt-4 flex gap-1.5 items-start">
            <HelpCircle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-zinc-500" />
            <span>
              Cálculo baseado nas flutuações médias obtidas em contas comerciais de anúncios que despacham mercadorias a partir de Luanda, Viana e Talatona.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
