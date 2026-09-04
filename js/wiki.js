const CATEGORIAS = {
    mundo: { emoji: '📜', nome: 'História do mundo' },
    personagens: { emoji: '👤', nome: 'Personagens & RPs' },
    civilizacoes: { emoji: '🏰', nome: 'Civilizações' },
    eventos: { emoji: '⚔️', nome: 'Eventos' },
};

const listaEl = document.getElementById('wiki-lista');
const botoesFiltro = document.querySelectorAll('.filtro-categoria');
let categoriaAtiva = 'todas';

function renderizarHistorias() {
    if (!listaEl) return;

    const historias = categoriaAtiva === 'todas'
        ? WIKI_DATA
        : WIKI_DATA.filter(h => h.categoria === categoriaAtiva);

    if (historias.length === 0) {
        listaEl.innerHTML = '<p class="wiki-vazio">Nenhuma história aqui ainda. Volte em breve!</p>';
        return;
    }

    listaEl.innerHTML = historias.map(h => `
        <article class="story-card">
            <span class="story-categoria">${CATEGORIAS[h.categoria].emoji} ${CATEGORIAS[h.categoria].nome}</span>
            <h3>${h.titulo}</h3>
            <p class="story-resumo">${h.resumo}</p>
            <span class="story-autor">por ${h.autor}</span>
        </article>
    `).join('');
}

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        categoriaAtiva = botao.dataset.categoria;
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        renderizarHistorias();
    });
});

renderizarHistorias();
