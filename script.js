const gallery = document.getElementById('gallery');
const counter = document.getElementById('contador');

let count = 0;

gallery.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  if (!card) return;

  voltear(card);
});

function voltear(card) {
  card.classList.toggle('volteada');

  const yaFueVista = card.classList.contains('vista');

  if (!yaFueVista) {
    card.classList.add('vista');
    count++;
    counter.textContent = count;
  }
}
