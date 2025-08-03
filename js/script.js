const galeria = document.getElementById("galeria");
const totalImagens = 27;

for (let i = 1; i <= totalImagens; i++) {
  const img = document.createElement("img");
  img.src = `img/fotosSD/foto (${i}).jpeg`;
  img.alt = `Foto ${i}`;
  galeria.appendChild(img);
}
