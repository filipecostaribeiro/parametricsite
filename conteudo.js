/* ========================================================
   PARAMETRIC 3D LAB - CONTEÚDO EDITÁVEL
   Tudo que aparece no site mora aqui. Edite só os textos
   entre aspas; não mexa em vírgulas, colchetes e chaves.
   ======================================================== */
const CONTATO = {
  whatsapp: "5585994237406",
  email: "contato@parametric3dlab.com.br",
  instagram: "parametric3dlab"
};

/* Aparecem no rodapé SOMENTE se preenchidos. Ex.: fundacao: "2024" */
const EMPRESA = { fundacao: "", cnpj: "", cidade: "" };

const HERO_SLIDES = [
  { img: "img/maos.webp", alt: "Chaveiros kettlebell personalizados com gravação de alta definição" },
  { img: "img/garrafas.webp", alt: "Aplicação prática em garrafas esportivas com mosquetão integrado" },
  { img: "img/porta-alianca.webp", alt: "Kettlebell porta-aliança aberto exibindo encaixe mecânico de precisão" },
  { img: "img/blueprint.webp", alt: "Projeto paramétrico: cotas técnicas, cortes e malha tridimensional" }
];

/* Faixa de diferenciais logo abaixo da capa */
const NUMEROS = [
  ["Paramétrico", "Especialistas em modelagem paramétrica: ajustamos medidas sem refazer o projeto"],
  ["Ponta a ponta", "Da modelagem à impressão e entrega, tudo no mesmo lugar"],
  ["Materiais e cores", "Ampla gama de materiais e cores para cada aplicação"],
  ["1 a 500+", "Da peça única ao lote, sem molde e sem investimento inicial"]
];

const SERVICOS = [
  { t: "Modelagem paramétrica", d: "Modelos CAD controlados por variáveis: medidas, folgas e nomes mudam sem refazer o projeto.",
    recebe: ["Arquivo CAD editável e arquivos STL/STEP", "Parâmetros documentados", "Variações de tamanho e personalização em série"],
    ideal: "Famílias de produtos, itens personalizados, projetos que vão evoluir." },
  { t: "Prototipagem funcional", d: "Iterações rápidas para validar encaixes, tolerâncias e ergonomia antes de produzir.",
    recebe: ["Protótipo físico testável", "Relatório de ajustes entre versões", "Recomendação de material para a aplicação final"],
    ideal: "Desenvolvimento de produto, validação com cliente, testes de montagem." },
  { t: "Fabricação em pequenos lotes", d: "De 10 a centenas de peças com repetibilidade e acabamento consistente, sem investir em molde.",
    recebe: ["Lote com padrão visual e dimensional uniforme", "Controle de qualidade peça a peça", "Embalagem e envio"],
    ideal: "Primeiras vendas, brindes, kits, produção sob demanda." },
  { t: "Print on Demand (STL)", d: "Você envia o arquivo pronto; definimos os parâmetros de fatiamento, imprimimos e enviamos.",
    recebe: ["Análise do arquivo antes de imprimir", "Peça com parâmetros ajustados ao uso", "Orçamento por tempo de máquina e material"],
    ideal: "Quem já tem o modelo 3D e precisa da peça física." },
  { t: "Consultoria em manufatura aditiva", d: "Revisão de projetos para impressão: paredes, orientação, suportes e escolha de material.",
    recebe: ["Parecer técnico sobre o seu modelo", "Ajustes de geometria recomendados", "Redução de custo e de falhas de impressão"],
    ideal: "Projetos que falham ao imprimir ou saem caros demais." }
];

const ETAPAS = [
  ["Briefing", "Você envia esboço, medidas, foto de referência ou arquivo STL."],
  ["Análise e orçamento", "Avaliamos viabilidade, indicamos o material e informamos custo e prazo."],
  ["Produção", "Modelagem (se necessária), impressão e acabamento com conferência dimensional."],
  ["Entrega", "Embalamos e enviamos. Ajustes pós-entrega são tratados no mesmo projeto."]
];

const SEGMENTOS = [
  ["Designers e estúdios", "Do conceito ao protótipo físico para avaliar forma, escala e uso."],
  ["Engenharia e indústria", "Peças funcionais, gabaritos, suportes e componentes de baixo volume."],
  ["Arquitetura e maquetes", "Modelos de apresentação e detalhes construtivos em escala."],
  ["Marcas e e-commerce", "Produtos próprios em série curta, com personalização por cliente."],
  ["Brindes corporativos", "Peças com logotipo e nomes gravados, em lote e com padrão uniforme."],
  ["Inventores e makers", "Ajuda para transformar uma ideia em um produto que funciona."]
];

const MATERIAIS = [
  { n: "PLA", c: "Excelente detalhamento estético, boa rigidez e estabilidade dimensional. Ideal para peças visuais.", t: "Amolece entre 55 °C e 60 °C.", v: 53, a: "Protótipos visuais, maquetes, brindes corporativos e decoração." },
  { n: "PETG", c: "Alta tenacidade, boa resistência química e à umidade. O equilíbrio entre usabilidade e resistência.", t: "Suporta de 70 °C a 80 °C.", v: 72, a: "Peças funcionais de uso contínuo, suportes e componentes esportivos." },
  { n: "ABS e ASA", c: "Boa resistência a impactos e temperatura. O ASA tem proteção nativa contra UV e intempéries.", t: "Tolera entre 90 °C e 100 °C.", v: 90, a: "Peças técnicas, automotivas e gabinetes para uso externo." },
  { n: "TPU", c: "Elastômero flexível com grande absorção de impacto, vibração e deformação.", t: "Varia conforme a dureza Shore.", v: 0, a: "Vedações, amortecedores, cases protetores e batentes antiderrapantes." }
];

const CAPACIDADES = [
  ["Tecnologia", "Impressão 3D FDM (deposição de filamento)"],
  ["Peças grandes", "Impressão em múltiplas partes, unidas com encaixes e acabamento"],
  ["Materiais", "PLA, PETG, ABS, ASA e TPU, em diversas cores"],
  ["Modelagem", "CAD paramétrico (Fusion e Grasshopper)"],
  ["Arquivos aceitos", "STL, STEP, 3MF, OBJ ou esboço com medidas"],
  ["Quantidade", "Peça única até lotes de centenas de unidades"],
  ["Entrega", "Envio para todo o Brasil"]
];

const FAQ = [
  ["Como o orçamento é calculado?", "Pelo tempo de máquina e pelo material consumido, somados à modelagem quando o arquivo ainda não existe. Você recebe o valor antes de qualquer produção."],
  ["Não tenho o arquivo 3D. Consigo mesmo assim?", "Sim. Parta de um esboço, foto ou medidas e fazemos a modelagem paramétrica. O arquivo editável fica com você."],
  ["Qual material devo escolher?", "Depende de carga, temperatura e ambiente de uso. Descreva a aplicação e indicamos o material mais adequado (veja também a página Materiais)."],
  ["Qual o pedido mínimo?", "Uma peça. Fazemos desde protótipos únicos até lotes de centenas de unidades."],
  ["Qual o prazo?", "Varia com tamanho, quantidade e acabamento. O prazo vem junto com o orçamento, depois da análise do projeto."],
  ["Meu projeto fica confidencial?", "Tratamos arquivos e ideias dos clientes com sigilo e não os utilizamos em outros trabalhos."],
  ["Vocês enviam para fora da minha cidade?", "Sim, enviamos para todo o Brasil."]
];

const ENVIAR = [
  "Arquivo STL/STEP, esboço ou foto de referência",
  "Medidas principais e onde a peça será usada",
  "Quantidade e material de preferência (se houver)",
  "Prazo desejado e cidade de entrega"
];

const PORTFOLIO_CASES = [
  {
    titulo: "Kettlebell Funcional com Mosquetão",
    tags: ["CAD Paramétrico", "PETG", "Pequenos Lotes"],
    desafio: "Um pingente fitness resistente, com nome personalizado e mosquetão que não quebre com o uso diário.",
    solucao: "Modelo paramétrico com nome em relevo ou baixo relevo ajustável e mosquetão elástico calibrado contra fadiga, impresso em PETG.",
    ficha: [["Material", "PETG"], ["Processo", "FDM, pequenos lotes"], ["Diferencial", "Nome parametrizado"]],
    imagens: [
      { src: "img/garrafas.webp", alt: "Uso prático em garrafas térmicas" },
      { src: "img/maos.webp", alt: "Detalhe do acabamento e gravação de nomes na mão" },
      { src: "img/blueprint.webp", alt: "Estudo paramétrico de malha 3D e cotas" }
    ],
    linkTexto: "Solicitar desenvolvimento similar"
  },
  {
    titulo: "Kettlebell Porta-Aliança Bipartido",
    tags: ["Encaixe por Pressão", "Prototipagem", "Acabamento Premium"],
    desafio: "Guardar uma aliança em uma peça do universo fitness, com abertura suave e sem folga excessiva.",
    solucao: "Esfera dividida em duas calotas com encaixe de precisão, abrigando a aliança internamente e fechando com ajuste firme.",
    ficha: [["Material", "PLA / PETG"], ["Processo", "FDM, prototipagem iterativa"], ["Diferencial", "Encaixe de precisão"]],
    imagens: [
      { src: "img/porta-alianca.webp", alt: "Kettlebell aberto revelando aliança interna" },
      { src: "img/maos.webp", alt: "Peça montada demonstrando volume real" },
      { src: "img/blueprint.webp", alt: "Corte A-A demonstrando espessura de parede" }
    ],
    linkTexto: "Quero um lote deste modelo"
  }
];
