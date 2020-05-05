// ------- JSON

const personal = [
    {
        title: "NBA Rookie Statistics Predictor", 
        date: "July 2019 - Present",
        link: "https://github.com/Maanav-G/NBA-rookie-statistics-analysis",
        detail: "A machine learning model that predicts the statistics of the NBA’s 2019-2020 season rookies"
    },
    {
        title: "Reccomendation Engine", 
        date: "June 2019 - Present",
        link: "https://github.com/Maanav-G/Recommendation-Engine",
        detail: "A model that recommends the user a similar set of movies based on the inputted movie title"
    },
    {
        title: "Chess Engine", 
        date: "January 2019 - Present",
        link: "https://github.com/Maanav-G/Chess",
        detail: "Used Java to create a fully-functional chess engine from scratch and incorporated a standardized artificial intelligence for the user to compete against"
    },
    {
        title: "Blog", 
        date: "October 2018 - December 2018",
        link: "https://github.com/Maanav-G/Blog",
        detail: "A fully functioning blog web application created using Python with Django 1.9 with full admin dashboard support"
    },
    {
        title: "Speech-to-Text Translator", 
        date: "July 2018",
        link: "https://github.com/Maanav-G/Microsoft-Discover-Azure",
        detail: "A fully functioning blog web application created using Python with Django 1.9 with full admin dashboard support"
    },
    {
        title: "DeltaHacks - Website", 
        date: "October 2018 - Present",
        link: "https://www.deltahacks.com",
        detail: "Developed a website for McMaster University’s largest Hackathon, using HTML, CSS and Javascript with the Vue.js framework"
    },
    {
        title: "Waterloop - Website", 
        date: "May 2018 - January 2019",
        link: "https://teamwaterloop.ca",
        detail: "Developed a website for the University of Waterloo’s Hyperloop team, using HTML, CSS and Javascript using the React framework"
    },
    {
        title: "Standardized Blockchain", 
        date: "May 2018",
        link: "https://github.com/Maanav-G/standard-blockchain",
        detail: "Used Python 3 to develop a standard Blockchain and its functions, while using Postman to test functionalities. Developed the blockchain functions using external python libraries: requests, hashlib, flask, flask_cors and flask_jwt."
    },
    {
        title: "Azure - Microsoft Machine Learning", 
        date: "May 2018",
        link: " ",
        detail: "Created and tuned a machine learning model using Azure to predict if a given flight is likely to arrive on time or not."
    },
];

const internship = [
    {
        title: "MQAccess", 
        subtitle: "@ IBM",
        detail: "Assisted the senior developer in building an access program, to place and get messages from the MQ database."
    },
    {
        title: "ServiceNow", 
        subtitle: "@ IBM",
        detail: "Worked on the development of our new ServiceNow application, intended process incident reports and problem tickets."
    },
    {
        title: "PriceServerStub", 
        subtitle: "@ IBM",
        detail: "Developed and deployed a server that connects to an existing in-house testing server, that allows the team to process test cases."
    },
    {
        title: "Rule Engine", 
        subtitle: "@ IBM",
        detail: "Created an engine that filters, edits and then redirects incoming orders based on a set of specified rules."
    },
    {
        title: "JSON Generator", 
        subtitle: "@ IBM",
        detail: "Created an excel program, that allows our team to generate automated .json files for testing purposes."
    },
    {
        title: "PriceServerWeb", 
        subtitle: "@ IBM",
        detail: "Developed UI Page allowing SIS to verify the current real time price of an order/stock given the specifications from Thompson Reuter."
    },
];

const update = [
    {
        title: "FutureBlue (IBM) - IBMHacks",
        date: "July 10-12, 2019",
        detail: "Helped organize and hosted a Hackathon for IBM interns."
    },
    {
        title: "FutureBlue (IBM) - Algorithm Party",
        date: "July 5, 2019",
        detail: "Organized and ran a workshop on the basics of Algorithms, and explained different examples."
    },
    {
        title: "IBM - AquaHacking",
        date: "June 15, 2019",
        detail: "Represented IBM at a hackathon hosted in Toronto, Ontario."
    },
    {
        title: "Deloitte National Leadership Conference",
        date: "June 9-12, 2019",    
        detail: "I had the opportunity to attend Deloitte University for the Deloitte National Leadership Conference. A conference designed to give student’s insight into the various service lines offered at Deloitte, through many keynotes, workshops and their case competition. In addition to this, my team and I even placed 1st in the fore-mentioned case competition. "
    },
    {
        title: "FutureBlue (IBM) - Speed Networking Event",
        date: "June 1, 2019",
        detail: "Ran a speed networking event that gave students the opportunity to learn about the different roles and opportunities available at IBM."
    },
    {
        title: "New Position - Vice President Sponsorship, DeltaHacks",
        date: "May 1, 2019", 
        detail: "Appointed Vice President of Sponsorship for DeltaHacks, McMaster’s annual hackathon."
    },
    {
        title: "OutReach - Workshop",
        date: "March 25, 2019", 
        detail: "Hosted and organized a computer science workshop, catered to young highschool students (gr. 9 - 10), using Elm and Haskel"
    },
    {
        title: "IBM Tech Consulting Case Competition",
        date: "March 10, 2019", 
        detail: "Competed in IBM’s technology consulting case competition. Where my team and I managed to place top 25%"
    },
    {
        title: "FutureBlue (IBM) - Finance Workshop",
        date: "July 10-12, 2019",
        detail: "Delivered and created a workshop on personal finance and investing."
    },
];



// ------- JavaScript

function templateUpdate(section){
    return `
    <div class="projects-each">
    <p class="projects-title" style="display: inline">${section.title}</p>
    <div class="projects-details">
        <p>${section.date} </p> 
        <p>${section.detail}</p>
    </div>
    </div>

    `;
};


function templatePersonal(section){
    return `
    <div class="projects-each">
    <p class="projects-title" style="display: inline">${section.title} <a class="project-title-link" href="${section.link}" target="_blank"><i class=" fab fa-github"></i></a></p>
    <div class="projects-details">
        <p>${section.date} </p> 
        <p>${section.detail}</p>
    </div>
    </div>
    `;
};

function templateInternship(section){
    return `

    <div class="projects-each">
    <p class="projects-title" style="display: inline">${section.title} <p style="font-size: 0.75em; display: inline;">${section.subtitle}</p></p>
    <div class="projects-details">
        <p>${section.detail}</p>
    </div>
    </div>
    `;
};

window.onload = function(){
    document.getElementById("updates").innerHTML = `${update.map(templateUpdate).join('')}`
    document.getElementById("personals").innerHTML = `${personal.map(templatePersonal).join('')}`
    document.getElementById("internships").innerHTML = `${internship.map(templateInternship).join('')}`
};




