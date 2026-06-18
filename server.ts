/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini Client to prevent crash if key is missing on startup
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required to generate custom AI strategies. Please verify your Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// API endpoint to generate custom target-response strategies
app.post("/api/strategy/generate", async (req, res) => {
  try {
    const { nicheName, avgPrice, targetAudience, localFulfillment } = req.body;

    if (!nicheName) {
      return res.status(400).json({ error: "O nome do nicho ou negócio é obrigatório." });
    }

    // Lazy load the Gemini client and verify credentials
    const ai = getAi();

    const systemInstruction = `Você é o maior especialista em tráfego pago de conversão direta para o WhatsApp rodando anúncios de Facebook/Instagram em Angola.
Seu absoluto foco é gerar vendas rápidas e leads super qualificados eliminando conversas desnecessárias no WhatsApp ("curiosos").
NUNCA use textos corporativos vazios, descrições motivacionais genéricas, termos ingleses excessivos que o mercado local não use, ou enrolação teórica.
Sempre apresente termos e contextos angolanos reais de forma prática.
Use termos locais adequados de Luanda e outras províncias de Angola como: 'Multicaixa Express' (o principal meio de pagamento instantâneo), 'estafeta' ou 'motoboy' focado em entregas de motas, pagar 'no ato da entrega', 'bazar' (loja física informal ou stand de vendas), 'fardo' (roupas usadas de alta qualidade por fardo), 'giga' de internet (planos de internet móvel), agências como 'Real Trans' ou correios locais para despacho a províncias (Benguela, Lubango, Huambo, Cabinda), bairros e zonas locais de Luanda para exemplificar (Talatona, Kilamba, Viana, Cazenga, Cacuaco, Maianga, Benfica, Sambizanga, Patriota, Zango).

Seu retorno DEVE ser um objeto estruturado em JSON contendo copywriting para anúncios diretos de WhatsApp focado em preço transparente e urgência, segmentação cirúrgica no Meta Ads (Facebook Ads) e conselhos de fechamento agressivo, porém educado, no WhatsApp.`;

    const prompt = `Gere uma estratégia completa de vendas rápidas via Tráfego Pago focado em WhatsApp:
- Nicho ou Produto: ${nicheName}
- Ticket Médio / Preço Estimado em Kwanzas (AOA): ${avgPrice || "Não especificado"}
- Público Alvo Desejado: ${targetAudience || "Geral em Luanda/Angola"}
- Detalhes de Logística/Entrega local: ${localFulfillment || "Entregas em pontos de referência centrais de Luanda ou estafeta de moto."}

Crie duas opções de copys de alta conversão com Headlines chamativas, Hooks fortes em relação ao calor ou hábitos locais de Luanda, descrições contendo ofertas e formas de pagamento claras (Express, transferência BAI) e um Call to Action direto para o WhatsApp.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            nicheName: {
              type: Type.STRING,
              description: "Nome do Nicho adaptado de forma profissional, ex: 'Venda de Ténis Importados em Luanda'"
            },
            campaignObjective: {
              type: Type.STRING,
              description: "O objetivo exato de campanha a selecionar no Meta Ads (ex: Engajamento -> WhatsApp)"
            },
            copyExamples: {
              type: Type.ARRAY,
              description: "Dois exemplos de cópias prontos a colar altamente persuasivas e sem rodeios genéricos.",
              items: {
                type: Type.OBJECT,
                properties: {
                  headline: { type: Type.STRING, description: "Título forte contendo emoji e oferta irresistível com preços em Kwanza (AOA)." },
                  hook: { type: Type.STRING, description: "Gancho inicial de 1-2 linhas focado na realidade angolana para parar o scroll do feed." },
                  bodyText: { type: Type.STRING, description: "Texto completo do anúncio detalhando o produto, garantia, formas de envio/moto e métodos de pagamento em Angola." },
                  callToAction: { type: Type.STRING, description: "Indicação direta de clique rápida personalizada para ir ao WhatsApp." }
                },
                required: ["headline", "hook", "bodyText", "callToAction"]
              }
            },
            targeting: {
              type: Type.OBJECT,
              description: "A configuração exata do público no painel do Facebook Ads para evitar segmentar curioso.",
              properties: {
                locations: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Lista de locais reais recomendados (Cidades, províncias ou bairros com bom poder de compra)."
                },
                exclusions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Exclusões obrigatórias sugeridas para economizar saldo."
                },
                ageRange: { type: Type.STRING, description: "Faixa etária ideal com base no poder financeiro do público-alvo em Angola." },
                genders: { type: Type.STRING, description: "Género recomendado ('Mulheres', 'Homens' ou 'Todos')." },
                interests: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Interesses específicos do Meta Ads que funcionam de verdade em Angola para este nicho."
                },
                placementAdvice: { type: Type.STRING, description: "Conselhos específicos de onde veicular (ex: Reels do Instagram, Feed do Facebook)." }
              },
              required: ["locations", "exclusions", "ageRange", "genders", "interests", "placementAdvice"]
            },
            budgetAdvice: {
              type: Type.STRING,
              description: "Conselho realista de orçamento diário mínimo em Kwanzas (AOA) e custos esperados por mensagem."
            },
            fastSaleTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Três dicas práticas brutais para fechar a venda rapidamente no WhatsApp no primeiro minuto de conversa."
            }
          },
          required: ["nicheName", "campaignObjective", "copyExamples", "targeting", "budgetAdvice", "fastSaleTips"]
        }
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Resposta vazia do modelo de Inteligência Artificial");
    }

    const data = JSON.parse(responseText.trim());
    return res.json({ success: true, data });

  } catch (error: any) {
    console.error("AI Generation Error:", error);
    
    let dbgMsg = "";
    if (error && typeof error === "object") {
      dbgMsg = error.message || JSON.stringify(error);
    } else {
      dbgMsg = String(error);
    }

    let friendlyError = "Ocorreu um erro desconhecido ao processar a estratégia de tráfego pago.";
    
    const lowerDbg = dbgMsg.toLowerCase();
    if (
      lowerDbg.includes("quota") ||
      lowerDbg.includes("limit") ||
      lowerDbg.includes("exhausted") ||
      lowerDbg.includes("429") ||
      lowerDbg.includes("rate")
    ) {
      friendlyError = "O limite de pedidos ou a quota da Inteligência Artificial foi atingido temporariamente (Erro 429: Limite de Quota Excedido). As estratégias reais angolanas pré-configuradas continuam 100% ativas! Por favor, selecione qualquer um dos nossos presets testados no topo para prosseguir sem interrupções.";
    } else if (
      dbgMsg.includes("503") || 
      dbgMsg.includes("UNAVAILABLE") || 
      dbgMsg.includes("high demand") || 
      dbgMsg.includes("temporary") ||
      dbgMsg.includes("overloaded")
    ) {
      friendlyError = "O serviço do Gemini está com alta procura (Aviso 503: Modelo Temporariamente Indisponível). As estratégias reais continuam 100% funcionais acima.";
    } else if (dbgMsg.includes("GEMINI_API_KEY") || dbgMsg.includes("API key")) {
      friendlyError = "GEMINI_API_KEY não configurada. Ative a chave nos Secrets para campanhas personalizadas.";
    } else {
      friendlyError = dbgMsg;
    }

    return res.status(500).json({
      success: false,
      error: friendlyError
    });
  }
});

// Setup Vite or static serving logic
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

bootstrap();
