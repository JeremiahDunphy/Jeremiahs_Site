import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import FacebookIcon from '../components/Icon/FacebookIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: `Jeremiah's HomePage`,
  description: "Welcome to my homepage, feel free to send me a message with any questions you have.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jeremiah Dunphy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hi there, I am a United States based <strong className="text-stone-100">Senior Strategic Human Resources Professional </strong>, currently working
        at <strong className="text-stone-100">CW Resources.</strong> Prior to CW Resources, I was an HR Manager in the Army for 5th Special Forces Group. As a Senior Human Resources Professional, I am responsible for managing all aspects of HR and People Operations, including employee relations, talent acquisition, performance management, compliance, training, risk management, health, safety, employment and labor law, HRIS Management and employee engagement. My goal is to work closely with leadership and employees to drive business success through effective HR strategies and practices that are both results- and data-driven, while also maintaining a human-centric approach.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Various Programming Languages</strong>,
        Website Development, or building beautiful Dashboards.{' '}
        <strong className="text-stone-100">I enjoy Data, Computer Science and Game Development as a hobby in my free time.</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://pdfhost.io/v/0KivXUMaC_Microsoft_Word_Jeremiah_Dunphy',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello! thanks for taking the time to visit my professional website. My name is Jeremiah Dunphy (He/Him) and I currently work in a Strategic Senior Human Resources Professional at CW Resources Inc. I have always been passionate about helping people and organizations reach their full potential, and I have found a perfect outlet for this passion in the field of HR and People Management.I began my career in HR almost a decade ago and have since gained a wide range of experience in various industries and organizations. I have held HR positions in both small and large companies, giving me a well-rounded understanding of the unique challenges and opportunities that different types of organizations face when it comes to managing and developing their human capital.`,
  
  description1: `I hold a Bachelors in Human Resources and a Masters in Business Administration. I am currently obtaining my doctorate in Human Resources and Business Management.In my current role as HR Director, I am responsible for overseeing all aspects of human resources management in over 20 states.`,
  
  description2:` Outside of work, I enjoy spending time with my Family, Coding, Data, Running, Website and Game Development. I am also an active member of the Society for Human Resource Management and am always looking for ways to stay up-to-date on the latest HR trends and best practices.`,
  
  description3: `As a Combat Veteran who has served on two tours of duty, I know firsthand the sacrifices that our military members make to protect our country. That is why I am committed to giving back to the veteran community through my volunteer work at the VA. Whether it is providing support and companionship to Veterans during hospital stays, helping with paperwork and benefits, or just being a listening ear, I am dedicated to doing whatever I can to assist and support our Veterans. It is my way of honoring their service and sacrifices, and I am grateful for the opportunity to give back to those who have given so much for our country.`,

  description4: `While Volunteering, I have had the opportunity to assist Veterans with a variety of tasks and needs. Whether it is providing support and companionship during hospital stays, helping with paperwork and benefits, or just being a listening ear, I am committed to doing whatever I can to help our Veterans.`,
  
  description5: `I am grateful for the opportunity to give back to those who have given so much for our country, and I am committed to continuing to support and assist Veterans in any way I can. It is a small way to show my appreciation and gratitude for their service and sacrifice.`,
  
  description6: `Thank you for taking the time to learn more about me. I am excited to bring my skills and experience to bear in helping organizations and individuals reach their full potential.`,
               
               aboutItems: [
                 {label: 'Location', text: 'Hartford, CT', Icon: MapIcon},
                 {label: 'Age', text: '27', Icon: CalendarIcon},
                 {label: 'Nationality', text: '', Icon: FlagIcon},
                 {label: 'Interests', text: 'People, Computer Science, Law and Psycology', Icon: SparklesIcon},
                 {label: 'Studying', text: 'Docotorate in Human Resources and Business Management - Capella University', Icon: AcademicCapIcon},
                 {label: 'Employment', text: 'Cw Resources Inc.', Icon: OfficeBuildingIcon},
               ],
             };
             
             
             
             

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Employment Law, ADA and Business Management',
    skills: [
      {
        name: 'U.S Labor Law',
        level: 10,
      },
      {
        name: 'Labor Relations',
        level: 10,
      },
      {
        name: 'Training, Employee Development, Compliance, Risk and Performance Management',
        level: 9,
      },
    ],
  },
  {
    name: 'Human Resources Data, Information and System Management',
    skills: [
      {
        name: 'System Implementation',
        level: 9,
      },
      {
        name: 'User Management, ATS and Data Analytics',
        level: 10,
      },
      {
        name: 'Building HR Analtical Reports, organizing data and creating Dashboards',
        level: 9,
      },
    ],
  },
  {
    name: 'People Operations, Leadership  and Management Skills',
    skills: [
      {
        name: 'Decision Making and Strategic thinking',
        level: 10,
      },
      {
        name: 'Time and Change Management priniciples and best practices',
        level: 9,
      },
      {
        name: 'Leadership and Experience Driven Empathy',
        level: 10,
      },
    ],
  },
  {
    name: 'Talent Acquisition, Workforce planning and Succession Management',
    skills: [
      {
        name: 'Data-Centered Recruiting and Source Management',
        level: 9,
      },
      {
        name: 'Employee Oboarding, EEO, Behavioral Interviewing, Orientation and handbook Creation',
        level: 10,
      },
      {
        name: 'Compensensation and Benefits',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Policy Development and Implementation',
    description: 'Expert at Developing and implementating Corporate policies including handbooks.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Total Rewards and Compensation',
    description: 'I am an expert in Total Rewards and Compensation. I understand its vital role in attracting and retaining top talent. I stay up to date on best practices and use my expertise to design and manage effective programs that drive organizational success.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Effective Communication and Integrity',
    description: '',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Diversity & Inclusion',
    description: 'I understand the importance of diversity and inclusion in creating a more equitable and just world. I am committed to actively promoting and advocating for these values in my work and personal life, and strive to create inclusive environments that celebrate and value the unique experiences and identities of all individuals.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Data Driven Decision Making',
    description: '',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Technological Skills',
    description: ' I use Structural Data, and Program automation to increase my own- and my Departments performance.' ,
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Critical Thinking',
    description: '',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Global and Cultural Effectiveness',
    description: 'I interact with people from varying backgrounds on a daily basis, meaing I am constantly considering the perspectives of all parties involved throughout my conversation.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Leadership and Navigation',
    description: 'Iuse strong leadership to direct initiatives and support the organization through times of adversity.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'labor Laws and HR Knowledge',
    description: 'My expertise in navigating various employment laws such as the FLSA, FMLA, ADA, OSHA, Workers Compensation, NLRA, COBRA, HIPAA, and OFCCP has greatly improved my performance in the HR industry. I also have a track record of successfully implementing HR policies and procedures that are compliant with all relevant employment laws.',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2018',
    location: 'Quinebaug Valley Community College | Danielson, CT',
    title: 'Associates in Human Services',
    content:
    <p>
      My time at Quinebaug valley community college was memorable and I will never forget the important skills I took with me. I learning communication and interpersonal skills and my confidence increased and I establised rapport and build trust with clients. One very unique takeaway I had from this program was my ability to empathize and understand diverse cultures and backgrounds. This has helped me tremendously and continues to as I navigate my career.
    </p>
  },
  {
    date: 'Graduated June 2020',
    location: 'Western Governors University | Salt Lake City, UT',
    title: 'Bachelors in Human Resources and Business Management',
    content: <p>As a graduate with a bachelor's degree in Human Resources and Business Management, I have developed a strong foundation in business principles and practices. I have also gained specialized knowledge in the field of human resources. My skills include excellent communication, both written and verbal, as well as the ability to lead teams and manage people effectively. I am well-organized and able to prioritize tasks and meet deadlines. I have strong problem-solving skills and a deep understanding of the various functions within the human resources department, including recruiting and hiring, training and development, performance management, and employee relations. Through internships and co-op placements, I have gained practical experience and built a professional network.</p>,
  },
  {
    date: 'Graduated July 2022',
    location: 'Capella University | Munneapolis, MN',
    title: 'Masters in Business Administration',
    content: <p>As a Graduate with of a Master's in Business Administration, I have been equipped with a comprehensive understanding of best business principles and practices. My focus during my studies was on strategic decision-making and effective leadership, and I have also gained expertise in areas such as finance, marketing, and operations management. My communication skills, both written and verbal, are highly developed, and I have a proven track record of success in leading and managing teams. I am adept at organizing tasks and projects and meeting deadlines, and I am skilled at solving problems and making data-driven decisions. In addition to my academic achievements, I have also gained practical experience through internships, case studies, and other experiential learning opportunities. This has allowed me to apply my knowledge in real-world situations and build a professional network.</p>,
  },
  {
    date: 'In Progress',
    location: 'Capella University | Munneapolis, MN',
    title: 'Doctorate in Business Administration and Human Resources',
    content: <p>As a student currently pursuing a Doctorate in Business Administration and Human Resources, I have gained a strong foundation in business principles and practices, as well as specialized knowledge in the field of human resources. My studies have focused on research and the application of theories to solve complex business problems. I have developed excellent communication skills, both written and verbal, and the ability to lead and manage teams effectively. I am well-organized and able to prioritize tasks and meet deadlines. I have strong problem-solving skills and the ability to analyze and interpret data to inform business decisions. I am comfortable working in a team environment and have the ability to think critically and creatively to solve complex business problems. Through internships, case studies, and other experiential learning opportunities, I have gained practical experience and am building a professional network. Upon graduation, I will be well-prepared to make significant contributions to the field of business and human resources. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - Present',
    location: 'CW Resources Inc',
    title: 'Strategic Human Resources and HRIS Manager',
    content: (
      <div>
        <ul>
          
          <li>• Facilitated the creation of employee resource groups, resulting in a 25% increase in representation of underrepresented groups and a corresponding improvement in inclusivity and diversity.</li>
          <li>• Led a team of HR professionals in the development and implementation of employee programs, policies, and procedures, resulting in a 25% increase in employee retention and a 20% increase in employee satisfaction.</li>
          <br></br>
          <li>• Reduced turnover by 20% through targeted recruitment and selection efforts</li>
          <br></br>
          <li>• Developed and administered the company's performance management system, resulting in a 15% improvement in overall employee performance.</li>
          <br></br>
          <li>• Implemented a new applicant tracking system, streamlining the hiring process and reducing time-to-fill by 30%.</li>
          <br></br>
          <li>• Designed and delivered employee training programs on topics such as leadership development, communication skills, and conflict resolution, resulting in a 25% improvement in team collaboration and a 15% increase in productivity.</li>
          <br></br>
          <li>• Led the development of an employee engagement survey, resulting in a 10% increase in employee engagement and a corresponding improvement in retention and performance.</li>
          <br></br>
          <li>• Worked closely with senior leadership to develop and implement a comprehensive succession planning program, ensuring the company has a strong pipeline of talent for key leadership roles.</li>
          <br></br>
          <li>• Developed and implemented a company-wide diversity and inclusion initiative, resulting in a 25% increase in representation of underrepresented groups in leadership roles.</li>
          <br></br>
          <li>• Managed the company's employee benefits program, resulting in a 15% reduction in healthcare costs and a 20% increase in employee participation in wellness programs.</li>
          <br></br>
          <li>• Collaborated with the leadership team to design and implement a flexible work arrangement program, resulting in a 15% increase in employee satisfaction and a corresponding improvement in retention.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'March 2018 - April 2022',
    location: '5th Special Forces Group Fort Campbell, KY',
    title: 'Human Resources Manager',
    content: (
         <div>
        <ul>
          <li>• Improved employee retention by 15% through the implementation of an employee engagement program</li>
          <br></br>
          <li>• Reduced turnover by 20% through targeted recruitment and selection efforts</li>
          <br></br>
          <li>• Developed and implemented a new benefits package that resulted in a 15% increase in employee satisfaction</li>
          <br></br>
          <li>• Led a company-wide training initiative that increased productivity by 10%</li>
          <br></br>
          <li>• Conducted a salary benchmarking study that resulted in a 5% increase in pay for underpaid employees</li>
          <br></br>
          <li>• Implemented a new performance review process that resulted in a 10% increase in employee performance ratings</li>
          <br></br>
          <li>• Streamlined the onboarding process, resulting in a 20% reduction in time to full productivity for new hires</li>
          <br></br>
          <li>• Conducted an HR policy audit that identified and corrected deficiencies, improving compliance by 50%</li>
          <br></br>
          <li>• Assisted in the development of a budget that allocated resources effectively, resulting in a 15% increase in HR initiatives</li>
          <br></br>
          <li>• Provided HR support to employees, resulting in a 25% reduction in HR-related complaints</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'June 2016 - March 2018',
    location: 'Songoda Inc, Storrs Connecticut',
    title: 'Human Resources Business Partner and Diversity and inclusion Specialist',
    content: (
         <div>
        <ul>
          <li>• Partnered with leadership to develop and implement HR strategies that aligned with business goals, resulting in a 15% increase in revenue.</li>
          <br></br>
          <li>• Managed employee relations issues, resulting in a 25% reduction in turnover and a corresponding improvement in retention.</li>
          <br></br>
          <li>• Developed and implemented a new benefits package that resulted in a 15% increase in employee satisfaction</li>
          <br></br>
          <li>• Collaborated with cross-functional teams to design and implement employee development programs, resulting in a 20% increase in employee skills and a corresponding improvement in performance.</li>
          <br></br>
          <li>• Led the development of a company-wide engagement survey, resulting in a 10% increase in employee engagement and a corresponding improvement in retention and performance.</li>
          <br></br>
          <li>• Developed and implemented a comprehensive talent management program, resulting in a 20% increase in the number of high-potential employees identified and developed.</li>
          <br></br>
          <li>• Conducted diversity assessments and analyzed data to identify areas for improvement</li>
          <br></br>
          <li>• Collaborated with management to establish diversity and inclusion goals and objectives</li>
          <br></br>
          <li>• Advocated for underrepresented groups within the organization and worked to create a more inclusive workplace culture</li>
          <br></br>
          <li>• Implmented and Facilitated workshops and training sessions on diversity and inclusion topics</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Michael Mangone 5th Special Forces Group',
      text: 'Working with Jeremiah, he was skilled and experienced in all aspects of human resources management. He would consistently demonstrat success in developing and implementing effective HR strategies, policies, and programs that align with the goals of the organization. He valued building strong relationships with employees at all levels and are committed to effective communication, motivation, and leadership. Promoting diversity and inclusion, as well as fostering a positive and inclusive work culture, are also priorities for him. I was always confident in your ability to consistently deliver excellent results and be a valuable asset to his team, colleagues and senior leadership.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Brianna Okeefe - CEO of Songoda Inc.',
      text: 'While Jeremiah was HR Business Partner at Songoda Inc, he was skilled at aligning HR strategies with the business goals of the organization. He always had a strong understanding of HR best practices and was able to effectively implement and manage HR programs and initiatives. He was trusted advisor to leadership and employees, and was able to build and maintain positive relationships with all levels of the organization. He was also committed to promoting diversity and inclusion He created and implemented a positive and inclusive work culture. His strong communication skills and ability to collaborate with others made him an invaluable asset to the HR team and to the organization as a whole',
      image: 'https://cdn4.iconfinder.com/data/icons/people-of-business/512/People_Business_woman_jacket_lipstick_jewelry-512.png',
    },
    {
      name: 'Dr. Maudie Holm - Capella University',
      text: 'As a doctoral-level HR professor with many years of experience in the field, I highly recommend Jeremiah for any HR position he may be seeking. In my time working with Jeremiah, I have been consistently impressed by his knowledge and understanding of HR best practices and his ability to effectively apply this knowledge in a real-world setting. Jeremiah has a strong track record of success in aligning HR strategies with business goals, building positive relationships with employees and leadership, and promoting diversity and inclusion. He is also an excellent communicator and collaborator, and has the ability to inspire and motivate those around him. I have no doubt that Jeremiah will be an asset to any organization and would be an excellent addition to any HR team.',
      image: 'https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch with me.',
  description: 'If you have any questions or want to get in touch with me please feel free to contact me using this form!',
  items: [
    {
      type: ContactType.Email,
      text: 'Jdunphy@peopleandcultureconsulting.org',
      href: 'mailto:Jdunphy@peopleandcultureconsulting.org',
    },
    {
      type: ContactType.Location,
      text: 'Hartford CT, USA',
      href: 'https://www.google.ca/maps/place/Hartford,+CT/@41.7657462,-72.7151063,13z/data=!4m5!3m4!1s0x89e65311f21151a5:0xcc8e4aa8e97d5999!8m2!3d41.7658043!4d-72.6733723',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Let us connect on LinkedIn!',
      href: 'https://www.linkedin.com/in/jeremiah-dunphy-mba-b9093b223/',
    },
    {
      type: ContactType.Facebook,
      text: 'My Facebook',
      href: 'https://www.facebook.com/Miah.dunphy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jeremiah-dunphy-mba-b9093b223'},
  {label: 'FaceBook', Icon: FacebookIcon, href: 'https://www.facebook.com/Miah.dunphy?mibextid=LQQJ4d'},
];
