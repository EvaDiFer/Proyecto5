import './initapp.css';

export const initapp = (divApp) => {
  const initContainer = document.createElement('div');
  const initTitle = document.createElement('h1');
  const initDescription = document.createElement('h2');
  const initButton = document.createElement('button');
  const initName = document.createElement('h3');
  const socialLinksContainer = document.createElement('div');

  initTitle.textContent = 'Welcome to my game hub.!!';
  initButton.textContent = '¿Jugamos? ';
  initContainer.className = 'initContainer';
  initDescription.textContent = 'Proyecto final JavaScript para RockTheCode';
  initTitle.className = 'initTitle';
  initButton.className = 'initBtn';
  initDescription.className = 'initDescription';

  initName.textContent = 'Eva Díaz Fernández';
  initName.className = 'initName';

  const socialLinks = [
    {
      url: 'https://www.linkedin.com/',
      image: '/linkedin (2).png',
    },
    { url: 'https://github.com/', image: '/github (1).png' },
  ];

  socialLinks.forEach((link) => {
    const socialLinkContainer = document.createElement('div');
    const socialLink = document.createElement('a');
    const socialImage = document.createElement('img');

    socialImage.src = link.image;
    socialLink.href = link.url;
    socialLink.target = '_blank';
    socialLink.rel = 'noopener noreferrer';
    socialLink.appendChild(socialImage);
    socialLinkContainer.appendChild(socialLink);
    socialLinksContainer.appendChild(socialLinkContainer);
  });

  socialLinksContainer.className = 'socialLinksContainer';

  divApp.appendChild(initContainer);
  initContainer.appendChild(initTitle);
  initContainer.appendChild(initButton);
  initContainer.appendChild(initDescription);
  initContainer.appendChild(initName);
  initContainer.appendChild(socialLinksContainer);

  const init = () => {
    initContainer.remove();
  };

  initButton.addEventListener('click', init);
};
