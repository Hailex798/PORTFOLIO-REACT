import React from "react";
import imgp1 from "../assets/img/portfolio/to-do.png"
import imgp2 from "../assets/img/portfolio/e-commerce.png"
import imgp3 from "../assets/img/portfolio/note-it.png"
import imgp4 from "../assets/img/portfolio/gaming-resale.png"
import imgp5 from "../assets/img/portfolio/safe.png"
import imgp6 from "../assets/img/portfolio/submarine.png"
import Portfolio from "../components/Portfolio"
import PortfolioModal from "../components/PortfolioModal"

export default function PortfolioSection() {
  return (
      <div>
        {/* Portfolio Section */}
        <section className="page-section portfolio" id="portfolio">
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
                data= "#portfolioModal1"/>
                {/* <!-- Portfolio Item 2--> */}
                <Portfolio 
                img= {imgp2}
                data= "#portfolioModal2"/>
                {/* <!-- Portfolio Item 3--> */}
                <Portfolio 
                img= {imgp3}
                data= "#portfolioModal3"/>
                {/* <!-- Portfolio Item 4--> */}
                <Portfolio 
                img= {imgp4}
                data= "#portfolioModal4"/>
                {/* <!-- Portfolio Item 5--> */}
                <Portfolio 
                img= {imgp5}
                data= "#portfolioModal5"/>
                {/* <!-- Portfolio Item 6--> */}
                <Portfolio 
                img= {imgp6}
                data= "#portfolioModal6"/>
            </div>
        </div>
        </section>

        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Portfolio Modal 1--> */}
        <PortfolioModal 
        data = "portfolioModal1"
        img = {imgp1}
        contentHead = "Task Mastery in React: Seamlessly Manage To-Dos"
        content = "Embark on task mastery with our React-powered to-do list project. Featuring an elegant and responsive UI. The carefully designed user interactions facilitate task modification, fostering a sense of control and efficiency.
        Experience the synergy of sleek design and seamless functionality as you navigate through tasks with ease."
        head = "Task Manager"
        link = "https://todo-list-react-practice.netlify.app/"
        github = "https://github.com/Hailex798/PORTFOLIO-REACT"
        />
        {/* <!-- Portfolio Modal 2--> */}
        <PortfolioModal 
        data = "portfolioModal2"
        img = {imgp2}
        contentHead = "Experience 'Ssyclr,' where minimalist design meets advanced technology."
        content = "Enjoy a seamless, real-time shopping journey with efficient search, secure payments, and responsive design. Effortlessly manage your cart and explore interactive product pages, all on a scalable platform that adapts to your needs. Dive into the future of online retail today."
        head = "E-commerce Clothing Website - Ssyclr"
        link = "kshitijsinghbisht.netlify.app"
        github = "https://github.com/Hailex798/PORTFOLIO-REACT"
        />
        {/* <!-- Portfolio Modal 3--> */}
        <PortfolioModal 
        data = "portfolioModal3"
        img = {imgp3}
        contentHead ="Unleash Productivity: Real-time Notes App📝 with React and Firestore🔥"
        content = "A Efficient Notes App💻 integrated with real-time Firestore database ensuring instant updates, while the dual editor and preview tab provide clarity in composition. Track all your thoughts with Systematic Creation, Updation & Deletion System."
        head = "Note it! 📝"
        link = "https://note-it-firestore.netlify.app/"
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
        content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam,recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
        head = "Safe Locker"
        />
        {/* <!-- Portfolio Modal 6--> */}
        <PortfolioModal 
        data = "portfolioModal6"
        img = {imgp6}
        content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam,recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
        head = "Submarine"
        />
    </div>
  );
}
