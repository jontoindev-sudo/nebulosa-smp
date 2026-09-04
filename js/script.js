const ip = document.getElementById('server-ip');
const copyButton = document.getElementById('copy-ip');

if (copyButton && ip) {
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(ip.textContent.trim());
            copyButton.textContent = 'Copiado!';
            setTimeout(() => copyButton.textContent = 'Copiar IP', 1500);
        } catch {
            copyButton.textContent = 'Copie manualmente';
        }
    });
}

// --- Status real do servidor via API pública mcsrvstat.us ---
// Endereço usado para CONSULTAR o status (IP:porta real do servidor).
// O que aparece na tela pro jogador copiar é o domínio (definido no HTML).
const SERVER_QUERY_ADDRESS = '103.88.233.81:35654';

// Se quiser trocar para o servidor de MANUTENÇÃO manualmente (ex: durante updates),
// basta mudar esta flag para true. Ela tem prioridade sobre a consulta da API.
const MANUTENCAO = true;

const statusEl = document.getElementById('server-status');
const playersEl = document.getElementById('players');

async function atualizarStatusServidor() {
    if (!statusEl) return;

    if (MANUTENCAO) {
        statusEl.textContent = '● Em manutenção';
        statusEl.className = 'maintenance';
        if (playersEl) playersEl.textContent = '--';
        return;
    }

    try {
        const resposta = await fetch(`https://api.mcsrvstat.us/3/${SERVER_QUERY_ADDRESS}`);
        if (!resposta.ok) throw new Error('Falha na consulta');
        const dados = await resposta.json();

        if (dados.online) {
            statusEl.textContent = '● Online';
            statusEl.className = 'online';
            if (playersEl) {
                const online = dados.players?.online ?? '--';
                const max = dados.players?.max ?? '--';
                playersEl.textContent = `${online} / ${max}`;
            }
        } else {
            statusEl.textContent = '● Offline';
            statusEl.className = 'offline';
            if (playersEl) playersEl.textContent = '--';
        }
    } catch (erro) {
        statusEl.textContent = '● Indisponível';
        statusEl.className = 'offline';
        if (playersEl) playersEl.textContent = '--';
        console.error('Erro ao consultar status do servidor:', erro);
    }
}

atualizarStatusServidor();
// Atualiza a cada 60 segundos automaticamente.
setInterval(atualizarStatusServidor, 60000);
