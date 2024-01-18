import { initapp } from './src/components/InitApp/initapp';
import './style.css';
import { Header } from './src/components/Header/header';

const divApp = document.querySelector('#app');
initapp(divApp);
Header(divApp);

const mainContent = document.createElement('main');
mainContent.className = 'content';
divApp.appendChild(mainContent);
