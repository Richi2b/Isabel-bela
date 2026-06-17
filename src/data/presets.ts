/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AngolanPreset } from "../types";

export const ANGOLAN_PRESETS: AngolanPreset[] = [
  {
    id: "perucas-cabelos",
    title: "Perucas e Cabelos Humanos",
    emoji: "💇‍♀️",
    description: "Nicho super lucrativo focado em estética feminina em Luanda, com alta conversão imediata no WhatsApp.",
    typicalAOV: 45000, // Preço médio de uma peruca em Kwanzas (AOA)
    typicalCPC: 120,    // Custo estimado por mensagem gerada no WhatsApp (Kz)
    typicalCloseRate: 12, // 12% de fechamento pelo Zap
    strategy: {
      nicheName: "Perucas e Cabelo Humano (Estética)",
      campaignObjective: "Tráfego Direto para Mensagens de WhatsApp (Campanha de Engajamento/Mensagens)",
      copyExamples: [
        {
          headline: "🗣️ Peruca Humana Liso Premium na promoção especial!",
          hook: "Chega de perucas que soltam fios e embaraçam no primeiro dia de festa em Luanda!",
          bodyText: "Estás cansada de gastar dinheiro com cabelos que não duram nada? \n\nAproveita a nova remessa de Perucas Humanas Virgens de 18 a 26 polegadas, com densidade incrível e brilho natural.\n\n✅ Cabelo 100% Humano sem misturas.\n✅ Lace invisível que se adapta a qualquer pele.\n✅ Podes passar chapinha, lavar e pintar!\n\n💵 INVESTIMENTO: A partir de 35.000 Kz\n💳 Métodos de Pagamento: Multicaixa Express ou no ato da entrega (apenas para clientes verificados).\n\n🛵 Entregas rápidas em toda Luanda (Talatona, Kilamba, Kilamba Kiaxi, Viana, Cacuaco) ou envio para as províncias via correio rápido.",
          callToAction: "👇 Clica no botão e vem escolher o formato ideal para ti no WhatsApp!"
        },
        {
          headline: "✨ Fica deslumbrante este fim de semana sem sair de casa!",
          hook: "Estás em Luanda e precisas de mudar de visual hoje mesmo para aquele jantar?",
          bodyText: "Temos perucas prontas a usar (Ready to Wear), já customizadas e com corte perfeito para ti.\n\n📦 Stock limitado com os melhores preços do mercado angolano. Não fiques para trás!\n\n💵 Preço fixo: 45.000 Kz (Taxa de entrega incluída em algumas zonas de Luanda).",
          callToAction: "📲 Fala agora com a nossa assistente e fecha o teu pedido via WhatsApp antes que esgote!"
        }
      ],
      targeting: {
        locations: ["Luanda (Cidade)", "Talatona", "Belas", "Viana (Sede)", "Sambizanga", "Maianga"],
        exclusions: ["Zonas sem motoboy ou sem acesso telefónico confiável"],
        ageRange: "18 - 45 anos",
        genders: "Mulheres",
        interests: [
          "Cabelo humano",
          "Wig (Perucas)",
          "Cosméticos ou Salões de beleza",
          "Acessórios de moda",
          "Instagram Shopping"
        ],
        placementAdvice: "Focar 90% em Reels e Stories do Instagram. As clientes angolanas adoram ver vídeos curtos penteando e agitando o cabelo para provar a qualidade."
      },
      budgetAdvice: "Para testar, começa com 3.000 Kz a 5.000 Kz por dia no Meta Ads. Isso gerará cerca de 25 a 40 chats iniciados por dia, permitindo fazer de 3 a 5 vendas diretas.",
      fastSaleTips: [
        "Envia vídeos reais do cabelo ao vivo no WhatsApp. Fotos prontas da net provocam desconfiança nelas.",
        "Facilita o pagamento com Multicaixa Express na entrega ou transferência imediata (BAI/BIC) no ato.",
        "Oferece assistência durante o primeiro uso e pede o feedback para postar nos stories (Gera prova social!)."
      ]
    }
  },
  {
    id: "roupa-calcado",
    title: "Roupa, Calçado e Fardamentos",
    emoji: "👟",
    description: "Moda jovem, sapatilhas (ténis) e fardamentos corporativos de alta rotatividade com foco em vendas em lote.",
    typicalAOV: 18000, // Preço médio
    typicalCPC: 80,    // Custo por mensagem
    typicalCloseRate: 15,
    strategy: {
      nicheName: "Moda Jovem, Sneakers e Fardas",
      campaignObjective: "Campanha de Vendas de Catálogo ou Engajamento (WhatsApp)",
      copyExamples: [
        {
          headline: "🔥 Sapatilhas de Qualidade Importadas em Luanda - Pronta Entrega",
          hook: "Cansado de encomendar sapatilhas na internet e ficar semanas à espera e sem garantia?",
          bodyText: "Aqui tens sapatilhas de alta durabilidade e estilo urbano já disponíveis em stock em Luanda!\n\n👟 Tamanhos de 38 a 44 (Modelos exclusivos e super confortáveis).\n📦 Fazemos entregas imediatas nos pontos de referência conhecidos da cidade (Largo do Primeiro de Maio, Mutamba, Zango, Kilamba).\n\n💵 Preço especial: 18.000 Kz\n🔥 Promoção: Leva 2 pares por apenas 32.000 Kz!",
          callToAction: "👇 Envia mensagem agora com o teu tamanho e garante já o teu par no WhatsApp!"
        },
        {
          headline: "👔 Fardamentos e Uniformes Profissionais para a tua Empresa Angolana",
          hook: "Melhora a imagem corporativa da tua equipa com fardas de corte perfeito e tecido fresco.",
          bodyText: "Trabalhamos com fardamento padrão e personalizado para escritórios, cafés, obras e clínicas.\n\n✅ Cores resistentes a lavagens frequentes.\n✅ Bordados de alta qualidade com a tua marca.\n✅ Entrega pontual assegurada por contrato.\n\nAtendemos de forma personalizada!",
          callToAction: "📲 Clica no botão e pede já um orçamento personalizado grátis via WhatsApp!"
        }
      ],
      targeting: {
        locations: ["Angola (Toda a província de Luanda)", "Benguela", "Huambo", "Lubango"],
        exclusions: ["Áreas fora do perímetro urbano dos motoboys"],
        ageRange: "16 - 38 anos (Moda Jovem) ou 25 - 55 anos (Fardas corporativas)",
        genders: "Todos ou focado por produto",
        interests: [
          "Ténis (Calçado)",
          "Nike, Adidas, Converse",
          "Compras online (Shopping)",
          "Bazar ou Compras locais",
          "Pequenas e Médias Empresas (para fardamentos)"
        ],
        placementAdvice: "Usa carrossel de fotos reais com fundo limpo no Facebook e Instagram. Mostra os detalhes das cores e o preço claramente na legenda do anúncio."
      },
      budgetAdvice: "Orçamento ideal de 4.000 Kz por dia. Separa fardamento (B2B) de sapatilhas individuais para não misturar os públicos de interesse.",
      fastSaleTips: [
        "Anota os tamanhos mais vendidos (em Angola, os tamanhos 39, 40 e 41 femininos e 41, 42 masculinos saem extremamente rápido).",
        "Ao fechar no WhatsApp, diz: 'Se couber mal, o motoboy pode devolver na hora sem custo adicional'. Isso fecha 90% das dúvidas de compra.",
        "Cria um grupo VIP de WhatsApp de bazar onde postas os pares únicos que restam do stock a preço de saldo."
      ]
    }
  },
  {
    id: "gigas-telefones",
    title: "Venda de Telefones e Pacotes de Giga",
    emoji: "📱",
    description: "Eletrónicos de consumo e serviços de recarga de internet. Volume rápido e vendas diárias recorrentes.",
    typicalAOV: 85000,
    typicalCPC: 90,
    typicalCloseRate: 10,
    strategy: {
      nicheName: "Telefones & Saldo de Gigas Net",
      campaignObjective: "Tráfego Direto de Mensagem / WhatsApp",
      copyExamples: [
        {
          headline: "📱 iPhones Vitrine Importados - A sua melhor oportunidade!",
          hook: "Não compre telefone recondicionado de qualquer jeito sem testar a bateria!",
          bodyText: "Adquira um iPhone original com saúde de bateria acima de 93% e garantia real de 3 meses.\n\n📦 Modelos disponíveis: iPhone 11 (128GB), 12 Pro, 13 Pro Max com preços de bazar de Luanda.\n\n💵 Preço Especial: A partir de 180.000 Kz\n🎁 Brinde: Película 3D de vidro temperado grátis e capa protetora de oferta!",
          callToAction: "📲 Faça o seu teste pessoalmente na nossa loja física ou receba com o nosso estafeta. Peça o catálogo no Zap!"
        },
        {
          headline: "🌐 Gigas Rápidos de Net Unitel/Movicel com Desconto!",
          hook: "Cansado de ficar sem saldo de internet no meio do trabalho ou das tuas lives?",
          bodyText: "Fazemos carregamentos rápidos de dados móveis com as tarifas mais competitivas do mercado.\n\n🚀 Net Ilimitada de Fim de Semana e Pacotes Mensais ativados em menos de 5 minutos.\n\n💳 Pagas de forma simples por Multicaixa Express ou transferência direta BAI.",
          callToAction: "👇 Envia agora o teu número de telefone e o plano desejado para ativarmos de imediato pelo WhatsApp!"
        }
      ],
      targeting: {
        locations: ["Luanda", "Lubango", "Benguela", "Huambo", "Cabinda"],
        exclusions: ["Zonas sem rede estável"],
        ageRange: "18 - 40 anos",
        genders: "Todos",
        interests: [
          "iPhone",
          "Smartphone",
          "Unitel",
          "Movicel",
          "Jogos Online ou Redes Sociais"
        ],
        placementAdvice: "Anúncios diretos com imagens do celular em mãos com a caixa aberta. Anúncios de gigas de internet funcionam melhor em imagens simples e de alto contraste com fundo azul ou laranja clássicos das marcas locais."
      },
      budgetAdvice: "Se vendes telefones caros, investe 6.000 Kz/dia. Se vendes planos de internet rápidos, foca em 3.000 Kz/dia para manter o fluxo.",
      fastSaleTips: [
        "Oferecer um atendimento instantâneo na ativação de gigas. O cliente quer a internet na hora!",
        "Mandar foto do selo de garantia grudado no telefone antes de enviar pelo estafeta.",
        "Peça ao cliente para gravar um vídeo rápido ligando o aparelho e mande como recomendação para futuros compradores."
      ]
    }
  },
  {
    id: "ar-condicionado-servicos",
    title: "Manutenção de Ar Condicionado e Serviços",
    emoji: "❄️",
    description: "Serviços essenciais para o calor constante de Luanda. Clientes prontos que necessitam de atendimento imediato.",
    typicalAOV: 25000, // Preço médio assistência/limpeza
    typicalCPC: 150,
    typicalCloseRate: 20, // Taxa de conversão mais alta por ser serviço de necessidade
    strategy: {
      nicheName: "Climatização e Assistência Técnica de AC",
      campaignObjective: "Conversão Direta para WhatsApp (Campanha de Leads Rápida)",
      copyExamples: [
        {
          headline: "❄️ Evita o Calor Brutal de Luanda! Limpeza de AC com Garantia",
          hook: "O teu ar condicionado deita vento fraco e parece um ventilador barulhento?",
          bodyText: "Sabias que o pó acumulado no aparelho aumenta o consumo de energia da tua casa em até 40%?\n\nProtege a saúde da tua família contra alergias e gripes constantes. Nós fazemos a manutenção completa do teu AC!\n\n🛠️ Inclui:\n- Lavagem química das turbinas\n- Verificação e reposição de gás R22 / R410\n- Teste de corrente elétrica e dreno\n\n💵 TAXA ÚNICA: A partir de 15.000 Kz (Preços promocionais para mais de 2 ACs no mesmo domicílio).",
          callToAction: "👇 Clica em 'Enviar Mensagem' e agenda a visita do nosso técnico qualificado ainda hoje!"
        }
      ],
      targeting: {
        locations: ["Luanda (Zonas Residenciais)", "Talatona", "Patriota", "Viana (Serraria, Estalagem)", "Kilamba (Centralidade)", "Nova Vida"],
        exclusions: ["Zonas industriais distantes sem foco residencial"],
        ageRange: "25 - 60 anos (Proprietários de imóveis)",
        genders: "Todos",
        interests: [
          "Ar condicionado",
          "Manutenção residencial",
          "Eletrodomésticos",
          "Família ou Casa própria"
        ],
        placementAdvice: "Anúncios em imagem de comparação de antes e depois (um AC encardido vs limpo) chamam muita atenção de quem está com ar sujo em casa no calor."
      },
      budgetAdvice: "Invista 5.000 Kz por dia. O foco é capturar moradores de condomínios fechados ou centralidades com poder aquisitivo.",
      fastSaleTips: [
        "Use o WhatsApp para mandar fotos térmicas ou do painel desmontado mostrando o lodo que sai dos filtros de ar.",
        "Seja extremamente pontual: profissionais que chegam na hora em Luanda ganham a indicação de todo o prédio do cliente.",
        "Guarde o contacto de todos os clientes no Zap e envie uma mensagem de lembrete 6 meses depois: 'Já se passaram 6 meses, que tal outra higienização preventiva para evitar queimar?'"
      ]
    }
  }
];
