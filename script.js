// script.js

const botao = document.getElementById("btnInterativo");

botao.addEventListener("click", function () {
    
    // Verifica se o card já existe (evita duplicar)
    let cardExistente = document.getElementById("card-extra");
    
    if (cardExistente) {
        cardExistente.remove();
        return;
    }

    // Cria o card
    const card = document.createElement("div");
    card.id = "card-extra";
    card.style.position = "fixed";
    card.style.top = "50%";
    card.style.left = "50%";
    card.style.transform = "translate(-50%, -50%)";
    card.style.backgroundColor = "#ffffff";
    card.style.padding = "20px";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    card.style.maxWidth = "400px";
    card.style.zIndex = "1000";

    // Conteúdo do card
    card.innerHTML = `
        <h2>Sustentabilidade no Agro</h2>
        <p>
            A sustentabilidade no agronegócio envolve técnicas como rotação de culturas,
            uso consciente da água, agricultura de precisão e redução do uso de agrotóxicos.
            Essas práticas ajudam a aumentar a produtividade sem prejudicar o meio ambiente.
        </p>
        <button id="fecharCard" style="
            margin-top: 10px;
            padding: 8px 12px;
            background: #28d470;
            border: none;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        ">Fechar</button>
    `;

    document.body.appendChild(card);

    // Botão de fechar
    document.getElementById("fecharCard").addEventListener("click", function () {
        card.remove();
    });

});
