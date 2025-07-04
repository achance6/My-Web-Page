import "./assets/style.css"
import backToTop from "./assets/back-to-top.svg"
import resume from "./assets/resume.pdf"
import { setupDarkMode } from "./setupDarkMode.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main>
    <nav class="page-navigation">
        <a class="nav-link" href="#about-me-section-header">About Me</a>
        <a class="nav-link" href="#work-section-header">Work</a>
        <a class="nav-link" href="#education-section-header">Education</a>
        <a class="nav-link" href="#skills-section-header">Skills</a>
        <a class="nav-link" href="#projects-section-header">Projects</a>
        <a class="nav-link" href="#resume-section-header">Resume</a>
        <a class="nav-link" href="#contact-info-section-header">Contact</a>
    </nav>
    <header id="page-header" class="centered">
        <h1>Hello! My name is Ayden Chance!</h1>
        <h2>This is my personal webpage (WIP)</h2>
        <div class="dark-mode-toggle">
            <button id="toggle-dark-mode-button">Toggle Dark Mode</button>
            <div class="dark-mode-indicator" id="dark-mode-indicator">ON</div>
        </div>
    </header>
    <section id="page-bio" class="header-blurb">
        <hr/>
        <p>
            This page is served by AWS from within an S3 bucket.
            The domain is hosted by AWS, who also serves as the registrar.
            This page was created just to demo S3's static site hosting capabilities;
            however, I intend to turn it into a fully fledged personal webpage.
            As you can see, it is quite basic for now, but I will be building it out
            in the coming months. For now, it basically serves as my résumé but with more detail.
        </p>
        <p>
            This page at present is plain HTML, CSS, and transpiled TypeScript
        </p>
    </section>
    <section id="about-me" class="main-section">
        <header>
            <h2 class="section-header" id="about-me-section-header">
                About Me
                <a href="#"><img alt="back-to-top" class="back-to-top-button" src=${backToTop} /></a>
            </h2>
        </header>
        <hr/>
        <section>
            <p>
                I'm a software engineer at Subaru of America with a passion for excellent software.
                I recently graduated from Rowan University (May 2025) with a Bachelor's degree in Computer Science.
            </p>
            <p>
                I'm interested in Software Engineering because I like writing code and I like solving problems.
                As a developer, I focus on creating useful features to make users' lives easier as well as
                maintainable code to make future maintainers' (who may or may not be myself) lives easier.
                My current employer, Subaru of America, has given me ample opportunity to contribute to their
                technologies. Some of my recent projects there include:
            </p>
            <ul>
                <li>The migration of a large legacy monolith into modern technologies.</li>
                <li>A custom analytics solution for the newly released MySubaru watchOS app.</li>
                <li>Green-field services to serve as models for cloud-ready, secure, and scalable architecture.</li>
                <li>Development of a CI / CD solution using Gradle and GitHub actions</li>
                <li>Solution design for migration to AWS</li>
            </ul>
            <p>
                Get in touch with me at my email listed at the
                <a href="#contact-info-section-header"> bottom of this page</a>.
                I look forward to connecting with you.
            </p>
        </section>
    </section>
    <section id="work" class="main-section">
        <header>
            <h2 class="section-header" id="work-section-header">
                Work
                <a href="#"><img alt="back-to-top" class="back-to-top-button" src=${backToTop} /></a>
            </h2>
        </header>
        <hr/>
        <ul>
            <li><b>Subaru of America </b> &#8212 Software Engineer | <i>February 2025—Present</i></li>
            <li><b>Subaru of America </b> &#8212 I.T. Intern (Telematics) | <i>May 2024—February 2025</i></li>
            <li><b>Rowan University</b> &#8212 Learning Assistant | <i>Jan 2024—May 2024</i></li>
            <li><b>Johns Hopkins University</b> &#8212 PILOT Program Tutor | <i>Sep 2019—May 2020</i></li>
            <li><b>Johns Hopkins University</b> &#8212 Course Assistant | <i>Sep 2019—May 2020</i></li>
        </ul>
    </section>
    <section id="education" class="main-section">
        <header>
            <h2 class="section-header" id="education-section-header">
                Education
                <a href="#"><img alt="back-to-top" class="back-to-top-button" src=${backToTop} /></a>
            </h2>
        </header>
        <hr/>
        <section>
            <h3>Educational History</h3>
            <ul>
                <li><b>Rowan University | B.S. in Computer Science | May 2025 | GPA: 4</b></li>
            </ul>
            <ul>
                <li>Johns Hopkins University | 2018–2020 (transferred to Rowan in 2023) | GPA: 3.78</li>
            </ul>
        </section>
    </section>
    <section id="skills" class="main-section">
        <header>
            <h2 class="section-header" id="skills-section-header">
                Skills
                <a href="#"><img alt="back-to-top" class="back-to-top-button" src=${backToTop} /></a>
            </h2>
        </header>
        <hr/>
        <div class="skills-container">
            <section>
                <h3>Programming Languages</h3>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Swift</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>Rust</li>
                    <li>x86-64 Assembly</li>
                    <li>Scheme</li>
                </ul>
            </section>
            <section>
                <h3>Additional Skills / Familiarities</h3>
                <ul>
                    <li>AWS (Certified Solutions Architect &#8212 Associate)</li>
                    <li>RDBMS (MySQL, Oracle), SQL</li>
                    <li>Datadog</li>
                    <li>Agile (Scrum)</li>
                    <li>Unix/Linux</li>
                    <li>Spring + Spring Boot</li>
                    <li>React</li>
                    <li>Jakarta EE</li>
                    <li>watchOS</li>
                    <li>Android</li>
                    <li>Version Control (Git, SVN)</li>
                    <li>Build Tools (Maven, Gradle)</li>
                    <li>Jira</li>
                </ul>
            </section>
            <section>
                <h3>AWS Solutions Architect Certification</h3>
                <div data-iframe-height="270" data-iframe-width="350"
                     data-share-badge-host="https://www.credly.com"
                     data-share-badge-id="992a073a-3fcf-4ec9-be8e-4cce4b2513c7"></div>
                <script async src="//cdn.credly.com/assets/utilities/embed.js" type="text/javascript"></script>
            </section>
        </div>
    </section>
    <section id="projects" class="main-section">
        <header>
            <h2 class="section-header" id="projects-section-header">
                Projects
                <a href="#"><img alt="back-to-top" class="back-to-top-button" src=${backToTop} /></a>
            </h2>
        </header>
        <hr/>
        <ul>
            <li><a href="https://github.com/achance6/C-Library-Rust-Wrapper" target="_blank">Rust FFI Wrapper (WIP)</a>
            </li>
            <li><a href="https://github.com/achance6/HangMan" target="_blank">CLI Hangman</a></li>
            <li><a href="https://github.com/achance6/ProjectEulerJava" target="_blank">Project Euler</a></li>
            <li><a href="https://github.com/achance6/cache-simulator" target="_blank">CLI Cache Simulator</a></li>
            <li><a href="https://github.com/achance6/Tone-Generator" target="_blank">Tone Generator</a></li>
            <li><a href="https://github.com/achance6/achance6.github.io" target="_blank">Reddit Scraper</a></li>
            <li><a href="https://github.com/achance6/AirplaneLocator" target="_blank">Plane Locator</a></li>
        </ul>
    </section>
    <section id="resume" class="main-section">
        <header>
            <h2 class="section-header" id="resume-section-header">
                Resume
                <a href="#"><img alt="back-to-top" class="back-to-top-button" src=${backToTop} /></a>
            </h2>
        </header>
        <hr/>
        <a href=${resume} target="_blank">I am here! Click me!</a>
    </section>
</main>
<footer>
    <section id="contact-info" class="main-section">
        <header>
            <h2 class="section-header" id="contact-info-section-header">
                Contact Info
                <a href="#"><img alt="back-to-top" class="back-to-top-button" src=${backToTop} /></a>
            </h2>
        </header>
        <hr/>
        <ul>
            <li>
                <p>Name: Ayden Chance</p>
            </li>
            <li>
                <p>
                    Email:
                    <a href="mailto:ayden.chance@rocketmail.com">ayden.chance@rocketmail.com</a>
                </p>
            </li>
            <li>
                <p>
                    Github:
                    <a href="https://github.com/achance6" target="_blank">github.com/achance6</a>
                </p>
            </li>
            <li>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/ayden-chance-dev" target="_blank">linkedin.com/in/ayden-chance-dev</a>
                </p>
            </li>
        </ul>
    </section>
</footer>
`;

setupDarkMode()
