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
