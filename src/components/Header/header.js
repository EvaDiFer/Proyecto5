import './header.css';
import { Ahorcado } from '../../pages/Ahorcado/ahorcado';
import { MemoryGame } from '../../pages/Memory  Game/memorygame';
import { piPaTi } from '../../pages/Piedra-Papel-Tijera/initpipati';

export const Header = (divApp) => {
  const header = document.createElement('header');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button');

  button1.textContent = 'Ahorcado';
  button2.textContent = 'Piedra-Papel-Tijera';
  button3.textContent = 'Memory Game';

  button2.addEventListener('click', piPaTi);
  button1.addEventListener('click', Ahorcado);
  button3.addEventListener('click', MemoryGame);

  header.appendChild(button1);
  header.appendChild(button2);
  header.appendChild(button3);
  divApp.appendChild(header);
};
