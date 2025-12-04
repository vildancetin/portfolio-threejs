export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
    {
    title: 'Stock App',
    desc: 'The application allows users to log in based on password and email validation and to log out of the system. Users can also manage inventory of products. New products and companies can be added, and sales or purchases can be made based on them.',
    subdesc:
      'Provides secure authentication and enables users to oversee product inventories, including adding new items and companies, as well as processing sales and purchase transactions.',
    href: 'https://stock-appy.vercel.app/',
    texture: '/textures/project/stock-app.mp4',
    logo: '/assets/stock-login.png',
    logoStyle: {
      backgroundColor: 'rgba(245, 245, 245, 0.3)',
      border: '0.2px solid #5B649D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Redux',
        path: '/assets/redux.png',
      },
    ],
  },
  {
    title: 'HarryLand Shop',
    desc: 'Harryland Shop is an e-commerce application that utilizes context and routing to manage navigation and state. Users can sign up or log in to explore products, view categories, and learn more about the store. Products can be added to the shopping cart, and quantities can be adjusted for a personalized shopping experience.',
    subdesc:
      'Enables secure user authentication, dynamic product browsing, and efficient cart management with adjustable item quantities.',
    href: 'https://harryland.vercel.app',
    texture: '/textures/project/harryland.mp4',
    logo: '/assets/hogwarts.png',
    logoStyle: {
      backgroundColor: 'rgba(245, 245, 245, 0.3)',
      border: '0.2px solid #5B649D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'React Router',
        path: 'assets/router.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },


    ],
  },
  {
    title: 'Flight App',
    desc: 'This flight reservation application allows users to search for flights using flight code, date, and direction, leveraging the Schiphol API for real-time data. The backend, built with Node.js, stores all reserved flights in the database. Users can easily book their desired flights and view or manage their reservations through the ‘My Flights’ page',
    subdesc:
      'Offers real-time flight search, secure reservation storage, and seamless booking management through a custom Node.js backend.',
    href: 'https://github.com/vildancetin/flight-app-frontend',
    texture: '/textures/project/flight.mp4',
    logo: '/assets/plane.png',
    logoStyle: {
      backgroundColor: 'rgba(245, 245, 245, 0.3)',
      border: '0.2px solid #5B649D',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Router',
        path: '/assets/router.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/express.png',
      },

    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.03 : 0.035,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [-4, -4, 0] : isMobile ? [-4, -4, 0] : isTablet ? [-5, -3, 0] : [-8, -5, 0],
    ringPosition: isSmall ? [1, 2, 0] : isMobile ? [1,2, 0] : isTablet ? [-7, -6, 0] : [6, -1, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    developerPosition: isSmall ? [4, -6, 0] : isMobile ? [4, -6, 0] : isTablet?[6.5, -6, 0]:[8.75,-6,0],
    developerScale: isSmall ? 5 : isMobile ? 5 : 6,
    reactScale: isSmall ? 0.3 : isMobile ? 0.4 : isTablet?0.4:0.5,
    macbookPosition: isSmall ? [0, -3, 0] : isMobile ? [0, -4, 0]: isTablet ? [2,-3,0]: [0, -3, 0],
    macbookScale: isSmall ? 0.1 : isMobile ? 0.12 : 0.18,
    ringScale: isSmall ? 0.3 : isMobile ? 0.4 : 0.5,
    spotifyPosition: isSmall ? [-4, 2, 0] : isMobile ? [-4, 2, 0]: isTablet ? [-7,1,0]: [-9,0,0],
    spotifyScale: isSmall ? 0.5 : isMobile ? 0.6 : 0.9,
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freelancer',
    pos: 'Fullstack Develooper',
    duration: '2024-Present',
    title: "Worked on small Arduino-based projects and gained hands-on experience with sensors and microcontroller programming. Also explored backend development using Python and Flask, creating simple web applications as part of my learning process.",
    icon: '/assets/ssid.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'SSID Global',
    pos: 'Software Developer Intern',
    duration: '2022',
    title: "Worked on small Arduino-based projects and gained hands-on experience with sensors and microcontroller programming. Also explored backend development using Python and Flask, creating simple web applications as part of my learning process.",
    icon: '/assets/ssid.png',
    animation: 'victory',
  },
  
];