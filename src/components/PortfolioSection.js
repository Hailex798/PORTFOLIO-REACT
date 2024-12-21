import React from "react";
import imgp1 from "../assets/img/portfolio/weatherbuddy.png"
import imgp2 from "../assets/img/portfolio/e-commerce.png"
import imgp3 from "../assets/img/portfolio/note-it.png"
import imgp4 from "../assets/img/portfolio/gaming-resale.png"
import imgp5 from "../assets/img/portfolio/codex.png"
import imgp6 from "../assets/img/portfolio/tesla-clone.png"
import imgp7 from "../assets/img/portfolio/job-finder.png"
import imgp8 from "../assets/img/portfolio/tech-term.png"
import imgp9 from "../assets/img/portfolio/fintech.png"
import Portfolio from "../components/Portfolio"
import PortfolioModal from "../components/PortfolioModal"

export default function PortfolioSection() {
  return (
      <div>
        {/* Portfolio Section */}
        <section className="page-section portfolio" id="portfolio" >
          <div className="container">
              {/* <!-- Portfolio Section Heading--> */}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Portfolio
              </h2>
              {/* <!-- Icon Divider--> */}
              <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
              </div>
              {/* <!-- Portfolio Grid Items--> */}
              <div className="row justify-content-center">
                  {/* <!-- Portfolio Item 1--> */}
                  <Portfolio 
                  img= {imgp1}
                  data= "#portfolioModal1"
                  anim={"fade-up"}
                  del={"0"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 2--> */}
                  <Portfolio 
                  img= {imgp2}
                  data= "#portfolioModal2"
                  anim={"fade-up"}
                  del={"250"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 3--> */}
                  <Portfolio 
                  img= {imgp3}
                  data= "#portfolioModal3"
                  anim={"fade-up"}
                  del={"500"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 4--> */}
                  <Portfolio 
                  img= {imgp4}
                  data= "#portfolioModal4"
                  anim={"fade-up"}
                  del={"750"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 5--> */}
                  <Portfolio 
                  img= {imgp5}
                  data= "#portfolioModal5"
                  anim={"fade-up"}
                  del={"1000"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 6--> */}
                  <Portfolio 
                  img= {imgp6}
                  data= "#portfolioModal6"
                  anim={"fade-up"}
                  del={"1250"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 7--> */}
                  <Portfolio 
                  img= {imgp7}
                  data= "#portfolioModal7"
                  anim={"fade-up"}
                  del={"750"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 8--> */}
                  <Portfolio 
                  img= {imgp8}
                  data= "#portfolioModal8"
                  anim={"fade-up"}
                  del={"1000"}
                  dur={"1500"}/>
                  {/* <!-- Portfolio Item 9--> */}
                  <Portfolio 
                  img= {imgp9}
                  data= "#portfolioModal9"
                  anim={"fade-up"}
                  del={"1250"}
                  dur={"1500"}/>
              </div>
          </div>
        </section>

        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Portfolio Modal 1--> */}
        <PortfolioModal 
        data = "portfolioModal1"
        img = {imgp1}
        contentHead = "WeatherBuddy: Your chic companion for instant, global weather updates"
        content = 
        "WeatherBuddy: Elevating weather tracking with Express, Node.js, and Handlebars partials, this project seamlessly integrates the Weather Open API. Experience real-time updates, stylish design, and precision forecasting—features that redefine your personalized weather experience with sophistication and flair."
        head = "WeatherBuddy ⛅"
        link = "https://weatherbuddy.onrender.com/"
        github = "https://github.com/Hailex798/WEATHERBUDDY"
        />
        {/* <!-- Portfolio Modal 2--> */}
        <PortfolioModal 
        data = "portfolioModal2"
        img = {imgp2}
        contentHead = "Experience 'Ssyclr,' where minimalist design meets advanced technology."
        content = "Enjoy a seamless, real-time shopping journey with efficient search, secure payments, and responsive design. Effortlessly manage your cart and explore interactive product pages, all on a scalable platform that adapts to your needs. Dive into the future of online retail today."
        head = "E-commerce Clothing Website - Ssyclr"
        link = "https://ssyclr.netlify.app/"
        github = "https://github.com/Hailex798/SSYCLR_CLOTHING_E-COMMERCE"
        />
        {/* <!-- Portfolio Modal 3--> */}
        <PortfolioModal 
        data = "portfolioModal3"
        img = {imgp3}
        contentHead ="Unleash Productivity: Real-time Notes App📝 with React and Firestore🔥"
        content = "A Efficient Notes App💻 integrated with real-time Firestore database ensuring instant updates, while the dual editor and preview tab provide clarity in composition. Track all your thoughts with Systematic Creation, Updation & Deletion System."
        head = "Note it! 📝"
        link = "https://hailex.netlify.app"
        github = "https://github.com/Hailex798/NOTE-IT"
        />
        {/* <!-- Portfolio Modal 4--> */}
        <PortfolioModal 
        data = "portfolioModal4"
        img = {imgp4}
        contentHead = "Elevating Gaming Heritage: The Responsive PlayStation Controller Resale Hub."
        content = "Dive into the gaming time capsule with our meticulously crafted PlayStation controller resale website. Powered by the latest in HTML, CSS, and JavaScript wizardry, this platform ensures unwavering responsiveness across devices. Immerse yourself in the gaming legacy – where every pixel adapts seamlessly to your gaming desires, no matter the screen."
        head = "Gaming Resale 🎮"
        link = "https://gaming-resale.netlify.app/"
        github = "https://github.com/Hailex798/GAMING-RESALE"
        />
        {/* <!-- Portfolio Modal 5--> */}
        <PortfolioModal 
        data = "portfolioModal5"
        img = {imgp5}
        contentHead = "Codex: Elevating coding mastery through immersive courses"
        content = "Codex: A super-responsive coding course platform tailored for startups. Crafted with React, Material Tailwind, and Styled Components, it seamlessly combines sophistication with formality, offering an optimal environment for mastering coding skills."
        head = "Codex: 🧑‍💻 Course Platform"
        link = "https://cod-ex.netlify.app/"
        github = "https://github.com/Hailex798/codex"
        />
        {/* <!-- Portfolio Modal 6--> */}
        <PortfolioModal 
        data = "portfolioModal6"
        img = {imgp6}
        contentHead = "Tesla X: A sleek and immersive clone of Tesla's iconic landing page"
        content = "The Tesla Clone is a responsive website built with React.js, Styled-Components, Redux and Material-UI, replicating Tesla’s sleek design. It features smooth animations using Data-AOS for an engaging user experience."
        head = "Tesla X"
        link = "https://teslaindia.vercel.app/"
        github = "https://github.com/Hailex798/Tesla_Clone-React"
        />
        {/* <!-- Portfolio Modal 7--> */}
        <PortfolioModal 
        data = "portfolioModal7"
        img = {imgp7}
        contentHead = "Connecting talent with opportunity through a seamless and intuitive job portal experience"
        content = "Job Finder: A robust job portal built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers a seamless platform for job seekers and employers, featuring intuitive navigation, real-time updates, and efficient job matching capabilities."
        head = "💼 Job Finder"
        link = "https://job-finder-codewave.netlify.app/"
        github = "https://github.com/Hailex798/JOB_FINDER"
        />
        {/* <!-- Portfolio Modal 8--> */}
        <PortfolioModal 
        data = "portfolioModal8"
        img = {imgp8}
        contentHead = "Hailex: A cutting-edge tech-terminal portfolio showcasing innovation and expertise"
        content = "Hailex: A dynamic and tech-forward terminal-style portfolio designed for developers. Built with TypeScript, Next.js, and Docker, it merges modern aesthetics with robust performance to showcase innovation and technical expertise."
        head = "📟 Hailex: Tech-Terminal Portfolio"
        link = "https://hailex.vercel.app/"
        github = "https://github.com/Hailex798/Tech-Term-Portfolio"
        />
        {/* <!-- Portfolio Modal 9--> */}
        <PortfolioModal 
        data = "portfolioModal9"
        img = {imgp9}
        contentHead = "Streamlining financial solutions with cutting-edge technology for smarter business growth"
        content = "FinTech Landing Page: A responsive and modern webpage designed for a finance tech business. Built with HTML, CSS, JavaScript, React.js, Styled-Components, and Tailwind CSS, it combines sleek design with intuitive functionality to deliver a professional user experience."
        head = "💲FinTech Business"
        link = "https://fintechbusiness.vercel.app/"
        github = "https://github.com/Hailex798/FinTech-Business"
        />
    </div>
  );
}
