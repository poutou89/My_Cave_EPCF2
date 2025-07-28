// cave-plus.js

document.addEventListener('DOMContentLoaded', () => {
  // Récupération des données injectées par Twig
  const bottles = window.allBottlesFromBackend || [];
  const perPage = 12;
  let currentPage = 1;

  // Sélecteurs du DOM (ID ou classes fallback)
  const grid = document.getElementById('bottles-grid') || document.querySelector('.shelf');
  const pag = document.getElementById('pagination') || document.querySelector('.pagination');
  if (!grid || !pag) {
    console.error('🛑 #bottles-grid (ou .shelf) ou #pagination (ou .pagination) introuvable');
    return;
  }

  // Calcule le nombre total de pages
  function getTotalPages() {
    return Math.ceil(bottles.length / perPage);
  }

  // Affiche les bouteilles pour la page courante
  function renderGrid() {
    grid.innerHTML = '';
    const start = (currentPage - 1) * perPage;
    const pageItems = bottles.slice(start, start + perPage);

    pageItems.forEach(b => {
      // Wrapper .bottle
      const bottleWrapper = document.createElement('div');
      bottleWrapper.className = 'bottle';

      // Carte .bottle-card
      const card = document.createElement('a');
      card.className = 'bottle-card';
      card.href = '#';

      // Titre
      const title = document.createElement('p');
      title.textContent = `${b.name} (${b.year})`;
      card.appendChild(title);

      // Image
      const img = document.createElement('img');
      img.src = b.imageUrl;
      img.alt = b.name;
      card.appendChild(img);

      // Formulaire de retrait INSIDE de la card
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `/my-cave/bottle/${b.id}/remove`;
      const button = document.createElement('button');
      button.type = 'submit';
      button.className = 'btn';
      button.textContent = 'Retirer';
      form.appendChild(button);
      card.appendChild(form);

      // Assemblage dans le DOM
      bottleWrapper.appendChild(card);
      grid.appendChild(bottleWrapper);
    });
  }

  // Affiche la pagination
  function renderPagination() {
    pag.innerHTML = '';
    const totalPages = getTotalPages();
    if (totalPages <= 1) return;

    // Bouton Précédent
    const btnPrev = document.createElement('button');
    btnPrev.type = 'button';
    btnPrev.textContent = '‹';
    btnPrev.disabled = currentPage === 1;
    btnPrev.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        update();
      }
    });
    pag.appendChild(btnPrev);

    // Numéros de pages
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = i;
      if (i === currentPage) btn.classList.add('active');
      btn.addEventListener('click', () => {
        currentPage = i;
        update();
      });
      pag.appendChild(btn);
    }

    // Bouton Suivant
    const btnNext = document.createElement('button');
    btnNext.type = 'button';
    btnNext.textContent = '›';
    btnNext.disabled = currentPage === totalPages;
    btnNext.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        update();
      }
    });
    pag.appendChild(btnNext);
  }

  // Met à jour la grille et la pagination
  function update() {
    renderGrid();
    renderPagination();
  }
    window.updateCave = update;
  // Initialisation
  update();
});
