// Aguarda o carregamento total do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO NO HEADER AO ROLAR A PÁGINA
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.backdropFilter = "blur(5px)"; // Efeito de vidro fosco moderno
        } else {
            header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
            header.style.background = "#FFFFFF";
            header.style.backdropFilter = "none";
        }
    });

    // 2. ANIMAÇÃO DE REVELAÇÃO (SCROLL REVEAL)
    // Seleciona os elementos que vão aparecer com animação
    const elementosAnimar = document.querySelectorAll(".card, .sobre-texto, .contato-container");

    // Configura o estilo inicial dos elementos via JS para evitar problemas se o JS estiver desativado
    elementosAnimar.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    const checarScroll = () => {
        const gatilhoAtivacao = (window.innerHeight / 5) * 4; // 80% da tela

        elementosAnimar.forEach(el => {
            const topoElemento = el.getBoundingClientRect().top;

            if (topoElemento < gatilhoAtivacao) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Executa uma vez ao carregar e depois a cada rolagem
    checarScroll();
    window.addEventListener("scroll", checarScroll);

    // 3. LOG DE CONFIRMAÇÃO (Opcional - Bom para verificar no console do VS)
    console.log("✨ Script da Lash Studio carregado com sucesso!");
});
