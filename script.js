/*Objeto com páginas da aplicação*/
const pages = {
  /*Página home*/
  home: {
    title: 'Início',
    content: `
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-content">
            <h1>Domine o Jogo dos Reis</h1>
            <p class="hero-subtitle">Aprenda xadrez do zero ao profissional com nossos cursos estruturados.</p>
            <button class="btn btn-primary" onclick="loadPage('aberturas')">
              <i class="fas fa-play-circle"></i> Começar
            </button>
          </div>
          <div class="hero-visual">
            <div class="chess-pieces">
              <div class="piece">♔</div>
              <div class="piece">♕</div>
              <div class="piece">♖</div>
              <div class="piece">♗</div>
              <div class="piece">♘</div>
              <div class="piece">♙</div>
            </div>
          </div>
        </div>
      </section>

      <section class="learn-section" style="background: var(--dark-secondary);">
        <div class="container">
          <div class="section-header">
            <h2>Como Funciona</h2>
            <p class="section-subtitle">Aprenda xadrez através de conceitos fundamentais</p>
          </div>
          <div class="cards-grid">
            <div class="card" onclick="loadPage('aberturas')">
              <div class="card-icon">📚</div>
              <h3>Aberturas</h3>
              <p>Domine as primeiras jogadas e posição vantajosa.</p>
            </div>
            <div class="card" onclick="loadPage('taticas')">
              <div class="card-icon">⚔️</div>
              <h3>Táticas</h3>
              <p>Reconheça padrões e execute combinações ganhadoras.</p>
            </div>
            <div class="card" onclick="loadPage('finais')">
              <div class="card-icon">👑</div>
              <h3>Finais</h3>
              <p>Converta vantagens em vitória com finais essenciais.</p>
            </div>
            <div class="card" onclick="loadPage('sobre')">
              <div class="card-icon">ℹ️</div>
              <h3>Sobre</h3>
              <p>Conheça mais sobre a plataforma ChessKS.</p>
            </div>
          </div>
        </div>
      </section>
    `
  },

  /*Página aberturas*/
  aberturas: {
    title: 'Aberturas',
    content: `
      <section class="content-section" style="background: var(--dark-bg);">
        <div class="container">
          <div class="section-header">
            <h2>Aberturas de Xadrez</h2>
            <p class="section-subtitle">Domine as principais aberturas do xadrez moderno</p>
          </div>
          <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('classicas', this)">Clássicas</button>
            <button class="tab-btn" onclick="switchTab('modernas', this)">Modernas</button>
            <button class="tab-btn" onclick="switchTab('gambitos', this)">Gambitos</button>
          </div>
          <div id="classicas" class="tab-content active">
            <div class="content-grid">
              <div class="content-card">
                <h3>Ruy Lopez</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Uma das aberturas mais populares com jogo estratégico profundo.</p>
                <ul>
                  <li>✓ Controle do centro</li>
                  <li>✓ Ataque ao cavalo</li>
                  <li>✓ Múltiplas variações</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Abertura Italiana</h3>
                <div class="difficulty-badge">Iniciante</div>
                <p>Desenvolvimento rápido e controle do centro.</p>
                <ul>
                  <li>✓ Desenvolvimento rápido</li>
                  <li>✓ Táticas diretas</li>
                  <li>✓ Fácil de entender</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Defesa Francesa</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Resistência sólida para preto contra 1.e4.</p>
                <ul>
                  <li>✓ Posição sólida</li>
                  <li>✓ Contra-ataque</li>
                  <li>✓ Estrutura única</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="modernas" class="tab-content">
            <div class="content-grid">
              <div class="content-card">
                <h3>Defesa Caro-Kann</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Flexível e sólida para preto.</p>
                <ul>
                  <li>✓ Estrutura sólida</li>
                  <li>✓ Desenvolvimento seguro</li>
                  <li>✓ Contra-ataque</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Abertura Inglesa</h3>
                <div class="difficulty-badge">Avançado</div>
                <p>Controle lateral do centro com 1.c4.</p>
                <ul>
                  <li>✓ Controle lateral</li>
                  <li>✓ Flexibilidade estratégica</li>
                  <li>✓ Posições únicas</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Abertura Escandinava</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Resposta agressiva de preto com 1...d5.</p>
                <ul>
                  <li>✓ Contra-ataque imediato</li>
                  <li>✓ Posição ativa</li>
                  <li>✓ Muito dinâmica</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="gambitos" class="tab-content">
            <div class="content-grid">
              <div class="content-card">
                <h3>Gambito da Rainha</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>1.d4 d5 2.c4. Oferece peão por desenvolvimento.</p>
                <ul>
                  <li>✓ Oferece peão</li>
                  <li>✓ Controle do centro</li>
                  <li>✓ Posição sólida</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Gambito do Rei</h3>
                <div class="difficulty-badge">Avançado</div>
                <p>1.e4 e5 2.f4. Clássico com ataque agressivo.</p>
                <ul>
                  <li>✓ Ataque agressivo</li>
                  <li>✓ Clássico histórico</li>
                  <li>✓ Muito dinâmico</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Gambito Dinamarquês</h3>
                <div class="difficulty-badge">Avançado</div>
                <p>Sacrifica peão por iniciativa e posição.</p>
                <ul>
                  <li>✓ Sacrifício de peão</li>
                  <li>✓ Posição ativa</li>
                  <li>✓ Requer coragem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  },

  /*Página táticas*/
  taticas: {
    title: 'Táticas',
    content: `
      <section class="content-section" style="background: var(--dark-secondary);">
        <div class="container">
          <div class="section-header">
            <h2>Táticas de Xadrez</h2>
            <p class="section-subtitle">Aprenda os padrões táticos fundamentais</p>
          </div>
          <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('basicas', this)">Básicas</button>
            <button class="tab-btn" onclick="switchTab('intermediarias', this)">Intermediárias</button>
            <button class="tab-btn" onclick="switchTab('avancadas', this)">Avançadas</button>
          </div>
          <div id="basicas" class="tab-content active">
            <div class="content-grid">
              <div class="content-card">
                <h3>Garfo</h3>
                <p>Uma peça ataca dois inimigos simultaneamente.</p>
                <div class="tactic-example">Cavalo em f6 ataca rei e torre</div>
                <ul>
                  <li>✓ Padrão mais comum</li>
                  <li>✓ Ganha material</li>
                  <li>✓ Fundamental treinar</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Cravada</h3>
                <p>Peça não pode se mover sem expor peça mais valiosa.</p>
                <div class="tactic-example">Bispo crava cavalo contra rei</div>
                <ul>
                  <li>✓ Imobiliza peças</li>
                  <li>✓ Ganha tempo</li>
                  <li>✓ Muito efetiva</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Ataque Duplo</h3>
                <p>Uma peça ataca dois alvos não defendidos.</p>
                <div class="tactic-example">Rainha ataca dois bispos</div>
                <ul>
                  <li>✓ Parecido com garfo</li>
                  <li>✓ Ganho de material</li>
                  <li>✓ Muito comum</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Descoberto</h3>
                <p>Movendo uma peça, descobre ataque de outra.</p>
                <div class="tactic-example">Torre detrás do bispo</div>
                <ul>
                  <li>✓ Dois ataques simultâneos</li>
                  <li>✓ Difícil defender</li>
                  <li>✓ Muito poderosa</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="intermediarias" class="tab-content">
            <div class="content-grid">
              <div class="content-card">
                <h3>Espeto</h3>
                <p>Inverso da cravada. Força movimento expondo peça.</p>
                <div class="tactic-example">Bispo ataca cavalo descobrindo rei</div>
                <ul>
                  <li>✓ Inverso da cravada</li>
                  <li>✓ Ganha tempo tático</li>
                  <li>✓ Posição vantajosa</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Sacrifício</h3>
                <p>Entrega peça para ganho estratégico maior.</p>
                <div class="tactic-example">Sacrifica bispo para abertura de linhas</div>
                <ul>
                  <li>✓ Criatividade necessária</li>
                  <li>✓ Ganha iniciativa</li>
                  <li>✓ Pode levar ao mate</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Bloqueio</h3>
                <p>Bloqueia ação de uma peça inimiga.</p>
                <div class="tactic-example">Peão bloqueia bispo ou torre</div>
                <ul>
                  <li>✓ Defesa ativa</li>
                  <li>✓ Reduz pressão</li>
                  <li>✓ Estratégica</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Desvio</h3>
                <p>Força peça defensora sair de sua posição.</p>
                <div class="tactic-example">Ataque peça defensora com ganho de material</div>
                <ul>
                  <li>✓ Enfraquece defesa</li>
                  <li>✓ Criativa</li>
                  <li>✓ Posição vantajosa</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="avancadas" class="tab-content">
            <div class="content-grid">
              <div class="content-card">
                <h3>Combinação</h3>
                <p>Sequência de movimentos forçados levando à vantagem.</p>
                <div class="tactic-example">Garfo + ataque duplo = ganho de rainha</div>
                <ul>
                  <li>✓ Múltiplos motivos</li>
                  <li>✓ Grande ganho</li>
                  <li>✓ Cálculo profundo</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Ataque ao Rei</h3>
                <p>Sequência de movimentos para alcançar mate.</p>
                <div class="tactic-example">Abertura do flanco + sacrifício</div>
                <ul>
                  <li>✓ Objetivo: mate</li>
                  <li>✓ Requer coragem</li>
                  <li>✓ Vitória decisiva</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Zugzwang</h3>
                <p>Qualquer movimento piora a situação.</p>
                <div class="tactic-example">Rei não pode se mover sem piorar</div>
                <ul>
                  <li>✓ Força movimento ruim</li>
                  <li>✓ Ganho sem movimento</li>
                  <li>✓ Muito poderosa</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Posição Vencedora</h3>
                <p>Vitória teórica aplicada corretamente.</p>
                <div class="tactic-example">Rainha + Rei contra Rei</div>
                <ul>
                  <li>✓ Conhecimento teórico</li>
                  <li>✓ Padrões de mate</li>
                  <li>✓ Não cometa erros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  },

  /*Página finais*/
  finais: {
    title: 'Finais',
    content: `
      <section class="content-section" style="background: var(--dark-bg);">
        <div class="container">
          <div class="section-header">
            <h2>Finais de Xadrez</h2>
            <p class="section-subtitle">Domine os finais essenciais para conquistar vitória</p>
          </div>
          <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('basicos', this)">Básicos</button>
            <button class="tab-btn" onclick="switchTab('intermediarios-f', this)">Intermediários</button>
          </div>
          <div id="basicos" class="tab-content active">
            <div class="content-grid">
              <div class="content-card">
                <h3>Mate com Rainha</h3>
                <div class="difficulty-badge">Iniciante</div>
                <p>Mate mais rápido em máximo 10 lances.</p>
                <ul>
                  <li>✓ Padrão fundamental</li>
                  <li>✓ 10 lances máximo</li>
                  <li>✓ Muito importante</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Mate com Torre</h3>
                <div class="difficulty-badge">Iniciante</div>
                <p>Torre + Rei contra Rei com técnica importante.</p>
                <ul>
                  <li>✓ Padrão bem definido</li>
                  <li>✓ Cheques nas laterais</li>
                  <li>✓ Todos devem saber</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Rei e Peão vs Rei</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Conceito de oposição e casas críticas.</p>
                <ul>
                  <li>✓ Oposição do rei</li>
                  <li>✓ Casas críticas</li>
                  <li>✓ Promoção de peão</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Mate com Dois Bispos</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Dois Bispos + Rei contra Rei.</p>
                <ul>
                  <li>✓ Padrão de mate</li>
                  <li>✓ Mais lances que rainha</li>
                  <li>✓ Casas de cor única</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="intermediarios-f" class="tab-content">
            <div class="content-grid">
              <div class="content-card">
                <h3>Torre e Peão</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Torre + Rei + Peão vs Torre + Rei.</p>
                <ul>
                  <li>✓ Frequente em partidas</li>
                  <li>✓ Muitas posições</li>
                  <li>✓ Valor prático alto</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Final de Peões</h3>
                <div class="difficulty-badge">Intermediário</div>
                <p>Apenas reis e peões. Cada movimento decide.</p>
                <ul>
                  <li>✓ Cada movimento conta</li>
                  <li>✓ Precisão é chave</li>
                  <li>✓ Triângulo mágico</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Rainha vs Torre</h3>
                <div class="difficulty-badge">Avançado</div>
                <p>Rainha + Rei contra Torre + Rei.</p>
                <ul>
                  <li>✓ Rainha mais forte</li>
                  <li>✓ Requer cuidado</li>
                  <li>✓ Armadilhas possíveis</li>
                </ul>
              </div>
              <div class="content-card">
                <h3>Bispo e Cavalo vs Rei</h3>
                <div class="difficulty-badge">Avançado</div>
                <p>Bispo + Cavalo + Rei contra Rei.</p>
                <ul>
                  <li>✓ Mate possível</li>
                  <li>✓ Muito técnico</li>
                  <li>✓ Padrão importante</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  },

  /*Página sobre*/
  sobre: {
    title: 'Sobre',
    content: `
      <section class="content-section" style="background: var(--dark-secondary);">
        <div class="container">
          <div class="section-header">
            <h2>Sobre o ChessKS</h2>
            <p class="section-subtitle">Educação de qualidade em xadrez para todos</p>
          </div>
          <div class="about-content">
            <div class="about-text">
              <p>ChessKS é uma plataforma educacional dedicada a ensinar xadrez de forma <strong>moderna, organizada e acessível</strong> para pessoas de todas as idades.</p>
              <p>Acreditamos que <strong>qualquer pessoa pode aprender e evoluir no xadrez</strong> com dedicação e orientação correta.</p>
              <p>Do iniciante absoluto até o jogador mais avançado, sempre há algo novo para aprender neste jogo fascinante e infinito.</p>
            </div>
            <div class="about-features">
              <div class="feature">
                <h4>📚 Conteúdo Estruturado</h4>
                <p>Organizado do zero até avançado com progressão lógica.</p>
              </div>
              <div class="feature">
                <h4>🎮 Interativo</h4>
                <p>Aprenda teoria e pratique em plataformas reais.</p>
              </div>
              <div class="feature">
                <h4>🚀 Para Todos</h4>
                <p>Iniciantes ou experientes sempre há algo novo.</p>
              </div>
              <div class="feature">
                <h4>💎 Profissional</h4>
                <p>Baseado em princípios de grandes mestres.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }
};

/*Função para carregar página*/
function loadPage(pageName) {
  const page = pages[pageName];
  if (!page) return;

  /*Atualiza conteúdo da página*/
  document.getElementById('mainContent').innerHTML = page.content;
  /*Atualiza título*/
  document.title = `ChessKS - ${page.title}`;
  /*Scroll ao topo*/
  window.scrollTo(0, 0);
  /*Fecha menu mobile*/
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('navMenu').classList.remove('active');
}

/*Função para trocar aba*/
function switchTab(tabName, btn) {
  /*Remove ativa de todas as abas*/
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.remove('active');
  });
  /*Remove ativo de todos botões*/
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('active');
  });

  /*Ativa aba selecionada*/
  document.getElementById(tabName).classList.add('active');
  /*Ativa botão selecionado*/
  btn.classList.add('active');
}

/*Inicializa quando página carrega*/
document.addEventListener('DOMContentLoaded', () => {
  /*Abre/fecha menu quando clica no hamburguer*/
  document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navMenu').classList.toggle('active');
  });

  /*Carrega página inicial*/
  loadPage('home');
});