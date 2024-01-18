export const funcionalidad = () => {
  const piedraOption = document.getElementById('piedra');
  const papelOption = document.getElementById('papel');
  const tijeraOption = document.getElementById('tijera');
  // Iniciar Juego
  const start = document.getElementById('start_game');
  // Jugadores
  const imgOptionHuman = document.getElementById('player1');
  const imgOptionPc = document.getElementById('player2');
  // Recuento
  let ptos_player1 = 0;
  let ptos_player2 = 0;
  // Play
  let select_player1;
  let select_player2;
  let vs;

  const initGame = () => {
    select_player2 = funcionRandomPC(valoresPC);
    setPcOption(select_player2);
    gameStart(select_player1, select_player2);
  };

  // Player 1
  const setPlayerOption = (option) => {
    select_player1 = option;
    imgOptionHuman.src = `/${option}_izquierda.svg`;
    imgOptionPc.src = '/cpu.svg';
  };

  const setPcOption = (option) => {
    const player2Image = document.getElementById('player2');
    player2Image.src = `/${option}_derecha.svg`;
  };

  // Player 2 (hacer random ya que es el ordenador)
  const valoresPC = ['piedra', 'papel', 'tijera'];
  const funcionRandomPC = () =>
    [...valoresPC].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 1);

  const gameStart = (select_player1, select_player2) => {
    if (select_player1 == select_player2) {
      vs = 'same';
    } else if (
      (select_player1 == 'piedra' && select_player2 == 'tijera') ||
      (select_player1 == 'papel' && select_player2 == 'piedra') ||
      (select_player1 == 'tijera' && select_player2 == 'papel')
    ) {
      vs = 'p1win';
    } else {
      vs = 'p2win';
    }

    updateScore(vs);
    displayResult(vs);
  };

  const updateScore = (result) => {
    if (result == 'p1win') {
      ptos_player1++;
    } else if (result == 'p2win') {
      ptos_player2++;
    }
  };

  const displayResult = (result, message) => {
    const resultElement = document.getElementById('result');

    if (result === 'same') {
      message = 'Empate';
    } else if (result === 'p1win') {
      message = 'Jugador 1 gana';
    } else {
      message = 'Jugador 2 gana';
    }

    resultElement.innerText = message;

    document.getElementById('ptos_player1').innerText = ptos_player1;
    document.getElementById('ptos_player2').innerText = ptos_player2;
  };

  const resetGame = () => {
    ptos_player1 = 0;
    ptos_player2 = 0;
    document.getElementById('ptos_player1').innerText = 0;
    document.getElementById('ptos_player2').innerText = 0;
    const resultElement = document.getElementById('result');
    resultElement.innerText = 'VS';
    imgOptionHuman.src = '/persona.svg';
    imgOptionPc.src = '/cpu.svg';
  };

  piedraOption.addEventListener('click', () =>
    setPlayerOption('piedra', imgOptionHuman)
  );
  papelOption.addEventListener('click', () =>
    setPlayerOption('papel', imgOptionHuman)
  );
  tijeraOption.addEventListener('click', () =>
    setPlayerOption('tijera', imgOptionHuman)
  );

  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetGame);

  start.addEventListener('click', initGame);
};
