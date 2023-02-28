// Math.random() génère un décimal entre 0 (inclus) et 1 (exclus)
// Pour obtenir un nombre entre 0 et 100 on multiplie ce résultat par 100
// Math.floor() permet d'arrondir la valeur à l'entier (0 à 99)
// On ne veut pas de la valeur 0  et on veut pouvoir obtenir la valeur 100  donc on ajoute +1 (1 à 100)
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;