const galeria = document.getElementById("galeria");

// Supondo que você tenha 100 imagens nomeadas como foto1.jpg, foto2.jpg...
const totalImagens = 27;

for (let i = 1; i <= totalImagens; i++) {
  const img = document.createElement("img");
  img.src = `img/fotosSD/foto (${i}).jpeg`;
  img.alt = `Foto ${i}`;
  galeria.appendChild(img);
}
