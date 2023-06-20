/* eslint-disable linebreak-style */
const hamIcon = document.querySelector('#hamburger-icon')
const mobMenu = document.querySelector('#hamburger-cont')
const mobMenuCont = document.querySelector('#toolbar')
const logo = document.querySelector('#logo-placeholder')
const menuElements = document.querySelector('#nav-list')
const closeIcon = document.querySelector('#close-Icon')
const body = document.getElementsByTagName('body')[0]
const worksSection = document.querySelector('#works');

const projectsData = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/pr01img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/pr02img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/pr03img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/pr04img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/pr05img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/pr06img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
];

const menuOpen = () => {
  hamIcon.style.display = 'none'
  mobMenuCont.style = 'align-items: unset; position: sticky; top: 0; background-color: #fff; width: 100vw; height: 100vh;'
  mobMenu.style = 'width: 100vw; height: 100vh; margin: 0; justify-content: unset; align-items: unset; gap: 24px;'
  logo.style.display = 'none'
  closeIcon.style = 'display: block;'
  menuElements.style = 'display: flex; flex-direction: column; list-style-type: none;'
  body.style = 'overflow: hidden;'
}

const menuClose = () => {
  body.style = ''
  hamIcon.style = ''
  mobMenu.style = ''
  mobMenuCont.style = ''
  logo.style = ''
  closeIcon.style = ''
  menuElements.style = ''
}

const loadWorksSection = (worksList) => {
  /* create section heading and main container that contains all of the work cards */
  const sectionHeadingContainer = document.createElement('div');
  sectionHeadingContainer.id = 'works-head-cont';
  worksSection.appendChild(sectionHeadingContainer);
  const sectionHeading = document.createElement('h2');
  sectionHeading.className = 'black-text section-header';
  sectionHeading.id = 'works-header';
  sectionHeading.innerText = 'My Recent Works';
  sectionHeadingContainer.appendChild(sectionHeading);
  const cardsContainer = document.createElement('div');
  cardsContainer.id = 'cards-cont';
  worksSection.appendChild(cardsContainer);

  for (let i = 0; i < worksList.length; i++) {
    /* create card container with className and id */
    const card = document.createElement('div');
    const order = i + 1;
    card.className = 'card';
    card.id= 'card' + order.toString();  /* every card automatically takes id with order number. Exp: card1 for first card container */
    cardsContainer.appendChild(card);
    /* create card image and project info elements*/
    const prImg = document.createElement('div');
    prImg.className = 'project-img';
    prImg.id = 'prImg' + order.toString();
    card.appendChild(prImg);
    const prInfo = document.createElement('div');
    prInfo.className = 'project-info';
    prInfo.id = 'project' + order.toString();
    card.appendChild(prInfo);
    /* create project title, technologies and details button */
    const prName = document.createElement('h3');
    prName.className = 'project-name';
    prName.innerText = worksList[i]["title"];
    prInfo.appendChild(prName);
    const prTags = document.createElement('ul');
    prTags.className = 'pr-tags-ul';
      /* create list elements as same as with the object property in the data*/
    for (let j = 0; j < worksList[i]['technologies'].length; j++) {
      const tagElement = document.createElement('li');
      tagElement.className = 'pr-tag';
      tagElement.innerText = worksList[i]['technologies'][j];
      prTags.appendChild(tagElement);
    };
    prInfo.appendChild(prTags);
    const detailsBtnContainer = document.createElement('div');
    detailsBtnContainer.id = 'btn-cont';
    prInfo.appendChild(detailsBtnContainer);
    const detailsBtn = document.createElement('button');
    detailsBtn.id = 'pr-detail-btn';
    detailsBtn.className = 'green-btn';
    detailsBtn.innerText = 'See project';
    detailsBtnContainer.appendChild(detailsBtn);
  }
}

loadWorksSection(projectsData);

hamIcon.addEventListener('click', menuOpen)
menuElements.addEventListener('click', menuClose)
closeIcon.addEventListener('click', menuClose)
