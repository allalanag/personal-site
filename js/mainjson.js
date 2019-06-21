// ------- JSON


const language = [
    {
        language: "IBM",
        logo: "Software Developer and Technical Analyst Intern",    
        progress: "May 2018 - Present"
    },
]

// ------- JavaScript

function languageTemplate(section){
    return `
    <div id="test" class="load"></div>
        <script src="https://cdn.rawgit.com/kimmobrunfeldt/progressbar.js/1.0.0/dist/progressbar.js"></script>
        <script>
                    var bar = new ProgressBar.SemiCircle(test, {
                    strokeWidth: 6,
                    color: '#FFEA82',
                    trailColor: '#eee',
                    trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    svgStyle: null,
                    text: {
                        value: '',
                        alignToBottom: false
                    },
                    from: {color: '#FFEA82'},
                    to: {color: '#ED6A5A'},
                    // Set default step function for all animate calls
                    step: (state, bar) => {
                        bar.path.setAttribute('stroke', state.color);
                        var value = Math.round(bar.value() * 100);
                        if (value === 0) {
                        bar.setText('');
                        } else {
                        bar.setText("<i class='languages fab fa-react'></i>");
                        }
        
                        bar.text.style.color = state.color;
                    }
                    });
                    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
                    bar.text.style.fontSize = '6rem';
        
                    bar.animate(1.0);  // Number from 0.0 to 1.0
         </script>

    `;
};

function technologiesTemplate(section){
    return `
    <label class="language">${section}</label>
    `;
};

window.onload = function(){
    document.getElementById("Language").innerHTML = `${language.map(languageTemplate).join('')}`
    // document.getElementById("Technologies").innerHTML = `${technologies.map(technologiesTemplate).join('')}`
};



