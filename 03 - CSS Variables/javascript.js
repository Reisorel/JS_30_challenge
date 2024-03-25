// Sélectionne tous les éléments input à l'intérieur de la classe "controls"
const inputs = document.querySelectorAll('.controls input');

// Définit une fonction nommée handleUpdate
function handleUpdate() {
  // Récupère la valeur de l'attribut "data-sizing" de l'élément actuel ou une chaîne vide si l'attribut est absent
  const suffix = this.dataset.sizing || '';

  // Modifie la propriété CSS correspondante dans le document, en utilisant le nom de l'input comme variable et sa valeur comme valeur
  // Ajoute le suffixe récupéré à la valeur si présent
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Ajoute un écouteur d'événement "change" à chaque élément input de la liste "inputs", qui déclenchera la fonction handleUpdate
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// Ajoute un écouteur d'événement "mousemove" à chaque élément input de la liste "inputs", qui déclenchera également la fonction handleUpdate
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

