const galeria = document.getElementById("galeria");
const totalImagens = 30;

for (let i = 1; i <= totalImagens; i++) {
  const img = document.createElement("img");
  img.src = `img/fotosSD/foto (${i}).jpeg`;
  img.alt = `Foto ${i}`;
  galeria.appendChild(img);
}

// Seletores
const modal = document.getElementById("imagemModal");
const imgExpandida = document.getElementById("imgExpandida");
const fecharBtn = document.querySelector(".fechar");

// Evento: abrir imagem no modal
galeria.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    modal.style.display = "block";
    imgExpandida.src = e.target.src;
    imgExpandida.alt = e.target.alt;
  }
});

// Evento: fechar ao clicar no botão ✖️
fecharBtn.onclick = function () {
  modal.style.display = "none";
};

// Evento: fechar ao clicar fora da imagem
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Evento: fechar ao pressionar a tecla ESC
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

function tempoAtras(dataStr) {
  const hoje = new Date();
  const data = new Date(dataStr);

  const diffMs = hoje - data; // diferença em milissegundos
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDias === 0) return "Hoje";
  if (diffDias === 1) return "Há 1 dia atrás";

  // Se passar de 30 dias, calcular em meses aproximados
  if (diffDias >= 30) {
    const meses = Math.floor(diffDias / 30);
    return `Há ${meses} ${meses > 1 ? "meses" : "mês"} atrás`;
  }

  return `Há ${diffDias} dias atrás`;
}

fetch("js/avaliacoes.json")
  .then((response) => response.json())
  .then((avaliacoes) => {
    const container = document.getElementById("avaliacao");

    // limpa o container antes de inserir
    container.innerHTML = "";

    for (let i = 0; i < avaliacoes.length; i++) {
      const avaliacao = avaliacoes[i];

      const div = document.createElement("div");
      div.classList.add("card");

      //titulo
      const divtitle = document.createElement("div");
      divtitle.classList.add("card-title");

      //body
      const divbody = document.createElement("div");
      divbody.classList.add("card-body");

      //footer
      const divfooter = document.createElement("div");
      divfooter.classList.add("card-footer");

      divtitle.innerHTML = `
        <h3>${
          avaliacao.nome
        } <i class="fa-solid fa-circle-check fa-2xs" style="color: #0094dfff"></i></h3>
        <span class="data">${tempoAtras(avaliacao.data)}</span>
      `;

      // Adiciona as informações da avaliação
      divbody.innerHTML = `
        <i class="fa-solid fa-star stars-avaliacao" style="color: #ffd43b"></i>
        <i class="fa-solid fa-star stars-avaliacao" style="color: #ffd43b"></i>
        <i class="fa-solid fa-star stars-avaliacao" style="color: #ffd43b"></i>
        <i class="fa-solid fa-star stars-avaliacao" style="color: #ffd43b"></i>
        <i class="fa-solid fa-star stars-avaliacao" style="color: #ffd43b"></i>
        <p>${avaliacao.descricao}</p>
        <a href="${avaliacao.link}" class="links" target="_blank">Ler mais</a>
      `;

      divfooter.innerHTML = `
        <span class="publicado">Publicado em Google</span>
      `;

      div.appendChild(divtitle);
      div.appendChild(divbody);
      div.appendChild(divfooter);
      container.appendChild(div);
    }
  })
  .catch((error) => console.error("Erro ao carregar JSON:", error));
