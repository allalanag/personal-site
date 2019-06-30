// ------- JSON

const update = [
    {
        title: "IBM - AquaHacking",
        date: "June 15, 2019",
        detail: ""
    },
    {
        title: "Deloitte National Leadership Conference",
        date: "June 9-12, 2019",    
        detail: ""
    },
    {
        title: "FutureBlue Welcome Event",
        date: "May 17, 2019",
        detail: ""
    },
    {
        title: "DeltaHacks - New Position",
        date: "May 1, 2019", 
        detail: ""
    },
    {
        title: "IBM Tech Consulting Case Competition",
        date: "March 10, 2019", 
        detail: ""
    },
];











// ------- JavaScript

function template(section){
    return `
    <div class="template row">
    <div class="leftside"> 
        <p class="template-title">${section.title}</p>
        <p class="template-date">${section.date}</p>
    </div>
    <div class="template-detail">
        <p>${section.detail}</p>
    </div>
    </div>
    `;
};
window.onload = function(){
    document.getElementById("updates").innerHTML = `${update.map(template).join('')}`
};



