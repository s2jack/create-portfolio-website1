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
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/project-image-mobile1.png',
    desktopImage: '',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/project-image-mobile1.png',
    desktopImage: '',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/project-image-mobile1.png',
    desktopImage: '',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/project-image-mobile1.png',
    desktopImage: '',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/project-image-mobile1.png',
    desktopImage: '',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: 'images/project-image-mobile1.png',
    desktopImage: '',
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
    prName.innerText = worksList[i]["name"];
    prInfo.appendChild(prName);
    const prTags = document.createElement('ul');
    prTags.className = 'pr-tags-ul';
      /* create list elements as same as with the object property in the data*/
    for (let j = 0; j < worksList[i]['technologies'].length; j++) {
      const tagElement = document.createElement('li');
      tagElement.className = 'pr-tag';
      tagElement.innerText = worksList[i]['technologies'][j];
      prTags.appendChild(tagElement);
    }
    prInfo.appendChild(prTags);
    const detailsBtnContainer = document.createElement('div');
    detailsBtnContainer.id = 'btn-cont';
    prInfo.appendChild(detailsBtnContainer);
    let detailsBtn = document.createElement('button');
    detailsBtn.id = 'pr-btn' + order.toString();
    detailsBtn.className = 'green-btn pr-detail-btn';
    detailsBtn.innerText = 'See project';
    detailsBtnContainer.appendChild(detailsBtn);
    const value = '#pr-btn' + order.toString();
    document.querySelector(value).addEventListener('click', function() {detailsOpen(projectsData[i])});
  }
}

const detailsOpen = (project) => {
  const detailsContainer = document.createElement('div')
  detailsContainer.className = 'details-cont'
  worksSection.appendChild(detailsContainer)
  const detailsBackground = document.createElement('div')
  detailsBackground.className = 'details-bg'
  detailsContainer.appendChild(detailsBackground)
  body.style = 'overflow: hidden;'
  const prImgHolder = document.createElement('div')
  prImgHolder.className = 'prImgHolder'
  prImgHolder.style = 'background-Image : url(' + project['image'] + ');'
  detailsBackground.appendChild(prImgHolder)
  const closeIcon = document.createElement('div')
  closeIcon.id = 'popUpClose'
  prImgHolder.appendChild(closeIcon)
  const prTitle = document.createElement('h3')
  prTitle.className = 'project-title'
  prTitle.innerText  = project['title'];
  detailsBackground.appendChild(prTitle)
  const prTechList = document.createElement('ul')
  prTechList.className = 'popUpTech'
  detailsBackground.appendChild(prTechList)
  for (let v = 0; v < project['technologies'].length; v++) {
    const prTechTag = document.createElement('li')
    prTechTag.className = 'popUpTag'
    prTechTag.innerText = project['technologies'][v];
    prTechList.appendChild(prTechTag)
  }
  const prDescription = document.createElement('p')
  prDescription.className = 'pr-description'
  prDescription.innerText = project['description']
  detailsBackground.appendChild(prDescription)
  const actionBar = document.createElement('div')
  actionBar.className = 'action-bar'
  detailsBackground.appendChild(actionBar)
  const seeLiveBtn = document.createElement('a')
  seeLiveBtn.className = 'seeLive-btn green-btn'
  seeLiveBtn.href = project['link']
  actionBar.appendChild(seeLiveBtn)
  const seeLivetxt = document.createElement('p')
  seeLivetxt.className = 'pr-det-btn-txt'
  seeLivetxt.innerText = 'See live'
  seeLiveBtn.appendChild(seeLivetxt)
  const seeLiveIcon = document.createElement('div')
  seeLiveIcon.className = 'seeLive-icon'
  seeLiveBtn.appendChild(seeLiveIcon)
  const seeSourceBtn = document.createElement('a')
  seeSourceBtn.className = 'seeSource-btn green-btn'
  seeSourceBtn.href = project['github']
  actionBar.appendChild(seeSourceBtn)
  const seeSourcetxt = document.createElement('p')
  seeSourcetxt.className = 'pr-det-btn-txt'
  seeSourcetxt.innerText = 'See source'
  seeSourceBtn.appendChild(seeSourcetxt)
  const seeSourceIcon = document.createElement('div')
  seeSourceIcon.className = 'seeSource-icon'
  seeSourceBtn.appendChild(seeSourceIcon)



  closeIcon.addEventListener('click', detailsClose);
}

const detailsClose = () => {
  body.style = ''
  const popUpWindow = document.querySelector('.details-cont')
  popUpWindow.parentElement.removeChild(popUpWindow)
}


loadWorksSection(projectsData);

hamIcon.addEventListener('click', menuOpen)
menuElements.addEventListener('click', menuClose)
closeIcon.addEventListener('click', menuClose)
