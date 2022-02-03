const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const img = document.getElementById("section-img");
const name = document.getElementById("name");
const age = document.getElementById("age");
const nationality = document.getElementById("nationality");
const position = document.getElementById("position");


const topPlayers = [
    {
        img: "https://icdn.football-espana.net/wp-content/uploads/2021/07/Nicolo-Barella.jpg",
        name: "Nicolo Barella",
        age: "24",
        nationality: "Italy",
        position: "Central Midfielder",
    },
    {
        img: "https://sempreinter.com/wp-content/uploads/2020/06/skriniar-2-scaled-e1591877196351.jpg",
        name: "Milan Skriniar",
        age: "24",
        nationality: "Italy",
        position: "Center Back",
    },
    {
        img: "https://www.sportsmax.tv/media/k2/items/cache/774826657fb642e970aa044870a38de3_XL.jpg",
        name: "Lautaro Martinez",
        age: "24",
        nationality: "Argentina",
        position: "Attacker",
    },
    {
        img: "https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/08/21/2021-08-21-22-06-12_383387.JPG/2021-08-21-22-06-12_383387.JPG/internazionale%3AcinemaApp",
        name: "Alessandro Bastoni",
        age: "22",
        nationality: "Italy",
        position: "Center Back",
    },
    {
        img: "https://sempreinter.com/wp-content/uploads/2021/10/Marcelo-Brozovic-1-scaled-e1633460381108.jpg",
        name: "Marcelo Brozovic",
        age: "29",
        nationality: "Croatia",
        position: "Central Midfielder",
    },
    {
        img: "https://sempreinter.com/wp-content/uploads/2021/04/Samir-Handanovic-scaled-e1618940643693.jpg",
        name: "Samir Handanovic",
        age: "37",
        nationality: "Slovenia",
        position: "Goalkeeper",
    },
];

let currentIndex = 0;

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex > topPlayers.length - 1) {
        currentIndex = 0;
    }
    showPerson(currentIndex);
});

previousBtn.addEventListener("click", function () {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = topPlayers.length - 1;
    }
    showPerson(currentIndex);
});

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentIndex);
});

function showPerson (person) {
    const item = topPlayers[person];
    img.src = item.img;
    name.textContent = item.name;
    age.textContent = item.age;
    nationality.textContent = item.nationality;
    position.textContent = item.position
}
