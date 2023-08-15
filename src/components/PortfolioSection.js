import React from "react";
import imgp1 from "../assets/img/portfolio/to-do.png"
import imgp2 from "../assets/img/portfolio/cake.png"
import imgp3 from "../assets/img/portfolio/note-it.png"
import imgp4 from "../assets/img/portfolio/game.png"
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
        content = "Embark on an organized journey with my Interactive 'Task Manager'. Crafted using HTML, CSS, and React, this project empowers you to effortlessly add, edit, and remove tasks, adapting to your evolving priorities.
        Harnessing the versatility of React, the project showcases my proficiency in creating interactive and responsive components that enhance usability. The carefully designed user interactions facilitate task modification, fostering a sense of control and efficiency.
        Experience the synergy of sleek design and seamless functionality as you navigate through tasks with ease.
        Discover a new level of productivity through the Interactive 'Task Manager'"
        head = "Task Manager"
        link = "kshitijsinghbisht.netlify.app"
        github = "https://github.com/Hailex798/PORTFOLIO-REACT"
        />
        {/* <!-- Portfolio Modal 2--> */}
        <PortfolioModal 
        data = "portfolioModal2"
        img = {imgp2}
        content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam,recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
        head = "Tasty Cake"
        />
        {/* <!-- Portfolio Modal 3--> */}
        <PortfolioModal 
        data = "portfolioModal3"
        img = {imgp3}
        content = "A Efficient Notes App📝 integrated with real time database storage via Firebase Cloud Firestore ready to track all your thoughts with Systematic Creation, Updation & Deletion System."
        head = "Note it! 📝"
        link = "https://note-it-firestore.netlify.app/"
        github = "https://github.com/Hailex798/NOTE-IT"
        />
        {/* <!-- Portfolio Modal 4--> */}
        <PortfolioModal 
        data = "portfolioModal4"
        img = {imgp4}
        content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam,recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
        head = "Controller"
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
