import React from 'react'
import imgp1 from "../assets/img/portfolio/to-do.png"
import imgp2 from "../assets/img/portfolio/e-commerce.png"
import imgp3 from "../assets/img/portfolio/note-it.png"
import imgp4 from "../assets/img/portfolio/game.png"
import imgp5 from "../assets/img/portfolio/safe.png"
import imgp6 from "../assets/img/portfolio/submarine.png"
import PortfolioModal from "./PortfolioModal"

function Modals() {
  return (
    <div>
        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Portfolio Modal 1--> */}
        <PortfolioModal 
        data = "portfolioModal1"
        img = {imgp1}
        content = "Embark on an organized journey with my Interactive 'Task Manager'. Crafted using HTML, CSS, and React, this project empowers you to effortlessly add, edit, and remove tasks, adapting to your evolving priorities Harnessing the versatility of React the project showcases my proficiency in creating interactive and responsive components that enhance usability The carefully designed user interactions facilitate task modification, fostering a sense of control and efficiency Experience the synergy of sleek design and seamless functionality as you navigate through tasks with ease Discover a new level of productivity through the Interactive 'Task Manager'"
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
        content = "A Efficient Notes App📝 integrated with real time database storage via Firebase Cloud Firestore ready to track all your thoughts with Systematic Creation, Updation and Deletion System."
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
  )
}

export default Modals;
