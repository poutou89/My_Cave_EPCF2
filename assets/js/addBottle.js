document.addEventListener('DOMContentLoaded', () => {
  const resultsContainer = document.getElementById('results');
  if (!resultsContainer) {
    console.error('#results introuvable');
    return;
  }

  resultsContainer.addEventListener('click', async e => {
    const btn = e.target;
    if (!btn.classList.contains('add-to-cellar-btn')) return;
    e.preventDefault();

    const bottleId = btn.dataset.id;
    if (!bottleId) {
      console.error('data-id manquant sur le bouton');
      return;
    }

    try {
      const res = await fetch(`/my-cave/add-bottle/${bottleId}`, {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      });
      if (!res.ok) throw new Error(`Statut HTTP ${res.status}`);
      const data = await res.json();

      if (!data.success) {
        alert('Erreur lors de l’ajout : ' + (data.error || 'Inconnue'));
        return;
      }

      // Recharge la page pour afficher la cave à jour
      window.location.reload();
    } catch (err) {
      console.error('Ajout échoué :', err);
      alert('Échec de l’ajout, veuillez réessayer.');
    }
  });
});