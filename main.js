/* eslint-disable linebreak-style */
const hamIcon = document.querySelector('#hamburger-icon')
const mobMenu = document.querySelector('#hamburger-cont')
const mobMenuCont = document.querySelector('#toolbar')
const logo = document.querySelector('#logo-placeholder')
const menuElements = document.querySelector('#nav-list')
const closeIcon = document.querySelector('#close-Icon')
const body = document.getElementsByTagName('body')[0]

const projectsData = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    image: 'images/pr01img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    image: 'images/pr02img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    image: 'images/pr03img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    image: 'images/pr04img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
    image: 'images/pr05img.png',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s." ,
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
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

hamIcon.addEventListener('click', menuOpen)
menuElements.addEventListener('click', menuClose)
closeIcon.addEventListener('click', menuClose)
