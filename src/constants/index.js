import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  business,
  contentCreation,
  contentWriting,
  sales,
  digital,
  photoshop,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  eatEasy,
  zephyr
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Digital Marketing',
    icon: frontend,
  },
  {
    title: 'Operations Manager',
    icon: backend,
  },
  {
    title: 'Chief Executive Officer',
    icon: ux,
  },
  {
    title: 'Administration and Lead Generation',
    icon: prototyping,
  },
];

const technologies = [
 
  {
    name: 'Business Strategy',
    icon: business,
  },
  {
    name: 'Digital marketing',
    icon: digital,
  },
  {
    name: 'Sales',
    icon: sales,
  },
  {
    name: 'Content Creation',
    icon: contentCreation,
  },
  {
    name: 'Content Writing',
    icon: contentWriting,
  },
  {
    name: 'Photoshop',
    icon: photoshop,
  },
];

const experiences = [
  {
    title: 'Internship Trainee',
    company_name: 'Lenovo India PVT LTD',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2018 ',
  },
  
  {
    title: 'Digital Marketing Manageer',
    company_name: 'Arena Animations Mangalore',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2018 - Feb 2019',
  },
  {
    title: 'Operations Manager',
    company_name: 'EastEasy ae',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jun 2018 - Oct 2019',
  },
  {
    title: 'Chief Executive Officer',
    company_name: 'Zephyr Technologies  Solutions PVT LTD',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2019 - Present',
  },
];



const projects = [
  {
    id: 'project-1',
    name: 'EatEasy',
    description: 'A food delivery App that provides home packed food.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: eatEasy,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Zephyr Learn',
    description:
      'A leading educational platform for learning, training and career guidance.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: zephyr,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
