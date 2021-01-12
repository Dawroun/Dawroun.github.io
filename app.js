let theme = localStorage.getItem('theme');
if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot");

for( i = 0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log("Clicked", mode);
        setTheme(mode);
    });
}

function setTheme(modejon){
    if(modejon == "light"){
        document.getElementById('theme-style').href = "default.css"
    }
    if(modejon == "blue"){
        document.getElementById('theme-style').href = "blue.css"
    }
    if(modejon == "green"){
        document.getElementById('theme-style').href = "green.css"
    }
    if(modejon == "purple"){
        document.getElementById('theme-style').href = "purple.css"
    }
    localStorage.setItem('theme', modejon);
}