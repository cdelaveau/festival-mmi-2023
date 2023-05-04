const form = document.querySelector('form');
const results = document.getElementById('results');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);

  const bmi = weight / (height * height);
  const category = getCategory(bmi);
  const diet = getDiet(category);

  results.innerHTML = `
    <div class="max-w-lg mx-auto p-4 rounded-lg shadow bg-white">
        <p class="text-lg text-center font-bold mb-2">Votre IMC est de ${bmi.toFixed(2)}</p>
        <p class="text-gray-700 text-center">Vous êtes ${category}</p>
        <p class="mt-4">Nous vous recommandons</p>
        <span>👇</span>
        <ul>
            ${diet.map((food) => `<li>${food}</li>`).join('')}
        </ul>
    </div>
  `;
});

function getCategory(bmi) {
  if (bmi < 18.5) {
    return 'en sous-poids';
  } else if (bmi < 25) {
    return 'dans la moyenne normal';
  } else if (bmi < 30) {
    return 'en surpoids';
  } else {
    return 'en obésité';
  }
}

function getDiet(category) {
  const diets = {
    'en sous-poids': [
      'Ajouter des calories saines à chaque repas en consommant des aliments tels que des noix, des graines, des avocats, des huiles végétales, du beurre d\'arachide et des produits laitiers riches en matières grasses.',
      'Manger des aliments riches en protéines, tels que des viandes maigres, du poisson, des œufs, des légumineuses, du tofu et des produits laitiers.',
      'Consommer des glucides complexes, tels que des céréales complètes, des légumes féculents et des fruits pour fournir de l\'énergie.',
      'Augmenter la fréquence des repas en consommant des collations saines tout au long de la journée.',
      'Éviter les aliments transformés, riches en sucres et en graisses saturées.',
      'S\'assurer de boire suffisamment d\'eau pour maintenir une bonne hydratation.',
    ],
    'dans la moyenne normal': [
      'Consommer une variété d\'aliments pour obtenir une gamme complète de nutriments, y compris des fruits, des légumes, des céréales complètes, des viandes maigres, du poisson, des légumineuses, des noix et des graines.',
      'Limiter la consommation d\'aliments riches en gras saturés et en sucres ajoutés, tels que les aliments transformés, les boissons gazeuses et les desserts.',
      'Consommer des protéines de haute qualité, telles que des viandes maigres, du poisson, des œufs, des légumineuses et des produits laitiers.',
      'Consommer des graisses saines, telles que des huiles végétales, des noix et des graines, pour soutenir la santé du cœur et des vaisseaux sanguins.',
      'Limiter la consommation d\'alcool et de boissons sucrées.',
      'Éviter les régimes à la mode ou restrictifs qui peuvent entraîner des carences nutritionnelles ou une perte de poids rapide et non durable.',
      'S\'assurer de boire suffisamment d\'eau pour maintenir une bonne hydratation.',
    ],
    'en surpoids': [
      'Réduire la consommation d\'aliments riches en gras saturés et en sucres ajoutés, tels que les aliments transformés, les boissons gazeuses, les desserts et les collations.',
      'Consommer une variété d\'aliments nutritifs, y compris des fruits, des légumes, des céréales complètes, des viandes maigres, du poisson, des légumineuses, des noix et des graines.',
      'Manger des protéines de haute qualité, telles que des viandes maigres, du poisson, des œufs, des légumineuses et des produits laitiers pour soutenir la masse musculaire.',
      'Consommer des graisses saines, telles que des huiles végétales, des noix et des graines, pour soutenir la santé du cœur et des vaisseaux sanguins.',
      'Limiter les portions alimentaires et manger lentement pour favoriser une meilleure digestion et une sensation de satiété.',
      'Éviter les régimes restrictifs ou à la mode qui peuvent entraîner des carences nutritionnelles ou une perte de poids rapide et non durable.',
      'Boire suffisamment d\'eau pour maintenir une bonne hydratation.',
    ],
    'en obésité': [
      'Réduire la consommation d\'aliments riches en gras saturés et en sucres ajoutés, tels que les aliments transformés, les boissons gazeuses, les desserts et les collations.',
      'Consommer une variété d\'aliments nutritifs, y compris des fruits, des légumes, des céréales complètes, des viandes maigres, du poisson, des légumineuses, des noix et des graines.',
      'Manger des protéines de haute qualité, telles que des viandes maigres, du poisson, des œufs, des légumineuses et des produits laitiers pour soutenir la masse musculaire.',
      'Consommer des graisses saines, telles que des huiles végétales, des noix et des graines, pour soutenir la santé du cœur et des vaisseaux sanguins.',
      'Limiter les portions alimentaires et manger lentement pour favoriser une meilleure digestion et une sensation de satiété.',
      ' Éviter les régimes restrictifs ou à la mode qui peuvent entraîner des carences nutritionnelles ou une perte de poids rapide et non durable.',
      'Boire suffisamment d\'eau pour maintenir une bonne hydratation.',
    ],
  };

  return diets[category];
}

results.classList.add(
  'bg-white',
  'rounded-lg',
  'shadow',
  'p-4',
  'mt-6', 
  'max-w-lg', 
  'mx-auto',
  'text-center'
);

results.querySelector('ul').classList.add(
  'list-disc',
  'list-inside',
  'pl-4'
);

results.querySelectorAll('li').forEach((li) => {
  li.classList.add('mb-2');
});
