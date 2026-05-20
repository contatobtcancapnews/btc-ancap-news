/* BTC Ancap News — SPA, dados, busca, simulador BTC, comentários */

// 1. DADOS — Artigos
const ARTICLES = [
  {
    id: 16,
    title: 'SUI dispara 50% com planos de stablecoins sem taxa e transações privadas, diz Mysten Labs',
    excerpt: 'Token nativo da Sui explode após cofundador da Mysten Labs anunciar transfers de stablecoins com taxa zero e planos de adicionar transações privadas à blockchain de camada 1.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/7c3aed/ffffff?text=SUI+50%25',
    author: 'Redação BTC Ancap News',
    date: '11 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O token nativo da blockchain Sui disparou 50% após o cofundador da Mysten Labs, Adeniyi Abiodun, anunciar planos ambiciosos para a rede: transferências de stablecoins com taxa zero e a adição de transações privadas. O movimento elevou significativamente a capitalização de mercado do ativo e recolocou a Sui no centro das atenções do mercado cripto.</p>

      <h3>O que aconteceu</h3>
      <p>Durante um evento em Miami, Abiodun revelou que a Sui está desenvolvendo um sistema de transferências de stablecoins com zero de taxa, um movimento que pode tornar a blockchain extremamente competitiva para pagamentos e remessas internacionais. Atualmente, até mesmo redes rápidas como Solana cobram taxas mínimas, e a proposta de taxa zero é um diferencial significativo.</p>

      <p>Além disso, a Mysten Labs reafirmou seu compromisso com a privacidade na rede, anunciando planos para implementar transações privadas nativas. A combinação de taxa zero e privacidade pode posicionar a Sui como uma plataforma atraente para aplicações financeiras que exigem confidencialidade.</p>

      <blockquote>Estamos construindo a infraestrutura de pagamentos do futuro. Taxas zero e privacidade não são luxos — são requisitos básicos para que bilhões de pessoas adotem criptomoedas no dia a dia. — Adeniyi Abiodun, cofundador da Mysten Labs</blockquote>

      <h3>Contexto</h3>
      <p>A Sui é uma blockchain de camada 1 que utiliza a linguagem de programação Move, originalmente desenvolvida pela Meta (Facebook) para o projeto Libra/Diem. A Mysten Labs, fundada por ex-funcionários da Meta, tem se concentrado em criar uma plataforma rápida, escalável e amigável para desenvolvedores.</p>

      <p>A blockchain já vinha ganhando tração com aplicações DeFi e jogos, mas o anúncio de stablecoins com taxa zero representa um salto em termos de utilidade prática. Se implementado com sucesso, o recurso pode atrair volumes significativos de pagamentos e remessas para a rede.</p>

      <h3>Impacto no mercado</h3>
      <p>A alta de 50% do token SUI reflete o entusiasmo do mercado com as novidades. No entanto, investidores devem acompanhar se as promessas se concretizarão: implementar transações privadas em uma blockchain pública é um desafio técnico considerável, e sustentar taxas zero requer um modelo econômico viável para a rede.</p>

      <h3>Consequências possíveis</h3>
      <p>Se a Sui conseguir entregar transfers de stablecoin com taxa zero e privacidade, ela pode se tornar uma concorrente direta de redes estabelecidas como Solana e Ethereum para o mercado de pagamentos. O movimento também pode pressionar outras blockchains a reduzirem suas taxas e melhorarem a privacidade.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Stablecoins com taxa zero e privacidade em uma blockchain de camada 1 é exatamente o tipo de inovação que pode levar as criptomoedas ao próximo nível de adoção. A Sui está fazendo uma aposta ousada, e o mercado está reagindo positivamente. No entanto, é importante separar anúncio de execução — muitas blockchains prometeram revoluções que não se concretizaram. De qualquer forma, a competição por taxas mais baixas e mais privacidade beneficia todo o ecossistema cripto.</p>
    `,
    comments: []
  },
  {
    id: 17,
    title: 'White hat devolve US$ 190 mil ao protocolo Renegade horas após exploit em dark pool DeFi',
    excerpt: 'Hacker ético explora vulnerabilidade na Renegade, dark pool descentralizada, e devolve todos os fundos, afirmando que a decisão foi para "proteger os usuários do DeFi".',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/7c3aed/ffffff?text=White+Hat+Renegade',
    author: 'Redação BTC Ancap News',
    date: '11 mai 2026',
    readTime: '4 min',
    featured: true,
    body: `
      <p>Um white hat hacker explorou uma vulnerabilidade no protocolo Renegade, uma dark pool descentralizada, e devolveu US$ 190 mil em fundos poucas horas depois do ataque. O hacker afirmou que a decisão foi tomada "para proteger os fundos e a segurança dos usuários do DeFi", em mais um episódio que destaca o papel ético dos white hats no ecossistema cripto.</p>

      <h3>O que aconteceu</h3>
      <p>A Renegade é uma dark pool descentralizada que permite negociações privadas e confidenciais na blockchain Ethereum. O hacker identificou uma vulnerabilidade nos contratos inteligentes do protocolo e conseguiu acessar US$ 190 mil em fundos de usuários. Em vez de roubar os recursos, o white hat contatou a equipe da Renegade e devolveu a quantia integral, recebendo agradecimentos públicos da equipe.</p>

      <p>Casos como este são relativamente comuns no DeFi, onde "white hats" (hackers éticos) identificam vulnerabilidades antes de criminosos e ajudam a proteger os fundos dos usuários. Muitas vezes, esses hackers recebem recompensas (bug bounties) pelos achados, embora não esteja claro se a Renegade ofereceu uma recompensa neste caso.</p>

      <blockquote>O ecossistema DeFi opera em um regime de "responsabilidade mútua": qualquer pessoa pode auditar o código, e a ética dos white hats é o que separa uma vulnerabilidade corrigida de um desastre financeiro. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O DeFi já perdeu bilhões de dólares em hacks e exploits ao longo dos anos. Incidentes como o roubo de US$ 600 milhões da Ronin Network, o exploit de US$ 320 milhões da Wormhole e o colapso de US$ 293 milhões da Kelp DAO são lembretes constantes dos riscos de segurança no setor.</p>

      <p>No entanto, a comunidade white hat tem desempenhado um papel cada vez mais importante na proteção do ecossistema. Plataformas como Immunefi e Hats Finance oferecem incentivos para que hackers éticos encontrem e reportem vulnerabilidades antes que criminosos as explorem.</p>

      <h3>Impacto no mercado</h3>
      <p>Casos de white hats devolvendo fundos reforçam a confiança no ecossistema DeFi. Embora a vulnerabilidade em si seja negativa, a resolução rápida e ética demonstra que a transparência do código aberto permite que problemas sejam identificados e corrigidos rapidamente.</p>

      <h3>Consequências possíveis</h3>
      <p>A Renegade deve corrigir a vulnerabilidade e possivelmente passar por uma nova auditoria de segurança. O incidente serve como lembrete para todos os protocolos DeFi da importância de programas de bug bounty bem financiados e testes rigorosos de segurança.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O white hat que devolveu US$ 190 mil é um exemplo do melhor do ethos cripto: responsabilidade individual, transparência e um senso de comunidade que transcende o lucro imediato. Diferentemente do sistema financeiro tradicional, onde vulnerabilidades são escondidas por décadas até explodirem em crises sistêmicas, o DeFi expõe seus problemas à luz do dia e os corrige em horas. Isso não é uma fraqueza — é a maior vantagem do sistema.</p>
    `,
    comments: []
  },
  {
    id: 18,
    title: 'XRP alinha métricas de alta para rally até US$ 2, apontam indicadores técnicos e on-chain',
    excerpt: 'Analistas identificam convergência de múltiplos indicadores técnicos e on-chain apontando para rompimento do XRP, com US$ 2 como primeiro alvo e potencial para movimento maior.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/7c3aed/ffffff?text=XRP+%242',
    author: 'Redação BTC Ancap News',
    date: '11 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O XRP está dando sinais de que um rompimento de alta pode estar em andamento, de acordo com a analista Nancy Lubale. Múltiplos indicadores técnicos e on-chain estão se alinhando para o que pode ser um "rally em grande escala", com US$ 2 como o primeiro alvo de preço.</p>

      <h3>O que aconteceu</h3>
      <p>O XRP, atualmente negociado em torno de US$ 1,47, apresenta uma confluência de sinais altistas: o RSI (Relative Strength Index) mostra momentum positivo sem estar em território de sobrecompra, o volume de negociação está crescendo de forma consistente, e os dados on-chain indicam acumulação por parte de grandes detentores (whales).</p>

      <p>Além dos indicadores técnicos, o cenário regulatório para o XRP tem melhorado significativamente desde a vitória parcial da Ripple contra a SEC em 2023. A clareza jurídica renovada abriu caminho para parcerias institucionais e listagens em exchanges que antes evitavam o ativo devido à incerteza regulatória.</p>

      <blockquote>O XRP está montando um dos setups técnicos mais promissores do mercado altcoin no momento. Se romper US$ 1,50 com volume, o caminho para US$ 2 fica aberto. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O XRP é uma das criptomoedas mais antigas e estabelecidas do mercado, com foco em pagamentos transfronteiriços. A Ripple, empresa associada ao ativo, tem construído uma rede de parcerias com instituições financeiras ao redor do mundo para usar o XRP como ponte de liquidação.</p>

      <p>Após anos de batalha jurídica com a SEC, a Ripple emergiu com clareza regulatória renovada, o que permitiu a retomada de expansão nos mercados americano e global. Parcerias recentes com bancos e procesadoras de pagamento têm reforçado a tese de utilidade do XRP.</p>

      <h3>Impacto no mercado</h3>
      <p>Um rally do XRP para US$ 2 representaria uma valorização de aproximadamente 36% em relação aos níveis atuais. Mais importante, um movimento de alta consistente do XRP poderia puxar outras altcoins, iniciando uma temporada de altcoins (altseason).</p>

      <h3>Consequências possíveis</h3>
      <p>Se o XRP romper US$ 2 e se consolidar acima desse nível, o próximo alvo seria a região de US$ 3 a US$ 3,50, máximas históricas do ativo. No entanto, a realização desse movimento depende do volume de negociação e do sentimento geral do mercado cripto.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O XRP é um dos poucos ativos cripto com utilidade comprovada no sistema financeiro tradicional, especialmente em pagamentos transfronteiriços. A clareza regulatória conquistada após a batalha com a SEC removeu a maior nuvem negra sobre o ativo. Os sinais técnicos são promissores, mas é importante lembrar que o XRP ainda é um ativo relativamente centralizado comparado ao Bitcoin. Para investidores que buscam exposição ao mercado de pagamentos globais, o XRP merece atenção — mas sempre dentro de uma alocação diversificada.</p>
    `,
    comments: []
  },
  {
    id: 19,
    title: 'Tribunal permite Arbitrum DAO mover US$ 71 milhões em ETH para Aave após congelamento relacionado a hack da Coreia do Norte',
    excerpt: 'Juiz de Manhattan modifica ordem de restrição para permitir que DAO transfira Ether congelado para a Aave, preservando direitos legais de vítimas de terrorismo sobre os fundos.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/1a5276/ffffff?text=Arbitrum+Court',
    author: 'Redação BTC Ancap News',
    date: '11 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>Um juiz de Manhattan modificou uma ordem de restrição para permitir que o Arbitrum DAO mova US$ 71 milhões em Ether congelado para o protocolo Aave. A decisão preserva os direitos legais de vítimas de terrorismo que reivindicam os fundos, ao mesmo tempo que permite que o DAO evite perdas com a inatividade dos ativos.</p>

      <h3>O que aconteceu</h3>
      <p>Os US$ 71 milhões em ETH estavam congelados em uma carteira vinculada ao grupo Lazarus, um notório grupo de hackers patrocinado pelo governo norte-coreano, que teria usado os fundos para financiar atividades ilegais. A ordem de restrição original impedia qualquer movimentação dos ativos enquanto a disputa legal não fosse resolvida.</p>

      <p>O Arbitrum DAO argumentou que manter o ETH parado por período prolongado resultaria em perda de oportunidades de rendimento (custo de oportunidade) e possível depreciação. A modificação da ordem permite que o DAO deposite os fundos na Aave, um protocolo DeFi que gera rendimento através de empréstimos, enquanto o caso legal prossegue.</p>

      <blockquote>Esta decisão estabelece um precedente importante: a justiça reconhece que ativos digitais têm custos de oportunidade reais e que o congelamento prolongado pode ser prejudicial, mesmo em casos de disputa de propriedade. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O caso envolve questões complexas de direito internacional, propriedade de ativos digitais e a interseção entre o sistema judiciário tradicional e organizações autônomas descentralizadas (DAOs). O grupo Lazarus é conhecido por realizar hacks bilionários contra exchanges e protocolos DeFi, utilizando os fundos roubados para financiar o programa de mísseis e armas nucleares da Coreia do Norte.</p>

      <p>A decisão do juiz é significativa porque reconhece o DAO como uma entidade capaz de tomar decisões financeiras racionais em busca do melhor interesse de seus participantes, mesmo enquanto disputas legais sobre a propriedade dos fundos não são resolvidas.</p>

      <h3>Impacto no mercado</h3>
      <p>A decisão estabelece um precedente jurídico importante para como DAOs e ativos digitais são tratados pelo sistema judiciário. O reconhecimento de que DAOs podem tomar decisões financeiras em nome de seus participantes é um passo na direção da personalidade jurídica para essas organizações.</p>

      <h3>Consequências possíveis</h3>
      <p>O caso pode abrir precedentes para futuras disputas envolvendo ativos digitais congelados, estabelecendo que DAOs têm o direito de gerenciar ativos de forma responsável mesmo durante litígios. Também pode acelerar discussões sobre a personalidade jurídica de DAOs.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Um juiz americano permitindo que um DAO mova US$ 71 milhões em ETH para um protocolo DeFi é um marco na história jurídica das criptomoedas. A decisão reconhece implicitamente que DAOs são entidades capazes de tomar decisões financeiras responsáveis, um passo importante para a legitimidade jurídica dessas organizações. Para o mercado, é mais um sinal de que o sistema legal está se adaptando às realidades do mundo descentralizado, o é positivo para a adoção institucional de longo prazo.</p>
    `,
    comments: []
  },
  {
    id: 20,
    title: 'Exploit de US$ 293 milhões na Kelp DAO faz protocolos DeFi migrarem para Chainlink em massa',
    excerpt: 'Após ataque expor riscos em oráculos e bridges terceirizados, Solv Protocol e outros projetos estão migrando para a infraestrutura da Chainlink para evitar vulnerabilidades similares.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/7c3aed/ffffff?text=Kelp+DAO+Exploit',
    author: 'Redação BTC Ancap News',
    date: '11 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O exploit de US$ 293 milhões na Kelp DAO está provocando uma reação em cadeia no ecossistema DeFi. Após o ataque expor fragilidades em oráculos e bridges terceirizados, vários protocolos — incluindo o Solv Protocol — anunciaram migração para a infraestrutura da Chainlink, o provedor líder de oráculos descentralizados.</p>

      <h3>O que aconteceu</h3>
      <p>O ataque à Kelp DAO, que resultou na perda de US$ 293 milhões, explorou vulnerabilidades em bridges e oráculos terceirizados que o protocolo utilizava para obter preços e facilitar transferências entre blockchains. O exploit expôs como a dependência de infraestrutura não auditada pode criar riscos sistêmicos para protocolos DeFi.</p>

      <p>Em resposta, o Solv Protocol — uma plataforma de gestão de ativos tokenizados que gerencia mais de US$ 1 bilhão em valor total bloqueado — anunciou a migração completa de sua infraestrutura de oráculos para a Chainlink. Outros protocolos menores seguiram o mesmo caminho, buscando a segurança e confiabilidade da rede de oráculos mais estabelecida do mercado.</p>

      <blockquote>A Chainlink é o padrão-ouro para oráculos descentralizados. Depois do exploit da Kelp, ficou claro que cortar custos com infraestrutura de oráculos é um risco que nenhum protocolo sério pode correr. — Posição do Solv Protocol sobre a migração</blockquote>

      <h3>Contexto</h3>
      <p>Oráculos são serviços que fornecem dados do mundo real (como preços de ativos) para contratos inteligentes na blockchain. Eles são essenciais para o funcionamento do DeFi, mas representam um ponto crítico de vulnerabilidade se não forem devidamente descentralizados e auditados.</p>

      <p>A Chainlink é de longe o provedor de oráculos mais utilizado no DeFi, com centenas de milhares de contratos inteligentes dependendo de sua rede para dados de preços. O movimento de migração após o exploit da Kelp DAO reforça a posição dominante da Chainlink no mercado.</p>

      <h3>Impacto no mercado</h3>
      <p>A migração em massa para a Chainlink fortalece ainda mais o ecossistema LINK e consolida o token como um dos pilares da infraestrutura DeFi. Para o mercado, a consolidação em torno de padrões estabelecidos reduz riscos sistêmicos, mas também levanta questões sobre centralização da infraestrutura.</p>

      <p>O token LINK da Chainlink se valorizou com a notícia das migrações, refletindo o aumento esperado no uso da rede.</p>

      <h3>Consequências possíveis</h3>
      <p>A tendência de consolidação em torno da Chainlink deve continuar, com mais protocolos migrando para sua infraestrutura após o exploit. No longo prazo, isso pode levar a uma padronização do mercado de oráculos, com benefícios em termos de segurança, mas riscos de dependência excessiva de um único provedor.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O exploit de US$ 293 milhões na Kelp DAO é um lembrete doloroso de que o DeFi ainda está em seus estágios iniciais de desenvolvimento. A migração para a Chainlink é uma reação racional do mercado: quando um protocolo líder é comprometido, todos correm para a opção mais segura e testada. A ironia é que a Chainlink, embora descentralizada em sua operação, se torna cada vez mais um ponto único de falha sistêmica para todo o ecossistema DeFi. A diversificação de provedores de oráculos é importante, mas a realidade é que poucos concorrentes têm o nível de segurança e descentralização da Chainlink. Para o investidor, o movimento reforça a tese de que infraestrutura crítica bem construída é o melhor investimento de longo prazo no setor cripto.</p>
    `,
    comments: []
  },
  {
    id: 21,
    title: 'DTCC prepara lançamento de tokenização com BlackRock e Goldman Sachs para julho',
    excerpt: 'Câmara de compensação central dos EUA inicia pilotos de negociação de títulos tokenizados em julho com apoio dos maiores bancos de Wall Street, rumo ao lançamento completo em outubro.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/1a5276/ffffff?text=DTCC+Token',
    author: 'Redação BTC Ancap News',
    date: '2 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Depository Trust & Clearing Corporation (DTCC), a câmara de compensação central que processa trilhões de dólares em transações de valores mobiliários nos Estados Unidos, está se preparando para lançar um serviço de negociação de títulos tokenizados em blockchain. O serviço tem o apoio de gigantes como BlackRock e Goldman Sachs, com pilotos programados para julho e lançamento completo previsto para outubro de 2026.</p>

      <h3>O que aconteceu</h3>
      <p>A DTCC revelou planos para lançar um serviço de tokenização que permitirá a negociação de versões digitais de títulos tradicionais em infraestrutura de blockchain. BlackRock (maior gestora de ativos do mundo, com mais de US$ 11 trilhões sob gestão) e Goldman Sachs estão entre as instituições financeiras que apoiam a iniciativa.</p>

      <p>Pilotos começam em julho de 2026, com uma ampla gama de firmas financeiras participantes. O lançamento completo está programado para outubro, marcando a primeira vez que a infraestrutura central de liquidação de títulos dos EUA adota blockchain de forma oficial e operacional.</p>

      <h3>Contexto</h3>
      <p>A DTCC processa a vasta maioria das transações de títulos nos Estados Unidos, incluindo ações, títulos de dívida e fundos mútuos. Sua adoção de tecnologia blockchain para tokenização representa uma validação sem precedentes da tecnologia por parte do establishment financeiro tradicional.</p>

      <p>O movimento segue uma tendência global de tokenização de ativos do mundo real (RWA). Grandes bancos e gestoras de ativos têm explorado a tokenização como forma de reduzir custos operacionais, aumentar a velocidade de liquidação e permitir a propriedade fracionária de ativos antes inacessíveis. Projetos como o USDC, a BlackRock BUIDL e Ondo Finance já demonstraram o potencial da tokenização de ativos do mundo real em blockchains públicas.</p>

      <h3>Impacto no mercado</h3>
      <p>A entrada da DTCC no mercado de tokenização pode acelerar dramaticamente a adoção de blockchain no setor financeiro tradicional. Diferentemente de iniciativas isoladas de bancos individuais, a participação da câmara de compensação central cria uma infraestrutura compartilhada que todo o mercado pode usar.</p>

      <p>Para o mercado cripto, a tokenização de ativos tradicionais representa um dos maiores vetores de crescimento. O mercado de RWAs tokenizados pode chegar a US$ 16 trilhões até 2030, segundo projeções de consultorias como a BCG e 21.co. A validação da DTCC pode acelerar esse cronograma.</p>

      <h3>Consequências possíveis</h3>
      <p>Se bem-sucedida, a iniciativa da DTCC pode criar um padrão de mercado para títulos tokenizados, reduzindo a fragmentação entre diferentes plataformas. Os impactos incluem: liquidação mais rápida (potencialmente T+0 em vez de T+2), redução de custos com intermediários, maior transparência e abertura para mercados secundários de ativos ilíquidos. No entanto, a centralização da infraestrutura da DTCC contrasta com o ethos descentralizado das blockchains públicas, e o modelo de governança do sistema ainda precisa ser definido.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Ver a DTCC — a espinha dorsal do mercado de títulos americano — adotando blockchain não é apenas mais uma parceria corporativa. É a infraestrutura crítica do sistema financeiro tradicional reconhecendo que a tecnologia de livro-razão distribuído oferece eficiências reais. Isso não significa necessariamente alta do Bitcoin no curto prazo, mas valida a tese mais ampla de que a tecnologia blockchain veio para ficar. O mercado de tokenização de RWAs pode ser o maior vetor de crescimento do setor cripto nos próximos anos — e a DTCC está colocando Wall Street no centro desse movimento.</p>
    `,
    comments: []
  },
  {
    id: 22,
    title: 'Bitcoin rompe abaixo de US$ 78 mil com tensão no Irã e saída recorde de ETFs',
    excerpt: 'BTC cai para mínimas de duas semanas pressionado por conflito geopolítico, rendimentos de títulos em alta e interrupção de sequência bilionária de influxos em ETFs.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=BTC+Geopolitica',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O Bitcoin rompeu o suporte de US$ 79 mil e caiu abaixo de US$ 78 mil pela primeira vez desde o início de maio, pressionado por uma combinação de fatores macroeconômicos e geopolíticos. A escalada das tensões entre Estados Unidos e Irã, somada ao aumento dos rendimentos dos títulos do Tesouro americano, interrompeu uma sequência de cinco dias de influxos nos ETFs de Bitcoin à vista.</p>

      <h3>O que aconteceu</h3>
      <p>O BTC recuou para a faixa de US$ 77.400, uma queda de aproximadamente 4% em 48 horas. Os ETFs de Bitcoin à vista nos EUA registraram saídas líquidas de US$ 277,5 milhões, encerrando uma sequência de influxos que havia acumulado US$ 1,7 bilhão nos cinco dias anteriores.</p>

      <p>A queda foi catalisada pelo aumento das tensões no Oriente Médio, com o conflito entre EUA e Irã se intensificando, e pela alta dos rendimentos dos títulos do Tesouro americano, que tornam ativos de renda fixa mais atrativos em comparação com ativos de risco como criptomoedas.</p>

      <blockquote>O mercado está em modo de aversão ao risco. A combinação de guerra no Oriente Médio e yields subindo é historicamente negativa para ativos de risco no curto prazo. Mas o Bitcoin já mostrou resiliência em cenários similares. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O movimento de queda ocorre após semanas de otimismo no mercado cripto, impulsionado pela aprovação do CLARITY Act no comitê do Senado americano e pelos influxos consistentes em ETFs. O Bitcoin havia se mantido acima dos US$ 80 mil por boa parte de maio, com analistas projetando um rali em direção aos US$ 100 mil.</p>

      <p>No entanto, a deterioração do cenário geopolítico reverteu momentaneamente o momentum. A taxa de hash da rede Bitcoin, porém, permanece em máximas históricas, indicando que mineradores mantêm confiança na rentabilidade de longo prazo da rede.</p>

      <h3>Impacto no mercado</h3>
      <p>A queda abaixo de US$ 78 mil acionou stops e liquidações de posições alavancadas, amplificando o movimento. Dados de exchanges mostram liquidações de mais de US$ 180 milhões em posições long nas últimas 24 horas. Altcoins sofreram ainda mais: Ethereum caiu para US$ 2.126 e Solana recuou para US$ 85.</p>

      <p>O mercado de opções mostra aumento na demanda por proteção (puts), com o skew de 25 delta se inclinando para o lado negativo. Apesar disso, o mercado de futuros não mostra contango excessivo, sugerindo que investidores institucionais não estão abandonando posições.</p>

      <h3>Consequências possíveis</h3>
      <p>Analistas apontam que a queda pode ser uma armadilha de urso (bear trap), já que os fundamentos do Bitcoin permanecem sólidos. As saídas de ETFs, embora expressivas, representam uma fração pequena dos mais de US$ 50 bilhões em ativos sob gestão desses produtos. Se o BTC conseguir se manter acima dos US$ 76 mil, a estrutura técnica de médio prazo permanece intacta.</p>

      <p>Por outro lado, uma escalada significativa no conflito com o Irã poderia pressionar ainda mais ativos de risco. O mercado de predições mostra 75% de probabilidade de BTC retornar a US$ 84 mil contra 25% de probabilidade de cair para US$ 55 mil, refletindo um balanço de riscos ainda favorável.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Quedas como essa são normais em mercados de alta do Bitcoin. O que diferencia o cenário atual é a profundidade do suporte institucional: com ETFs, treasuries corporativas e até bancos italianos comprando Bitcoin, a estrutura de compradores é muito mais diversificada do que em ciclos anteriores. A tensão geopolítica é real e pode causar mais volatilidade no curto prazo, mas historicamente o Bitcoin se beneficia de cenários de incerteza geopolítica no médio prazo, à medida que investidores buscam ativos não correlacionados com jurisdições específicas. O mercado está testando a convicção dos compradores — e é nesses testes que as tendências se confirmam ou se quebram.</p>
    `,
    comments: []
  },
  {
    id: 23,
    title: 'Strategy de Michael Saylor sinaliza possível venda de Bitcoin para gerenciar dívida de US$ 1,5 bi',
    excerpt: 'Empresa anuncia recompra de notas conversíveis de 2029 e Saylor sugere que vender BTC pode ser necessário para evitar impairment do ativo no balanço.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Strategy+BTC',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Strategy — empresa anteriormente conhecida como MicroStrategy e maior detentora corporativa de Bitcoin do mundo, com mais de 818 mil BTC — surpreendeu o mercado ao anunciar planos de recomprar US$ 1,5 bilhão em notas conversíveis de 2029. Michael Saylor, chairman executivo, sugeriu que a empresa pode considerar vender parte de seus Bitcoins para evitar o que chamou de "impairment" do ativo.</p>

      <h3>O que aconteceu</h3>
      <p>A Strategy anunciou a intenção de recomprar notas conversíveis seniores com vencimento em 2029, que carregam cupom de 0% mas são conversíveis em ações da empresa. Michael Saylor, em comunicado aos acionistas, argumentou que a adesão rígida à política de "nunca vender" Bitcoin poderia acabar prejudicando o próprio ativo que a empresa construiu.</p>

      <p>A declaração marca uma mudança de tom significativa para Saylor, que historicamente defendeu que a Strategy jamais venderia seus Bitcoins. A empresa também está pedindo que investidores de varejo votem em uma proposta de pagamento de dividendos semestrais em ações STRD.</p>

      <blockquote>A rigidez dogmática de 'nunca vender' pode, em certas circunstâncias, acabar impairmentando o ativo que construímos. Nossa responsabilidade fiduciária exige flexibilidade estratégica. — Michael Saylor, chairman executivo da Strategy</blockquote>

      <h3>Contexto</h3>
      <p>A Strategy acumulou sua posição bilionária em Bitcoin ao longo de vários anos, financiando as compras principalmente por meio de emissão de dívida conversível e ofertas de ações. Com 818 mil BTC a um preço atual de cerca de US$ 77 mil, a posição vale aproximadamente US$ 63 bilhões — um lucro substancial sobre o custo médio de aquisição.</p>

      <p>As notas conversíveis de 2029 representam uma obrigação financeira significativa. Embora tenham cupom zero, os detentores têm o direito de converter os títulos em ações da Strategy a um preço predeterminado. A recompra antecipada dessas notas pode reduzir a diluição futura dos acionistas.</p>

      <h3>Impacto no mercado</h3>
      <p>A mera sugestão de que a Strategy poderia vender Bitcoin gerou desconforto no mercado. A empresa é vista como um pilar de acumulação inabalável, e qualquer venda — mesmo que pequena e justificada — poderia abalar a confiança de outros investidores institucionais. As ações da Strategy (MSTR) caíram 3% após as declarações.</p>

      <p>Por outro lado, analistas apontam que a venda de BTC pela Strategy, se ocorrer, seria provavelmente pequena em relação ao tamanho total da posição e teria mais impacto simbólico do que material. A empresa continua sendo a maior detentora corporativa de Bitcoin por larga margem.</p>

      <h3>Consequências possíveis</h3>
      <p>Se a Strategy de fato vender parte de seus Bitcoins, outros detentores corporativos podem seguir o exemplo, criando pressão vendedora adicional. No entanto, a demanda institucional via ETFs e compras de outras empresas poderia absorver o volume sem grandes disrupções. O cenário mais provável é que qualquer venda seja comunicada com bastante antecedência e executada de forma gradual para minimizar o impacto no mercado.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Michael Saylor passou anos construindo uma imagem de maximalista inabalável. Sua sugestão de que vender Bitcoin pode ser necessário é um lembrete de que, no fim das contas, a Strategy é uma empresa com obrigações financeiras reais, não um fundo de holding perpétua. Dito isso, a posição de 818 mil BTC é grande demais para ser desfeita rapidamente sem causar danos à própria Strategy. O mercado não deve entrar em pânico: Saylor está sendo pragmaticamente flexível, não abandonando sua convicção no Bitcoin. A diferença entre os dois é sutil, mas crucial.</p>
    `,
    comments: []
  },
  {
    id: 24,
    title: 'Gigantes financeiros do Japão se preparam para lançar fundos de investimento em criptoativos',
    excerpt: 'SBI, Rakuten e Nomura lideram corrida para oferecer trusts de cripto a investidores de varejo japoneses, com expectativa de aprovação regulatória formal até 2028.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/1a5276/ffffff?text=Japao+Cripto',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>As maiores instituições financeiras do Japão estão se posicionando para lançar fundos de investimento em criptoativos voltados ao varejo. SBI Holdings, Rakuten e Nomura — três dos maiores conglomerados financeiros do país — estão entre as empresas que preparam produtos de investimento em criptomoedas, antecipando uma flexibilização regulatória que deve permitir formalmente esses fundos até 2028.</p>

      <h3>O que aconteceu</h3>
      <p>Segundo relatório da mídia financeira japonesa, as três empresas estão em diferentes estágios de preparação para lançar trusts de investimento em criptoativos. A SBI, que já tem uma ampla presença no setor cripto por meio de exchanges e parcerias com a Ripple, estaria mais avançada. Rakuten e Nomura também estariam estruturando produtos similares.</p>

      <p>O regulador financeiro japonês (FSA) estaria preparando uma estrutura regulatória que permitiria formalmente fundos de investimento com exposição a criptoativos, com implementação prevista para o período entre 2027 e 2028. A movimentação das instituições antecipa essa abertura regulatória.</p>

      <blockquote>O Japão está prestes a dar um dos passos mais significativos na integração de criptoativos ao sistema financeiro tradicional. Quando SBI, Rakuten e Nomura se movem juntas, é porque o sinal regulatório já foi dado. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O Japão tem uma relação única com criptomoedas. O país foi um dos primeiros a regular exchanges após o colapso da Mt. Gox em 2014 e mantém um ambiente regulatório rigoroso, porém previsível. Investidores japoneses de varejo historicamente demonstraram grande apetite por criptoativos, e a criação de veículos de investimento regulados pode canalizar esse interesse para produtos supervisionados.</p>

      <p>O movimento japonês se soma a uma tendência global de integração de criptoativos ao sistema financeiro tradicional. Hong Kong, Singapura e Emirados Árabes Unidos também estão avançando em estruturas regulatórias para fundos cripto, criando uma competição entre hubs financeiros asiáticos.</p>

      <h3>Impacto no mercado</h3>
      <p>A entrada de instituições financeiras tradicionais japonesas no mercado de fundos cripto pode abrir uma nova e significativa fonte de demanda. O mercado de investimentos de varejo no Japão é um dos maiores do mundo, com ativos financeiros de famílias estimados em mais de US$ 15 trilhões. Mesmo uma alocação modesta em criptoativos representaria bilhões de dólares em novos fluxos.</p>

      <h3>Consequências possíveis</h3>
      <p>A criação de fundos regulados de cripto no Japão pode servir de modelo para outros países asiáticos, acelerando a adoção institucional na região. Para o Bitcoin e outras criptomoedas estabelecidas, o fluxo de capital japonês pode ser um catalisador significativo de alta a partir de 2027-2028, coincidindo com o próximo ciclo de halving e potencialmente amplificando seus efeitos.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O Japão está jogando xadrez, não damas. Enquanto outros países debatem se cripto é security ou commodity, o Japão está construindo a infraestrutura regulatória para integrar criptoativos ao mercado de capitais tradicional. A entrada de SBI, Rakuten e Nomura não é especulação — é posicionamento estratégico. Para o investidor de Bitcoin, o mercado japonês representa uma fonte de demanda futura que ainda não está precificada. Quando trilhões de ienes começarem a fluir para fundos cripto regulados, o impacto no mercado global será significativo.</p>
    `,
    comments: []
  },
  {
    id: 25,
    title: 'Maior banco da Itália mais que dobra exposição a criptomoedas e atinge US$ 235 milhões',
    excerpt: 'Intesa Sanpaolo expande portfólio cripto de US$ 100 mi para US$ 235 mi no primeiro trimestre, com primeiras compras de Ethereum e XRP e saída quase total de Solana.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/1a5276/ffffff?text=Intesa+Cripto',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O Intesa Sanpaolo, maior banco da Itália e um dos maiores da Europa, mais que dobrou suas holdings de criptomoedas no primeiro trimestre de 2026. A instituição passou de aproximadamente US$ 100 milhões para US$ 235 milhões em ativos digitais, realizando suas primeiras aquisições de Ethereum e XRP enquanto reduzia drasticamente sua posição em Solana.</p>

      <h3>O que aconteceu</h3>
      <p>Os dados foram revelados em relatório trimestral do banco italiano. O Intesa Sanpaolo expandiu seu portfólio cripto de forma significativa, diversificando para além do Bitcoin — que permanece como o principal ativo — com novas posições em Ethereum e XRP.</p>

      <p>O movimento mais surpreendente foi a saída quase total de Solana, que havia sido uma das primeiras altcoins adquiridas pelo banco em trimestres anteriores. A decisão sugere uma reavaliação estratégica do portfólio, possivelmente priorizando ativos com ecossistemas DeFi mais maduros ou maior integração institucional.</p>

      <blockquote>Quando o maior banco da Itália mais que dobra sua exposição a cripto em um trimestre, não estamos mais falando de um experimento. É uma alocação estratégica de portfólio com convicção crescente. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O Intesa Sanpaolo foi um dos primeiros grandes bancos europeus a incluir criptomoedas em seu balanço, iniciando com compras de Bitcoin em 2025. A expansão do portfólio no início de 2026 ocorre em um momento de crescente aceitação regulatória na Europa, com a implementação do MiCA (Markets in Crypto-Assets) criando um framework jurídico claro para instituições financeiras.</p>

      <p>O movimento do Intesa Sanpaolo não é isolado. Outros bancos europeus, como o BBVA na Espanha e o Deutsche Bank na Alemanha, também estão expandindo seus serviços de criptoativos. Bancos suíços como o UBS já oferecem produtos de investimento em cripto para clientes de alta renda.</p>

      <h3>Impacto no mercado</h3>
      <p>A diversificação do Intesa para Ethereum e XRP sinaliza que o setor bancário tradicional está gradualmente se sentindo confortável com ativos além do Bitcoin. Para o Ethereum, em particular, a adoção por um banco do porte do Intesa Sanpaolo valida a tese de que a segunda maior criptomoeda é vista pelo setor financeiro como um ativo de infraestrutura tecnológica, não apenas especulativo.</p>

      <p>A saída de Solana, no entanto, levanta questões sobre como os bancos avaliam o perfil de risco de diferentes blockchains. A estabilidade da rede e o histórico de interrupções podem ser fatores que pesam contra Solana em decisões de tesouraria institucional.</p>

      <h3>Consequências possíveis</h3>
      <p>O exemplo do Intesa Sanpaolo pode acelerar a adoção por outros bancos europeus que ainda estão em modo de observação. Se a alocação em cripto se mostrar bem-sucedida no balanço do banco italiano, outros gestores de tesouraria bancária terão um case study concreto para apresentar a seus comitês de risco. A diversificação para além do Bitcoin também amplia o universo de criptoativos elegíveis para tesourarias institucionais.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>US$ 235 milhões é troco para um banco com centenas de bilhões em ativos. Mas o que importa aqui é a direção e a velocidade: dobrar a exposição em um trimestre e diversificar para novas blockchains mostra que o Intesa Sanpaolo está ganhando confiança no setor, não perdendo. A saída de Solana é o detalhe mais intrigante — sugere que bancos estão fazendo distinções fundamentais entre blockchains, não tratando "cripto" como uma classe de ativos monolítica. Isso é maturidade institucional, e no longo prazo é positivo para projetos que atendem aos critérios de segurança, estabilidade e liquidez que instituições financeiras exigem.</p>
    `,
    comments: []
  },
  {
    id: 26,
    title: 'CLARITY Act avança em comitê do Senado dos EUA e promete transformar regulação cripto',
    excerpt: 'Legislação bipartidária para definir jurisdição entre CFTC e SEC sobre criptoativos passa em comitê, mas enfrenta divisão entre democratas no plenário do Senado.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/1a5276/ffffff?text=CLARITY+Act',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O CLARITY Act — legislação considerada a mais abrangente para regulação de criptoativos nos Estados Unidos — avançou em votação no comitê do Senado americano, prometendo criar um framework jurídico claro que define a jurisdição da CFTC (Commodity Futures Trading Commission) e da SEC (Securities and Exchange Commission) sobre ativos digitais. O projeto agora segue para votação no plenário do Senado, onde enfrenta divisões partidárias.</p>

      <h3>O que aconteceu</h3>
      <p>O comitê do Senado aprovou o CLARITY Act com apoio majoritário, mas apenas dois senadores democratas votaram a favor do projeto, sinalizando uma batalha partidária mais intensa no plenário. A legislação propõe uma divisão clara de responsabilidades: ativos digitais descentralizados ficariam sob a alçada da CFTC como commodities, enquanto tokens com características de valores mobiliários permaneceriam sob a SEC.</p>

      <p>A A16z Crypto, um dos maiores fundos de venture capital do setor, classificou a lei como um "benefício para a inovação doméstica", argumentando que quando os EUA "encontram o equilíbrio entre inovação e proteção ao consumidor, os efeitos reverberam globalmente".</p>

      <blockquote>O CLARITY Act representa a tentativa mais séria até agora de dar às empresas cripto americanas algo que elas nunca tiveram: regras claras. O diabo está nos detalhes da implementação. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>A ausência de um framework regulatório claro nos EUA é apontada há anos como um dos principais obstáculos ao desenvolvimento do setor cripto no país. A indefinição sobre se um token é security ou commodity gerou inúmeras batalhas judiciais entre a SEC e empresas cripto, criando um ambiente de incerteza que levou muitas startups a se incorporarem em jurisdições mais amigáveis.</p>

      <p>O CLARITY Act tenta resolver esse problema estabelecendo critérios objetivos baseados no grau de descentralização do projeto. Projetos suficientemente descentralizados seriam regulados como commodities, enquanto tokens de projetos centralizados ficariam sob a SEC. A lei também aborda requisitos de divulgação, proteção ao consumidor e supervisão de exchanges.</p>

      <h3>Impacto no mercado</h3>
      <p>O avanço da lei no comitê foi recebido com otimismo moderado pelo mercado. O Bitcoin mostrou pouca reação imediata à notícia, refletindo o fato de que sua classificação como commodity já é relativamente pacífica. No entanto, para altcoins e tokens DeFi, a definição clara de jurisdição pode abrir caminho para listagens em exchanges reguladas e produtos financeiros institucionais.</p>

      <p>Analistas do setor apontam que a clareza regulatória pode destravar uma onda de capital institucional que atualmente permanece à margem por incertezas jurídicas. Fundos de pensão, endowments e family offices poderiam se sentir mais confortáveis alocando em criptoativos com um framework regulatório estabelecido.</p>

      <h3>Consequências possíveis</h3>
      <p>Se aprovado no plenário do Senado, o CLARITY Act pode transformar os EUA no mercado mais atrativo do mundo para empresas cripto, revertendo a fuga de talentos e capital para jurisdições como Singapura, Dubai e Suíça. No entanto, a implementação prática da lei dependerá da CFTC, que atualmente opera com apenas um comissário. O House Agriculture Committee já alertou que a agência, em seu estado atual, "não pode lidar com a carga de trabalho regulatório à frente".</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O CLARITY Act é um passo na direção certa, mas o caminho até a implementação efetiva ainda é longo. A divisão partidária no Senado e a subcapacidade da CFTC são obstáculos reais. Dito isso, o simples fato de o Congresso americano estar debatendo seriamente um framework regulatório — em vez de apenas processar empresas cripto — já é um sinal de maturidade do debate político. Para o investidor de longo prazo, a direção é clara: os EUA estão caminhando para a regulação, não para a proibição. E regulação boa atrai capital de verdade.</p>
    `,
    comments: []
  },
  {
    id: 27,
    title: 'ETFs de Bitcoin quebram sequência de 5 dias de influxos bilionários com saídas de US$ 277,5 mi',
    excerpt: 'Rompimento de suporte do BTC abaixo de US$ 80 mil interrompe fluxo positivo recorde em ETFs à vista, enquanto rendimentos de títulos do Tesouro disparam.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=ETFs+Outflows',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>Os ETFs de Bitcoin à vista nos Estados Unidos registraram saídas líquidas de US$ 277,5 milhões, encerrando uma sequência de cinco dias consecutivos de influxos que havia acumulado US$ 1,7 bilhão. A interrupção coincide com a queda do Bitcoin abaixo dos US$ 80 mil e com a disparada dos rendimentos dos títulos do Tesouro americano, que pressionaram ativos de risco em bloco.</p>

      <h3>O que aconteceu</h3>
      <p>O fluxo negativo de US$ 277,5 milhões representa a maior saída diária dos ETFs de Bitcoin em três semanas. O movimento foi distribuído entre os principais fundos, com o IBIT da BlackRock — maior ETF de Bitcoin do mundo — liderando as saídas.</p>

      <p>A reversão de fluxo coincidiu com a queda do Bitcoin para abaixo de US$ 78 mil e com a alta dos yields dos Treasuries de 10 anos, que tornaram ativos de renda fixa mais atrativos para investidores institucionais. O movimento também foi amplificado por stop-losses e liquidações em cascata no mercado futuro.</p>

      <blockquote>Cinco dias de inflows seguidos de um dia de outflow não são uma tendência. São ruído. O saldo acumulado dos ETFs segue massivamente positivo no trimestre. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>Os ETFs de Bitcoin à vista ultrapassaram recentemente a marca de US$ 50 bilhões em ativos sob gestão, consolidando-se como um dos lançamentos de ETF mais bem-sucedidos da história. O fluxo institucional para esses produtos tem sido um dos principais motores do preço do Bitcoin em 2026, proporcionando demanda estrutural e previsível.</p>

      <p>A sequência de influxos quebrada havia começado após a divulgação de resultados corporativos positivos de empresas cripto e do avanço do CLARITY Act. A pausa nos influxos reflete mais o ambiente macro do que uma mudança de convicção sobre o ativo.</p>

      <h3>Impacto no mercado</h3>
      <p>As saídas de ETFs contribuíram para a pressão vendedora que levou o Bitcoin a testar suportes em US$ 77 mil. No entanto, o volume total de saídas é modesto comparado aos mais de US$ 50 bilhões em AUM dos ETFs — representa menos de 0,6% do total sob gestão. O mercado futuro, por outro lado, viu liquidações mais expressivas, com posições alavancadas sendo desmontadas.</p>

      <h3>Consequências possíveis</h3>
      <p>A interrupção dos influxos deve ser monitorada nos próximos dias. Se as saídas continuarem, pode sinalizar uma mudança de sentimento institucional de curto prazo. Se forem revertidas rapidamente — como ocorreu em episódios similares em março e abril — o episódio será apenas uma pausa na tendência de acumulação. Dados históricos mostram que ETFs de Bitcoin tendem a ver fluxos positivos na maioria dos dias de negociação.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Um dia de saídas não reverte meses de influxos. O investidor deve olhar para a tendência, não para o ruído diário. Os ETFs de Bitcoin já demonstraram resiliência em diversos episódios de estresse de mercado e continuam sendo o canal mais eficiente de exposição institucional ao Bitcoin. A pausa nos influxos é um lembrete de que o Bitcoin não é imune ao ambiente macro, mas a direção estrutural permanece intacta.</p>
    `,
    comments: []
  },
  {
    id: 28,
    title: 'Lombard Finance abandona LayerZero e migra US$ 1 bilhão em ativos Bitcoin para Chainlink',
    excerpt: 'Protocolo de staking de Bitcoin troca provedor de oráculo em busca de maior segurança e descentralização, fortalecendo posição da Chainlink no ecossistema BTC.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Lombard+Chainlink',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Lombard Finance, protocolo de staking líquido de Bitcoin que administra mais de US$ 1 bilhão em ativos, anunciou a migração de sua infraestrutura de oráculo da LayerZero para a Chainlink. A decisão representa um dos maiores movimentos de valor total garantido (TVS) entre provedores de oráculo no ecossistema Bitcoin e reforça a posição da Chainlink como padrão de mercado para dados on-chain.</p>

      <h3>O que aconteceu</h3>
      <p>A Lombard Finance comunicou que o switch para a Chainlink foi motivado por critérios de segurança, descentralização e adoção de mercado. A Chainlink opera a maior rede descentralizada de oráculos do setor cripto, garantindo dezenas de bilhões de dólares em valor em diversos protocolos DeFi.</p>

      <p>A migração de US$ 1 bilhão em ativos Bitcoin (LBTC e derivativos relacionados) é um dos maiores movimentos de troca de provedor de oráculo já registrados, colocando pressão sobre a LayerZero e outros concorrentes no segmento de infraestrutura de dados para blockchains.</p>

      <blockquote>Oráculos são a infraestrutura invisível que sustenta DeFi. Quando um protocolo com US$ 1 bilhão troca de provedor, todo o mercado presta atenção. Chainlink está se tornando o padrão ouro para ativos Bitcoin em DeFi. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O ecossistema DeFi no Bitcoin tem crescido rapidamente, com protocolos de staking líquido, lending e derivatives competindo para atrair o enorme capital dormente dos detentores de BTC. A Lombard Finance é um dos principais players desse segmento, permitindo que detentores de Bitcoin façam staking e recebam tokens líquidos (LBTC) que podem ser usados em outras aplicações DeFi.</p>

      <p>Oráculos descentralizados como a Chainlink são essenciais para esses protocolos, fornecendo dados de preço, taxas de juros e outras informações externas necessárias para a operação segura de contratos inteligentes. A confiabilidade do oráculo é crítica — falhas ou manipulações podem resultar em perdas catastróficas.</p>

      <h3>Impacto no mercado</h3>
      <p>A migração fortalece a Chainlink (LINK) como infraestrutura crítica do ecossistema cripto e coloca pressão sobre concorrentes como LayerZero, Pyth Network e API3. Para detentores de LINK, a adição de US$ 1 bilhão em TVS é um voto de confiança significativo na utilidade de longo prazo do token.</p>

      <h3>Consequências possíveis</h3>
      <p>A decisão da Lombard pode desencadear um efeito cascata, com outros protocolos de Bitcoin DeFi reavaliando seus provedores de oráculo. Se a Chainlink consolidar sua posição como o oráculo padrão para ativos Bitcoin em DeFi, a rede pode capturar uma parcela desproporcional do crescimento desse segmento. Para a LayerZero, a perda de um cliente de US$ 1 bilhão é um revés significativo que pode gerar questionamentos sobre sua competitividade no segmento.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A migração da Lombard para a Chainlink é mais um sinal da maturação do ecossistema DeFi no Bitcoin. Com protocolos administrando bilhões em ativos, a escolha de infraestrutura deixa de ser uma decisão técnica e se torna uma decisão de gestão de risco. A Chainlink está vencendo essa batalha porque oferece o que o mercado mais valoriza nesse estágio: segurança comprovada, rede descentralizada de operadores de nós e um histórico de confiabilidade que nenhum concorrente iguala. Para o Bitcoin, é mais uma evidência de que seu ecossistema financeiro está se profissionalizando rapidamente.</p>
    `,
    comments: []
  },
  {
    id: 29,
    title: 'Presidente Trump revela negociações em ações de Coinbase, Robinhood e mineração de Bitcoin',
    excerpt: 'Declarações de ética revelam que o presidente americano negociou ações de empresas cripto, adicionando nova dimensão às complexas relações da família Trump com o setor.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Trump+Crypto',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>Declarações financeiras de ética revelaram que o presidente dos Estados Unidos, Donald Trump, negociou ações de empresas ligadas ao setor de criptomoedas, incluindo a exchange Coinbase, a plataforma de trading Robinhood e empresas de mineração de Bitcoin. As transações adicionam mais complexidade às já intrincadas relações entre a família Trump e o mercado cripto.</p>

      <h3>O que aconteceu</h3>
      <p>Os registros de ética presidenciais mostram que Trump comprou e vendeu ações de várias empresas do setor cripto durante seu mandato. As negociações incluem posições na Coinbase (a maior exchange de criptomoedas dos EUA), Robinhood (plataforma que oferece trading de cripto para milhões de usuários) e em empresas de mineração de Bitcoin.</p>

      <p>As transações levantam questões sobre potenciais conflitos de interesse, dado que o governo Trump tem influência direta sobre a regulação do setor cripto por meio de agências como a SEC, CFTC e Departamento de Justiça. A família Trump já estava envolvida com o setor por meio de iniciativas como o World Liberty Financial e coleções de NFTs.</p>

      <blockquote>Quando o presidente negocia ações de empresas que seu próprio governo regula, as perguntas sobre conflitos de interesse são inevitáveis e legítimas. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>A relação de Trump com o setor cripto evoluiu ao longo dos anos. De crítico declarado durante seu primeiro mandato, ele se tornou um entusiasta durante a campanha eleitoral de 2024, prometendo tornar os EUA a "capital cripto do planeta". Desde que assumiu o cargo, sua administração adotou uma postura geralmente favorável ao setor.</p>

      <p>Filhos de Trump também estão envolvidos com criptoativos. Donald Trump Jr. e Eric Trump estão associados à World Liberty Financial, um protocolo DeFi. A sobreposição entre negócios familiares e política regulatória cria um terreno complexo para a governança do setor.</p>

      <h3>Impacto no mercado</h3>
      <p>A revelação das negociações de Trump em ações cripto gerou reações mistas no mercado. Por um lado, pode ser interpretada como um sinal de confiança no setor por parte do presidente. Por outro, levanta preocupações sobre a imparcialidade da política regulatória e sobre o potencial de insider trading — o presidente tem acesso a informações que podem mover o mercado antes que o público as conheça.</p>

      <h3>Consequências possíveis</h3>
      <p>As revelações podem alimentar pedidos por maior transparência e restrições a negociações de ativos financeiros pelo presidente e sua família. Também podem dar munição a críticos que argumentam que a política cripto do governo Trump é motivada por interesses financeiros pessoais. No entanto, é improvável que a notícia tenha impacto duradouro no mercado cripto, que está mais focado em fundamentos macroeconômicos e regulatórios.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Independentemente da opinião sobre Trump, a mistura de poder presidencial com trading de ações de setores regulados pelo próprio governo é no mínimo desconfortável. Para o setor cripto, que já luta contra a percepção de ser um "Velho Oeste" financeiro, a aparência de conflito de interesses no mais alto nível do governo não ajuda. O mercado deve separar o sinal do ruído: as negociações pessoais do presidente não alteram os fundamentos do Bitcoin, mas adicionam uma camada de incerteza política que investidores institucionais monitoram de perto.</p>
    `,
    comments: []
  },
  {
    id: 30,
    title: 'Bitcoin Depot emite alerta de falência com queda de receita em ATMs e escrutínio regulatório',
    excerpt: 'Maior operadora de ATMs de Bitcoin dos EUA alerta que "pode não sobreviver" em meio a processos judiciais, queda de receita e pressão regulatória crescente sobre o setor.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Bitcoin+Depot',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Bitcoin Depot, maior operadora de ATMs de Bitcoin dos Estados Unidos com milhares de terminais espalhados pelo país, emitiu um alerta de going concern em seu relatório financeiro trimestral, afirmando que a empresa "pode não sobreviver" em meio a uma combinação de queda de receita, escrutínio regulatório e processos judiciais. As ações da empresa, listadas na Nasdaq, caíram mais de 30% após a divulgação.</p>

      <h3>O que aconteceu</h3>
      <p>O relatório trimestral da Bitcoin Depot revelou uma deterioração significativa em sua posição financeira. A receita caiu em comparação com o trimestre anterior, pressionada pela redução no uso de ATMs de criptomoedas, que enfrentam concorrência de exchanges online, aplicativos de pagamento como PayPal e Venmo, e ETFs de Bitcoin que oferecem exposição facilitada sem a necessidade de comprar BTC fisicamente em um terminal.</p>

      <p>A empresa também enfrenta múltiplos processos judiciais e um ambiente regulatório cada vez mais rigoroso para operadores de ATMs de cripto, que são frequentemente apontados como vetores de lavagem de dinheiro e fraudes contra consumidores vulneráveis.</p>

      <blockquote>O modelo de negócio de ATMs de cripto está sendo comprimido por todos os lados: regulação, concorrência digital e a institucionalização do acesso ao Bitcoin via ETFs. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>A Bitcoin Depot expandiu agressivamente sua rede de ATMs nos últimos anos, chegando a milhares de terminais em locais como lojas de conveniência e postos de gasolina nos EUA. As máquinas permitem que usuários comprem Bitcoin e outras criptomoedas com dinheiro, cobrando taxas que podem chegar a 20% por transação.</p>

      <p>No entanto, o modelo de negócio enfrenta desafios estruturais. A disseminação de exchanges com taxas muito mais baixas, o surgimento dos ETFs de Bitcoin (que permitem comprar exposição ao BTC em qualquer conta de corretagem tradicional) e o escrutínio regulatório sobre a conformidade antilavagem de dinheiro (AML) estão corroendo as vantagens competitivas dos ATMs.</p>

      <h3>Impacto no mercado</h3>
      <p>O alerta da Bitcoin Depot é um sinal de consolidação no setor de infraestrutura cripto de varejo. Empresas que dependem de spreads elevados e atendem usuários menos sofisticados estão sendo pressionadas pela profissionalização do mercado. Outras operadoras de ATMs de cripto, como CoinFlip e Athena Bitcoin, podem enfrentar desafios similares.</p>

      <h3>Consequências possíveis</h3>
      <p>Se a Bitcoin Depot falir ou for forçada a reduzir drasticamente suas operações, o acesso a criptomoedas para a população não-bancarizada nos EUA — um dos argumentos de inclusão financeira do setor — pode ser prejudicado. No entanto, a tendência de longo prazo aponta para canais de distribuição mais eficientes e regulados, como ETFs e exchanges com licenças bancárias.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O caso da Bitcoin Depot é um lembrete de que nem todas as empresas cripto se beneficiam igualmente da maturação do mercado. Os ATMs de Bitcoin foram uma inovação importante nos primeiros anos, mas seu modelo de negócio — taxas altas, conformidade regulatória complexa e base de clientes sensível a preço — é vulnerável à concorrência de canais mais eficientes. ETFs, exchanges reguladas e integrações com aplicativos de pagamento estão tornando os ATMs de cripto cada vez mais obsoletos. Para o setor como um todo, a profissionalização é positiva, mas o caminho inevitavelmente deixa vítimas entre os pioneiros que não conseguiram evoluir.</p>
    `,
    comments: []
  },
  {
    id: 31,
    title: 'Gemini registra alta de receita e recebe aporte de US$ 100 milhões em Bitcoin dos irmãos Winklevoss',
    excerpt: 'Exchange dos gêmeos Winklevoss vê ações subirem com crescimento de receita e novo investimento em BTC do braço de venture capital da dupla.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Gemini+BTC',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Gemini, exchange de criptomoedas fundada pelos irmãos Cameron e Tyler Winklevoss, reportou crescimento de receita em seu último trimestre e anunciou um investimento de US$ 100 milhões em Bitcoin proveniente da Winklevoss Capital, o braço de investimentos pessoais dos fundadores. As ações da empresa subiram com os resultados positivos.</p>

      <h3>O que aconteceu</h3>
      <p>A Gemini divulgou resultados financeiros mostrando aumento de receita impulsionado pelo crescimento no volume de negociação e pelos serviços de custódia institucional. O desempenho contrasta com o de concorrentes que enfrentam desafios regulatórios e de mercado.</p>

      <p>Simultaneamente, a Winklevoss Capital realizou um aporte de US$ 100 milhões em Bitcoin na plataforma, sinalizando confiança tanto na exchange quanto no ativo. O investimento reforça o compromisso de longo prazo dos fundadores com o ecossistema cripto e com a própria Gemini.</p>

      <blockquote>Os Winklevoss estão colocando dinheiro onde sempre estiveram suas convicções. US$ 100 milhões em Bitcoin na própria exchange é o voto de confiança definitivo. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>A Gemini é uma das exchanges mais antigas do setor, fundada em 2014. A empresa sobreviveu a múltiplos ciclos de mercado e construiu uma reputação de conformidade regulatória e segurança, embora também tenha enfrentado controvérsias, incluindo um acordo com a SEC e problemas com seu programa Earn.</p>

      <p>O investimento da Winklevoss Capital chega em um momento em que a competição entre exchanges americanas está mais intensa do que nunca. Coinbase, Kraken e novos entrantes disputam clientes institucionais e de varejo em um mercado cada vez mais regulado.</p>

      <h3>Impacto no mercado</h3>
      <p>O bom momento da Gemini sugere que exchanges reguladas e focadas em conformidade podem prosperar mesmo em um ambiente competitivo. O investimento de US$ 100 milhões em Bitcoin adiciona demanda ao mercado e reforça a narrativa de acumulação por grandes players.</p>

      <h3>Consequências possíveis</h3>
      <p>A Gemini pode usar o capital adicional para expandir sua oferta de produtos institucionais, potencialmente incluindo staking, derivatives e serviços de tokenização. O investimento também pode sinalizar planos de expansão internacional, aproveitando a clareza regulatória em jurisdições como União Europeia (MiCA) e Singapura.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A Gemini é uma sobrevivente. Enquanto exchanges como FTX colapsaram e outras como a Binance enfrentam escrutínio global, a Gemini continua operando com um modelo focado em compliance. O investimento de US$ 100 milhões em Bitcoin da Winklevoss Capital é ao mesmo tempo um voto de confiança na exchange e uma sinalização de que os fundadores acreditam que o preço atual do BTC ainda oferece valor. Para investidores, ver founders colocando capital próprio dessa magnitude no mercado é um dos sinais mais autênticos de convicção que existe.</p>
    `,
    comments: []
  },
  {
    id: 32,
    title: 'THORChain sofre exploit de US$ 10 milhões e reacende debate sobre segurança em protocolos cross-chain',
    excerpt: 'Protocolo descentralizado de trocas entre blockchains é vítima de ataque que drena US$ 10 milhões, elevando preocupações sobre vulnerabilidades em bridges e swaps cross-chain.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=THORChain+Exploit',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O THORChain, um dos principais protocolos descentralizados para troca de ativos entre diferentes blockchains, sofreu um exploit que resultou na drenagem de aproximadamente US$ 10 milhões em criptoativos. O ataque é o mais recente de uma série de incidentes de segurança em protocolos cross-chain e reacendeu o debate sobre os riscos inerentes à interconexão entre blockchains.</p>

      <h3>O que aconteceu</h3>
      <p>O exploit foi identificado por pesquisadores de segurança que detectaram movimentações anômalas nos pools de liquidez do THORChain. O atacante conseguiu manipular a lógica de precificação das swaps cross-chain, extraindo valor dos pools antes que a equipe pudesse pausar as operações.</p>

      <p>A equipe do THORChain confirmou o incidente e está trabalhando em um plano de compensação para os provedores de liquidez afetados. O valor drenado é significativo, mas abaixo de exploits anteriores no ecossistema DeFi, alguns dos quais ultrapassaram US$ 100 milhões.</p>

      <blockquote>Cada exploit cross-chain é uma aula de engenharia de segurança que o mercado paga caro para aprender. O problema não é exclusivo do THORChain — é uma vulnerabilidade de classe em protocolos de interoperabilidade. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>THORChain é um dos pilares da infraestrutura DeFi cross-chain, permitindo que usuários troquem Bitcoin, Ethereum, Litecoin e outros ativos nativos de diferentes blockchains sem depender de bridges ou intermediários centralizados. O protocolo opera com pools de liquidez onde provedores depositam ativos em troca de rendimentos.</p>

      <p>Protocolos cross-chain são notoriamente difíceis de proteger devido à complexidade das interações entre diferentes blockchains, cada uma com suas próprias regras de consenso, tempos de bloco e modelos de segurança. Exploits em bridges e protocolos cross-chain já resultaram em bilhões de dólares em perdas ao longo da história do setor.</p>

      <h3>Impacto no mercado</h3>
      <p>O token RUNE, nativo do THORChain, caiu cerca de 8% após a divulgação do exploit. O incidente também gerou volatilidade em outros tokens de protocolos cross-chain, com investidores reavaliando o risco de segurança como fator de precificação. Provedores de liquidez podem se tornar mais cautelosos, reduzindo temporariamente a profundidade dos pools.</p>

      <h3>Consequências possíveis</h3>
      <p>O exploit do THORChain deve intensificar os investimentos em auditorias de segurança e sistemas de monitoramento em tempo real para protocolos cross-chain. Também pode acelerar a adoção de soluções de segurança complementares, como seguros on-chain e circuit breakers automatizados que pausam operações quando anomalias são detectadas. A recorrência de exploits cross-chain levanta questões sobre se a arquitetura atual de interoperabilidade é sustentável no longo prazo.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Exploits como o do THORChain são dolorosos, mas são parte do processo de maturação do DeFi. Cada ataque bem-sucedido expõe uma vulnerabilidade que pode ser corrigida para todo o ecossistema. O problema mais profundo, no entanto, é arquitetônico: a complexidade de conectar blockchains heterogêneas cria uma superfície de ataque que cresce exponencialmente com cada nova integração. Até que o setor desenvolva padrões de segurança tão robustos quanto os do sistema financeiro tradicional, exploits continuarão sendo o custo da inovação. Para investidores, a lição é clara: diversificação entre protocolos e o uso de carteiras com limites de exposição não é opcional — é essencial.</p>
    `,
    comments: []
  },
  {
    id: 33,
    title: 'Força-tarefa T3 congela US$ 450 milhões em ativos digitais ilícitos em operação global',
    excerpt: 'Unidade de crimes financeiros apoia agências policiais no congelamento recorde de criptoativos ligados a lavagem de dinheiro, fraudes e crimes cibernéticos internacionais.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=T3+Crypto+Crime',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A T3 Financial Crime Unit, força-tarefa especializada no combate a crimes financeiros com criptoativos, anunciou ter auxiliado agências de aplicação da lei em escala global a congelar aproximadamente US$ 450 milhões em ativos digitais ilícitos. O valor representa uma das maiores apreensões da história do combate ao crime financeiro no ecossistema cripto.</p>

      <h3>O que aconteceu</h3>
      <p>A operação internacional coordenada pela T3 envolveu agências de múltiplos países, incluindo Estados Unidos, Reino Unido, Singapura e membros da Europol. Os ativos congelados estavam ligados a esquemas de lavagem de dinheiro, fraudes de investimento, ransomware e crimes cibernéticos transnacionais.</p>

      <p>A T3 utilizou análises on-chain avançadas para rastrear o fluxo de fundos através de múltiplas blockchains, identificando padrões de transação associados a atividades criminosas. A colaboração entre empresas de análise blockchain, exchanges e autoridades policiais foi essencial para o sucesso da operação.</p>

      <blockquote>US$ 450 milhões congelados demonstram que a transparência do blockchain é uma faca de dois gumes: tão útil para criminosos quanto para quem os persegue. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>O uso de criptomoedas para atividades ilícitas é uma das principais preocupações de reguladores e legisladores globalmente. Embora estudos mostrem que a parcela de transações cripto associadas a crimes seja pequena em relação ao volume total (menos de 1%), o valor absoluto é significativo.</p>

      <p>Ferramentas de análise on-chain, como as desenvolvidas pela Chainalysis, Elliptic e TRM Labs, permitem que autoridades rastreiem fluxos de fundos com precisão cada vez maior, desfazendo o mito de que criptomoedas são intrinsecamente anônimas. O Bitcoin, em particular, tem um livro-razão público que registra permanentemente todas as transações.</p>

      <h3>Impacto no mercado</h3>
      <p>Operações como a da T3 melhoram a percepção pública do setor cripto ao demonstrar que a aplicação da lei tem capacidade técnica para combater crimes com ativos digitais. Isso pode ajudar a reduzir a resistência regulatória e a estigmatização do setor como um todo.</p>

      <h3>Consequências possíveis</h3>
      <p>O sucesso da operação deve incentivar mais investimentos em capacidades de investigação on-chain por parte de governos. Também pode acelerar a implementação de requisitos mais rigorosos de KYC/AML em exchanges e protocolos DeFi. Criminosos, por sua vez, podem migrar para técnicas mais sofisticadas de ocultação, como mixers, privacy coins e camadas de anonimização — o que, por sua vez, aumentará a pressão regulatória sobre essas ferramentas.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A narrativa de que "Bitcoin é para criminosos" sempre foi frágil — o blockchain é literalmente um livro-razão público e permanente. Operações como a da T3 mostram que a transparência inerente das blockchains públicas é, na verdade, uma vantagem para a aplicação da lei. Quanto mais o ecossistema amadurece, mais ferramentas de análise e cooperação internacional se desenvolvem. Para o investidor legítimo, cada dólar ilícito congelado é um passo em direção a um mercado mais seguro e respeitável. Criminalidade não é feature do Bitcoin — é bug do dinheiro, e o Bitcoin torna mais fácil rastreá-la, não mais difícil.</p>
    `,
    comments: []
  },
  {
    id: 34,
    title: 'Hyperliquid rejeita preocupações com integridade de mercado em meio à disparada de futuros de petróleo',
    excerpt: 'DEX descentralizada de derivativos vê volume explodir em futuros de petróleo e descarta críticas sobre seu status não regulado, enquanto mercado questiona riscos sistêmicos.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Hyperliquid+Oil',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Hyperliquid, exchange descentralizada (DEX) de derivativos que opera sem custódia e sem KYC, rejeitou preocupações sobre a integridade de seu mercado após uma disparada no volume de futuros de petróleo e commodities negociados na plataforma. O aumento do volume em contratos de petróleo — um mercado tradicionalmente regulado — levantou questões sobre os riscos de mercados não regulados para derivativos de ativos do mundo real.</p>

      <h3>O que aconteceu</h3>
      <p>A Hyperliquid viu uma explosão no volume de negociação de futuros de petróleo, um desenvolvimento incomum para uma DEX conhecida principalmente por derivativos de criptomoedas. O volume de petróleo na plataforma superou US$ 500 milhões em um único dia, atraindo atenção de reguladores e analistas de mercado.</p>

      <p>Apesar das preocupações, o braço de política da Hyperliquid emitiu comunicado rejeitando críticas e argumentando que a plataforma opera de forma transparente e eficiente, com liquidação on-chain e sem os riscos de contraparte associados a corretoras centralizadas.</p>

      <blockquote>A migração de derivativos de commodities para DEXs é um dos desenvolvimentos mais disruptivos — e potencialmente perigosos — do setor cripto. A eficiência é real; a falta de supervisão também. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>DEXs de derivativos como Hyperliquid, dYdX e GMX têm crescido rapidamente, oferecendo negociação de contratos perpétuos com alavancagem e liquidação on-chain. A Hyperliquid se destaca por sua performance — a plataforma roda em uma blockchain própria otimizada para trading de alta velocidade, competindo em latência com exchanges centralizadas.</p>

      <p>A expansão para derivativos de ativos do mundo real (commodities, índices, ações tokenizadas) representa uma nova fronteira. Diferentemente de criptoativos nativos, esses produtos derivam seu valor de ativos do mundo físico, levando a questões sobre manipulação de preços, liquidação e jurisdição regulatória.</p>

      <h3>Impacto no mercado</h3>
      <p>O crescimento de derivativos de commodities em DEXs pode atrair traders que buscam exposição a mercados tradicionais sem as restrições de corretoras reguladas. No curto prazo, isso aumenta o volume e a receita das plataformas. No longo prazo, pode gerar conflitos regulatórios significativos, especialmente se houver incidentes de manipulação de mercado ou perdas catastróficas de usuários.</p>

      <h3>Consequências possíveis</h3>
      <p>Reguladores como a CFTC nos EUA e a ESMA na Europa podem intensificar o escrutínio sobre DEXs que oferecem derivativos de ativos do mundo real. Diferentemente de tokens nativos de blockchain, commodities e índices estão claramente sob jurisdição regulatória existente. A Hyperliquid e plataformas similares podem enfrentar exigências de registro, limites de alavancagem e requisitos de divulgação.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A Hyperliquid está testando os limites do que é possível — e do que é permitido — no mercado de derivativos descentralizados. Oferecer futuros de petróleo sem regulação é eficiente, mas também é um convite à atenção regulatória. O mercado cripto já aprendeu da pior forma que ignorar a regulação não a faz desaparecer. A questão não é se os reguladores vão agir, mas quando e com qual intensidade. Para traders, o conselho é simples: a eficiência da DEX é real, mas a proteção regulatória que existe em mercados tradicionais não. Entenda essa diferença antes de apostar petróleo em ambiente descentralizado.</p>
    `,
    comments: []
  },
  {
    id: 35,
    title: 'Dune Analytics demite 25% da equipe e pivota para inteligência artificial e setor institucional',
    excerpt: 'Plataforma de dados blockchain corta um quarto dos funcionários para se reestruturar com foco em ferramentas de IA e clientes institucionais, sinalizando nova fase do mercado de analytics cripto.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Dune+Analytics',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Dune Analytics, uma das plataformas de dados on-chain mais populares do ecossistema cripto, anunciou a demissão de 25% de sua força de trabalho como parte de uma reestruturação estratégica que redireciona a empresa para o desenvolvimento de ferramentas baseadas em inteligência artificial e para o atendimento de clientes institucionais. O corte reflete uma tendência mais ampla de consolidação e reorientação no setor de infraestrutura de dados blockchain.</p>

      <h3>O que aconteceu</h3>
      <p>A Dune confirmou que aproximadamente um quarto de seus funcionários foram desligados. A empresa justificou os cortes como parte de um "pivot estratégico" para focar em duas áreas de crescimento: ferramentas analíticas baseadas em IA generativa, capazes de responder perguntas complexas sobre dados on-chain em linguagem natural, e soluções enterprise para clientes institucionais como fundos de investimento, bancos e reguladores.</p>

      <p>A reestruturação ocorre apesar de a Dune continuar sendo uma das plataformas de análise de dados blockchain mais usadas do mundo, com milhares de dashboards criados pela comunidade e consultas processando bilhões de eventos on-chain.</p>

      <blockquote>A Dune está apostando que o futuro de analytics on-chain não é mais pessoas escrevendo SQL — é IA interpretando blockchain em tempo real. É uma aposta ousada, mas faz sentido. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>A Dune Analytics se tornou uma ferramenta essencial para pesquisadores, investidores e jornalistas no setor cripto. Sua plataforma permite que usuários consultem dados de dezenas de blockchains usando SQL, criando visualizações e dashboards públicos que se tornaram referência para análise de métricas como volume de exchanges descentralizadas, atividade de usuários e fluxos de capital.</p>

      <p>No entanto, a ascensão de ferramentas de IA generativa representa tanto uma ameaça quanto uma oportunidade. Plataformas que permitem que usuários façam perguntas em linguagem natural e recebam análises automatizadas podem reduzir a dependência de analistas especializados — e a Dune quer liderar essa transição, não ser vítima dela.</p>

      <h3>Impacto no mercado</h3>
      <p>Os cortes na Dune seguem uma série de demissões em empresas cripto ao longo de 2025-2026, à medida que o setor busca eficiência operacional e sustentabilidade financeira. A diferença aqui é que a Dune está demitindo não por dificuldades financeiras, mas para liberar recursos para investir em IA — um sinal de que a tecnologia está redefinindo prioridades estratégicas mesmo em empresas saudáveis.</p>

      <h3>Consequências possíveis</h3>
      <p>Se a Dune conseguir integrar IA generativa com sucesso à sua plataforma, o acesso a análises on-chain complexas pode ser democratizado, permitindo que investidores de varejo e profissionais sem conhecimento técnico obtenham insights que antes exigiam domínio de SQL e conhecimento profundo de estruturas de dados blockchain. Isso poderia acelerar a sofisticação do mercado como um todo.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O pivot da Dune para IA é um microcosmo do que está acontecendo no setor de tecnologia como um todo. Ferramentas que tornam dados complexos acessíveis em linguagem natural não são mais ficção científica — são realidade competitiva. Para o setor cripto, a implicação é profunda: à medida que análises on-chain se tornam tão fáceis de obter quanto uma pesquisa no Google, a vantagem informacional se desloca de quem tem habilidade técnica para quem faz as perguntas certas. A Dune está apostando que a interface do futuro é conversacional, e essa é uma aposta que provavelmente está certa.</p>
    `,
    comments: []
  },
  {
    id: 36,
    title: 'Esquema bilionário: exchange falsa DSJ atrai US$ 150 milhões e colapsa em clássico golpe de pirâmide',
    excerpt: 'Plataforma que prometia retornos garantidos usando redes de referência desmorona, deixando milhares de investidores lesados e reacendendo alertas sobre fraudes no setor cripto.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Fake+Exchange',
    author: 'Redação BTC Ancap News',
    date: '17 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O colapso da DSJ Exchange, uma plataforma que se apresentava como exchange de criptomoedas mas que na prática operava um esquema de pirâmide, resultou em perdas estimadas em US$ 150 milhões para milhares de investidores em diversos países. O caso ilustra como redes de referência e promessas de retornos garantidos continuam sendo os principais vetores de fraudes no mercado cripto.</p>

      <h3>O que aconteceu</h3>
      <p>A DSJ Exchange atraiu investidores prometendo retornos diários fixos de até 1,5% sobre depósitos em criptomoedas — uma rentabilidade que, se sustentada, representaria mais de 20.000% ao ano. A plataforma usava um sistema de marketing multinível: investidores eram incentivados a trazer novos participantes em troca de comissões, criando uma estrutura de pirâmide clássica.</p>

      <p>Como em todo esquema Ponzi, os primeiros investidores recebiam pagamentos pontuais — financiados pelos depósitos dos novos entrantes — gerando confiança e atraindo mais vítimas. Quando o fluxo de novos depósitos desacelerou, a plataforma suspendeu saques e seus operadores desapareceram.</p>

      <blockquote>US$ 150 milhões em perdas confirmam que, apesar de toda a evolução do setor cripto, o golpe mais básico ainda é o mais eficaz. Retornos garantidos são sempre, sempre, sempre fraude. — Análise BTC Ancap News</blockquote>

      <h3>Contexto</h3>
      <p>Golpes de pirâmide são tão antigos quanto o dinheiro, mas as criptomoedas adicionaram novas camadas de sofisticação e alcance global. A natureza pseudônima das transações, a facilidade de criar uma exchange falsa com aparência profissional e o alcance das redes sociais permitem que golpistas atinjam vítimas em dezenas de países simultaneamente.</p>

      <p>O caso da DSJ se soma a uma lista que inclui Bitconnect, OneCoin e dezenas de esquemas menores. Apesar dos alertas de reguladores e da mídia especializada, esquemas de "renda fixa em cripto" continuam encontrando vítimas — especialmente em países com populações não-bancarizadas e baixa educação financeira.</p>

      <h3>Impacto no mercado</h3>
      <p>Embora US$ 150 milhões seja um valor significativo para as vítimas, o impacto no mercado cripto como um todo é limitado. O valor é pequeno comparado ao tamanho total do mercado (trilhões de dólares). No entanto, casos como esse reforçam narrativas negativas sobre o setor e podem alimentar demandas por regulação mais rigorosa, potencialmente afetando também projetos legítimos.</p>

      <h3>Consequências possíveis</h3>
      <p>O colapso da DSJ deve levar a investigações em múltiplas jurisdições, embora a recuperação de fundos seja improvável — golpistas de cripto frequentemente convertem os ativos roubados para moedas fiduciárias em jurisdições com fraca cooperação internacional. O caso também deve renovar apelos por campanhas de educação financeira focadas em criptoativos e por maior cooperação entre agências de proteção ao consumidor.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O caso DSJ é frustrantemente previsível. Os ingredientes são sempre os mesmos: retornos diários garantidos, marketing multinível, plataforma com aparência profissional e a ganância humana. A tecnologia muda, mas a natureza humana não. Se há uma lição que o mercado cripto insiste em reaprender a cada ciclo, é que não existe almoço grátis — e retornos garantidos em cripto são a versão moderna do conto do vigário. Para investidores sérios, a regra de ouro permanece: se a rentabilidade prometida parece boa demais para ser verdade, é porque não é verdade. Bitcoin se acumula com paciência e convicção, não com "1,5% ao dia garantido".</p>
    `,
    comments: []
  }];


// Categories with article counts
const CATEGORIES = [
  { id: 'all', label: 'Todas', count: ARTICLES.length },
  { id: 'bitcoin', label: 'Bitcoin', count: ARTICLES.filter(a => a.category === 'bitcoin').length },
  { id: 'economia', label: 'Economia', count: ARTICLES.filter(a => a.category === 'economia').length },
  { id: 'ancap', label: 'Ancap', count: ARTICLES.filter(a => a.category === 'ancap').length },
  { id: 'cripto', label: 'Cripto', count: ARTICLES.filter(a => a.category === 'cripto').length },
];

// Trending topics
const TRENDING = [
  'BTC abaixo de US$ 79 mil com tensão no Irã',
  'Strategy de Saylor pode vender Bitcoin',
  'CLARITY Act avança no Senado dos EUA',
  'ETFs de Bitcoin quebram sequência de influxos',
  'Trump revela trades em ações cripto',
  'Lombard migra US$ 1 bi para Chainlink',
  'THORChain sofre exploit de US$ 10 mi',
  'T3 congela US$ 450 mi em ativos ilícitos',
];

// Hero banner articles indexes
const FEATURED_ARTICLES = ARTICLES.filter(a => a.featured);
const HERO_MAIN = FEATURED_ARTICLES[0];
const HERO_SIDE = FEATURED_ARTICLES.slice(1, 4);

// Articles per page (news listing)
const ARTICLES_PER_PAGE = 5;

// Live news (desativado: site usa apenas conteúdo original)

// 2. NAVEGAÇÃO SPA
let currentPage = 'home';
let currentCategory = 'all';
let currentPageNum = 1;

function navigate(page, category) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));

  // Show target
  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active-page');
    currentPage = page;
  }

  // Update nav links
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-run staggered animations on page transition
  setTimeout(initStaggeredAnimations, 100);

  // Category filter for news page
  if (page === 'news') {
    if (category) currentCategory = category;
    currentPageNum = 1;
    renderNewsPage();
  }

  // Render article if on article page with an id
  if (page === 'article') {
    // handled by openArticle
  }

  // Close mobile menu
  closeMobileMenu();
}

function openArticle(event, articleId) {
  // Allow click on parent cards
  const card = event.currentTarget;
  const id = articleId || parseInt(card.dataset.articleId);
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));

  // Show article page
  const articlePage = document.getElementById('page-article');
  articlePage.classList.add('active-page');
  currentPage = 'article';

  // Update nav
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === 'article');
  });

  renderArticle(article);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

// 3. RENDER — HOME
function renderHome() {
  // Hero main
  document.getElementById('heroFeaturedTitle').textContent = HERO_MAIN.title;
  document.getElementById('heroFeaturedExcerpt').textContent = HERO_MAIN.excerpt;
  document.getElementById('heroFeaturedCategory').textContent = HERO_MAIN.categoryLabel;
  document.getElementById('heroFeaturedMeta').textContent = `${HERO_MAIN.author} · ${HERO_MAIN.date} · ${HERO_MAIN.readTime}`;
  const heroImg = document.getElementById('heroFeaturedImg');
  heroImg.style.backgroundImage = `url(${HERO_MAIN.image})`;
  document.getElementById('heroFeatured').dataset.articleId = HERO_MAIN.id;

  // Hero side
  const heroSide = document.getElementById('heroSide');
  heroSide.innerHTML = HERO_SIDE.map(a => `
    <div class="hero__side-item" data-article-id="${a.id}" onclick="openArticle(event)">
      <img class="hero__side-img" src="${a.image}" alt="${a.title}" loading="lazy" width="90" height="70" />
      <div class="hero__side-body">
        <h4>${a.title}</h4>
        <span>${a.date} · ${a.readTime}</span>
      </div>
    </div>
  `).join('');

  // Latest grid
  const latestGrid = document.getElementById('latestGrid');
  // Show all articles except the hero-main one, take latest 6
  const latestArticles = ARTICLES.filter(a => a.id !== HERO_MAIN.id).slice(0, 6);
  latestGrid.innerHTML = latestArticles.map(a => createNewsCard(a)).join('');

  // Featured list (articles marked featured)
  const featuredList = document.getElementById('featuredList');
  featuredList.innerHTML = FEATURED_ARTICLES.slice(1).map(a => `
    <div class="featured-item" data-article-id="${a.id}" onclick="openArticle(event)">
      <img class="featured-item__img" src="${a.image}" alt="${a.title}" loading="lazy" width="280" height="200" />
      <div class="featured-item__body">
        <h4>${a.title}</h4>
        <p>${a.excerpt}</p>
        <div class="featured-item__meta">${a.categoryLabel} · ${a.date} · ${a.readTime}</div>
      </div>
    </div>
  `).join('');

  // Sidebar categories
  const sidebarCats = document.getElementById('sidebarCats');
  sidebarCats.innerHTML = CATEGORIES.filter(c => c.id !== 'all').map(c => `
    <li onclick="navigate('news', '${c.id}')">
      ${c.label} <span>${c.count}</span>
    </li>
  `).join('');

  // Sidebar trending
  const sidebarTrending = document.getElementById('sidebarTrending');
  sidebarTrending.innerHTML = TRENDING.map((t, i) => `
    <li onclick="navigate('news')"><span class="trend-num">${i + 1}</span> ${t}</li>
  `).join('');
}

function createNewsCard(article) {
  return `
    <div class="news-card" data-article-id="${article.id}" onclick="openArticle(event)">
      <img class="news-card__img" src="${article.image}" alt="${article.title}" loading="lazy" width="400" height="190" />
      <div class="news-card__body">
        <span class="news-card__cat">${article.categoryLabel}</span>
        <h3 class="news-card__title">${article.title}</h3>
        <p class="news-card__excerpt">${article.excerpt}</p>
        <div class="news-card__meta">
          <span><i class="far fa-user"></i> ${article.author}</span>
          <span><i class="far fa-calendar"></i> ${article.date}</span>
          <span><i class="far fa-clock"></i> ${article.readTime}</span>
        </div>
      </div>
    </div>
  `;
}

// 4. RENDER — NEWS
function renderNewsPage() {
  // Filters
  const filtersContainer = document.getElementById('newsFilters');
  filtersContainer.innerHTML = CATEGORIES.map(c => `
    <button class="${c.id === currentCategory ? 'active' : ''}" data-cat="${c.id}">
      ${c.label} (${c.count})
    </button>
  `).join('');

  // Filter click handlers
  filtersContainer.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.cat;
      currentPageNum = 1;
      renderNewsPage();
    });
  });

  // Get filtered articles
  let filtered = currentCategory === 'all'
    ? [...ARTICLES]
    : ARTICLES.filter(a => a.category === currentCategory);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const start = (currentPageNum - 1) * ARTICLES_PER_PAGE;
  const paged = filtered.slice(start, start + ARTICLES_PER_PAGE);

  // Grid
  const grid = document.getElementById('newsGrid');
  grid.innerHTML = paged.map(a => createNewsCard(a)).join('');

  // Pagination buttons
  const pagination = document.getElementById('newsPagination');
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }
  let pagHtml = '';

  if (currentPageNum > 1) {
    pagHtml += `<button data-page="${currentPageNum - 1}"><i class="fas fa-chevron-left"></i></button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    pagHtml += `<button class="${i === currentPageNum ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }

  if (currentPageNum < totalPages) {
    pagHtml += `<button data-page="${currentPageNum + 1}"><i class="fas fa-chevron-right"></i></button>`;
  }

  pagination.innerHTML = pagHtml;

  pagination.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPageNum = parseInt(btn.dataset.page);
      renderNewsPage();
      window.scrollTo({ top: document.querySelector('.page-banner').offsetTop - 80, behavior: 'smooth' });
    });
  });
}

// 5. RENDER — ARTIGO
function renderArticle(article) {
  const container = document.getElementById('articleContent');

  container.innerHTML = `
    <div class="article">
      <span class="article__cat">${article.categoryLabel}</span>
      <h1 class="article__title">${article.title}</h1>
      <div class="article__meta">
        <span class="author"><i class="far fa-user"></i> ${article.author}</span>
        <span><i class="far fa-calendar"></i> ${article.date}</span>
        <span><i class="far fa-clock"></i> ${article.readTime} de leitura</span>
      </div>
      <img class="article__img" src="${article.image}" alt="${article.title}" width="780" height="420" />

      <div class="article__body">
        ${article.body}
      </div>

      <div class="article__share">
        <span>Compartilhe:</span>
        <a href="#" title="Compartilhar no Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" title="Compartilhar no Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" title="Compartilhar no Telegram"><i class="fab fa-telegram"></i></a>
        <a href="#" title="Copiar link"><i class="fas fa-link"></i></a>
      </div>

      <div class="article__comments">
        <h3><i class="far fa-comment"></i> Comentários (${article.comments.length})</h3>
        <div id="commentsList">
          ${article.comments.map(c => `
            <div class="comment">
              <div class="comment__header">
                <span class="comment__author">${c.author}</span>
                <span class="comment__date">${c.date}</span>
              </div>
              <p>${c.text}</p>
            </div>
          `).join('')}
        </div>
        <div class="comment-form">
          <input type="text" id="commentName" placeholder="Seu nome" />
          <textarea id="commentText" placeholder="Deixe seu comentário..." rows="3"></textarea>
          <button class="btn btn--primary" onclick="submitComment(${article.id})">
            <i class="far fa-paper-plane"></i> Comentar
          </button>
        </div>
      </div>
    </div>
  `;
}

// 6. COMENTÁRIOS
function submitComment(articleId) {
  const nameInput = document.getElementById('commentName');
  const textInput = document.getElementById('commentText');
  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (!name || !text) {
    alert('Preencha seu nome e mensagem para comentar.');
    return;
  }

  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  article.comments.push({
    author: name,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/\./g, ''),
    text: text,
  });

  renderArticle(article);
}

// 7. BITCOIN PRICE (CoinGecko)
let btcPriceData = { usd: 0, brl: 0 };
let btcPriceHistory = [];
let btcInterval = null;
let btcSecondsSinceUpdate = 0;
let btcTimerInterval = null;
let previousBtcPrice = 0;

function fetchBtcPrice() {
  const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,BRL';
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      if (!data || !data.BTC) throw new Error('Resposta inválida');
      previousBtcPrice = btcPriceData.usd || data.BTC.USD;
      btcPriceData = { usd: data.BTC.USD, brl: data.BTC.BRL };
      btcPriceHistory.push(btcPriceData.usd);
      if (btcPriceHistory.length > 50) btcPriceHistory.shift();
      btcSecondsSinceUpdate = 0;
      updateBtcDisplay();
      drawBtcChart();
      updateSimulatorPrices();
    })
    .catch(err => {
      // fallback silencioso para fallback price
      if (btcPriceHistory.length === 0) {
        const fb = 75000 + Math.random() * 10000;
        btcPriceData = { usd: fb, brl: fb * 5.1 };
        btcPriceHistory.push(fb);
        updateBtcDisplay();
        drawBtcChart();
        updateSimulatorPrices();
      }
    });
}

function initBtcWidget() {
  document.getElementById('btcPrice').textContent = '$ ---';
  document.getElementById('btcPriceBrl').textContent = 'R$ ---';
  fetchBtcPrice();
  btcInterval = setInterval(fetchBtcPrice, 10000);
  btcTimerInterval = setInterval(() => {
    btcSecondsSinceUpdate++;
    const el = document.getElementById('btcUpdateTime');
    if (el) el.textContent = btcSecondsSinceUpdate;
  }, 1000);
}

function animatePriceChange(element, newValue) {
  const oldValue = parseFloat(element.dataset.prevValue) || 0;
  if (oldValue === newValue) return;
  const isUp = newValue > oldValue;
  element.style.transition = 'color 0.3s ease';
  element.style.color = isUp ? 'var(--color-green)' : 'var(--color-red)';
  setTimeout(() => { element.style.color = ''; }, 600);
  element.dataset.prevValue = newValue;
}

function updateBtcDisplay() {
  const priceUSD = btcPriceData.usd;
  const priceBRL = btcPriceData.brl;
  if (!priceUSD) return;

  const priceEl = document.getElementById('btcPrice');
  const brlEl = document.getElementById('btcPriceBrl');

  animatePriceChange(priceEl, priceUSD);
  animatePriceChange(brlEl, priceBRL);

  priceEl.textContent =
    '$' + priceUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  brlEl.textContent =
    'R$ ' + priceBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (previousBtcPrice && previousBtcPrice !== priceUSD) {
    const change = ((priceUSD - previousBtcPrice) / previousBtcPrice) * 100;
    const changeFormatted = (change >= 0 ? '+' : '') + change.toFixed(2) + '%';
    const isUp = change >= 0;
    const changeEl = document.getElementById('btcChange');
    changeEl.textContent = 'Hoje: ' + changeFormatted;
    changeEl.className = 'btc-widget__change ' + (isUp ? 'up' : 'down');
  }
  document.getElementById('btcUpdateTime').textContent = '0';
}

function drawBtcChart() {
  const canvas = document.getElementById('btcChartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const padding = 4;
  const data = btcPriceHistory.slice(-40);

  ctx.clearRect(0, 0, w, h);

  if (data.length < 2) return;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * (w - 2 * padding),
    y: h - padding - ((val - min) / range) * (h - 2 * padding),
  }));

  const isUp = data[data.length - 1] >= data[0];
  const color = isUp ? '#10b981' : '#ef4444';

  // Fill gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, isUp ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)');
  gradient.addColorStop(1, isUp ? 'rgba(16, 185, 129, 0.01)' : 'rgba(239, 68, 68, 0.01)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.lineTo(points[points.length - 1].x, h - padding);
  ctx.lineTo(points[0].x, h - padding);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.stroke();
}

// 8. BUSCA
function performSearch(query) {
  if (!query.trim()) return;
  const q = query.toLowerCase().trim();
  const results = ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.categoryLabel.toLowerCase().includes(q) ||
    a.body.toLowerCase().includes(q)
  );

  const modal = document.getElementById('searchResultsModal');
  const body = document.getElementById('searchResultsBody');

  if (results.length === 0) {
    body.innerHTML = '<p class="no-results">Nenhum resultado encontrado para "' + query + '".</p>';
  } else {
    body.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="openArticle(event, ${r.id})" data-article-id="${r.id}">
        <h4>${r.title}</h4>
        <p>${r.excerpt}</p>
        <small style="color:var(--color-text-dim)">${r.categoryLabel} · ${r.date}</small>
      </div>
    `).join('');
  }

  modal.classList.add('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchInputMobile').value = '';
}

function closeSearchResults() {
  document.getElementById('searchResultsModal').classList.remove('open');
}

// 9. STAGGERED FADE-IN + IMAGE FALLBACK
function initStaggeredAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || (i * 0.06);
        entry.target.style.animationDelay = `${delay}s`;
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.news-card, .featured-item, .hero__side-item, .about__card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(15px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    el.dataset.delay = (i * 0.06).toString();
    observer.observe(el);
  });
}

function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.classList.add('error-fallback');
      this.src = '';
    });
  });
}

// 10. EVENT LISTENERS & INIT
function init() {
  renderHome();

  // BTC Widget
  initBtcWidget();

  // BTC Simulator
  initSimulator();

  // Staggered animations
  initStaggeredAnimations();

  // Image fallbacks
  initImageFallbacks();

  // Inject animation visibility class
  const styleAnim = document.createElement('style');
  styleAnim.textContent = '.animate-visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(styleAnim);

  // Live News — usa artigos do próprio BTC Ancap News
  // initLiveNews removido: o site exibe apenas conteúdo original

  // Search: desktop
  document.getElementById('searchToggle').addEventListener('click', () => {
    const box = document.getElementById('searchBox');
    box.classList.toggle('open');
  });

  document.getElementById('searchSubmit').addEventListener('click', () => {
    performSearch(document.getElementById('searchInput').value);
  });
  document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch(e.target.value);
  });

  // Search: mobile overlay
  document.getElementById('searchInputMobile').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch(e.target.value);
  });
  document.getElementById('searchSubmitMobile').addEventListener('click', () => {
    performSearch(document.getElementById('searchInputMobile').value);
  });
  document.getElementById('searchOverlayClose').addEventListener('click', () => {
    document.getElementById('searchOverlay').classList.remove('open');
  });

  // Close search modal on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchResults();
      document.getElementById('searchBox').classList.remove('open');
      document.getElementById('searchOverlay').classList.remove('open');
    }
  });

  // Mobile nav toggle
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navToggle').classList.toggle('open');
    document.getElementById('navMenu').classList.toggle('open');
  });

  // Scroll effects
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Scroll to top button
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
  });

  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('contactFeedback');
    const submitBtn = document.getElementById('contactSubmitBtn');
    const btnText = submitBtn.querySelector('.btn__text');
    const btnLoader = submitBtn.querySelector('.btn__loader');

    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';

      feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      feedback.className = 'contact__feedback show success';
      document.getElementById('contactForm').reset();

      setTimeout(() => {
        feedback.className = 'contact__feedback';
      }, 5000);
    }, 1200);
  });

  // Charts on resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    if (currentPage !== 'home') return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawBtcChart, 250);
  });
}

function closeMobileMenu() {
  document.getElementById('navToggle').classList.remove('open');
  document.getElementById('navMenu').classList.remove('open');
}

// 10. SIMULADOR BTC
function initSimulator() {
  const input = document.getElementById('simInvestBRL');
  if (!input) return;

  input.addEventListener('input', function () {
    // Allow only digits and comma
    let raw = this.value.replace(/[^\d,]/g, '');
    const parts = raw.split(',');
    if (parts.length > 2) {
      raw = parts[0] + ',' + parts.slice(1).join('');
    }
    // Limit to 2 decimal places
    if (raw.includes(',')) {
      const [, dec] = raw.split(',');
      if (dec.length > 2) raw = parts[0] + ',' + dec.slice(0, 2);
    }
    this.value = raw;
    updateSimulatorOutput();
  });

  // Also update on blur (format nicely)
  input.addEventListener('blur', function () {
    const val = parseFloat(this.value.replace(',', '.')) || 0;
    if (val > 0) {
      this.value = val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    updateSimulatorOutput();
  });
}

function updateSimulatorOutput() {
  const input = document.getElementById('simInvestBRL');
  const resultEl = document.getElementById('simBtcAmount');
  if (!input || !resultEl) return;

  const brlValue = parseFloat(input.value.replace(',', '.')) || 0;

  if (brlValue > 0 && btcPriceData.brl > 0) {
    const btcAmount = brlValue / btcPriceData.brl;
    resultEl.textContent = btcAmount.toFixed(8);
  } else {
    resultEl.textContent = '0,00000000';
  }
}

function updateSimulatorPrices() {
  const usdEl = document.getElementById('simUsdPrice');
  const brlEl = document.getElementById('simBrlPrice');

  // Flash effect on price update
  [usdEl, brlEl].forEach(el => {
    if (el) {
      el.style.transition = 'opacity 0.15s ease';
      el.style.opacity = '0.5';
      setTimeout(() => { el.style.opacity = '1'; }, 150);
    }
  });

  if (usdEl && btcPriceData.usd) {
    usdEl.textContent = '$ ' + btcPriceData.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (brlEl && btcPriceData.brl) {
    brlEl.textContent = 'R$ ' + btcPriceData.brl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  updateSimulatorOutput();
}

// 11. NOTÍCIAS AO VIVO — desativado

// Start
document.addEventListener('DOMContentLoaded', init);
