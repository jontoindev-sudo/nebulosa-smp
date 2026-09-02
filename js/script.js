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

// O contador de jogadores ficará para a futura integração com o Minecraft.
