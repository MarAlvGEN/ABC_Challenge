const gallery = document.getElementById('gallery');

gallery.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  if (!card) return;

  voltear(card);
});

function voltear(card) {
  const yaEstabaVolteada = card.classList.contains('volteada');
  card.classList.toggle('volteada');
}
