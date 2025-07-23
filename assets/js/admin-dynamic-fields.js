document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.querySelector('.js-country select');
    const regionSelect = document.querySelector('.js-region select');
    const grapeSelect = document.querySelector('.js-grape select');

    if (!countrySelect || !regionSelect || !grapeSelect) return;

    countrySelect.addEventListener('change', function () {
        const countryId = this.value;

        if (!countryId) return;

        // Récupère les régions
        fetch(`/admin/regions-by-country/${countryId}`)
            .then(response => response.json())
            .then(data => {
                regionSelect.innerHTML = '';
                data.forEach(region => {
                    const option = document.createElement('option');
                    option.value = region.id;
                    option.textContent = region.name;
                    regionSelect.appendChild(option);
                });
            });

        // Récupère les cépages
        fetch(`/admin/grapes-by-country/${countryId}`)
            .then(response => response.json())
            .then(data => {
                grapeSelect.innerHTML = '';
                data.forEach(grape => {
                    const option = document.createElement('option');
                    option.value = grape.id;
                    option.textContent = grape.name;
                    grapeSelect.appendChild(option);
                });
            });
    });
});