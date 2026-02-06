const words = document.getElementById("words");
const name = document.getElementById("name");
const mycolore = ["red", "blue", "green", "grey", "orange", "purple", "pink", "brown", "gray", "black"];
const wordInLnaguages = ["Happy Birthday", "Joyeux Anniversaire", "Feliz Cumpleaños", "Buon Compleanno", "Herzlichen Glückwunsch zum Geburtstag", "お誕生日おめでとうございます", "С днем рождения", "생일 축하합니다", "عيد ميلاد سعيد", "สุขสันต์วันเกิด"];
const dancebtn = document.getElementById("dancebtn");
const vid = document.getElementById("vid");
const body = document.body;
const bdocolors= ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'burlywood'];

let lastColor = null; // mémorise la dernière couleur

setInterval(() => {
    let randomColor;
    body.style.backgroundColor = bdocolors[Math.floor(Math.random() * bdocolors.length)];
    
    do {
        randomColor = mycolore[Math.floor(Math.random() * mycolore.length)];
    } while (randomColor === lastColor);

    lastColor = randomColor; 

    const randomWord = wordInLnaguages[Math.floor(Math.random() * wordInLnaguages.length)];

    words.style.color = randomColor;
    words.textContent = randomWord;
    name.style.color = randomColor;
    dancebtn.style.backgroundColor = randomColor;

}, 2000);

dancebtn.addEventListener("click", function () {
    if (vid.style.display === "none") {
        vid.style.display = "block";
        dancebtn.textContent = "Stop Dancing";
        vid.currentTime = 30;
        vid.play();
        vid.addEventListener("timeupdate", function () {
                if (vid.currentTime >= 100) {
                    vid.pause();
        }

    })
}
    else {
        vid.pause();
        vid.style.display = "none";
        dancebtn.textContent = "Wanna dance ? Click me ";
    }
});
