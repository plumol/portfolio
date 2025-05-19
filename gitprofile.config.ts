// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'plumol', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['plumol/csci1470-final-project-ASL', 'plumol/SemanticCube'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'ASL Fingerspelling Classification',
          category: ['Computer Vision', 'Deep Learning'],
          description:
            'A deep learning model to classifly American Sign Language in real time.',
          imageUrl:
            'public/asl.jpeg',
          // link: 'https://example.com',
          skills: ['Python', 'Tensorflow', 'NumPy', 'OpenCV']
        },
        {
          title: 'Semantic Cube',
          category: ['LLMs', 'Database Systems'],
          description:
            'A database integration enabling natural language OLAP queries using prompt caching and LLMs for query parsing and summarization.',
          imageUrl:
            'public/olap.png',
          // link: 'https://example.com',
          skills: ['Python', 'MongoDB', 'LLMs', 'Next.js']
        },
        {
          title: 'Anomaly Detection of Falling Events',
          category: ['Data Science'],
          description:
            'A comparison of XGBoost, KNN, and RandomForest classifiers for detecting anomalous fall events in elderly care homes.',
          imageUrl:
            '',
          skills: ['Python', 'XGBoost', 'Data Visualization']
        },
        {
          title: '3D Scene Reconstruction with Flexible Object Control',
          category: ['Computer Vision', 'Deep Learning'],
          description:
            'A modular data pipeline for 3D scene reconstruction, extracting configurable bounding boxes that enable customizable indoor environments to rescale, reorient, and replace in-scene objects.',
          imageUrl:
            '',
          skills: ['COLMAP', 'Mesh rendering']
        },
        {
          title: 'Interpreting Concept Emergence in Audio Diffusion Trajectories',
          category: ['Deep Learning'],
          description:
            'A framework for analyzing and understanding how musical concepts evolve over time during the diffusion process in audio generation models.',
          imageUrl:
            '',
          skills: ['Diffusion', 'Interpretability Analysis']
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kyle Lam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kyle-lam76',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'kylelam76@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
    'HTML/CSS',
    'Python',
    'Pytorch',
    'Tensorflow',
    'Spark',
    'C++'
  ],
  experiences: [
    {
      company: 'Center for Computation and Visualization, Brown University',
      position: 'Software Engineering Intern',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://ccv.brown.edu/',
    },
    {
      company: 'Department of Computer Science, Brown University',
      position: 'Undergraduate Teaching Assistant',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://cs.brown.edu/',
    },
    {
      company: 'Martiniani Lab, NYU',
      position: 'Computational Physics Undergraduate Researcher',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: '',
    }
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Brown University',
      degree: 'B.S. Biochemistry, B.S. Computer Science',
      from: '2021',
      to: '2025',
      courses: 'Data Structures and Algorithms, Computer Systems, Computer Vision, Data Science, Data Engineering, Databases Management, Deep Learning, Machine Learning, AI & Security'
    },
  ],
  publications: [
    {
      title: 'Compound Mutations in the Abl1 Kinase Cause Inhibitor Resistance by Shifting DFG Flip Mechanisms and Relative State Populations',
      conferenceName: '',
      journalName: 'eLife',
      authors: 'Gabriel Monteiro da Silva, Kyle Lam, David C Dalgarno, Brenda M Rubenstein',
      link: 'https://elifesciences.org/reviewed-preprints/104519',
      description:
        'This work uses enhanced sampling molecular dynamics methods to generate potentially useful information about a conformational change (the DFG flip) that plays a key role in regulating kinase function and inhibitor binding. The focus of the work is on the mechanism of conformational change and how mutations affect the transition.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
