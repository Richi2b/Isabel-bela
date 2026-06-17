/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Zap, ShieldCheck, Flame, BookOpen, Target, Settings, Layers } from "lucide-react";

interface Blueprint {
  title: string;
  level: string;
  budget: string;
  badge: string;
  badgeStyle: string;
  description: string;
  steps: string[];
  metaConfig: {
    objective: string;
    locations: string;
    placements: string;
    interests: string;
  };
}

export default function BlueprintsList() {
  const blueprints: Blueprint[] = [
    {
      title: "Vendas Rápidas de Stock (Bazar Direct)",
      level: "Iniciante / Baixo Orçamento",
      budget: "2.000 Kz a 4.000 Kz por dia",
      badge: "Venda Imediata",
      badgeStyle: "bg-green-500/10 text-green-400 border-green-500/25",
      description: "Ideal para escoar stock rápido de perucas humanas, ténis importados, fardos de roupa ou acessórios em Luanda sem gastar fortuna.",
      steps: [
        "Selecione o objetivo ENGAJAMENTO (Apps de mensagens -> WhatsApp Business) no gerenciador de anúncios.",
        "Defina o orçamento para 3.000 Kz por dia no formato ABO (Orçamento ao nível do conjunto).",
        "Limite a localização apenas para Luanda (Cidade). Retire o resto do país para garantir entregas por motoboy no próprio dia.",
        "Use canais de posicionamento manuais focando apenas em Instagram Stories e TikTok / Reels para reter a atenção delas.",
        "publique criativos com fotos tiradas na hora com o preço grande e nítido escrito na própria imagem."
      ],
      metaConfig: {
        objective: "Engajamento (Conversas no WhatsApp)",
        locations: "Luanda (Centralidades e Bairros Urbanos Populosos)",
        placements: "Apenas Feeds Mobile (Instagram + Facebook)",
        interests: "Público Aberto (Foco no preço claro e real no criativo)"
      }
    },
    {
      title: "Tráfego Contínuo de Serviço (AC & Eletrodomésticos)",
      level: "Médio / Escala de Serviços",
      budget: "5.000 Kz a 10.000 Kz por dia",
      badge: "Clientes Qualificados",
      badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      description: "Para prestadores de serviços de alto padrão (limpeza de ar condicionado, eletricistas, vistorias prediais ou arquitetura de interiores).",
      steps: [
        "Utilize o objetivo de mensagens ou obtenção de leads focado no WhatsApp Comercial.",
        "Defina 2 conjuntos de anúncios: um amplo (apenas filtros de idade 25-50 anos) e um focado em interesses de imóveis.",
        "Selecione localizações nobres para otimizar os custos de mota do técnico (Talatona, Nova Vida, Centralidade do Kilamba, Patriota).",
        "Publique criativos comparativos de 'Antes e Depois'. Mostrar a turbina do AC imunda sendo lavada atrai os proprietários no calor.",
        "Ofereça garantia expressa e preço fixo para dar total tranquilidade de que não haverá custos ocultos na visita."
      ],
      metaConfig: {
        objective: "Engajamento / Mensagens WhatsApp Direto",
        locations: "Luanda (Talatona, Kilamba, Nova Vida, Patriota, Alvalade)",
        placements: "Stories, Reels e Feed Facebook",
        interests: "Ar condicionado, Mudança de casa, Melhoria residencial"
      }
    },
    {
      title: "Distribuição e Venda em Lote (Atacado)",
      level: "Avançado / Expansão Provincial",
      budget: "15.000 Kz+ por dia",
      badge: "Lotes e Fardos",
      badgeStyle: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      description: "Para grossistas de roupas de fardo, revenda de calçado ou stock massivo que queiram alcançar lojistas em Benguela, Huambo, Lubango e Cabinda.",
      steps: [
        "Crie campanha sob modelo CBO (Distribuição automática pela Meta) direcionando orçamentos maiores.",
        "Configure conjuntos de anúncios divididos por Províncias Capitais Estratégicas para facilitar a logística de transporte de carga.",
        "Prepare criativos em formato carrossel apresentando as caixas fechadas nos armazéns e fardos abrindo.",
        "Disponibilize depoimentos reais de lojistas locais garantindo que a mercadoria chega sem desvios.",
        "Inicie a conversa no WhatsApp exigindo que o cliente informe a sua província no primeiro áudio para agilizar o atendimento."
      ],
      metaConfig: {
        objective: "Mensagens Diretas e Contratos Comerciais",
        locations: "Angola (Luanda, Benguela, Lubango, Huambo, Cabinda)",
        placements: "Todos os posicionamentos automáticos recomendados",
        interests: "Revenda, Comércio Atacadista, Investimento ou Pequenas Empresas"
      }
    }
  ];

  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 lg:p-8 space-y-6" id="casos">
      <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
        <BookOpen className="h-5 w-5 text-green-500" />
        <div>
          <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white">
            Roteiros de Campanhas Reais (Sem Rodeios)
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Escolha e copie o planeamento de anúncios exato baseado no seu orçamento diário em Angola.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {blueprints.map((bp, i) => (
          <div key={i} className="border border-zinc-800 p-6 flex flex-col justify-between bg-[#141414]">
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2">
                <span className="text-3xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                  {bp.level}
                </span>
                <span className={`text-[9px] uppercase px-2.5 py-0.5 rounded-sm border font-bold ${bp.badgeStyle}`}>
                  {bp.badge}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white font-display uppercase tracking-tight">
                {bp.title}
              </h4>

              <div className="bg-[#181818] px-3 py-2 border border-zinc-800 text-xs text-green-400 font-mono font-bold">
                Orçamento: {bp.budget}
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {bp.description}
              </p>

              {/* Steps */}
              <div className="space-y-2 pt-2">
                <span className="text-3xs uppercase font-mono tracking-widest font-bold text-zinc-500 block">Roteiro de Execução</span>
                <div className="space-y-2.5 mt-1">
                  {bp.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-2 text-xs text-zinc-350 leading-relaxed items-start">
                      <span className="text-green-500 font-bold shrink-0 font-mono text-[10px]">[{idx + 1}]</span>
                      <span className="font-sans text-[11px] font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Campaign Meta Setup */}
            <div className="mt-6 border-t border-zinc-800 pt-4 bg-[#111] p-4 rounded-none space-y-2">
              <span className="text-3xs uppercase font-mono tracking-widest font-bold text-zinc-500 block mb-1">
                Ficha Técnica do Meta Ads
              </span>
              
              <div className="grid grid-cols-2 gap-2 text-3xs font-mono text-zinc-400">
                <div>
                  <span className="text-zinc-500 font-medium block">Objetivo</span>
                  <span className="font-bold text-zinc-300">{bp.metaConfig.objective}</span>
                </div>
                <div>
                  <span className="text-zinc-500 font-medium block">Localização</span>
                  <span className="font-bold text-zinc-300 line-clamp-1">{bp.metaConfig.locations}</span>
                </div>
                <div>
                  <span className="text-zinc-500 font-medium block">Posições</span>
                  <span className="font-bold text-zinc-300 line-clamp-1">{bp.metaConfig.placements}</span>
                </div>
                <div>
                  <span className="text-zinc-500 font-medium block">Interesses</span>
                  <span className="font-bold text-[#00ff66] line-clamp-1">{bp.metaConfig.interests}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
