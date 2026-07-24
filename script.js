const gallery = document.getElementById("gallery");
const counter = document.getElementById("contador");
const btnTodas = document.getElementById("todas");
const btnVocales = document.getElementById("vocales");
const tarjetas = document.querySelectorAll(".card");

gallery.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;

  voltear(card);
});

btnTodas.addEventListener("click", mostrarTodas);
btnVocales.addEventListener("click", mostrarVocales);

function voltear(card) {
  card.classList.toggle("volteada");

  const yaFueVista = card.classList.contains("vista");

  if (!yaFueVista) {
    card.classList.add("vista");
  }

  actualizarContador();
}

function actualizarContador() {
  const vistasVisibles = document.querySelectorAll(".card.vista:not(.oculta)");
  counter.textContent = vistasVisibles.length;
}

function mostrarTodas() {
  btnTodas.classList.add("active");
  btnVocales.classList.remove("active");

  for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].classList.remove("oculta");
  }
  actualizarContador();
}

function mostrarVocales() {
  btnVocales.classList.add("active");
  btnTodas.classList.remove("active");

  for (let i = 0; i < tarjetas.length; i++) {
    const tarjeta = tarjetas[i];

    if (tarjeta.dataset.tipo === "vocal") {
      tarjeta.classList.remove("oculta");
    } else {
      tarjeta.classList.add("oculta");
    }
  }
  actualizarContador();
}
