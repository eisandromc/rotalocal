(() => {
  'use strict';

  const STORAGE_KEYS = {
    customExperiences: 'rotalocal.customExperiences.v1',
    comparison: 'rotalocal.comparison.v1',
    reservations: 'rotalocal.reservations.v1',
    currentExperience: 'rotalocal.currentExperience.v1'
  };

  const IMG = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=84`;

  const guides = [
    {
      id: 'g-marina', nome: 'Marina Costa', foto: IMG('photo-1494790108377-be9c29b29330', 400),
      numeroCredencial: 'CADASTUR 43.012345.96-1', credenciado: true,
      bio: 'Historiadora e guia de turismo há 9 anos. Marina transforma ruas, prédios e mercados em narrativas sobre a formação cultural de Porto Alegre.',
      idiomas: ['Português', 'Inglês', 'Espanhol'], especialidades: ['História urbana', 'Patrimônio', 'Cultura local'], avaliacao: 4.9, quantidadeAvaliacoes: 418
    },
    {
      id: 'g-lucas', nome: 'Lucas Bianchi', foto: IMG('photo-1500648767791-00dcc994a43e', 400),
      numeroCredencial: 'CADASTUR 43.020981.14-8', credenciado: true,
      bio: 'Guia especializado em enogastronomia e cultura da imigração italiana na Serra Gaúcha.',
      idiomas: ['Português', 'Inglês'], especialidades: ['Gastronomia', 'Vinhos', 'Cultura italiana'], avaliacao: 4.8, quantidadeAvaliacoes: 267
    },
    {
      id: 'g-rafael', nome: 'Rafael Martins', foto: IMG('photo-1507003211169-0a1dd7228f2d', 400),
      numeroCredencial: 'CADASTUR 43.033712.21-4', credenciado: true,
      bio: 'Condutor de ecoturismo com foco em segurança de trilhas, geologia e preservação dos campos de altitude.',
      idiomas: ['Português'], especialidades: ['Trilhas', 'Ecoturismo', 'Geologia'], avaliacao: 4.9, quantidadeAvaliacoes: 311
    },
    {
      id: 'g-carolina', nome: 'Carolina Mendes', foto: IMG('photo-1534528741775-53994a69daeb', 400),
      numeroCredencial: 'CADASTUR 43.041223.77-9', credenciado: true,
      bio: 'Arquiteta e guia local dedicada à história do patrimônio, urbanismo e tradição doceira de Pelotas.',
      idiomas: ['Português', 'Espanhol'], especialidades: ['Arquitetura', 'Patrimônio', 'História'], avaliacao: 4.7, quantidadeAvaliacoes: 154
    },
    {
      id: 'g-andre', nome: 'André Oliveira', foto: IMG('photo-1506794778202-cad84cf45f1d', 400),
      numeroCredencial: 'CADASTUR 43.052118.18-6', credenciado: true,
      bio: 'Pesquisador de cultura urbana, fotógrafo e guia de roteiros de arte pública em Porto Alegre.',
      idiomas: ['Português', 'Inglês'], especialidades: ['Street art', 'Fotografia', 'Cultura urbana'], avaliacao: 4.8, quantidadeAvaliacoes: 203
    },
    {
      id: 'g-eduardo', nome: 'Eduardo Silveira', foto: IMG('photo-1501196354995-cbb51c65aaea', 400),
      numeroCredencial: 'CADASTUR 43.063774.49-2', credenciado: true,
      bio: 'Fotógrafo de natureza e guia de ecoturismo especializado em cânions, luz natural e observação da paisagem.',
      idiomas: ['Português', 'Inglês'], especialidades: ['Fotografia', 'Natureza', 'Cânions'], avaliacao: 5.0, quantidadeAvaliacoes: 126
    }
  ];

  const initialExperiences = [
    {
      id: 'exp-poa-centro', titulo: 'Caminhada Histórica pelo Centro de Porto Alegre', cidade: 'Porto Alegre', estado: 'RS', categoria: 'História e Cultura',
      descricaoCurta: 'Mercado Público, Praça da Alfândega, Casa de Cultura e Orla em uma caminhada conduzida por uma historiadora local.',
      descricaoCompleta: 'Uma caminhada guiada pelos principais pontos históricos do Centro de Porto Alegre, conectando arquitetura, memória e transformações urbanas. O percurso passa pelo Mercado Público, Praça XV, Praça da Alfândega, Casa de Cultura Mario Quintana e termina na Orla do Guaíba, com contexto histórico em cada parada.',
      imagens: [IMG('photo-1500530855697-b586d89ba3ee'), IMG('photo-1477959858617-67f85cf4f1df'), IMG('photo-1519501025264-65ba15a82390')],
      preco: 95, duracao: '3 horas', duracaoHoras: 3, avaliacao: 4.9, quantidadeAvaliacoes: 184, capacidade: 12,
      idiomas: ['Português', 'Inglês', 'Espanhol'], pontoEncontro: 'Mercado Público de Porto Alegre — entrada principal, Largo Glênio Peres',
      inclusos: ['Guia credenciada', 'Roteiro histórico', 'Material digital pós-passeio'], naoInclusos: ['Alimentação', 'Transporte até o ponto de encontro'],
      roteiro: [['09:00','Encontro no Mercado Público'],['09:20','História da Praça XV'],['10:00','Praça da Alfândega'],['10:40','Casa de Cultura Mario Quintana'],['11:30','Orla do Guaíba'],['12:00','Encerramento']],
      guiaId: 'g-marina', destaque: true,
      disponibilidade: [
        { id:'disp-poa-1', experienciaId:'exp-poa-centro', data:'2026-10-02', horarios:['09:00','14:00'], vagasDisponiveis:12 },
        { id:'disp-poa-2', experienciaId:'exp-poa-centro', data:'2026-10-03', horarios:['10:00','15:30'], vagasDisponiveis:9 },
        { id:'disp-poa-3', experienciaId:'exp-poa-centro', data:'2026-10-04', horarios:['09:00'], vagasDisponiveis:6 }
      ]
    },
    {
      id: 'exp-serra-sabores', titulo: 'Sabores da Serra Gaúcha', cidade: 'Bento Gonçalves', estado: 'RS', categoria: 'Gastronomia',
      descricaoCurta: 'Produtores locais, degustações e cultura regional em uma imersão de cinco horas pela Serra Gaúcha.',
      descricaoCompleta: 'Experiência gastronômica pela Serra Gaúcha com visita a produtores locais, degustações orientadas e histórias da imigração que formou a identidade da região. O roteiro privilegia pequenos produtores e deslocamentos curtos entre propriedades selecionadas.',
      imagens: [IMG('photo-1506377247377-2a5b3b417ebb'), IMG('photo-1510812431401-41d2bd2722f3'), IMG('photo-1559339352-11d035aa65de')],
      preco: 220, duracao: '5 horas', duracaoHoras: 5, avaliacao: 4.8, quantidadeAvaliacoes: 126, capacidade: 8,
      idiomas: ['Português','Inglês'], pontoEncontro: 'Praça Achyles Mincarone — Bento Gonçalves',
      inclusos: ['Guia credenciado','Três degustações','Visita a produtores locais'], naoInclusos: ['Almoço completo','Transporte intermunicipal'],
      roteiro: [['09:00','Recepção e contextualização da Serra'],['09:40','Primeiro produtor artesanal'],['11:00','Vinícola familiar'],['12:30','Degustação de produtos coloniais'],['14:00','Encerramento']],
      guiaId:'g-lucas', destaque:true,
      disponibilidade:[
        { id:'disp-serra-1', experienciaId:'exp-serra-sabores', data:'2026-10-03', horarios:['09:00'], vagasDisponiveis:8 },
        { id:'disp-serra-2', experienciaId:'exp-serra-sabores', data:'2026-10-04', horarios:['10:00'], vagasDisponiveis:6 },
        { id:'disp-serra-3', experienciaId:'exp-serra-sabores', data:'2026-10-10', horarios:['09:00'], vagasDisponiveis:8 }
      ]
    },
    {
      id:'exp-cambara-trilhas', titulo:'Trilhas e Cachoeiras em Cambará do Sul', cidade:'Cambará do Sul', estado:'RS', categoria:'Natureza',
      descricaoCurta:'Trilhas, campos de altitude e cachoeiras em um roteiro de dia inteiro com condução especializada.',
      descricaoCompleta:'Uma experiência de natureza para quem deseja explorar paisagens de Cambará do Sul com orientação técnica e interpretação ambiental. O roteiro combina trilhas de dificuldade moderada, mirantes e uma parada próxima a cachoeiras, com pausas para descanso e fotografia.',
      imagens:[IMG('photo-1464822759023-fed622ff2c3b'),IMG('photo-1501785888041-af3ef285b470'),IMG('photo-1441974231531-c6227db76b6e')],
      preco:180, duracao:'6 horas', duracaoHoras:6, avaliacao:4.9, quantidadeAvaliacoes:213, capacidade:10,
      idiomas:['Português'], pontoEncontro:'Centro de Atendimento ao Turista — Cambará do Sul', inclusos:['Guia credenciado','Bastões de caminhada compartilhados','Seguro aventura'], naoInclusos:['Alimentação','Transporte até Cambará do Sul'],
      roteiro:[['08:00','Encontro e briefing de segurança'],['08:30','Início da trilha'],['10:15','Mirante dos campos de altitude'],['11:20','Parada junto à cachoeira'],['12:30','Pausa para lanche'],['14:00','Retorno e encerramento']],
      guiaId:'g-rafael', destaque:true,
      disponibilidade:[{id:'disp-trilha-1',experienciaId:'exp-cambara-trilhas',data:'2026-10-03',horarios:['08:00'],vagasDisponiveis:7},{id:'disp-trilha-2',experienciaId:'exp-cambara-trilhas',data:'2026-10-04',horarios:['08:00'],vagasDisponiveis:10},{id:'disp-trilha-3',experienciaId:'exp-cambara-trilhas',data:'2026-10-11',horarios:['07:30'],vagasDisponiveis:10}]
    },
    {
      id:'exp-pelotas-arquitetura', titulo:'Arquitetura e Cultura no Centro Histórico', cidade:'Pelotas', estado:'RS', categoria:'História e Cultura',
      descricaoCurta:'Casarões, praças e histórias da formação urbana de Pelotas em um roteiro guiado de 2h30.',
      descricaoCompleta:'Um roteiro a pé pelo Centro Histórico de Pelotas para compreender como arquitetura, urbanismo, charqueadas e tradição doceira moldaram a identidade local. A caminhada combina leitura de fachadas, contexto histórico e histórias cotidianas da cidade.',
      imagens:[IMG('photo-1494526585095-c41746248156'),IMG('photo-1528909514045-2fa4ac7a08ba'),IMG('photo-1486325212027-8081e485255e')],
      preco:80, duracao:'2h30', duracaoHoras:2.5, avaliacao:4.7, quantidadeAvaliacoes:89, capacidade:15,
      idiomas:['Português','Espanhol'], pontoEncontro:'Praça Coronel Pedro Osório — em frente ao Theatro Sete de Abril', inclusos:['Guia credenciada','Mapa digital do circuito'], naoInclusos:['Ingressos opcionais em museus','Alimentação'],
      roteiro:[['10:00','Praça Coronel Pedro Osório'],['10:25','Theatro Sete de Abril'],['10:50','Casarões históricos'],['11:25','Mercado Central'],['12:10','Rota das confeitarias tradicionais'],['12:30','Encerramento']],
      guiaId:'g-carolina', destaque:false,
      disponibilidade:[{id:'disp-pel-1',experienciaId:'exp-pelotas-arquitetura',data:'2026-10-02',horarios:['10:00','15:00'],vagasDisponiveis:15},{id:'disp-pel-2',experienciaId:'exp-pelotas-arquitetura',data:'2026-10-03',horarios:['09:30'],vagasDisponiveis:12}]
    },
    {
      id:'exp-poa-street-art', titulo:'Porto Alegre Street Art Experience', cidade:'Porto Alegre', estado:'RS', categoria:'Arte e Cultura',
      descricaoCurta:'Murais, artistas e movimentos de arte urbana vistos a partir das ruas do 4º Distrito e do Centro.',
      descricaoCompleta:'Um passeio visual pela arte urbana de Porto Alegre, conectando murais, intervenções e histórias dos artistas que transformam a paisagem da cidade. O roteiro é pensado para quem gosta de fotografia, cultura contemporânea e narrativas fora dos circuitos tradicionais.',
      imagens:[IMG('photo-1549490349-8643362247b5'),IMG('photo-1531058020387-3be344556be6'),IMG('photo-1482160549825-59d1b23cb208')],
      preco:75, duracao:'2 horas', duracaoHoras:2, avaliacao:4.8, quantidadeAvaliacoes:97, capacidade:10,
      idiomas:['Português','Inglês'], pontoEncontro:'Escadaria 24 de Maio — Centro Histórico, Porto Alegre', inclusos:['Guia credenciado','Mapa digital de murais','Dicas de fotografia urbana'], naoInclusos:['Transporte','Bebidas'],
      roteiro:[['15:00','Escadaria 24 de Maio'],['15:25','Galeria a céu aberto'],['16:00','Travessa dos Venezianos'],['16:35','Murais do 4º Distrito'],['17:00','Encerramento']],
      guiaId:'g-andre', destaque:true,
      disponibilidade:[{id:'disp-art-1',experienciaId:'exp-poa-street-art',data:'2026-10-02',horarios:['15:00'],vagasDisponiveis:10},{id:'disp-art-2',experienciaId:'exp-poa-street-art',data:'2026-10-03',horarios:['10:00','16:00'],vagasDisponiveis:8}]
    },
    {
      id:'exp-canion-foto', titulo:'Cânions do Sul — Experiência Fotográfica', cidade:'Cambará do Sul', estado:'RS', categoria:'Natureza',
      descricaoCurta:'Uma saída fotográfica em grupo reduzido pelos cânions, com orientação de composição e leitura da luz.',
      descricaoCompleta:'Experiência para viajantes que querem fotografar paisagens dos cânions com acompanhamento de um guia e fotógrafo de natureza. A atividade prioriza grupos pequenos, horários de melhor luz e técnicas simples aplicáveis tanto a câmeras quanto a smartphones.',
      imagens:[IMG('photo-1500534314209-a25ddb2bd429'),IMG('photo-1464278533981-50106e6176b1'),IMG('photo-1500534623283-312aade485b7')],
      preco:240, duracao:'7 horas', duracaoHoras:7, avaliacao:5.0, quantidadeAvaliacoes:71, capacidade:6,
      idiomas:['Português','Inglês'], pontoEncontro:'Praça São José — Centro de Cambará do Sul', inclusos:['Guia credenciado','Orientação fotográfica','Tripé compartilhado','Seguro aventura'], naoInclusos:['Equipamento fotográfico','Alimentação'],
      roteiro:[['06:30','Encontro e preparação'],['07:00','Saída para o primeiro mirante'],['08:10','Sessão de fotografia de paisagem'],['10:30','Trilha curta entre mirantes'],['12:00','Pausa para almoço'],['13:30','Última sessão fotográfica']],
      guiaId:'g-eduardo', destaque:true,
      disponibilidade:[{id:'disp-foto-1',experienciaId:'exp-canion-foto',data:'2026-10-03',horarios:['06:30'],vagasDisponiveis:5},{id:'disp-foto-2',experienciaId:'exp-canion-foto',data:'2026-10-04',horarios:['06:00'],vagasDisponiveis:6}]
    }
  ];

  const initialGuideReservations = [
    { id:'EXP-2026-1001', experienciaId:'exp-poa-centro', turista:'Ana Souza', email:'ana.souza@example.com', data:'2026-10-02', horario:'09:00', participantes:2, precoUnitario:95, valorTotal:190, status:'Confirmada', criadoEm:'2026-09-28T14:10:00-03:00' },
    { id:'EXP-2026-1002', experienciaId:'exp-poa-centro', turista:'Pedro Almeida', email:'pedro.almeida@example.com', data:'2026-10-03', horario:'10:00', participantes:3, precoUnitario:95, valorTotal:285, status:'Confirmada', criadoEm:'2026-09-28T17:20:00-03:00' }
  ];

  const state = {
    screen: 'explore',
    experiences: [],
    guides,
    reservations: [],
    comparison: [],
    currentExperience: null,
    filters: { query:'', destination:'', category:'', price:'', duration:'', rating:'' },
    booking: { date:'', time:'', participants:2, name:'', email:'', confirmed:null },
    isLoading: false
  };

  const main = document.getElementById('main-content');
  const comparisonBar = document.getElementById('comparison-bar');
  const modalRoot = document.getElementById('modal-root');
  const toastRegion = document.getElementById('toast-region');
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  function money(value) {
    return new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(value);
  }

  function formatDate(iso) {
    if (!iso) return '—';
    const [y,m,d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  function escapeHTML(value = '') {
    return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function guideById(id) { return state.guides.find(g => g.id === id); }
  function experienceById(id) { return state.experiences.find(e => e.id === id); }

  function fallbackSvg(label) {
    const safe = String(label).slice(0, 46).replace(/[<>&'"]/g, '');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#165f50"/><stop offset="1" stop-color="#d78a5d"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="990" cy="120" r="210" fill="rgba(255,255,255,.12)"/><circle cx="160" cy="680" r="240" fill="rgba(255,255,255,.08)"/><text x="70" y="690" font-family="Arial" font-size="48" font-weight="700" fill="white">${safe}</text><text x="70" y="745" font-family="Arial" font-size="24" fill="#dfeee9">RotaLocal</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function imageMarkup(src, alt, className = '') {
    const fallback = fallbackSvg(alt);
    return `<img class="${className}" src="${src}" alt="${escapeHTML(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'">`;
  }

  function loadState() {
    let custom = [];
    let comparison = [];
    let reservations = [];
    try {
      custom = JSON.parse(localStorage.getItem(STORAGE_KEYS.customExperiences) || '[]');
      comparison = JSON.parse(localStorage.getItem(STORAGE_KEYS.comparison) || '[]');
      reservations = JSON.parse(localStorage.getItem(STORAGE_KEYS.reservations) || '[]');
      state.currentExperience = localStorage.getItem(STORAGE_KEYS.currentExperience) || null;
    } catch (error) {
      console.warn('Não foi possível restaurar todos os dados locais.', error);
    }
    state.experiences = [...initialExperiences, ...custom.filter(item => !initialExperiences.some(base => base.id === item.id))];
    state.comparison = comparison.filter(id => state.experiences.some(e => e.id === id)).slice(0,3);
    const persistedIds = new Set(reservations.map(r => r.id));
    state.reservations = [...initialGuideReservations.filter(r => !persistedIds.has(r.id)), ...reservations];
    // Reaplica o consumo de vagas das reservas persistidas para manter a disponibilidade coerente após reload.
    reservations.filter(r => r.status === 'Confirmada').forEach(r => {
      const exp = state.experiences.find(e => e.id === r.experienciaId);
      const disp = exp?.disponibilidade.find(d => d.data === r.data);
      if (disp) disp.vagasDisponiveis = Math.max(0, disp.vagasDisponiveis - r.participantes);
    });
  }

  function saveState() {
    const custom = state.experiences.filter(e => !initialExperiences.some(base => base.id === e.id));
    localStorage.setItem(STORAGE_KEYS.customExperiences, JSON.stringify(custom));
    localStorage.setItem(STORAGE_KEYS.comparison, JSON.stringify(state.comparison));
    const userReservations = state.reservations.filter(r => !initialGuideReservations.some(base => base.id === r.id));
    localStorage.setItem(STORAGE_KEYS.reservations, JSON.stringify(userReservations));
    if (state.currentExperience) localStorage.setItem(STORAGE_KEYS.currentExperience, state.currentExperience);
  }

  function toast(message, type = 'default') {
    const el = document.createElement('div');
    el.className = `toast ${type === 'error' ? 'error' : type === 'success' ? 'success' : ''}`;
    el.setAttribute('role', type === 'error' ? 'alert' : 'status');
    el.textContent = message;
    toastRegion.appendChild(el);
    setTimeout(() => el.remove(), 3600);
  }

  function setActiveNav(screen) {
    document.querySelectorAll('[data-nav]').forEach(btn => {
      if (btn.classList.contains('nav-link')) btn.classList.toggle('is-active', btn.dataset.nav === screen);
    });
  }

  function navigateTo(screen, options = {}) {
    if (!['explore','compare','details','guide'].includes(screen)) return;
    if (screen === 'compare' && state.comparison.length === 0) {
      toast('Selecione pelo menos uma experiência para comparar.', 'error');
      screen = 'explore';
    }
    if (screen === 'details') {
      const id = options.experienceId || state.currentExperience;
      if (!id || !experienceById(id)) {
        toast('Escolha uma experiência para ver os detalhes.', 'error');
        screen = 'explore';
      } else {
        state.currentExperience = id;
        state.booking = { date:'', time:'', participants:2, name:'', email:'', confirmed:null };
        saveState();
      }
    }
    state.screen = screen;
    window.location.hash = screen === 'details' && state.currentExperience ? `details/${state.currentExperience}` : screen;
    setActiveNav(screen);
    renderApp();
    main.focus({ preventScroll: true });
    window.scrollTo({ top:0, behavior:'smooth' });
    closeMobileMenu();
  }

  function renderApp() {
    const renderers = { explore: renderExplore, compare: renderComparison, details: renderExperienceDetails, guide: renderGuideDashboard };
    main.innerHTML = renderers[state.screen]();
    bindScreenEvents();
    renderComparisonBar();
  }

  function renderExplore() {
    const results = applyFilters();
    const cards = state.isLoading
      ? `<div class="skeleton-grid" aria-label="Carregando experiências"><div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div></div>`
      : results.length
        ? `<div class="cards-grid">${results.map(renderExperienceCard).join('')}</div>`
        : `<div class="empty-state"><div class="empty-icon" aria-hidden="true">⌕</div><h3>Nenhuma experiência encontrada</h3><p>Tente remover um filtro ou pesquisar outro destino.</p><button class="button button-outline" type="button" data-action="clear-filters">Limpar filtros</button></div>`;

    const destinations = [...new Set(state.experiences.map(e => `${e.cidade} — ${e.estado}`))].sort();
    return `
      <section class="hero" aria-labelledby="hero-title">
        <div class="container">
          <div class="hero-panel">
            <div class="hero-content">
              <p class="eyebrow">Guias locais. Histórias reais.</p>
              <h1 id="hero-title">Descubra experiências que fazem parte do lugar.</h1>
              <p>Encontre roteiros criados por guias locais credenciados e descubra cada destino por uma nova perspectiva.</p>
              <form class="hero-search" id="hero-search-form" role="search">
                <label class="sr-only" for="hero-query">Para onde você quer ir?</label>
                <input id="hero-query" name="query" type="search" placeholder="Para onde você quer ir?" value="${escapeHTML(state.filters.query)}">
                <button class="button button-primary" type="submit">Buscar experiências</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="filters-title">
        <div class="container">
          <div class="section-heading">
            <div><p class="eyebrow">Refine sua descoberta</p><h2 id="filters-title">Encontre o passeio ideal</h2></div>
            <p>Compare preço, duração, estilo do roteiro e avaliação antes de escolher.</p>
          </div>
          <div class="filter-shell">
            <form id="filters-form" class="filters-grid">
              <div class="field"><label for="filter-destination">Destino</label><select id="filter-destination" name="destination"><option value="">Todos</option>${destinations.map(d => `<option ${state.filters.destination===d?'selected':''}>${escapeHTML(d)}</option>`).join('')}</select></div>
              <div class="field"><label for="filter-category">Categoria</label><select id="filter-category" name="category"><option value="">Todas</option>${['História e Cultura','Gastronomia','Natureza','Aventura','Arte e Cultura'].map(c => `<option ${state.filters.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
              <div class="field"><label for="filter-price">Faixa de preço</label><select id="filter-price" name="price"><option value="">Qualquer</option><option value="0-100" ${state.filters.price==='0-100'?'selected':''}>Até R$ 100</option><option value="101-200" ${state.filters.price==='101-200'?'selected':''}>R$ 101 a R$ 200</option><option value="201+" ${state.filters.price==='201+'?'selected':''}>Acima de R$ 200</option></select></div>
              <div class="field"><label for="filter-duration">Duração</label><select id="filter-duration" name="duration"><option value="">Qualquer</option><option value="short" ${state.filters.duration==='short'?'selected':''}>Até 3h</option><option value="medium" ${state.filters.duration==='medium'?'selected':''}>3h a 5h</option><option value="long" ${state.filters.duration==='long'?'selected':''}>Mais de 5h</option></select></div>
              <div class="field"><label for="filter-rating">Avaliação mínima</label><select id="filter-rating" name="rating"><option value="">Qualquer</option><option value="4.5" ${state.filters.rating==='4.5'?'selected':''}>4,5+</option><option value="4.8" ${state.filters.rating==='4.8'?'selected':''}>4,8+</option><option value="4.9" ${state.filters.rating==='4.9'?'selected':''}>4,9+</option></select></div>
              <button class="button button-outline" type="button" data-action="clear-filters">Limpar</button>
            </form>
            <div class="results-meta"><span><strong>${results.length}</strong> ${results.length===1?'experiência encontrada':'experiências encontradas'}</span><span>Dados atualizados no catálogo local</span></div>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="featured-title">
        <div class="container">
          <div class="section-heading"><div><p class="eyebrow">Curadoria local</p><h2 id="featured-title">Experiências em destaque</h2></div><p>Selecione até três opções e compare lado a lado antes de reservar.</p></div>
          ${cards}
        </div>
      </section>`;
  }

  function renderExperienceCard(exp) {
    const guide = guideById(exp.guiaId);
    const selected = state.comparison.includes(exp.id);
    return `<article class="experience-card ${selected ? 'is-selected' : ''}">
      <div class="card-image-wrap">${imageMarkup(exp.imagens[0], exp.titulo)}<span class="card-badge">${escapeHTML(exp.categoria)}</span></div>
      <div class="card-content">
        <div><div class="card-location">${escapeHTML(exp.cidade)} — ${escapeHTML(exp.estado)}</div><h3>${escapeHTML(exp.titulo)}</h3></div>
        <div class="rating-row"><span class="rating">${exp.avaliacao.toFixed(1).replace('.',',')}</span><span>(${exp.quantidadeAvaliacoes} avaliações)</span></div>
        <p>${escapeHTML(exp.descricaoCurta)}</p>
        <div class="meta-row"><span>${escapeHTML(exp.duracao)}</span><span>até ${exp.capacidade} pessoas</span></div>
        <div class="guide-row"><span>com <strong>${escapeHTML(guide?.nome || 'Guia local')}</strong></span>${guide?.credenciado ? '<span class="verified">✓ Guia credenciado</span>' : ''}</div>
        <div class="price-row"><div class="price"><strong>${money(exp.preco)}</strong><small>por pessoa</small></div></div>
        <div class="card-actions">
          <button class="button button-primary" type="button" data-action="view-experience" data-id="${exp.id}">Ver experiência</button>
          <button class="compare-toggle" type="button" aria-pressed="${selected}" data-action="toggle-comparison" data-id="${exp.id}">${selected ? '✓ Selecionado' : 'Comparar'}</button>
        </div>
      </div>
    </article>`;
  }

  function applyFilters() {
    const f = state.filters;
    return state.experiences.filter(exp => {
      const searchable = `${exp.titulo} ${exp.cidade} ${exp.estado} ${exp.categoria}`.toLowerCase();
      const queryOk = !f.query || searchable.includes(f.query.toLowerCase());
      const destinationOk = !f.destination || `${exp.cidade} — ${exp.estado}` === f.destination;
      const categoryOk = !f.category || exp.categoria === f.category || (f.category === 'Aventura' && exp.categoria.includes('Aventura'));
      const ratingOk = !f.rating || exp.avaliacao >= Number(f.rating);
      let priceOk = true;
      if (f.price === '0-100') priceOk = exp.preco <= 100;
      if (f.price === '101-200') priceOk = exp.preco >= 101 && exp.preco <= 200;
      if (f.price === '201+') priceOk = exp.preco >= 201;
      let durationOk = true;
      if (f.duration === 'short') durationOk = exp.duracaoHoras <= 3;
      if (f.duration === 'medium') durationOk = exp.duracaoHoras > 3 && exp.duracaoHoras <= 5;
      if (f.duration === 'long') durationOk = exp.duracaoHoras > 5;
      return queryOk && destinationOk && categoryOk && ratingOk && priceOk && durationOk;
    });
  }

  function toggleComparison(id) {
    const idx = state.comparison.indexOf(id);
    if (idx >= 0) {
      state.comparison.splice(idx,1);
      toast('Experiência removida da comparação.');
    } else {
      if (state.comparison.length >= 3) {
        toast('Você pode comparar até 3 experiências por vez.', 'error');
        return;
      }
      state.comparison.push(id);
      toast('Experiência adicionada à comparação.', 'success');
    }
    saveState();
    renderApp();
  }

  function renderComparisonBar() {
    const count = state.comparison.length;
    if (!count || state.screen === 'compare') {
      comparisonBar.classList.remove('is-visible');
      comparisonBar.innerHTML = '';
      return;
    }
    comparisonBar.innerHTML = `<p><strong>${count} ${count===1?'experiência selecionada':'experiências selecionadas'}</strong><br><span>Você pode comparar até 3.</span></p><div class="comparison-actions"><button class="button button-small button-ghost" style="color:#fff" type="button" data-action="clear-comparison">Limpar</button><button class="button button-small button-secondary" type="button" data-nav="compare">Comparar agora</button></div>`;
    comparisonBar.classList.add('is-visible');
  }

  function renderComparison() {
    const exps = state.comparison.map(experienceById).filter(Boolean);
    return `<section class="page-hero"><div class="container"><div class="page-hero-inner"><p class="eyebrow">Escolha com segurança</p><h1>Compare suas experiências</h1><p>Veja lado a lado as informações mais importantes antes de escolher seu próximo passeio.</p></div></div></section>
      <section class="section"><div class="container">
        ${exps.length ? `<div class="comparison-grid" style="--compare-cols:${exps.length}">${exps.map(exp => {
          const guide = guideById(exp.guiaId);
          return `<article class="compare-card">${imageMarkup(exp.imagens[0], exp.titulo)}<div class="compare-card-body"><div><span class="card-location">${escapeHTML(exp.cidade)} — ${escapeHTML(exp.estado)}</span><h2>${escapeHTML(exp.titulo)}</h2></div><dl class="compare-table">
            <div class="compare-row"><dt>Categoria</dt><dd>${escapeHTML(exp.categoria)}</dd></div>
            <div class="compare-row"><dt>Avaliação</dt><dd><span class="rating">${exp.avaliacao.toFixed(1).replace('.',',')}</span> · ${exp.quantidadeAvaliacoes} avaliações</dd></div>
            <div class="compare-row"><dt>Duração</dt><dd>${escapeHTML(exp.duracao)}</dd></div>
            <div class="compare-row"><dt>Preço</dt><dd><strong>${money(exp.preco)}</strong> por pessoa</dd></div>
            <div class="compare-row"><dt>Grupo</dt><dd>Até ${exp.capacidade} pessoas</dd></div>
            <div class="compare-row"><dt>Idiomas</dt><dd>${exp.idiomas.join(', ')}</dd></div>
            <div class="compare-row"><dt>Guia</dt><dd>${escapeHTML(guide.nome)} ${guide.credenciado ? '<span class="verified">✓ verificado</span>' : ''}</dd></div>
            <div class="compare-row"><dt>Inclui</dt><dd>${exp.inclusos.slice(0,3).map(escapeHTML).join(' · ')}</dd></div>
          </dl><div class="compare-actions"><button class="button button-outline" type="button" data-action="view-experience" data-id="${exp.id}">Ver detalhes</button><button class="button button-primary" type="button" data-action="choose-experience" data-id="${exp.id}">Escolher esta experiência</button></div><button class="button button-danger button-small" type="button" data-action="remove-comparison" data-id="${exp.id}">Remover da comparação</button></div></article>`;
        }).join('')}</div>` : `<div class="empty-state"><h2>Sua comparação está vazia</h2><p>Volte ao catálogo e selecione até três experiências.</p><button class="button button-primary" data-nav="explore">Explorar experiências</button></div>`}
      </div></section>`;
  }

  function renderExperienceDetails() {
    const exp = experienceById(state.currentExperience);
    if (!exp) return `<section class="section"><div class="container"><div class="empty-state"><h2>Experiência não encontrada</h2><button class="button button-primary" data-nav="explore">Voltar ao catálogo</button></div></div></section>`;
    const guide = guideById(exp.guiaId);
    const bookingContent = state.booking.confirmed ? renderBookingSuccess(exp, state.booking.confirmed) : renderBookingForm(exp);
    return `<section class="section"><div class="container"><div class="details-layout"><div>
      <div class="gallery" aria-label="Galeria da experiência">${exp.imagens.slice(0,3).map((src, i) => imageMarkup(src, `${exp.titulo} — imagem ${i+1}`)).join('')}</div>
      <div class="detail-title"><p class="eyebrow">${escapeHTML(exp.categoria)} · ${escapeHTML(exp.cidade)} — ${escapeHTML(exp.estado)}</p><h1>${escapeHTML(exp.titulo)}</h1><div class="rating-row"><span class="rating">${exp.avaliacao.toFixed(1).replace('.',',')}</span><span>${exp.quantidadeAvaliacoes} avaliações</span></div><div class="detail-kpis"><span class="kpi-chip">${escapeHTML(exp.duracao)}</span><span class="kpi-chip">Até ${exp.capacidade} pessoas</span><span class="kpi-chip">${exp.idiomas.join(' · ')}</span><span class="kpi-chip">${money(exp.preco)} / pessoa</span></div></div>
      <section class="content-card"><h2>Sobre esta experiência</h2><p>${escapeHTML(exp.descricaoCompleta)}</p></section>
      <section class="content-card"><h2>Seu guia</h2><div class="guide-profile">${imageMarkup(guide.foto, `Foto de ${guide.nome}`, 'guide-avatar')}<div><div class="guide-meta"><strong>${escapeHTML(guide.nome)}</strong>${guide.credenciado ? '<span class="verified">✓ CADASTUR verificado</span>' : ''}</div><p><strong>${escapeHTML(guide.numeroCredencial)}</strong></p><div class="rating-row"><span class="rating">${guide.avaliacao.toFixed(1).replace('.',',')}</span><span>${guide.quantidadeAvaliacoes} avaliações</span></div><p>${escapeHTML(guide.bio)}</p><div class="guide-meta"><span>Idiomas: ${guide.idiomas.join(', ')}</span><span>Especialidades: ${guide.especialidades.join(', ')}</span></div></div></div></section>
      <section class="content-card"><h2>O que você vai conhecer</h2><ol class="timeline">${exp.roteiro.map(([time,place]) => `<li><strong>${escapeHTML(time)}</strong><span>${escapeHTML(place)}</span></li>`).join('')}</ol></section>
      <section class="content-card"><div class="include-grid"><div><h2>O que está incluído</h2><ul class="include-list">${exp.inclusos.map(i => `<li class="yes">${escapeHTML(i)}</li>`).join('')}</ul></div><div><h2>O que não está incluído</h2><ul class="include-list">${exp.naoInclusos.map(i => `<li class="no">${escapeHTML(i)}</li>`).join('')}</ul></div></div></section>
    </div><aside>${bookingContent}</aside></div></div></section>`;
  }

  function renderBookingForm(exp) {
    const selectedDisp = exp.disponibilidade.find(d => d.data === state.booking.date);
    const max = selectedDisp ? selectedDisp.vagasDisponiveis : exp.capacidade;
    if (state.booking.participants > max) state.booking.participants = max;
    const total = exp.preco * state.booking.participants;
    return `<form class="booking-card" id="booking-form" novalidate>
      <p class="eyebrow">Reserva segura</p><h2>Reserve sua experiência</h2><div class="booking-price">${money(exp.preco)} <small>por pessoa</small></div>
      <div class="field"><label>Data</label><div class="date-options" role="group" aria-label="Datas disponíveis">${exp.disponibilidade.map(d => `<button class="option-pill" type="button" aria-pressed="${state.booking.date===d.data}" data-action="select-date" data-date="${d.data}">${formatDate(d.data)}</button>`).join('')}</div><p class="field-error" id="error-date"></p></div>
      <div class="field"><label>Horário</label><div class="time-options" role="group" aria-label="Horários disponíveis">${selectedDisp ? selectedDisp.horarios.map(t => `<button class="option-pill" type="button" aria-pressed="${state.booking.time===t}" data-action="select-time" data-time="${t}">${t}</button>`).join('') : '<span class="booking-note">Selecione uma data para ver os horários.</span>'}</div><p class="field-error" id="error-time"></p></div>
      <div class="field"><label>Participantes</label><div class="counter"><button type="button" aria-label="Diminuir participantes" data-action="participants-minus" ${state.booking.participants<=1?'disabled':''}>−</button><output id="participants-output">${state.booking.participants}</output><button type="button" aria-label="Aumentar participantes" data-action="participants-plus" ${state.booking.participants>=max?'disabled':''}>+</button></div><small>${selectedDisp ? `${selectedDisp.vagasDisponiveis} vagas disponíveis nesta data` : `Máximo de ${exp.capacidade} participantes`}</small><p class="field-error" id="error-participants"></p></div>
      <div class="summary"><div class="summary-row"><span>${money(exp.preco)} × ${state.booking.participants} ${state.booking.participants===1?'participante':'participantes'}</span><strong>${money(total)}</strong></div><div class="summary-row"><span>Taxa da plataforma</span><strong>${money(0)}</strong></div><div class="summary-row total"><span>Total</span><strong>${money(total)}</strong></div></div><p class="booking-note">Você ainda não será cobrado.</p>
      <div class="field"><label for="tourist-name">Nome</label><input id="tourist-name" name="name" autocomplete="name" value="${escapeHTML(state.booking.name)}" aria-describedby="error-name"><p class="field-error" id="error-name"></p></div>
      <div class="field"><label for="tourist-email">E-mail</label><input id="tourist-email" name="email" type="email" autocomplete="email" value="${escapeHTML(state.booking.email)}" aria-describedby="error-email"><p class="field-error" id="error-email"></p></div>
      <button class="button button-primary button-full" type="submit">Confirmar reserva</button>
    </form>`;
  }

  function renderBookingSuccess(exp, reservation) {
    const guide = guideById(exp.guiaId);
    return `<div class="success-panel" role="status"><div class="success-icon" aria-hidden="true">✓</div><p class="eyebrow">Tudo certo</p><h2>Reserva confirmada!</h2><p>Sua experiência está reservada. Enviamos os detalhes para o endereço informado.</p><dl class="success-data"><div><dt>Código da reserva</dt><dd>${reservation.id}</dd></div><div><dt>Experiência</dt><dd>${escapeHTML(exp.titulo)}</dd></div><div><dt>Guia</dt><dd>${escapeHTML(guide.nome)}</dd></div><div><dt>Data</dt><dd>${formatDate(reservation.data)}</dd></div><div><dt>Horário</dt><dd>${reservation.horario}</dd></div><div><dt>Participantes</dt><dd>${reservation.participantes}</dd></div><div><dt>Valor total</dt><dd>${money(reservation.valorTotal)}</dd></div><div><dt>Ponto de encontro</dt><dd>${escapeHTML(exp.pontoEncontro)}</dd></div></dl><div class="success-actions"><button class="button button-outline" data-action="open-reservations">Ver minhas reservas</button><button class="button button-primary" data-nav="explore">Explorar outras experiências</button></div></div>`;
  }

  function calculateReservation() {
    const exp = experienceById(state.currentExperience);
    return exp ? exp.preco * state.booking.participants : 0;
  }

  function validateReservation() {
    const exp = experienceById(state.currentExperience);
    const selectedDisp = exp?.disponibilidade.find(d => d.data === state.booking.date);
    const errors = {};
    if (!state.booking.date) errors.date = 'Selecione uma data disponível.';
    if (!state.booking.time) errors.time = 'Selecione um horário disponível.';
    if (!Number.isInteger(state.booking.participants) || state.booking.participants < 1) errors.participants = 'Informe pelo menos 1 participante.';
    if (selectedDisp && state.booking.participants > selectedDisp.vagasDisponiveis) errors.participants = `Existem apenas ${selectedDisp.vagasDisponiveis} vagas disponíveis nesta data.`;
    if (!state.booking.name.trim()) errors.name = 'Informe o nome do responsável pela reserva.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.booking.email.trim())) errors.email = 'Informe um e-mail válido.';
    return errors;
  }

  function showBookingErrors(errors) {
    ['date','time','participants','name','email'].forEach(key => {
      const errorEl = document.getElementById(`error-${key}`);
      if (errorEl) errorEl.textContent = errors[key] || '';
      const input = key === 'name' ? document.getElementById('tourist-name') : key === 'email' ? document.getElementById('tourist-email') : null;
      if (input) input.classList.toggle('input-invalid', Boolean(errors[key]));
    });
    const first = Object.keys(errors)[0];
    if (first) {
      const target = document.getElementById(first === 'name' ? 'tourist-name' : first === 'email' ? 'tourist-email' : `error-${first}`);
      target?.scrollIntoView({ behavior:'smooth', block:'center' });
    }
  }

  function generateReservationId() {
    let id;
    do {
      id = `EXP-2026-${String(Math.floor(1000 + Math.random()*9000))}`;
    } while (state.reservations.some(r => r.id === id));
    return id;
  }

  function confirmReservation() {
    const exp = experienceById(state.currentExperience);
    const errors = validateReservation();
    showBookingErrors(errors);
    if (Object.keys(errors).length) {
      toast('Revise os campos destacados antes de confirmar.', 'error');
      return;
    }
    const reservation = {
      id: generateReservationId(), experienciaId: exp.id, turista: state.booking.name.trim(), email: state.booking.email.trim(),
      data: state.booking.date, horario: state.booking.time, participantes: state.booking.participants,
      precoUnitario: exp.preco, valorTotal: calculateReservation(), status: 'Confirmada', criadoEm: new Date().toISOString()
    };
    state.reservations.push(reservation);
    const disp = exp.disponibilidade.find(d => d.data === reservation.data);
    if (disp) disp.vagasDisponiveis = Math.max(0, disp.vagasDisponiveis - reservation.participantes);
    state.booking.confirmed = reservation;
    saveState();
    toast('Reserva confirmada com sucesso.', 'success');
    renderApp();
  }

  function renderGuideDashboard() {
    const marina = guideById('g-marina');
    const marinaExps = state.experiences.filter(e => e.guiaId === marina.id);
    const marinaIds = new Set(marinaExps.map(e => e.id));
    const reservations = state.reservations.filter(r => marinaIds.has(r.experienciaId)).sort((a,b) => `${a.data}${a.horario}`.localeCompare(`${b.data}${b.horario}`));
    const confirmed = reservations.filter(r => r.status === 'Confirmada');
    const participants = confirmed.reduce((sum,r) => sum + r.participantes, 0);
    const revenue = confirmed.reduce((sum,r) => sum + r.valorTotal, 0);
    const avg = marinaExps.length ? marinaExps.reduce((s,e) => s + e.avaliacao,0)/marinaExps.length : marina.avaliacao;

    return `<section class="dashboard-hero"><div class="container"><div class="dashboard-hero-inner"><div><p class="eyebrow" style="color:#ffd2b8">Painel do guia</p><h1>Olá, Marina</h1><p>Acompanhe suas experiências e próximas reservas.</p></div><div class="dashboard-guide">${imageMarkup(marina.foto, 'Foto de Marina Costa')}<div><strong>${marina.nome}</strong><small>${marina.numeroCredencial}</small></div></div></div></div></section>
      <section class="section"><div class="container"><div class="stats-grid">
        <div class="stat-card"><span>Experiências publicadas</span><strong>${marinaExps.length}</strong></div>
        <div class="stat-card"><span>Reservas confirmadas</span><strong>${confirmed.length}</strong></div>
        <div class="stat-card"><span>Participantes este mês</span><strong>${participants}</strong></div>
        <div class="stat-card"><span>Receita prevista</span><strong>${money(revenue)}</strong></div>
        <div class="stat-card"><span>Avaliação média</span><strong>${avg.toFixed(1).replace('.',',')}</strong></div>
      </div></div></section>
      <section class="section"><div class="container"><div class="dashboard-grid"><div><div class="section-heading"><div><p class="eyebrow">Agenda</p><h2>Próximas reservas</h2></div></div>${reservations.length ? `<div class="table-shell"><table><thead><tr><th>Turista</th><th>Experiência</th><th>Data</th><th>Horário</th><th>Participantes</th><th>Valor</th><th>Status</th></tr></thead><tbody>${reservations.map(r => { const exp=experienceById(r.experienciaId); return `<tr><td data-label="Turista">${escapeHTML(r.turista)}</td><td data-label="Experiência">${escapeHTML(exp?.titulo || 'Experiência')}</td><td data-label="Data">${formatDate(r.data)}</td><td data-label="Horário">${r.horario}</td><td data-label="Participantes">${r.participantes}</td><td data-label="Valor">${money(r.valorTotal)}</td><td data-label="Status"><span class="status-badge status-${r.status.toLowerCase()}">${r.status}</span></td></tr>`; }).join('')}</tbody></table></div>` : `<div class="empty-state"><h3>Nenhuma reserva próxima</h3><p>Novas reservas aparecerão aqui automaticamente.</p></div>`}</div>
      <div><div class="section-heading"><div><p class="eyebrow">Catálogo</p><h2>Minhas experiências</h2></div><button class="button button-primary button-small" type="button" data-action="new-experience">+ Nova experiência</button></div><div class="guide-experience-list">${marinaExps.map(exp => `<article class="guide-experience-item"><div class="guide-experience-top"><div><span class="status-badge status-published">Publicada</span><h3>${escapeHTML(exp.titulo)}</h3></div><button class="button button-outline button-small" type="button" data-action="edit-experience" data-id="${exp.id}">Editar</button></div><div class="guide-experience-meta"><span>${money(exp.preco)} por pessoa</span><span>${reservations.filter(r => r.experienciaId===exp.id).length} reservas</span><span>★ ${exp.avaliacao.toFixed(1).replace('.',',')}</span></div></article>`).join('')}</div></div></div></div></section>`;
  }

  function openModal(content, options = {}) {
    const label = options.label || 'Janela de diálogo';
    modalRoot.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal ${options.large ? 'modal-large' : ''}" role="dialog" aria-modal="true" aria-label="${escapeHTML(label)}" data-modal-panel>${content}</section></div>`;
    document.body.classList.add('modal-open');
    const panel = modalRoot.querySelector('[data-modal-panel]');
    panel.addEventListener('click', e => e.stopPropagation());
    setTimeout(() => modalRoot.querySelector('button, input, select, textarea')?.focus(), 0);
  }

  function closeModal() {
    modalRoot.innerHTML = '';
    document.body.classList.remove('modal-open');
  }

  function openReservationsModal() {
    const own = state.reservations.filter(r => !initialGuideReservations.some(base => base.id === r.id));
    openModal(`<div class="modal-header"><h2>Minhas Reservas</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Fechar">×</button></div><div class="modal-body">${own.length ? `<div class="reservation-list">${own.map(r => { const exp=experienceById(r.experienciaId); return `<article class="reservation-card"><h3>${escapeHTML(exp?.titulo || 'Experiência')}</h3><dl><dt>Código</dt><dd>${r.id}</dd><dt>Data</dt><dd>${formatDate(r.data)} às ${r.horario}</dd><dt>Participantes</dt><dd>${r.participantes}</dd><dt>Total</dt><dd>${money(r.valorTotal)}</dd><dt>Status</dt><dd><span class="status-badge status-${r.status.toLowerCase()}">${r.status}</span></dd></dl><button class="button button-outline button-small" style="margin-top:12px" data-action="view-experience" data-id="${r.experienciaId}">Ver experiência</button></article>`; }).join('')}</div>` : `<div class="empty-state"><h3>Você ainda não possui reservas</h3><p>Escolha uma experiência e confirme sua primeira reserva.</p><button class="button button-primary" data-action="close-and-explore">Explorar experiências</button></div>`}</div>`, { label:'Minhas reservas' });
  }

  function openGuideInfoModal() {
    openModal(`<div class="modal-header"><h2>Para Guias</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Fechar">×</button></div><div class="modal-body"><p class="eyebrow">Venda experiências, não apenas passeios</p><h3>Organize seu catálogo e suas reservas em um só lugar.</h3><p>Na RotaLocal, guias credenciados podem apresentar roteiros, disponibilidade, preço e especialidades, além de acompanhar participantes e novas reservas.</p><div class="include-grid"><ul class="include-list"><li class="yes">Catálogo visual de experiências</li><li class="yes">Agenda e disponibilidade</li><li class="yes">Reservas organizadas por data</li></ul><ul class="include-list"><li class="yes">Indicadores de receita</li><li class="yes">Gestão de participantes</li><li class="yes">Perfil com credencial verificada</li></ul></div></div><div class="modal-footer"><button class="button button-primary" type="button" data-action="close-and-guide">Acessar demonstração da Área do Guia</button></div>`, { label:'Informações para guias' });
  }

  function experienceFormModal(exp = null) {
    const editing = Boolean(exp);
    openModal(`<form id="experience-form" novalidate><div class="modal-header"><h2>${editing ? 'Editar experiência' : 'Nova experiência'}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Fechar">×</button></div><div class="modal-body"><div class="form-grid">
      <div class="field span-2"><label for="exp-title">Título</label><input id="exp-title" name="title" value="${escapeHTML(exp?.titulo || '')}" required></div>
      <div class="field"><label for="exp-destination">Destino</label><input id="exp-destination" name="destination" placeholder="Gramado — RS" value="${escapeHTML(exp ? `${exp.cidade} — ${exp.estado}` : '')}" required></div>
      <div class="field"><label for="exp-category">Categoria</label><select id="exp-category" name="category" required>${['História e Cultura','Gastronomia','Natureza','Aventura','Arte e Cultura'].map(c => `<option ${exp?.categoria===c?'selected':''}>${c}</option>`).join('')}</select></div>
      <div class="field span-2"><label for="exp-description">Descrição</label><textarea id="exp-description" name="description" required>${escapeHTML(exp?.descricaoCompleta || '')}</textarea></div>
      <div class="field"><label for="exp-price">Preço por pessoa</label><input id="exp-price" name="price" type="number" min="1" step="1" value="${exp?.preco || ''}" required></div>
      <div class="field"><label for="exp-duration">Duração</label><input id="exp-duration" name="duration" placeholder="3 horas" value="${escapeHTML(exp?.duracao || '')}" required></div>
      <div class="field"><label for="exp-capacity">Capacidade</label><input id="exp-capacity" name="capacity" type="number" min="1" max="30" value="${exp?.capacidade || 8}" required></div>
      <div class="field"><label for="exp-languages">Idiomas</label><input id="exp-languages" name="languages" placeholder="Português, Inglês" value="${escapeHTML(exp?.idiomas?.join(', ') || 'Português')}" required></div>
      <div class="field span-2"><label for="exp-meeting">Ponto de encontro</label><input id="exp-meeting" name="meeting" value="${escapeHTML(exp?.pontoEncontro || '')}" required></div>
    </div><p class="field-error" id="experience-form-error"></p></div><div class="modal-footer"><button class="button button-outline" type="button" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">${editing ? 'Salvar alterações' : 'Publicar experiência'}</button></div><input type="hidden" name="experienceId" value="${exp?.id || ''}"></form>`, { label: editing ? 'Editar experiência' : 'Nova experiência', large:true });
  }

  function createExperience(form) {
    const fd = new FormData(form);
    const title = fd.get('title').trim();
    const destination = fd.get('destination').trim();
    const description = fd.get('description').trim();
    const price = Number(fd.get('price'));
    const capacity = Number(fd.get('capacity'));
    const duration = fd.get('duration').trim();
    const meeting = fd.get('meeting').trim();
    const editId = fd.get('experienceId').trim();
    if (!title || !destination || !description || !price || !capacity || !duration || !meeting) {
      document.getElementById('experience-form-error').textContent = 'Preencha todos os campos obrigatórios.';
      return;
    }
    const parts = destination.split(/[—-]/).map(x => x.trim()).filter(Boolean);
    const city = parts[0] || destination;
    const estado = parts[1] || 'RS';
    const languages = fd.get('languages').split(',').map(x => x.trim()).filter(Boolean);
    const durationHours = parseFloat(duration.replace(',', '.')) || 3;
    const base = {
      titulo:title, cidade:city, estado, categoria:fd.get('category'), descricaoCurta: description.length > 145 ? `${description.slice(0,142)}...` : description,
      descricaoCompleta:description, preco:price, duracao:duration, duracaoHoras:durationHours, capacidade:capacity, idiomas:languages, pontoEncontro:meeting,
      guiaId:'g-marina', destaque:false, avaliacao: editId ? experienceById(editId).avaliacao : 5.0, quantidadeAvaliacoes: editId ? experienceById(editId).quantidadeAvaliacoes : 0,
      inclusos: editId ? experienceById(editId).inclusos : ['Guia credenciada','Roteiro conduzido','Material digital'],
      naoInclusos: editId ? experienceById(editId).naoInclusos : ['Alimentação','Transporte até o ponto de encontro'],
      roteiro: editId ? experienceById(editId).roteiro : [['09:00','Encontro com o grupo'],['09:20','Início do roteiro'],['10:30','Parada principal'],['11:30','Experiência local'],['12:00','Encerramento']],
      imagens: editId ? experienceById(editId).imagens : [IMG('photo-1500530855697-b586d89ba3ee'), IMG('photo-1526772662000-3f88f10405ff'), IMG('photo-1530789253388-582c481c54b0')],
      disponibilidade: editId ? experienceById(editId).disponibilidade : [
        { id:`disp-${Date.now()}-1`, experienciaId:'', data:'2026-10-10', horarios:['09:00','14:00'], vagasDisponiveis:capacity },
        { id:`disp-${Date.now()}-2`, experienciaId:'', data:'2026-10-11', horarios:['10:00'], vagasDisponiveis:capacity }
      ]
    };
    if (editId) {
      const idx = state.experiences.findIndex(e => e.id === editId);
      state.experiences[idx] = { ...state.experiences[idx], ...base, id:editId };
      toast('Experiência atualizada.', 'success');
    } else {
      const id = `exp-marina-${Date.now()}`;
      base.id = id;
      base.disponibilidade.forEach(d => d.experienciaId = id);
      state.experiences.push(base);
      toast('Experiência criada e publicada no catálogo.', 'success');
    }
    saveState();
    closeModal();
    renderApp();
  }

  function bindScreenEvents() {
    document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', () => navigateTo(el.dataset.nav)));
    document.querySelectorAll('[data-action="view-experience"], [data-action="choose-experience"]').forEach(el => el.addEventListener('click', () => { closeModal(); navigateTo('details',{experienceId:el.dataset.id}); }));
    document.querySelectorAll('[data-action="toggle-comparison"], [data-action="remove-comparison"]').forEach(el => el.addEventListener('click', () => toggleComparison(el.dataset.id)));
    document.querySelectorAll('[data-action="clear-filters"]').forEach(el => el.addEventListener('click', () => { state.filters={query:'',destination:'',category:'',price:'',duration:'',rating:''}; renderApp(); }));
    document.querySelectorAll('[data-action="new-experience"]').forEach(el => el.addEventListener('click', () => experienceFormModal()));
    document.querySelectorAll('[data-action="edit-experience"]').forEach(el => el.addEventListener('click', () => experienceFormModal(experienceById(el.dataset.id))));
    document.querySelectorAll('[data-action="open-reservations"]').forEach(el => el.addEventListener('click', openReservationsModal));

    const heroForm = document.getElementById('hero-search-form');
    if (heroForm) heroForm.addEventListener('submit', e => { e.preventDefault(); state.filters.query = new FormData(heroForm).get('query').trim(); state.isLoading=true; renderApp(); setTimeout(()=>{ state.isLoading=false; renderApp(); document.getElementById('filters-title')?.scrollIntoView({behavior:'smooth'}); },250); });
    const filters = document.getElementById('filters-form');
    if (filters) filters.addEventListener('change', () => { const fd=new FormData(filters); state.filters.destination=fd.get('destination'); state.filters.category=fd.get('category'); state.filters.price=fd.get('price'); state.filters.duration=fd.get('duration'); state.filters.rating=fd.get('rating'); renderApp(); });

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      const nameInput = document.getElementById('tourist-name');
      const emailInput = document.getElementById('tourist-email');
      nameInput?.addEventListener('input', e => { state.booking.name=e.target.value; });
      emailInput?.addEventListener('input', e => { state.booking.email=e.target.value; });
      bookingForm.addEventListener('submit', e => { e.preventDefault(); state.booking.name=nameInput.value; state.booking.email=emailInput.value; confirmReservation(); });
    }
    document.querySelectorAll('[data-action="select-date"]').forEach(el => el.addEventListener('click', () => { state.booking.date=el.dataset.date; state.booking.time=''; const exp=experienceById(state.currentExperience); const disp=exp.disponibilidade.find(d=>d.data===state.booking.date); state.booking.participants=Math.min(state.booking.participants,disp.vagasDisponiveis); renderApp(); }));
    document.querySelectorAll('[data-action="select-time"]').forEach(el => el.addEventListener('click', () => { state.booking.time=el.dataset.time; renderApp(); }));
    document.querySelectorAll('[data-action="participants-minus"]').forEach(el => el.addEventListener('click', () => { state.booking.participants=Math.max(1,state.booking.participants-1); renderApp(); }));
    document.querySelectorAll('[data-action="participants-plus"]').forEach(el => el.addEventListener('click', () => { const exp=experienceById(state.currentExperience); const disp=exp.disponibilidade.find(d=>d.data===state.booking.date); const max=disp?disp.vagasDisponiveis:exp.capacidade; state.booking.participants=Math.min(max,state.booking.participants+1); renderApp(); }));
  }

  function handleGlobalClick(e) {
    const target = e.target.closest('[data-action], [data-nav]');
    if (!target) return;
    const action = target.dataset.action;
    if (target.closest('#main-content')) return;
    if (target.dataset.nav) navigateTo(target.dataset.nav);
    if (action === 'clear-comparison') { state.comparison=[]; saveState(); renderApp(); toast('Comparação limpa.'); }
    if (action === 'open-reservations') openReservationsModal();
    if (action === 'guide-info') openGuideInfoModal();
    if (action === 'close-modal') closeModal();
    if (action === 'close-and-explore') { closeModal(); navigateTo('explore'); }
    if (action === 'close-and-guide') { closeModal(); navigateTo('guide'); }
    if (action === 'view-experience') { closeModal(); navigateTo('details',{experienceId:target.dataset.id}); }
  }

  function closeMobileMenu() {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded','false');
  }

  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', handleGlobalClick);
  document.addEventListener('submit', e => {
    if (e.target.matches?.('#experience-form')) { e.preventDefault(); createExperience(e.target); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalRoot.innerHTML) closeModal();
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#','');
    if (!hash) return;
    if (hash.startsWith('details/')) {
      const id = hash.split('/')[1];
      if (experienceById(id)) { state.currentExperience=id; state.screen='details'; setActiveNav('details'); renderApp(); }
    } else if (['explore','compare','guide'].includes(hash)) {
      if (hash==='compare' && !state.comparison.length) return;
      state.screen=hash; setActiveNav(hash); renderApp();
    }
  });

  loadState();
  const initialHash = window.location.hash.replace('#','');
  if (initialHash.startsWith('details/')) {
    const id = initialHash.split('/')[1];
    if (experienceById(id)) { state.currentExperience=id; state.screen='details'; }
  } else if (['explore','compare','guide'].includes(initialHash)) {
    state.screen = initialHash==='compare' && !state.comparison.length ? 'explore' : initialHash;
  }
  setActiveNav(state.screen);
  renderApp();
})();
