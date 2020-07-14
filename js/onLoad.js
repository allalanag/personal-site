const work_list = [
    {
        company: "Microsoft",
        subteam: "Rich Navigation",
        image: "./files/images/work/microsoft.png",
        role: "Software Engineer Intern",
        date: "May 2020 - Present",
        location: "Seattle, WA",
        tech: ["C#", "ASP.NET", "JavaScript", "TypeScript", "ReactJS", "SQL", "KQL (Kusto)", "Azure"],
        desc: [
            "Developed an interactive telemetry based dashboard using C# with ASP.NET and JavaScript for Visual Studio’s extension ecosystem.",
            "Leveraged Kusto and SQL for extracting and engineering data, by translating extension telemetry into digestible information for the dashboard by processing the data into an Azure SQL Database and using an Azure WebJob that runs periodically (1 hour) to append any new data.",
            "Designed and implemented over 15 different components for the dashboard’s UI using ReactJS and TypeScript.",
            "Implemented security protocols to protect the dashboard’s server and users from malicious activities using Azure KeyVault and Application Gateway."
        ],
    },
    {
        company: "Deloitte Consulting",
        subteam: "Systems Engineering",
        image: "./files/images/work/deloitte.png",
        role: "Consulting Analyst - Intern",
        date: "January 2020 - April 2020",
        location: "Toronto, ON",
        tech: ["Project Management", "Functional Delivery", "Confluence" , "JIRA", "Excel/VBA"],
        desc: [
            "Consulted client-side for a large aviation conglomerate on delivering a ‘Loyalty’ program from end-to-end. ",
            "Acted as the primary functional analyst for our feature team, where I was the liaison between the client and vendors for all technical and business processes.",
            "Solely delivered 4 major functional features that entailed managing the vendors, ensuring deadlines were met, and requirements were signed-off on.",
            "Facilitated PI planning by adhering to the project roadmap and capturing business requirements to appropriately allocate feature delivery sprint-by-sprint.",
            "Managed and ensured accuracy on the Confluence and JIRA platforms by assuring all on-going changes were appropriately reflected."
        ],
    },
    {
        company: "IBM",
        subteam: "Securities Industry Services",
        image: "./files/images/work/ibm.png",
        role: "Software Engineer Intern",
        date: "May 2018 - August 2019 (16-months)",
        location: "Toronto, ON",
        tech: ["Java", "JavaScript", "Python", "IBM Cloudant", "IBM Db2"],
        desc: [
            "Supported client-side development for TD, National Bank, HSBC, and Desjardins by working on 8 distinct projects, primarily using Java and Python.",
            "Designed and developed a fully functioning REST API using Python that stored the required order data based on the transaction ID in an IBM Cloudant Database by connecting to the Thompson Reuter server and cross-referencing with internal data and requirements.",
            "Increased TD’s orders-processed per second by ~100% (600,000), by implementing Java to redesign their stock order engine, while also overseeing the QA effort and handling required post-delivery maintenance.",
            "Streamlined an internal unit-testing process by 20% (4hr) by creating a Python script that automates test-case construction, using an internal SQL Database."
        ],
    },
    {
        company: "McMaster University",
        subteam: "Faculty of Computing & Software",
        image: "./files/images/work/mac.png",
        role: "Research Assistant",
        date: "January 2019 - May 2019",
        location: "Hamilton, ON",
        tech: ["Elm", "Haskell"],
        desc: [
            "Implemented Elm and Haskell to support Dr. Christopher Anand’s current research on computational algebraic thinking.",
            "Developed 14 quantitative models of gradient waveforms based on Dr. Anand’s recent research on ‘MRI’ by analyzing gathered data."
        ],
    },
    {
        company: "Mixem",
        subteam: "User Interface",
        image: "",
        role: "Software Engineer Intern",
        date: "January 2018 - April 2018",
        location: "Toronto, ON",
        tech: ["Swift", "JavaScript", "ReactJS", "HTML/CSS"],
        desc: [
            "Designed and implemented the front-end portion of Mixem’s mobile application primarily using JavaScript and Swift with React Native.",
        ],
    },
];

const project_list = [
    {
        name: "McMaster Internship Dashboard ",
        image: "./files/images/projects/dashboard.png",
        tech: ["Python", "JavaScript", "MongoDB", "Azure"],
        desc: "[Upcoming Project] <br/> An interactive dashboard that displays information on McMaster’s Engineering students and their internship career thus far, for which the data was extracted from <a href='https://www.linkedin.com/' target='_blank'>LinkedIn.com</a><br/>All data was scraped from public profiles only.",
        links: [
        ]
        
    },
    {
        name: "Wallet",
        image: "./files/images/projects/wallet.png",
        tech: ["Python", "JavaScript", "AWS"],
        desc: "Wallet is a personal financial management application that provides the user with an aggregated dashboard with all their connected account(s), which allows them to monitor and budget their personal finances.",
        links: [
            {link: "https://github.com/Maanav-G/wallet", link_name: "/wallet", logo: "icon fab fa-github"},
            {link: "./wallet/wallet-app.html", link_name: "WebApp", logo: ""},
        ]
        
    },
    {
        name: "NBA Rookie Statistics",
        image: "./files/images/projects/nba.png",
        tech: ["Python", "Jupyter Notebook"],
        desc: "A mathematical machine learning model designed to predict the regular season averaging statistics for incoming rookies, by applying the trend of all the NBA player’s (1980 - 2018) college careers compared to their first season in the league, to the 2019 rookies college career statistics. ",
        links: [
            {link: "https://github.com/Maanav-G/nba-rookie-statistics-analysis", link_name: "/nba-rookie-statistics-analysis", logo: "icon fab fa-github"},
        ]
    },
    {
        name: "Questrade API Wrapper",
        image: "./files/images/projects/questrade.png",
        tech: ["Python"],
        desc: "This is a custom Python wrapper for the <a href='https://www.questrade.com/api/documentation/getting-started' target='_blank'>Questrade API</a> that I built to analyze and retrieve key information from my personal Questrade Trading Account.",
        links: [
            {link: "https://github.com/Maanav-G/questrade-api-wrapper", link_name: "/questrade-api-wrapper", logo: "icon fab fa-github"},
        ]
    },
    {
        name: "Recommendation Engine",
        image: "./files/images/projects/movies.png",
        tech: ["Python", "JavaScript"],
        desc: "A machine learning recommendation engine, that takes a movie as input and returns 10 similar ones, using cosine similarity.",
        links: [
            {link: "https://github.com/Maanav-G/recommendation-engine", link_name: "/recommendation-engine", logo: "icon fab fa-github"},
        ]
    },
    {
        name: "Sentiment Telegram Bot",
        image: "./files/images/projects/telegram.png",
        tech: ["Python"],
        desc: "[In-Progress] <br/> A Telegram bot that analyzes a user's message and returns sentiment metrics",
        links: [
            {link: "https://github.com/Maanav-G/telegram-bot", link_name: "/telegram-bot", logo: "icon fab fa-github"},
        ]
    },
];

const lang = [
    ["Java", 8],
    ["Python", 9],
    ["C#", 6],
    ["JavaScript", 7],
    ["HTML", 7],
    ["CSS/SASS", 6],
    ["MIPS", 4],
];

const tech = [
    ["KQL", 8],
    [".Net", 7],
    ["React", 9],
    ["AWS", 6],
    ["Flask", 8],
    ["Azure", 5],
];


const schedule = [{
    title: "Fall 2017",
    courses: [
        [],
        [],
        [],
        [],
    ]

}]


function work_template(item) {
    return `
    <div class="col-sm-6" style="padding: 1vh">
    <div class="card work-card" style="width: 100%; height: 100%;">
    <div class ="work">
            <div class="card-body work-body">
                <h5 class="card-title work-title">
                    ${item.company} |
                    <small>${item.subteam}</small>
                </h5>
                <p class="card-text work-role">
                    ${item.role} <br />
                    <small>${item.date}</small> <br />
                    <small>${item.location}</small>
                </p>
                <div class="card-btn-group work-btn-group">
                ${tech_list(item.tech)}
                </div>

                <p class="card-text work-desc">
                    ${bullet_points(item.desc)}
                </p>
            </div>
    </div>
</div>
</div>
    `


    // `
    // <div class="card work-card" style="width: 100%; height: 100%;">
    //     <div class ="work">
    //             <div class="card-body work-body">
    //             <div class="row">
    //                 <div class="col-4">
    //                     <img class="card-img-top project-img-top" src="${item.image}" alt="${item.company}">
    //                 </div>
    //                 <div class="col-8">
    //                 <h3 class="card-title work-title">${item.company}</h3>
    //                 <p class="card-text work-role">
    //                     ${item.role} <br />
    //                     <small>${item.date}</small> <br />
    //                     <small>${item.location}</small>
    //                 </p>
    //                 <div class="card-btn-group work-btn-group">
    //                 ${tech_list(item.tech)}
    //             </div>
    //                 </div>
    //             </div>



    //                 <p class="card-text work-desc">
    //                     ${bullet_points(item.desc)}
    //                 </p>
    //             </div>
    //     </div>
    // </div>
    // `;


    // return `
    // <div class ="row work">
    //     <div class="col-3 work-col"  >
    //         <img class="work-image" src="${item.image}" alt="${item.company}" style="width: 100%;">
    //     </div>
    //     <div class="col-9 work-col">
    //         <div class="card work-card" style="width: 100%; height: 100%;">
    //             <div class="card-body work-body">
    //                 <h3 class="card-title work-title">${item.company}</h3>
    //                 <p class="card-text work-role">
    //                     ${item.role} <br />
    //                     <small>${item.date}</small> <br />
    //                     <small>${item.location}</small>
    //                 </p>
    //                 <div class="card-btn-group work-btn-group">
    //                     ${tech_list(item.tech)}
    //                 </div>
    //                 <p class="card-text work-desc">
    //                     ${bullet_points(item.desc)}
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // `;
};

function project_template(item) {
    return `
    <div class="col-sm-4" style="padding: 1vh">
        <div class="card project-card" style="width: 100%;">
            <img class="card-img-top project-img-top" src="${item.image}" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title project-title">${item.name}</h5>
                <div class="card-btn-group project-btn-group">
                    ${tech_list(item.tech)}
                </div>
                <small><p class="card-text project-text">${item.desc}</p></small>
                <br/>
                    ${link_list(item.links)}
            </div>
        </div>
    </div>
    `;
};

function link_list(list) {
    full_list = ""
    for(i = 0; i < list.length; i++){
        item = `
        <a href="${list[i].link}" class="card-btn btn btn-outline-dark"
            target="_blank"><i class="${list[i].logo}"></i> ${list[i].link_name}</a>
        `
        full_list = full_list + item
    }
    return full_list
}

function tech_list(list) {
    full_list = ""
    for (i = 0; i < list.length; i++) {
        item = `
            <button class="tech card-btn btn btn-outline-dark btn-sm project-btn">${list[i]}</button>
        `
        full_list = full_list + item
    }
    return full_list
};

function bullet_points(list) {
    full_list = "<small><ul class='list-unstyled'>"
    for (i = 0; i < list.length; i++) {
        item = `
            <li>${list[i]}</li><br/>
        `
        full_list = full_list + item
    }
    full_list = full_list + "</ul></small>"
    return full_list

}

function graph_data(list){
    names = [];
    skills = [];
    for(i = 0; i < list.length; i++){
        data = list[i]
        names.push(data[0]);
        skills.push(data[1]);
    }
    data_set = [
        names,
        skills
    ]
    return data_set;
}

function graph_options(data) {
    var options = {
        series: [{
        name: "Lvl",
        data: data[1]
      }],
      colors: ['#4F7CAC'],
        chart: {
        toolbar: {
            show: false
        },
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: data[0],
      }
      };
      return options 
}

window.onload = function () {
    document.getElementById("work").innerHTML = `${work_list.map(work_template).join('')}`
    document.getElementById("projects").innerHTML = `${project_list.map(project_template).join('')}`

    var lang_chart = new ApexCharts(document.querySelector("#skills-lang"), graph_options(graph_data(lang)));
    lang_chart.render();
    var tech_chart = new ApexCharts(document.querySelector("#skills-tech"), graph_options(graph_data(tech)));
    tech_chart.render();
};


// MOVIES RECCOMENDATION 
function submit() {

    movie_name = document.getElementById("movie-name").value

    const URI = "https://maanavg.pythonanywhere.com/" // CHANGE URI
    const formData = new FormData();

    formData.append('movie_name', movie_name);

    const requestOptions = {
        method: 'POST',
        body: formData,
        mode: 'cors'
    };

    fetch(`${URI}get_recommendations`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            display(data)
        })
        .catch(function (error) {
            console.error(error)
        });
}

function display(data) {
    display_data(clean_data(data), "results")
}

function clean_data(data) {
    template = `
    <p>Searching for '${data[0][0].title}'</p>
    <table class="table">
            <thead>
                <tr>
                <th scope="col">Movie Title</th>
                <th scope="col">Similarity</th>
                </tr>
            </thead>
            <tbody>
    
    `
    for (i = 1; i < data.length; i++) {
        item = `
                <tr>
                <td>${data[i][0].title}</td>
                <td>${data[i][0].similarity}%</td>
                </tr>
        `
        template = template + item
    }
    template = template + `
        </tbody>
    </table>
    `
    return template

}

function clear_list(){
    document.getElementById('results').innerHTML = ""
}

function display_data(data, id) {
    document.getElementById(id).innerHTML = data
}

// MOVIES RECCOMENDATION 