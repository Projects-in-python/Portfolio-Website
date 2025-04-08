/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Uttam Singh Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Uttam Singh Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Uttam Singh",
  logo_name: "UttamSingh",
  nickname: "supercool_coder",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository:
    "https://github.com/Projects-in-python/Portfolio-Website",
  githubProfile: "https://gitsetcode.in",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Supercool-Coder",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/uttam-singh-287690199/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCnzzxLqCN_NEn_L1rQ9sUGg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:uttams.singh500@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/uttampbh123",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100072234287667",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Python Backend & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing AI algorithms for games using Python (minimax, alpha-beta pruning, iterative deepening)",
        "⚡ Building intelligent agents and logic for strategic gameplay",
        "⚡ Implementing basic AI projects like chatbots, recommendation systems, and predictive models",
        "⚡ Using GitHub Codespaces for seamless development and testing environments",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-brands:github",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "white",
            color: "#150458",
          },
        },
        // {
        //   skillName: "Matplotlib",
        //   fontAwesomeClassname: "simple-icons:matplotlib",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#11557C",
        //   },
        // },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            backgroundColor: "#ffffff", // light background for contrast
            color: "#F37626", // Jupyter's signature orange
            padding: "5px",
            borderRadius: "8px",
            boxShadow: "0 0 6px rgba(0, 0, 0, 0.1)", // optional for subtle depth
          },
        },

        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing mobile applications using Flutter, React Native ",
        "⚡ Creating application backend in Python, Dajngo, Fast API & Flask",
        "⚡  Building responsive website front end using React Js, HTML and Css , SCSS",
      ],
      softwareSkills: [
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20", // Official Django green
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000", // Flask is usually represented in black
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688", // FastAPI turquoise
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB", // Python blue
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Android and IOS Developmet",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with AWS and Firebase for cloud computing and hosting solutions",
        "⚡ Deploying and maintaining web apps using Docker containers and Kubernetes clusters",
        "⚡ Hosting deep learning models on cloud infrastructure for mobile deployment",
        "⚡ Setting up cloud-based data pipelines and streaming services",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",

    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Supercool_05/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/supercool7151",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/supercoolcoder",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/CoderSupercool",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@supercool/",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chhatrapati Shivaji Maharaj University, Panvel, Navi Mumbai",
      subtitle:
        "MCA Master of Computer Application in Computer Science and Information Technology",
      logo_path: "CSMU_Logo.png",
      alt_name: "CSMU  Panvel",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://csmu.ac.in/",
    },
    {
      title: "",
      subtitle: "Bachelor of Science in Information Technology.",
      logo_path: "mkmp_logo.png",
      alt_name: "University of Mumbai",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ In addition to AI, I have gained strong programming skills in Python, Java, C, C++, and have hands-on experience with web technologies such as HTML, CSS, and JavaScript.",
        "⚡ I’ve also worked with cloud technologies like AWS, and have a solid foundation in Data Structures and Algorithms (DSA) as well as database management using MySQL.",
        "⚡ I developed an Automatic Street Light project, which demonstrates the use of sensors and embedded logic to optimize energy usage in real-world environments.",
        "⚡ During my university years, I was associated with the multimedia department and contributed to documentary films and interview projects.",
      ],

      website_link: "https://mkmpatel.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineer Intern Certificate",
      subtitle: "Uttam Singh",
      logo_path: "HackerRank_Icon-1000px.png",
      certificate_link: "https://www.hackerrank.com/certificates/f1bdfa34340a",
      alt_name: "Hacker Rank",
      color_code: "#8C151599",
    },
    {
      title: "SQL (Basic) Certificate",
      subtitle: "Uttam Singh",
      logo_path: "HackerRank_Icon-1000px.png",
      certificate_link: "https://www.hackerrank.com/certificates/33c284ac2ec1",
      alt_name: "Hacker Rank",
      color_code: "#00000099",
    },
    {
      title: "Rest API (Intermediate) Certificate",
      subtitle: "Uttam Singh",
      logo_path: "HackerRank_Icon-1000px.png",
      certificate_link: "https://www.hackerrank.com/certificates/4ca180f6add1",
      alt_name: "Hacker Rank",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Full-stack Flutter developer with 2+ years of experience building scalable mobile apps and robust back-end APIs using AWS, Django, and Flutter. Proven ability to lead end-to-end app development, implement AI-based features, and improve system efficiency by up to 35%. Passionate about innovation, clean code, and delivering real-world solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer 1",
          company: "atoconn system labs",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2022 - Present",
          location: "Thane , Maharashtra",
          description: [
            " Managed the end-to-end development of the Alexia Learning App, covering both front-end and back-end components, leading to a 35% improvement in user engagement.",

            "Adopted agile methodologies to enhance collaborative efforts, ensuring on-time project completions and efficient team coordination, boosting team productivity by 20%.",

            "Created a Resume Builder App with 90% user satisfaction rating and 50% reduction in resume-building time, using RESTful APIs and Flutter.",

            "Continuously maintain and improve the Alexia Learning App since March 2024, ensuring peak performance and up-to-date features, resulting in a 15% increase in user satisfaction.",
          ],
          color: "#fc1f20",
        },
        {
          title: "Full-Stack Flutter Developer",
          company: "Raik Labs.",
          company_url: "https://raiklabs.com/",
          logo_path: "RaikLabs.png",
          duration: "August 2024 - December 2024",
          location: "Kurla , Mumbai",
          description: [
            "Developed the 'Access is King' app, focused on clubs, memberships, events, and loyalty program features.",
            "\nWorked on 'Pathpulse.ai', an AI-powered video analysis app for detecting road damages, assessing severity, and predicting repairs. Implemented a backend RESTful API for video uploads, AI-based analysis, and damage reporting.",
            "\nBuilt 'Shills Bot', a user-referred AI bot for X (Twitter) that handles automated responses, user interactions, and provides intelligent recommendations. Designed a backend RESTful API for managing queries, storing interaction history, and optimizing ML-based responses.",
            "\nDeveloped backend APIs for 'Pump My Bag' covering user authentication, order management, and inventory tracking. Ensured smooth communication between frontend and backend for seamless user experiences.",
          ],

          color: "#000000",
        },
        {
          title: "Flutter Developer",
          company: "Next Neuron Technologies Private Limited",
          company_url: "https://nextneurontech.com/",
          logo_path: "NEXTNeuronTech.png",
          duration: "August 2023 - December 2023",
          location: "Vashi , Navi Mumbai",
          description: [
            "Spearheaded the creation of the Aplix Application using Flutter and Dart, resulting in a 30% increase in local customer engagement through user-friendly interfaces.",

            "\nDirected the full-scale development of Pantry Q, a cost-effective food solution platform for corporates, integrating delivery, user, and vendor applications, which increased operational efficiency by 25%",

            "\nPartnered with cross-functional teams to ensure smooth project execution and timely delivery, achieving a 95% on-time delivery rate.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer 1",
          company: "atoconn system labs",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2022 - December 2022",
          location: "Thane , Maharashtra",
          description: ["Made the Backend APi for Alexia Learning App"],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor",
          company: "The 10x Academy",
          company_url: "https://www.the10xacademy.com/",
          logo_path: "10xacademy.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Uttam.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://hashnode.com/@uttamssingh",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kalyan, Maharashtra, India , 421201",
    locality: "Mumbai",
    country: "Mumbai , India",
    region: "Kalyan",
    postalCode: "421201",
    streetAddress: "90 ft road",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.co.in/maps/@25.914448,82.0113595,3a,75y,148.92h,87.1t/data=!3m7!1e1!3m5!1sqlWUtjneQ6GlglD-u2KlNQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.9002239935574607%26panoid%3DqlWUtjneQ6GlglD-u2KlNQ%26yaw%3D148.92243292286489!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9670064455",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
