import './ahorcado.css';
import { alphabet, words } from './data.js';

export const Ahorcado = () => {
  const mainContent = document.querySelector('.content');
  mainContent.innerHTML = '';

  let divWord = document.createElement('div');
  divWord.id = 'word';
  divWord.className = 'divword';

  let divAlphabet = document.createElement('div');
  divAlphabet.id = 'alphabet';
  divAlphabet.className = 'divalphabet';

  const h2Play = document.createElement('h2');
  h2Play.className = 'playAgain';

  const ultimoDiv = document.createElement('div');
  ultimoDiv.className = 'ultimodiv';

  const image = document.createElement('img');
  image.className = 'image';

  const result = document.createElement('h3');
  result.className = 'result';

  const container = document.createElement('div');

  const wrongLetters = document.createElement('p');

  mainContent.appendChild(divWord);
  mainContent.appendChild(h2Play);
  mainContent.appendChild(divAlphabet);
  ultimoDiv.appendChild(image);
  ultimoDiv.appendChild(container);
  container.appendChild(wrongLetters);
  container.appendChild(result);
  mainContent.appendChild(ultimoDiv);

  let randomWord = '';
  let mistakes = 0;
  let rigths = 0;

  const start = () => {
    randomWord = getRandomWord();
    image.src = '/img0.png';
    result.innerHTML = '';
    h2Play.innerHTML = '';
    mistakes = 0;
    rigths = 0;
    printAlphabet();
    printDivs(randomWord);
  };
  const getRandomWord = () => {
    const aleatoryWord = words[Math.floor(Math.random() * words.length)];
    return aleatoryWord;
  };
  const printDivs = (word) => {
    let divWord = document.querySelector('#word');
    divWord.textContent = '';
    for (const palabra of word) {
      const divLetter = document.createElement('div');
      const h3Letter = document.createElement('h3');
      h3Letter.textContent = palabra;
      divLetter.appendChild(h3Letter);
      divWord.appendChild(divLetter);
    }
  };
  const checkWord = (e) => {
    const btnLetter = e.target;
    let checked = randomWord.includes(e.target.textContent);
    if (checked) {
      let h3$$ = document.querySelectorAll('h3');
      btnLetter.disabled = true;
      for (const element of h3$$) {
        if (element.textContent === e.target.textContent) {
          rigths++;
          element.classList.add('includes');
        }
      }
    }
    if (!checked) {
      btnLetter.disabled = true;
      mistakes++;
      image.src = `/img${mistakes}.png`;
      wrongLetters.innerHTML += e.target.textContent + ',';
    }
    if (mistakes === 8) {
      result.innerHTML = ' Perdiste! La palabra oculta era: ' + randomWord;
      gameOver();
    } else if (rigths === randomWord.length) {
      result.innerHTML = ' Así se juega!  La palabra es: ' + randomWord;
      restart();
    }
  };

  const printAlphabet = () => {
    let divAlphabet = document.querySelector('#alphabet');
    divAlphabet.textContent = '';
    for (const letter of alphabet) {
      const letter$$ = document.createElement('button');
      letter$$.textContent = letter;
      letter$$.addEventListener('click', checkWord);
      divAlphabet.appendChild(letter$$);
    }
  };

  const restart = () => {
    image.src = '/win.png';
    divWord.textContent = '';
    divAlphabet.textContent = '';
    wrongLetters.textContent = '';
    h2Play.textContent = '¿Probamos de nuevo?!';
    const restartButton = document.createElement('button');
    restartButton.textContent = '¡Por supuesto!';
    restartButton.className = 'restartButton';
    restartButton.addEventListener('click', start);
    h2Play.appendChild(restartButton);
  };
  const gameOver = () => {
    image.src = '/img7.png';
    divWord.textContent = '';
    divAlphabet.textContent = '';
    wrongLetters.textContent = '';
    h2Play.textContent = '¿Probamos de nuevo?!';
    const restartButton = document.createElement('button');
    restartButton.textContent = '¡Por supuesto!';
    restartButton.className = 'restartButton';
    restartButton.addEventListener('click', start);
    h2Play.appendChild(restartButton);
  };

  start();
};
