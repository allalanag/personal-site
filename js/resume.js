// ------- JSON

const work = [
    {
        company: "Microsoft",
        position: "Software Engineer Intern",    
        date: "May 2020 - Present"
    },
    {
        company: "Deloitte Consulting",
        position: "Consulting Analyst",    
        date: "Jan 2020 - Apr 2020 "
    },
    {
        company: "IBM",
        position: "Software Engineer Intern",    
        date: "May 2018 - Aug 2019"
    },
    {
        company: "McMaster University",
        position: "Research Assistant - Faculty of Computing & Software",
        date: "Jan 2019 - May 2019"    
    },
    {
        company: "Mixem",
        position: "Front-End Developer Intern", 
        date: "Jan 2018 - May 2018"    
    },
];

const extracurriculars = [
    {
        company: "Deloitte",
        subCompany: "Recruiting Team",
        position: "Campus Ambassador",
        date: "May 2020 - Present" 
    },
    {
        company: "DeltaHacks",
        subCompany: "Faculty of Engineering, McMaster University",
        position: "Vice President Sponsorship",
        date: "May 2019 - Jan 2020" 
    },
    {
        company: "Mathematical Research Investment Council",
        subCompany: "McMaster University",
        position: "Research Analyst",
        date: "Sept 2019 - Dec 2019" 
    },
    {
        company: "Microsoft",
        subCompany: "Campus Team",
        position: "Student Partner",
        date: "Sept 2019 - Dec 2019" 
    },
    {
        company: "IBM",
        subCompany: "Campus Recruiting Team",
        position: "Student Campus Ambassador",
        date: "Sept 2019 - Dec 2019" 
    },
    {
        company: "IBM",
        subCompany: "Future Blue",
        position: "Lead of C&D and Social",
        date: "Jan 2019 - Aug 2019"    
    },
    {
        company: "McMaster Consulting Association",
        subCompany: "Faculty of Commerce, McMaster University",
        position: "Associate - Technology Sector",
        date: "Sept 2018 - Jan 2019"   
    },
    {
        company: "DeltaHacks",
        subCompany: "Faculty of Engineering, McMaster University",
        position: "Website Development Lead",
        date: "May 2018 - Jan 2019"
    },
    {
        company: "Waterloop",
        subCompany: "Faculty of Engineering, University of Waterloo",
        position: "Software Developer (Web and Embedded)",
        date: "May 2018 - Aug 2018"
    },
];

const technical = [
    {
        name: "Questrade API Wrapper", 
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/questrade-api-wrapper",
        linkName: "/questrade-api-wrapper" 
    },
    {
        name: "NBA Rookie Statistics Predictor", 
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/NBA-rookie-statistics-analysis",
        linkName: "/NBA-rookie-statistics-analysis" 
    },
    {
        name: "Reccomendation Engine", 
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/Recommendation-Engine",
        linkName: "/Recommendation-Engine" 
    },
    {
        name: "EDGE Leadership (2020)",
        logo: "icon fas fa-globe",
        link: "http://www.edgeleadership.ca",
        linkName: "edgeleadership.ca"  
    },
    {
        name: "DeltaHacks Website (2020)",
        logo: "icon fas fa-globe",
        link: "https://www.deltahacks.com",
        linkName: "deltahacks.com"  
    },
    {
        name: "Chess Engine",
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/Chess",
        linkName: "/Chess" 
    },
    {
        name: "Blog",
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/Blog",
        linkName: "/Blog"  
    },
    {
        name: "Speech to Text Translator",
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/Microsoft-Discover-Azure",
        linkName: "/Microsoft-Discover-Azure"  
    },
    {
        name: "DeltaHacks Website (2019)",
        logo: "icon fas fa-globe",
        link: "https://www.deltahacks.com",
        linkName: "deltahacks.com"  
    },
    {
        name: "Waterloop (2018)",
        logo: "icon fas fa-globe",
        link: "https://teamwaterloop.ca",
        linkName: "teamwaterloop.ca"  
    },
    {
        name: "Standardized Blockchain",
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/standard-blockchain",
        linkName: "/standard-blockchain"  
    },
    {
        name: "Google Extension: Media Launcher",
        logo: "icon fab fa-github",
        link: "https://github.com/Maanav-G/Media-Launcher---Google-Extension",
        linkName: "/Media-Launcher-Google-Extension"  
    },
];


const medium = [
    {
        name: "Send Emails Using Python", 
        logo: "icon fab fa-medium-m",
        link: "https://medium.com/python-in-plain-english/send-emails-using-python-28446d04e084",
        linkName: "/send-emails-using-python" 
    },
    {
        name: "The 8 Best Productivity Apps - MacOS", 
        logo: "icon fab fa-medium-m",
        link: "https://medium.com/@maanavgarg/the-10-best-productivity-apps-for-mac-2a70c6f85476",
        linkName: "/the-8-best-productivity-apps-for-mac" 
    },
];


const language = [ 
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS/SASS",
    "C",
    "Elm",

];

const technologies = [
    "Electron",
    "Django",
    "Angular",
    "React",
    "Rational Software Architect",
    "WebSphere",
    "Node.js",
    "jQuery",
    "Azure",
    "Google Cloud",
    "Leap Motion",
    "Arduino",
    "Rust",
    "Ember",
    "Rasberry Pi"
]

// ------- JavaScript

function workTemplate(section){
    return `
    <div class="resume-subsection">
        <div class="resume-subsection-titlesection">
        <h2 class="resume-subsection-title">${section.company}</h2>
            <p class="resume-subsection-title">${section.position}</p> 
            <p class="resume-subsection-title">${section.date}</p> 
        </div>
    </div>
    `;
};

function extracurricularsTemplate(section){
    return `
    <div class="resume-subsection">
        <div class="resume-subsection-titlesection">
            <h2 class="resume-subsection-title">${section.company}</h2>
            <p class="resume-subsection-title">${section.subCompany}</p> 
            <p class="resume-subsection-title">${section.position}</p> 
            <p class="resume-subsection-title">${section.date}</p> 
        </div>
    </div>
    `;
};

function technicalTemplate(section){
    return `
    <div class="resume-subsection">
        <div class="resume-subsection-titlesection">
            <h2 class="resume-subsection-title">${section.name}</h2>
            <p class="resume-subsection-title">
                <a href="${section.link}" target="_blank"><i class="${section.logo}"></i></a>
                ${section.linkName}
            </p> 
        </div>
    </div>
    `;
};

function mediumTemplate(section){
    return `
    <div class="resume-subsection">
        <div class="resume-subsection-titlesection">
            <h2 class="resume-subsection-title">${section.name}</h2>
            <p class="resume-subsection-title">
                <a href="${section.link}" target="_blank"><i class="${section.logo}"></i></a>
                ${section.linkName}
            </p> 
        </div>
    </div>
    `;
};

function languageTemplate(section){
    return `
    <label class="language">${section}</label>
    `;
};

function technologiesTemplate(section){
    return `
    <label class="language">${section}</label>
    `;
};

window.onload = function(){
    document.getElementById("Work").innerHTML = `${work.map(workTemplate).join('')}`
    document.getElementById("Extracurriculars").innerHTML = `${extracurriculars.map(extracurricularsTemplate).join('')}`
    document.getElementById("Technical").innerHTML = `${technical.map(technicalTemplate).join('')}`
    document.getElementById("Language").innerHTML = `${language.map(languageTemplate).join('')}`
    document.getElementById("Technologies").innerHTML = `${technologies.map(technologiesTemplate).join('')}`
    document.getElementById("Medium").innerHTML = `${medium.map(mediumTemplate).join('')}`
};



