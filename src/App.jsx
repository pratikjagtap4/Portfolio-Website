import './App.css'
import { Header, Footer, Home, Education } from './component'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './context/UserDetails'

function App() {
  const education = [
    {
      image: "./assets/college.jpeg",
      qualification: "Bachelor`s of Engineering in Computer Science",
      college: "AISSMS College Engineering, Pune",
      duration: "08/2019 - 06/2023",
      score: "8.46 CGPA"
    },
    {
      image: "./assets/fc.jpeg",
      qualification: `Juniour College (12th Science)`,
      college: "Fergusson Junior College and University, Pune",
      duration: "08/2016 - 03/2018",
      score: "78.31% (HSC)"
    },
    {
      image: "",
      qualification: `Higher Secondary (10th )`,
      college: "PPMV High School, Pune",
      duration: "08/2007 - 04/2016",
      score: "90.80% (SSC)"
    }
  ]
  const projects = [
    {
      image: "./logo-dark.png",
      name: "Hirrd - Job Portal Website",
      tech: "Technologies Use: HTML , CSS , Tailwind , JavaScript , React , React hook from , Clerk, Supabase , Zod.",
      duration: "08/2024 - 09/2024",
      link: "https://hirrd-get-job.vercel.app/",
      desc: "Developed a full-featured job portal. Implemented user authentication and verification with Clerk, enabling users to sign up and log in to access the platform.The portal supports dual roles: candidates can search and apply for jobs, while recruiters can post job listings, review applications, and make hiring decisions.Job data is stored in Supabase, and users can save jobs for future reference, with filtering options based on location, company, and job role.",
    },
    {
      image: "./bloggingAppLogo.png",
      name: "Blogging.Com",
      tech: "Technologies Use: HTML , CSS , Tailwind , JavaScript , React , React hook from , AppWrite.",
      duration: "07/2024 - 08/2024",
      link: "https://blogging-dot-com.vercel.app/",
      desc: "Developed a dynamic blogging platform. Implemented user authentication and verification through Appwrite, allowing users to sign up, log in, access the platform, read blogs, and publish new content. Utilized Appwrite's database to store all blogs and user information. Integrated a rich text editor to enhance blog formatting, enabling users to create visually appealing titles and highlight key sections of their content.",
    },
    {
      image: "./assets/myntra.png",
      name: "Myntra Functional Clone",
      tech: "Technologies Use: HTML , CSS , BootStrap , JavaScript , React.",
      duration: "07/2024 - 07/2024",
      link: "#",
      desc: "Hey i have created fully functional myntra clone. its consist of multiple pages which i designed using react and bootstrap"

    },
    {
      image: "./assets/reactjs.jpg",
      name: "Developed a Grocery Shop Web Site",
      tech: "Technologies Use: HTML , CSS , BootStrap , JavaScript , Angular.",
      duration: "08/2023 - 09/2023",
      link: "https://grocery-shop-1234.web.app/",
      desc: "Incorporated angular specifications like routing , data-binding and dependency injection. Uses Multiple Bootstrap ,CSS and JS to techniques to make webapp Responsive and Dynamic. And hosted the project using Google firebase"

    },
    {
      image: "./assets/python2.jpeg",
      name: "Intrusion Detection System using Machine Learning",
      tech: "Technologies Use: Python , Machine Learning SQL , Tkinter , Spyder",
      duration: "08/2022 - 05/2023",
      link: "#",
      desc: "Achieved 91.66% accuracy in detection of network intrusion. Executed Machine Learning algorithm Like SVM which categorized the network as normal or Intruded.Used Python as a Primary language and developed whole project in Spyder IDE and uses tkinter for GUI."

    },
    {
      image: "./assets/sql.png",
      name: "Created a Housing Management System Using Python and SQL",
      tech: "Technologies Use: Python , SQL.",
      duration: "09/2021 - 10/2021",
      link: "#",
      desc: "Created a Housing Management System Using Python and SQL. Used Tkinter Module of Python for displaying the UI. created a SQL database called Visitorinfo to Store the data of the visitor."

    }
  ]


  return (
    <UserProvider value={{ education, projects }}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </UserProvider>
  )
}

export default App
