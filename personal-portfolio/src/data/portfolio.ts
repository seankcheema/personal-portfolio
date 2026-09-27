// @ts-nocheck
// Portfolio content. Edit copy here; components read from this file.
const B = `${process.env.PUBLIC_URL}/assets/`;
const S = (title, ...body) => ({ t: 'section', title, body });
const pair = (...items) => ({ t: 'pair', items });
const fig = (src, caption, size) => ({ t: 'fig', src, caption, size });
const figs = (srcs, caption) => ({ t: 'figs', srcs, caption });

const projects = [
{
  slug: 'frontrunner', title: 'FrontRunner', year: '2025', accent: '#FF4949', tile: '#3A1719',
  pitch: 'Creating a unified business platform for small artisan businesses.',
  summary: 'Creating a unified business platform for small artisan businesses.',
  image: B + 'FrontRunner Graphic.png', tags: ['UX research', 'Figma', 'Prototyping'],
  links: [
    { label: 'View Case Study', href: 'https://docs.google.com/presentation/d/150-5HWtmDt3korGb6NTngIDZUYOZQLBOJF1Lv1yvn4Y/edit?usp=sharing' },
    { label: 'View on Figma', href: 'https://www.figma.com/design/Jepq2Cy1RlA7OZRa0p7Fdb/FrontRunner-UXD?node-id=59-60&t=qkR5ao7jDS2bBfli-1' },
  ],
  blocks: [
    pair(
      S('My Contribution', 'For this project, I conducted several user interviews, analyzed user research data, helped come up with design solutions, and individually built the mid and high fidelity prototypes.'),
      S('Problem Statement', 'Independent creatives need a way to manage an online presence, enabling them to build a community and sell their creations.'),
    ),
    pair(
      S('User Research Plan', 'The end users of the application are local artists and small artisan businesses looking to expand their visibility across e-commerce websites. We recruited these individuals by attending local markets and contacting small artists we knew personally.', 'We conducted semi-structured interviews with seven small artists, asking them about their experiences selling their work both in person and online through mediums such as markets and online storefronts.'),
      S('Pain Points', 'Through our research, we discovered pain points relating to:', { list: ['Marketing', 'Online platform control', 'Income stability', 'Business tool usage', 'Community', 'Order fulfillment'] }),
    ),
    fig(B + 'fr-affinity.png', 'Affinity Diagram'),
    S('Personas', 'Next, 3 personas were created representing 3 different end users for FrontRunner.'),
    figs([B + 'fr-persona-1.png', B + 'fr-persona-2.png', B + 'fr-persona-3.png'], 'FrontRunner Personas'),
    S('Brainstorming', 'Following the creation of these personas, our team brainstormed numerous ideas for features that FrontRunner could include. We then picked the ones that we deemed most important.'),
    fig(B + 'fr-brainstorming.png', 'Brainstorming in Miro'),
    S('Scenarios', '3 scenarios were also created according to these 3 personas with brainstormed features in mind.',
      { lead: 'Sarah M:', text: 'Sarah is a part-time linocut artist, and gets introduced to FrontRunner by a friend at a local market. Intrigued to check out a solution to manage her art sales across in-person markets and online platforms, she quickly sets up her inventory. After syncing her market and online listings, she is pleased to find that the platform simplifies product management, saving her time. With localized marketing suggestions and an integrated inventory management system, Sarah can now focus more on creating art and attending markets while spending less time managing her storefronts.' },
      { lead: 'Alex P:', text: "Alex, a busy Biomedical Researcher, is passionate about art but doesn't want to spend time in marketing efforts, and is frustrated by the constant need to adjust prices in response to market fluctuations. When he learns about FrontRunner and its ability to simplify storefront management, he is eager to try it. His first experience is positive, as the intuitive interface allows him to quickly set up his profile and connect his multiple online storefronts. He can now manage orders and customer interactions seamlessly, and finds that he is spending less time on pricing adjustments by using a single platform. Leaving more room for time spent in his true creative passions." },
      { lead: 'Jamie R:', text: "Jamie, a full-time medical imaging student, supplements her income with art commissions. She is drawn to FrontRunner for its official sales platform, addressing her concerns about scams on the internet. After setting up her profile, Jamie is pleased to find a supportive artist community, which aligns with her values by helping to counter the flood of profit driven AI-generated content. She is surprised to find how much time she saves on a weekly basis with the platform's storefront management tools and has peace of mind knowing that her listings are backed by a trustworthy system for real buyers." }),
    S('Storyboards', 'Storyboards were also drawn up to display our users’ journeys.'),
    figs([B + 'fr-storyboard-1.png', B + 'fr-storyboard-2.png', B + 'fr-storyboard-3.png'], 'FrontRunner Storyboards'),
    S('Wireframes', 'We then created low-fidelity wireframes to explore our design ideas in a quick manner to then get feedback from our target users. We explored two different design ideas and performed a usability study with 4 potential end users.'),
    fig(B + 'fr-wireframe-1.png', 'Wireframe 1'),
    fig(B + 'fr-wireframe-2.png', 'Wireframe 2'),
    S(null, 'The results of the usability study helped us decide how we should merge these two designs, taking the best from each and moving on to a higher fidelity, interactive version.'),
    S('Mid-Fidelity Prototype', 'Important features that were pulled from the wireframes included a unified dashboard to view products and orders, product grid, order table, and aggregated social media feed.'),
    fig(B + 'fr-MFHome.png', 'Mid-Fidelity Home'),
    fig(B + 'fr-MFProducts.png', 'Mid-Fidelity Products Page'),
    fig(B + 'fr-MFNewProduct.png', 'Mid-Fidelity New Product Form'),
    fig(B + 'fr-MFOrders.png', 'Mid-Fidelity Orders Page'),
    fig(B + 'fr-MFCommunity.png', 'Mid-Fidelity Community Page'),
    fig(B + 'fr-MFCommunityIG.png', 'Mid-Fidelity Community Aggregated'),
    pair(
      S('Usability Study', 'Another usability study was performed following the completion of the mid-fidelity prototype to assess the interactions of the system. This time, users were given tasks to complete and communicated their thoughts to our team. The main findings included the need for a labeled navigation bar, a smaller preview of the community feed on the home page, and product information previews on the product cards.'),
      S('High Fidelity Prototype', 'Finally, a high fidelity prototype was created using the mid-fidelity as a baseline while incorporating the findings from the usability study. This prototype includes a sleek, modern design with a plethora of colors to match the creative nature of our users.', { link: 'To view the full prototype, please visit the ', label: 'Figma project', href: 'https://www.figma.com/design/Jepq2Cy1RlA7OZRa0p7Fdb/FrontRunner-UXD?node-id=59-60&t=qkR5ao7jDS2bBfli-1' }),
    ),
    fig(B + 'FrontRunner Home.png', 'FrontRunner Home'),
    fig(B + 'My Products.png', 'FrontRunner Products Page'),
    fig(B + 'My Orders.png', 'FrontRunner Orders Page'),
    fig(B + 'Community.png', 'FrontRunner Community Page'),
    S('Impact/Takeaways', 'FrontRunner as a platform provides a centralized way for small artisan businesses to manage their products and orders as well as interact with their community.',
      { quote: '"I like that I can manage my business while staying engaged with my social media platforms."', by: '- End user' },
      'Personally, I loved working on this project and being able to provide a well-thought-out design that I know has the potential to help people I know personally. At the same time, I was able to reinforce my ability to tackle real world problems using user-centered design best practices.',
      'Thanks for reading!'),
  ],
},
{
  slug: 'requestify', title: 'Requestify', year: '2024', accent: '#38B45D', tile: '#13301E',
  pitch: 'Streamlining the way DJs and venue patrons interact.',
  summary: 'A music request web app providing a medium between DJs and venue patrons.',
  image: B + 'Requestify Graphic.png', tags: ['Project lead', 'React', 'TypeScript'],
  links: [
    { label: 'View on GitHub', href: 'https://github.com/seankcheema/Requestify' },
    { label: 'View on Figma', href: 'https://www.figma.com/design/sVdQLpxDp70WGc5TZEn5t9/Requestify?node-id=0-1&p=f&t=WBJN4z0R9NNsqo4O-0' },
    { label: 'View Project Proposal', href: 'https://docs.google.com/document/d/1gau7JGKmvkzVfC_LzOMsG8qzgbq-dCv0AwAeFt3Hd3o/edit?usp=sharing' },
    { label: 'View Project Documentation', href: 'https://docs.google.com/document/d/15-qBCwHXxUr7xmyXkdG3xYY8X8fnY58rEv2ccDhWsWE/edit?usp=sharing' },
  ],
  blocks: [
    pair(
      S('My Contribution', { list: ['Project manager on a team of 4', 'Designed the application with Figma', 'Developed the front end using React, TypeScript, and CSS'] }),
      S('Problem Statement', 'Interactions between DJs and venue patrons are often disorganized and inefficient. So as the demand for personalized music rises, so does the need for a platform to streamline these interactions.'),
    ),
    S("But wait... doesn't this already exist?", 'Well yes, existing applications such as RequestNow, limeDJ, and QueueDJ, offer similar functionality but have their limitations:',
      { lead: 'Downloading an app:', text: 'If I’m out with my friends I’m not going to want to wait forever for an app to install!' },
      { lead: 'Payment to request songs:', text: 'I’m already paying for my drinks, why should I have to pay to request a song?' },
      { lead: 'Non-interactive queues:', text: 'No one’s going to want to hear that overplayed song from 2012...' }),
    fig(B + 'Solution Graphic.png', 'Solution Graphic', 'sm'),
    S('The Solution', 'Requestify is a web application designed to simplify the song request process. Users at a venue can send song requests directly to the DJ, vote on songs in the queue, and send tips anonymously to DJs. The DJ can view these polls and add songs to their playlist based on the user feedback. This audience interactivity empowers individuals to interact with the song selection while providing a new revenue source for the DJ.'),
    S('Prototyping', 'The prototyping for this application was done using Figma and underwent six potential end-user interviews during three sprints to refine it and iterate through designs.'),
    fig(B + 'Wireframe graphic Mobile.png', 'Mobile Prototyping'),
    fig(B + 'Wireframe graphic Desktop.png', 'Desktop Prototyping'),
    S('How It Works', 'The following software architecture diagram, made in draw.io, serves to visualize how the system works and serves both user types in an safe, efficient way.'),
    fig(B + 'SAD.png', 'Software Architecture Diagram'),
    pair(
      { t: 'table', title: 'Tech Stack', rows: [{ label: 'Front End:', value: 'React, TypeScript, CSS' }, { label: 'Back End:', value: 'Python, MySQL' }] },
      S('What went wrong?', 'Some issues included connecting the Stripe API, figuring out how to support real-time queue updates, and getting the application deployment-ready. These issues stemmed from this project being a learning experience, but were solved by working together and researching solutions in order to create a fully-functioning product.'),
    ),
    S('Final Product', 'The final product developed is a ready-to-deploy web application using the above tech stack and tested via demos and end-to-end testing.'),
    fig(B + 'RQ Graphic Mobile.png', 'Mobile Interfaces'),
    fig(B + 'Dashboard.png', 'Desktop Dashboard'),
    fig(B + 'Message.png', 'Desktop Message Popup'),
    fig(B + 'QR.png', 'Desktop QR Code Popup'),
    fig(B + 'Profile.png', 'Desktop Profile Popup'),
    fig(B + 'History.png', 'Desktop History Popup'),
  ],
},
{
  slug: 'taas', title: 'TAAS Redesign', year: '2024', accent: '#D04DFF', tile: '#2F1A40',
  pitch: 'Revamping the UI/UX of a subpar application system.',
  summary: 'Revamping the UI/UX of a subpar TA application website supplied by UF.',
  image: B + 'TAAS Graphic.png', tags: ['Redesign', 'Evaluation', 'React'],
  links: [
    { label: 'View on GitHub', href: 'https://github.com/seankcheema/TAAS-Redesign' },
    { label: 'View Project Proposal', href: 'https://docs.google.com/document/d/1IyyGLtXvPUNprJn4Hkfy0jWZQ1anTDtXLG8eUjKWIG0/edit?usp=sharing' },
    { label: 'View Preliminary Report', href: 'https://docs.google.com/document/d/1cfrmdgNnOcgJrGj1SzLrK0bGW_UDHO_7SGfBNbmxlP0/edit?usp=sharing' },
    { label: 'View Final Report', href: 'https://docs.google.com/document/d/1ySOz6Gh43SMrNebxB6fpJ6MU_vEq5n5QLY_tCmn0wdo/edit?usp=sharing' },
  ],
  blocks: [
    pair(
      S('My Contribution', { list: ['Designed the interfaces and interactions of the new TAAS', 'Developed the system using React, Typescript, and CSS', 'Conducted user interviews', 'Conducted an analysis using the data collected from the evaluation'] }),
      S('Problem Statement', 'The UF TA Assignment System suffers from usability issues, especially learnability and physical exertion, which cause confusion, frustration and frequent errors among manager, professor, and student users.'),
    ),
    S('The Old System', 'The original TAAS was riddled with unlabeled menus, confusing interactions, overwhelming dashboards, outdated interfaces, and processes that required an unnecessary number of steps.'),
    fig(B + 'Old TAAS Graphic.png', 'Old System Interfaces'),
    S('Low Fidelity Prototypes', 'We began by creating low fidelity prototypes displaying very rough ideas of how we wanted the interface to be laid out.'),
    fig(B + 'Student lofi.png', 'Student Interface Sketches'),
    fig(B + 'Prof lofi.png', 'Professor Interface Sketches'),
    fig(B + 'Manager lofi.png', 'Manager Interface Sketches'),
    pair(
      S('Preliminary Interviews', 'Following the ideals of formative evaluations, we began conducting preliminary interviews using these low fidelity prototypes with potential end users to gauge whether or not our mental models as designers matched those of these users. As a result, we found some interactions in the professor and manager interfaces that could be improved, but the overall consensus was that the new system was significantly better.'),
      S('Final Prototype', 'The final prototype for this system was built using React, Typescript, and CSS and was a product of the feedback from the low fidelity interfaces and informal interviews along the way. It should be noted that there was no high fidelity mockup for this project due to this being a course project with accelerated deadlines.'),
    ),
    fig(B + 'TAAS Student.png', 'Student Interfaces'),
    fig(B + 'TAAS Professor.png', 'Professor Interfaces'),
    fig(B + 'Manager TAAS.png', 'Manager Interfaces'),
    S('Formal Evaluation', 'Following the creation of the final prototype, a formal evaluation was conducted to analyze how the new interface improved upon the old. To evaluate the redesigned TAAS, 12 undergraduate CISE students were recruited to simulate the roles of students, professors, and managers, performing tasks on both the old and new systems in a within-subjects design. Participants completed role-specific tasks, rated difficulty and effort on a Likert scale, and provided qualitative feedback while metrics such as time, error rates, and clicks were tracked to compare learnability and physical exertion between the systems.'),
    S('Results', 'The following graphs detail the results of this study in terms of the metrics collected to analyze the learnability and physical exertion of the new and old systems.'),
    fig(B + 'Graphs.png', 'Evaluation Graphs'),
    S(null, 'Overall, the evaluation demonstrated that the redesigned TAAS significantly improved learnability, reduced physical exertion, and eliminated errors across all three user types through streamlined workflows, simplified interfaces, and consolidated information. Participants completed tasks faster, with fewer clicks and zero errors, while survey ratings confirmed the redesign’s effectiveness in addressing usability issues such as unclear menus and overwhelming layouts in the old system.'),
  ],
},
{
  slug: 'dance-marathon', title: 'Dance Marathon', year: '2024 - 2025', accent: '#1C61FF', tile: '#142049', linkLabel: 'View More',
  pitch: 'Design and development for an organization that supports children’s health.',
  summary: 'Leading the UI redesign and supporting front-end development for an app for over 400 internal Dance Marathon members using Figma, React Native, JavaScript, and CSS.',
  caseTitle: 'Dance Marathon App',
  image: B + 'DM App Graphic.png', tags: ['UI lead', 'React Native', 'Web'],
  links: [{ label: 'View on App Store', href: 'https://apps.apple.com/us/app/dm-uf/id6480380095' }],
  blocks: [
    { t: 'sub', title: 'Mission DM', logo: B + 'MissionDM.svg', year: '2025', accent: '#1C61FF', tile: '#142049', text: 'Designing and deploying the interfaces for a senior assassin-type game using Figma for designing, React Native, JavaScript, and CSS for front end development, Python for back end functionality, and Firebase for data management.', image: B + 'MissionDM Graphic.png' },
    { t: 'sub', title: 'Dance Marathon Website', year: '2024 - 2025', accent: '#F48320', tile: '#3A2413', text: 'Contributing to the front end development of the Dance Marathon website to raise awareness about their cause of supporting UF Health Shands Children’s Hospital using React, JavaScript, MaterialUI, and CSS.', image: B + 'DM Website Graphic.png', link: { label: 'Visit Website', href: 'https://floridadm.org/' } },
    S('What is Dance Marathon?', 'Dance Marathon at the University of Florida is a philanthropic organization where money is raised for UF Health Shands Children’s Hospital with the goal of aiding and preventing childhood illness.'),
    S('My Role', 'I served as a Digital Marketing captain in my time with Dance Marathon at UF. What this means is that I supported the development of their app and website. More specifically, I brought User Experience Design and front end development expertise to the table.', 'From a philanthropic perspective, I had the utmost pleasure of supporting UF Health Shands Children’s Hospital by raising over $2700 over the course of the year contributing to our organization total of 1.35 million dollars!', 'My year spent with DM at UF was a fantastic experience where I got to use my technical expertise to support such a great cause and I wouldn’t trade it for anything.', 'Below are some pictures taken throughout the year I participated.'),
    fig(B + 'DM Collage.png', 'Dance Marathon at UF'),
  ],
},
];

const PORTFOLIO: any = {
  name: 'Sean Cheema',
  email: 'seankcheema@gmail.com',
  hero: { tag: ['Associate Software Engineer, Fidelity Investments'], greeting: "Hi, I'm Sean", line: 'Bridging the gap between development and design.' },
  now: {
    role: 'Associate Software Engineer', company: 'Fidelity Investments', since: '2026',
    text: 'I recently joined Fidelity Investments as an Associate Software Engineer, where I work as a software engineer specializing in front end development.',
  },
  experience: [
    { role: 'Associate Software Engineer', company: 'Fidelity Investments', dates: '2026 - Present', logo: B + 'Fid Logo.jpeg', zoom: 0.9 },
    { role: 'Software Engineer Intern', company: 'Fidelity Investments', dates: '2025', logo: B + 'Fid Logo.jpeg', zoom: 0.9 },
    { role: 'Software Engineer Intern', company: 'Northrop Grumman', dates: '2024', logo: B + 'NG Logo.jpeg' },
    { role: 'Software Engineer Intern', company: 'Akoustis (SpaceX)', dates: '2023 - 2024', logo: B + 'AKTS Logo.svg' },
  ],
  about: [
    'I am a Front End Developer and UI/UX designer with a Master of Science from the University of Florida in Computer Science with a focus in Human-Centered Computing.',
    'My goal as a computer scientist is to bridge the gap between traditional design and development roles by my applying skills as a developer with my passion for User Experience Design.',
    'Outside of my work, I have earned a black belt in Isshinryu Karate and I love cooking, finding new coffee spots, listening to music, cars, and spending time with family and friends.',
  ],
  headshot: B + 'headshot.jpg',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sean-cheema/' },
    { label: 'GitHub', href: 'https://github.com/seankcheema' },
    { label: 'Resume', href: `${process.env.PUBLIC_URL}/files/Sean Cheema Resume.pdf` },
    { label: 'Email', href: 'mailto:seankcheema@gmail.com' },
  ],
  projects,
};
export default PORTFOLIO;
