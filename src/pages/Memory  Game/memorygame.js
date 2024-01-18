import './memorygame.css';
import { cards } from './arraycards';

export const MemoryGame = () => {
  const mainContent = document.querySelector('.content');
  mainContent.innerHTML = '';

  const cardsContain = document.createElement('div');
  cardsContain.className = 'cardsContain';

  mainContent.appendChild(cardsContain);

  let counter = 0;
  let oneCard;
  let twoCard;
  let points = 0;
  let disabled = false;

  const pointsDisplay = document.createElement('h3');
  pointsDisplay.className = 'points';
  mainContent.appendChild(pointsDisplay);

  const seleccionarCarta = (e) => {
    let clickedCard = e.target;
    console.log(clickedCard);
    if (clickedCard !== oneCard && !disabled) {
      clickedCard.classList.add('clicked');
      if (!oneCard) {
        return (oneCard = clickedCard);
      }
      twoCard = clickedCard;
      disabled = true;
      let oneCardImg = oneCard.querySelector('img').src;
      let twoCardImg = twoCard.querySelector('img').src;
      matchCards(oneCardImg, twoCardImg);
    }
  };

  const matchCards = (img1, img2) => {
    if (img1 === img2) {
      points++;
      counter++;
      oneCard.removeEventListener('click', seleccionarCarta);
      twoCard.removeEventListener('click', seleccionarCarta);
      oneCard = twoCard = '';
      pointsDisplay.innerHTML = `Has encontrado ${points} pareja/s`;

      if (points === 10) {
        pointsDisplay.innerHTML = `Enhorabuena!, encontraste todas las parejas`;
      }
      return (disabled = false);
    }

    setTimeout(() => {
      oneCard.classList.add('spin');
      twoCard.classList.add('spin');
    }, 600);

    setTimeout(() => {
      oneCard.classList.remove('spin', 'clicked');
      twoCard.classList.remove('spin', 'clicked');
      oneCard = twoCard = '';
      disabled = false;
    }, 900);
  };

  const renderCards = () => {
    for (const card of cards) {
      const divCard = document.createElement('div');
      divCard.className = 'divCard';
      const frontCard = document.createElement('div');
      frontCard.className = 'front';
      const backCard = document.createElement('div');
      backCard.className = 'back';
      const image = document.createElement('img');
      image.src = card.image;

      divCard.addEventListener('click', seleccionarCarta);

      backCard.appendChild(image);
      divCard.appendChild(frontCard);
      divCard.appendChild(backCard);
      cardsContain.appendChild(divCard);
    }
  };

  renderCards(cards.sort(() => Math.random() - Math.random()));

  const btnRestart = document.createElement('button');
  btnRestart.textContent = 'Jugar de nuevo';
  btnRestart.className = 'restart';
  mainContent.appendChild(btnRestart);

  const resetGame = () => {
    cardsContain.innerHTML = '';
    pointsDisplay.innerHTML = '';
    points = 0;
    oneCard = '';
    twoCard = '';
    renderCards(cards.sort(() => Math.random() - Math.random()));
  };

  btnRestart.addEventListener('click', resetGame);
};
