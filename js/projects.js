// ------- JSON

const personal = [
    {
        title: "Reccomendation Engine", 
        link: "https://github.com/Maanav-G/Recommendation-Engine",
        detail: "~ In Progress ~"
    },
    {
        title: "Chess Engine", 
        link: "https://github.com/Maanav-G/Chess",
        detail: "Used Java to create a fully-functional chess engine from scratch and incorporated a standardized artificial intelligence for the user to compete against"
    },
    {
        title: "Blog", 
        link: "https://github.com/Maanav-G/Blog",
        detail: "A fully functioning blog web application created using Python with Django 1.9 with full admin dashboard support"
    },
    {
        title: "Speech-to-Text Translator", 
        link: "https://github.com/Maanav-G/Microsoft-Discover-Azure",
        detail: "A fully functioning blog web application created using Python with Django 1.9 with full admin dashboard support"
    },
    {
        title: "Blog", 
        link: "https://github.com/Maanav-G/Blog",
        detail: "A fully functioning blog web application created using Python with Django 1.9 with full admin dashboard support"
    },
    {
        title: "Blog", 
        link: "https://github.com/Maanav-G/Blog",
        detail: "A fully functioning blog web application created using Python with Django 1.9 with full admin dashboard support"
    },
    {
        title: "Blog", 
        link: "https://github.com/Maanav-G/Blog",
        detail: "A fully functioning blog web application created using Python with Django 1.9 with full admin dashboard support"
    },
];


const internship = [
    {
        title: "ServiceNow", 
        subtitle: "@ IBM",
        detail: "Worked on the development of our new ServiceNow application, intended process incident reports and problem tickets."
    },
];




// ------- JavaScript

function template(section){
    return `
    <div class="projects-each">
    <p class="projects-title"><a class="project-title-link" href="${section.link}" target="_blank">${section.title}</a></p>
    <div class="projects-details">
        <p>${section.detail}</p>
    </div>
    </div>
    `;
};


function internship(section){
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
    document.getElementById("personalprojects").innerHTML = `${personal.map(personal).join('')}`
    document.getElementById("internship-projects").innerHTML = `${internship.map(internship).join('')}`
};

