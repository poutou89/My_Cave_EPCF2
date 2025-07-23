document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cellar-btn')) {
        e.preventDefault();

        const bottleId = e.target.dataset.id;

        fetch(`/my-cave/add-bottle/${bottleId}`, {
    method: 'POST',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    }
})
.then(res => res.json())
.then(data => {
    console.log("Réponse JSON :", data); // ← voir ce que Symfony retourne vraiment
    if (data.success) {
        // insère la bouteille dynamiquement
    } else {
        alert('Erreur : ' + (data.error || 'Inconnue'));
    }
})
.catch(error => {
    console.error('Erreur réseau ou serveur', error);
})

    }});