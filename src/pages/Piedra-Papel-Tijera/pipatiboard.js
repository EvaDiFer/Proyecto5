import './pipati.css';

export const tablero = () => {
  const mainContent = document.querySelector('.content');
  mainContent.innerHTML = '';
  const vsContainer = document.createElement('div');
  vsContainer.classList.add('vs_container');

  const player1Container = document.createElement('div');
  player1Container.classList.add('player');
  const player1Img = document.createElement('img');
  player1Img.id = 'player1';
  player1Img.src = '/persona.svg';
  player1Img.alt = '';
  const player1Name = document.createElement('p');
  player1Name.textContent = 'Jugador1';
  const player1Points = document.createElement('p');
  player1Points.id = 'ptos_player1';
  player1Points.textContent = '0';

  player1Container.appendChild(player1Img);
  player1Container.appendChild(player1Name);
  player1Container.appendChild(player1Points);
  vsContainer.appendChild(player1Container);

  const vsBlock = document.createElement('div');
  vsBlock.classList.add('vs');
  const resultHeading = document.createElement('h3');
  resultHeading.id = 'result';
  resultHeading.textContent = 'VS';
  vsBlock.appendChild(resultHeading);
  vsContainer.appendChild(vsBlock);

  const player2Container = document.createElement('div');
  player2Container.classList.add('player');
  const player2Img = document.createElement('img');
  player2Img.id = 'player2';
  player2Img.src = '/cpu.svg';
  player2Img.alt = '';
  const player2Name = document.createElement('p');
  player2Name.textContent = 'Jugador2';
  const player2Points = document.createElement('p');
  player2Points.id = 'ptos_player2';
  player2Points.textContent = '0';

  player2Container.appendChild(player2Img);
  player2Container.appendChild(player2Name);
  player2Container.appendChild(player2Points);
  vsContainer.appendChild(player2Container);

  mainContent.appendChild(vsContainer);

  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game_container');

  const gameOptions = document.createElement('div');
  gameOptions.classList.add('game_options');

  const piedraButton = document.createElement('button');
  piedraButton.id = 'piedra';
  piedraButton.classList.add('option_piedra');
  const piedraImg = document.createElement('img');
  piedraImg.src = '/piedra.svg';
  piedraImg.alt = '';
  piedraButton.appendChild(piedraImg);
  gameOptions.appendChild(piedraButton);

  const papelButton = document.createElement('button');
  papelButton.id = 'papel';
  papelButton.classList.add('option_papel');
  const papelImg = document.createElement('img');
  papelImg.src = '/papel.svg';
  papelImg.alt = '';
  papelButton.appendChild(papelImg);
  gameOptions.appendChild(papelButton);

  const tijeraButton = document.createElement('button');
  tijeraButton.id = 'tijera';
  tijeraButton.classList.add('option_tijera');
  const tijeraImg = document.createElement('img');
  tijeraImg.src = '/tijera.svg';
  tijeraImg.alt = '';
  tijeraButton.appendChild(tijeraImg);
  gameOptions.appendChild(tijeraButton);

  gameContainer.appendChild(gameOptions);

  const detailsBlock = document.createElement('div');
  detailsBlock.classList.add('details');

  const detailsLines = [
    'Piedra🪨 ganará contra tijera✂️ y perderá contra papel📇',
    'Papel📇 ganará contra piedra🪨 y perderá contra tijera✂️',
    'Tijera✂️ ganará contra papel📇 y perderá contra piedra🪨',
    'Elige tu opción y dale a play para activar a tu oponente',
  ];

  detailsLines.forEach((line) => {
    const detailParagraph = document.createElement('p');
    detailParagraph.textContent = line;
    detailsBlock.appendChild(detailParagraph);
  });

  gameContainer.appendChild(detailsBlock);

  mainContent.appendChild(gameContainer);

  const startGameBlock = document.createElement('div');
  startGameBlock.classList.add('start_game');

  const startGameButton = document.createElement('button');
  startGameButton.id = 'start_game';
  const startGameImg = document.createElement('img');
  startGameImg.src = '/play.svg';
  startGameImg.alt = '';
  startGameButton.appendChild(startGameImg);

  const resetButton = document.createElement('button');
  resetButton.id = 'reset';
  const resetImg = document.createElement('img');
  resetImg.src = '/reset.svg';
  resetImg.alt = '';
  resetButton.appendChild(resetImg);

  startGameBlock.appendChild(startGameButton);
  startGameBlock.appendChild(resetButton);

  mainContent.appendChild(startGameBlock);
};
