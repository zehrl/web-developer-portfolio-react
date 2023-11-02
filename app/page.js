import Image from 'next/image'
import styles from './page.module.css'
import './styles.scss'

const skills = {
    gearexchange: [
        "Javascript", 
        "jQuery", 
        "DB Schema", 
        "RESTful WebServices", 
        "REST APIs", 
        "RESTful architecture", 
        "Object-Oriented Programming (OOP)", 
        "PayPal Checkout SDK", 
        "Paypal Integration", 
        "PayPal",
        "Datadog", 
        "Gitlab",
        "Laravel", 
        "PHP", 
        "React.js", 
        "HTML5", 
        "CSS", 
        "Node.js", 
        "SQL", 
        "Git", 
        "SCSS", 
        "SASS"
    ]
}

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Logan Zehr</h1>
        <p>Full-Stack Web Developer</p>

        <h2>Work Experience</h2>
            <h3>Web Software Engineer - Sweetwater Sound</h3>
            <p>Responsible for site enhancements and day-to-day maintenance of Sweetwater.com and GearExchange.com</p>

            <h4>Gear Exchange</h4>
            <ul>
                <li>Integrated 3rd party services for Gear Exchange’s (GX’s) checkout application including payment processing and fraud detection (Paypal/Braintree), and tax reporting (Avalara) using PHP/Laravel</li>
                <li>Collaborated with stakeholders (Fraud team) while integrating fully automated fraud detection system into Gear Exchange, which prevented $30k of fraudulent orders in the first 6 months</li>
                <li>Designed front-end of GX’s checkout using React/SASS enabling $1M in sales in first 9 months</li>
                <li>Identified areas of improvement and filed backlog tasks with proposed solutions and acceptance criteria</li>
                <li>Enhanced reliability by creating scheduled jobs for retry functionality and cross-application communication</li>
                <li>Created test plans and technical documentation for Quality Assurance (QA) for feature releases</li>
            </ul>
            <h5>Skills</h5>
            <ul className='skillList'>
                {
                    skills.gearexchange.map((skill, index) => (
                        <li 
                            className='skill' 
                            key={skill}>{skill}</li>
                    ))
                }
            </ul>
    </main>
  )
}
