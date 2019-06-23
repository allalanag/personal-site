// ------- JSON

const update = [
    {
        title: "IBM - AquaHacking",
        date: "June 15, 2019",
        detail: "3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st day conference at Deloitte, including an intense case competition, where my team and I placed 1st"
    },
    {
        title: "Deloitte National Leadership Conference",
        date: "June 9-12, 2019",    
        detail: "3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st day conference at Deloitte, including an intense case competition, where my team and I placed 1st"
    },
    {
        title: "FutureBlue Welcome Event",
        date: "May 17, 2019",
        detail: "3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st day conference at Deloitte, including an intense case competition, where my team and I placed 1st"
    },
    {
        title: "DeltaHacks - New Position",
        date: "May 1, 2019", 
        detail: "3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st day conference at Deloitte, including an intense case competition, where my team and I placed 1st"
    },
    {
        title: "IBM Tech Consulting Case Competition",
        date: "March 10, 2019", 
        detail: "3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st3 day conference at Deloitte, including an intense case competition, where my team and I placed 1st day conference at Deloitte, including an intense case competition, where my team and I placed 1st"
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



