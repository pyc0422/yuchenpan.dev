
import frontendCart from '../images/frontend-cart.gif';

const projects = [
  {
    name:'jc-frontend',
    showName:'Job Compass',
    bref:'A job application management web application',
    describe:'\tJob Compass aims to help job hunter manage their job applications. \n The users can add, edit, delete each job card. The website will automaticly get the company icon while the user creating the job card. By keep all the data in our database, the user can easily find the job description and other useful information for preparing the interview. \n In the future, I am going to add the analyse feature which will allows the users to get the multidimensional meta data and help them to find their best job huntr strategy',
    position:'Full-stack Developer',
    deployed:'https://jobcompass-frontend.web.app',
    image:[
      ["https://user-images.githubusercontent.com/86500068/280126381-28a81ac4-fc94-48d2-891a-0b9a63369c86.mov",'Demo Video']
    ],
    tech:['TypeScript', 'Vite','react','redux','tailwindCSS', 'tsnode','firebase']
  },
  {
    name: 'fetch-exercise',
    showName:'Dog Lover',
    bref: 'A frontend project dog adopt website for dog lovers',
    describe:'\tDog Lover is a web application that allows users to adopt dogs from over 10000 dogs in our database. \n I built this website individually with TypeScript, Next.js, and TailwindCSS. \nSuccessfully processed 10,000-row API data with intricate filtering conditions for precise content presentation',
    position:'Front-end Developer',
    deployed:'https://fetch-dog-lover.vercel.app/',
    image:[["https://github.com/pyc0422/fetch-exercise/assets/86500068/3c11ce2f-54a2-45f4-aff8-cbad6150c696", 'Demo Video']],
    tech: ['TypeScript', 'react', 'nextJS', 'tailwindCSS', 'jest', 'testing-library']
   },
  {
    name: 'BiteShare',
    describe:"\tBiteShare is a mobile-first web application designed to simplify the process of splitting a bill when dining out with friends. \nWith BiteShare, users can easily create a meal session, invite friends to join, and split the bill in a hassle-free way.\nFriends can also view each other's orders and make comments or reactions to each other's meals.\nThis creates a fun and interactive experience that encourages social interaction and fosters a sense of community.",
    image: [
      ['https://user-images.githubusercontent.com/86500068/220444963-63ad2732-6ab0-4d89-a341-d55a22c912e1.GIF',"Carousal Home Page"],
      ["https://user-images.githubusercontent.com/86500068/220462272-750424bd-fb51-4baa-b7bf-5b346e866acc.GIF", "Create a meal session"],
      ["https://user-images.githubusercontent.com/86500068/220459477-f4a7e94e-c474-4741-9ec7-9d6fd053dca3.GIF", "Add a new friend"],
      ["https://user-images.githubusercontent.com/86500068/220459463-82a09713-8d95-48b8-bbac-a2f1afaf6bba.GIF", "Swipe to delete a friend"]
    ],
    tech:['Javascript', 'react', 'MaterialUI', 'nodeJS', 'Express', 'MongoDB', 'jest', 'testing-library'],
    bref: "A full-stack mobile first application",
    position:`Full-stack Developer`
   },
   {
    name: 'Atelier-backend',
    describe:"This project involved a significant rebuild of the back-end server, utilizing micro-services architectures for improved scalability. \nEach engineer worked on their individual API. I designed and built the Questions & Answer API after completing an ETL process of 35+ million records of data from a legacy database to PostgreSQL. The deployment of the server with Docker and an NGINX load balancer and caching on AWS EC2 achieved horizontal scaling and a significant increase in RPS from 500 to 8000 while maintaining low latency and a 0% error rate, ensuring a high-quality user experience.",
    image:[['https://user-images.githubusercontent.com/86500068/212131181-19cc8137-84c1-4a7c-8478-72b9c9046252.png','Get qeustion result']],
    tech:['NodeJS', 'Express', 'PostgreSQL', 'Docker', 'Nginx', 'Aws', 'jest'],
    bref:"A back-end server API for an e-commerce website",
    position:`Front-end Developer`
  },
   {
    name: 'Atelier-frontend',
    describe:`Atelier is a web development project undertaken by our team to redesign an outdated webpage for an e-commerce company. As part of the project, my responsibility was to develop the Ratings & Reviews module by implementing the front-end service using React and matching the UI wireframes in the business documents using CSS.
    However, the biggest challenge I encountered during this project was solving the user interaction conflicts on sorting and filtering reviews. There were three ways to trigger the sorting and filtering function, and these three ways had the potential to affect each other's results. This meant that there were at least four kinds of combination interactions and three single interactions that could trigger the sorting and filtering function. As a result, I had to spend a significant amount of time analyzing these cases to ensure that users would have a seamless and positive experience when interacting with the module.
    Overall, the Atelier project provided an excellent opportunity for our team to showcase our skills and expertise in web development, and I am proud to have contributed to the successful redesign of the e-commerce company's webpage.`,
    image: [
      ["https://user-images.githubusercontent.com/86500068/224519994-0a071166-c8ca-4d05-8989-665041e78529.GIF",'The whole page'],
      [frontendCart, 'Overview'],
      ["https://user-images.githubusercontent.com/86500068/224519967-77d6dc86-0f92-4650-8b68-9fe976128c1f.GIF", 'Ratings and Reviews filter and sorting'],
      ["https://user-images.githubusercontent.com/86500068/224519965-ac730134-c80e-451f-98c1-435b005b3aa4.GIF", 'A popup window to add a new review']],

    tech: ['Javascript','React', 'Css3', 'Html5', 'NodeJS', 'Express', 'Aws','jest'],
    bref: "A front-end e-commerse website",
    position:`Back-end Developer`
   },
   {
    name: 'mockStockMarket',
    showName: 'Mock Stock Market',
    describe:`This is a simple MVP (minimum viable product) project created by myself.
    The users can sign up and sign in to this website. Each new user will get $1000 balance for playing with the real world price stock. This application allows user to learn and feel the real world stock market.
    `,
    image:[
      ["https://user-images.githubusercontent.com/86500068/224576379-199ef255-7ae8-4611-aedc-e4ebbc00de8e.GIF","Sign Up"],
      ["https://user-images.githubusercontent.com/86500068/224576360-cc50e97e-1b30-4908-b50c-6e4725c3e36e.GIF", "Sign In"],
      ["https://user-images.githubusercontent.com/86500068/224576671-db1b1258-94b5-4292-b31f-9bcc58462566.GIF", "Search stock live price"],
      ["https://user-images.githubusercontent.com/86500068/224576365-ea78f016-8c6c-4e86-b7d6-fad06f189107.GIF","Trade stock"],
    ],
    tech: ['Javascript', 'React', 'CSS3', 'NodeJS', 'Express', 'Mysql'],
    bref:"A MVP project created by myself",
    position:`Full-stack Developer`
   },

];
export default projects;
