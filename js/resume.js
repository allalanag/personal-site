// ------- JSON

const work = [
    {
    company: "IBM",
    position: "Software Developer and Technical Analyst Intern"    
    },
    {
    company: "McMaster University",
    position: "Research Assitant - Faculty of Computing & Software"    
    },
    {
    company: "Mixem",
    position: "Front-End Developer Intern"    
    },
];

const extracurriculars = [
    {
    company: "DeltaHacks",
    subCompany: "Faculty of Engineering, McMaster University",
    position: "Head of Sponsorship" 
    },
    {
    company: "IBM",
    subCompany: "Future Blue",
    position: "Lead of C&D and Social" 
    },
    {
    company: "McMaster Consulting Association",
    subCompany: "Faculty of Commerce, McMaster University",
    position: "Associate - Technology Sector" 
    },
    {
    company: "DeltaHacks",
    subCompany: "Faculty of Engineering, McMaster University",
    position: "Website Development Lead" 
    },
    {
    company: "Waterloop",
    subCompany: "Faculty of Engineering, University of Waterloo",
    position: "Software Developer (Web and Embedded)" 
    },
];

const technical = [
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

const language = [ 
    "HTML", 
    "CSS/SASS",
    "JavaScript",
    "Python",
    "C",
    "Elm",
    "Haskell"
];

const technologies = [
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
    "Rasberry Pi"
]

// ------- JavaScript

function workTemplate(section){
    return `
    <div class="resume-subsection">
        <div class="resume-subsection-titlesection">
            <h2 class="resume-subsection-title">${section.company}</h2>
            <p class="resume-subsection-title">${section.position}</p> 
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
                <a href="${section.link}"><i class="${section.logo}"></i></a>
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
};