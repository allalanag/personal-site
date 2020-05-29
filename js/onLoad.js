const work_list = [
    {
        company: "Microsoft",
        image: "./files/images/work/microsoft.png",
        role: "Software Engineer Intern",
        date: "May 2020 - Present",
        location: "Seattle, WA",
        tech: ["C#", "ASP.NET", "JavaScript"],
        desc: [
            "Designing and implementing an interactive dashboard with C#, ASP.NET and JavaScript for Visual Studio’s extension ecosystem.",
            "Leveraging Kusto (KQL) for engineering data, by dynamically translating extension telemetry into digestible information for the dashboard.",
            "Proactively refining and validating the project’s requirements by conducting interviews with the targeted customer base, to maximize utility."
        ],
    },
    {
        company: "Deloitte Consulting",
        image: "./files/images/work/deloitte.png",
        role: "Consulting Analyst - Intern",
        date: "January 2020 - April 2020",
        location: "Toronto, ON",
        tech: ["Project Management", "Functional Delivery", "JIRA/Confluence"],
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
        image: "./files/images/work/ibm.png",
        role: "Software Engineer Intern",
        date: "May 2018 - August 2019 (16 months)",
        location: "Toronto, ON",
        tech: ["Java", "JavaScript", "Python"],
        desc: [
            "Supported client-side development for TD, National Bank, HSBC, and Desjardins by working on 8 distinct projects, primarily using Java and Python.",
            "Designed and developed a fully functioning REST API that returned the required order data based on the transaction ID by connecting to the Thompson Reuter server and cross-referencing with internal data and requirements.",
            "Increased TD’s orders-processed per second by ~100% (600,000), by implementing Java to redesign their stock order engine, while also overseeing the QA effort and handling required post-delivery maintenance.",
            "Streamlined an internal unit-testing process by 20% (4hrs) by creating a Python script that automates test case construction, using the internal database."
        ],
    },
    {
        company: "McMaster University - <small>Faculty of Computing & Software</small>",
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
];

const project_list = [
    {
        name: "Wallet",
        image: "./files/images/projects/wallet.png",
        tech: ["Python", "JavaScript", "AWS"],
        desc: "Wallet is a personal financial management application that provides the user with an aggregated dashboard with all their connected account(s), which allows them to monitor and budget their personal finances. <br/><a href='https://maanavgarg.com/wallet/wallet-app.html' target='_blank'>My Wallet Webapp</a>",
        link: "https://github.com/Maanav-G/wallet",
        link_name: "/wallet"
    },
    {
        name: "NBA Rookie Statistics",
        image: "./files/images/projects/nba.png",
        tech: ["Python", "Jupyter Notebook"],
        desc: "A mathematical machine learning model designed to predict the regular season averaging statistics for incoming rookies, by applying the trend of all the NBA player’s (1980 - 2018) college careers compared to their first season in the league, to the 2019 rookies college career statistics. ",
        link: "https://github.com/Maanav-G/nba-rookie-statistics-analysis",
        link_name: "/nba-rookie-statistics-analysis"
    },
    {
        name: "Questrade API Wrapper",
        image: "./files/images/projects/questrade.png",
        tech: ["Python"],
        desc: "This is a custom Python wrapper for the <a href='https://www.questrade.com/api/documentation/getting-started' target='_blank'>Questrade API</a> that I built to analyze and retrieve key information from my personal Questrade Trading Account.",
        link: "https://github.com/Maanav-G/questrade-api-wrapper",
        link_name: "/questrade-api-wrapper"
    },
    {
        name: "Recommendation Engine",
        image: "./files/images/projects/movies.png",
        tech: ["Python"],
        desc: "A machine learning recommendation engine, that takes a movie as input and returns 10 similar ones, using cosine similarity.",
        link: "https://github.com/Maanav-G/recommendation-engine",
        link_name: "/recommendation-engine"
    },
    {
        name: "Sentiment Telegram Bot",
        image: "./files/images/projects/telegram.png",
        tech: ["Python"],
        desc: "[In-Progress] <br/> A Telegram bot that analyzes a user's message and returns sentiment metrics",
        link: "https://github.com/Maanav-G/telegram-bot",
        link_name: "/telegram-bot"
    },
];

const lang = [
    ["Java", 8],
    ["Python", 9],
    ["C#", 6],
    ["JavaScript", 7],
    ["HTML", 7],
    ["CSS/SASS", 6],
    ["MIPS Assembly", 4],
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

                <h5 class="card-title work-title">${item.company}</h5>
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
                <a href="${item.link}" class="card-btn btn btn-outline-dark"
                    target="_blank"><i class="icon fab fa-github"></i> ${item.link_name}</a>
            </div>
        </div>
    </div>
    `;
};

function tech_list(list) {
    full_list = ""
    for (i = 0; i < list.length; i++) {
        item = `
            <button class="card-btn btn btn-outline-dark btn-sm project-btn">${list[i]}</button>
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
