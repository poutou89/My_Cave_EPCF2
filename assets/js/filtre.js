document.addEventListener('DOMContentLoaded', () => {
    const grapeSelect = document.querySelector('select[name="grape_id"]');
    const countrySelect = document.querySelector('select[name="country_id"]');
    const regionSelect = document.querySelector('select[name="region_id"]');
    const resultsDiv = document.querySelector('#results');

    const updateRegions = (countryId = '') => {
        fetch(`/api/regions?country_id=${countryId}`)
            .then(res => res.json())
            .then(data => {
                regionSelect.innerHTML = '<option value="">-- Région --</option>';
                data.forEach(region => {
                    const opt = document.createElement('option');
                    opt.value = region.id;
                    opt.textContent = region.name;
                    regionSelect.appendChild(opt);
                });
            });
    };

    const updateGrapes = (countryId = '') => {
    const currentValue = grapeSelect.value;

    fetch(`/api/grapes?country_id=${countryId}`)
        .then(res => res.json())
        .then(data => {
            grapeSelect.innerHTML = '<option value="">-- Cépage --</option>';
            let valueStillValid = false;

            data.forEach(grape => {
                const opt = document.createElement('option');
                opt.value = grape.id;
                opt.textContent = grape.name;

                if (grape.id === parseInt(currentValue)) {
                    valueStillValid = true;
                }

                grapeSelect.appendChild(opt);
            });

            if (valueStillValid) {
                grapeSelect.value = currentValue;
            } else {
                grapeSelect.value = ''; // réinitialise si plus dispo
            }
        });
};

    const updateCountries = (grapeId = '') => {
    const currentValue = countrySelect.value;

    fetch(`/api/countries?grape_id=${grapeId}`)
        .then(res => res.json())
        .then(data => {
            countrySelect.innerHTML = '<option value="">-- Pays --</option>';
            let valueStillValid = false;

            data.forEach(country => {
                const opt = document.createElement('option');
                opt.value = country.id;
                opt.textContent = country.name;

                if (country.id === parseInt(currentValue)) {
                    valueStillValid = true;
                }

                countrySelect.appendChild(opt);
            });

            if (valueStillValid) {
                countrySelect.value = currentValue;
            } else {
                countrySelect.value = '';
            }
        });
};

    const fetchFilteredResults = () => {
        const params = new URLSearchParams();
        ['name', 'year', 'grape_id', 'country_id', 'region_id'].forEach(field => {
            const el = document.querySelector(`[name="${field}"]`);
            if (el && el.value) {
                params.append(field, el.value);
            }
        });

        resultsDiv.innerHTML = 'Chargement...';

        fetch(`/my-cave/filter?${params.toString()}`)
            .then(res => {
                if (!res.ok) throw new Error('Erreur AJAX : ' + res.status);
                return res.text();
            })
            .then(html => {
                resultsDiv.innerHTML = html;
            })
            .catch(err => {
                resultsDiv.innerHTML = `<p>Erreur : ${err.message}</p>`;
                console.error(err);
            });
    };

    grapeSelect.addEventListener('change', (e) => {
        updateCountries(e.target.value);
        fetchFilteredResults();
    });

    countrySelect.addEventListener('change', (e) => {
        updateRegions(e.target.value);
        updateGrapes(e.target.value);
        fetchFilteredResults();
    });

    regionSelect.addEventListener('change', fetchFilteredResults);
    document.querySelector('input[name="name"]').addEventListener('input', fetchFilteredResults);
    document.querySelector('input[name="year"]').addEventListener('input', fetchFilteredResults);
});