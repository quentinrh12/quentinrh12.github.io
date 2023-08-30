var up = document.getElementById('MCG_UP'); 
up.innerHTML = "Click button to start"; 
var down = document.getElementById('MCG_DOWN'); 
var bottom = document.getElementById('Bottom_Text');

var head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'layout.css'; 
document.body.appendChild(link);

let congrats = document.createElement('img');
congrats.src = "mac-guessr/Correct.png";
congrats.id = "congrats";
congrats.style.height = "600px";

let incorrect = document.createElement('img');
incorrect.src = "mac-guessr/Incorrect.png";
incorrect.id = "incorrect";
incorrect.style.height = "600px";

let endgame = document.createElement('img');
endgame.src = "mac-guessr/EndGame.png";
endgame.id = "endgame";
endgame.style.height = "600px";
/* Map of images to randomly select from; each image file name minus the photo number 
* matches its corresponding svg object ID
*/
const map = new Map();
map.set(0, "mac-guessr/theater1.jpg"); //Theater and Dance Building - medium
map.set(1, "mac-guessr/theater2.jpg"); //Theater and Dance Building - hard
map.set(2, "mac-guessr/theater3.jpg"); //Theater and Dance Building - hard
map.set(3, "mac-guessr/theater4.jpg"); //Theater and Dance Building - hard
map.set(4, 'mac-guessr/library1.jpg'); //DeWitt Wallace Library - hard
map.set(5, 'mac-guessr/library2.jpg'); //DeWitt Wallace Library - medium
map.set(6, 'mac-guessr/library3.jpg'); //DeWitt Wallace Library - medium
map.set(7, 'mac-guessr/library4.jpg'); //DeWitt Wallace Library - hard
map.set(8, 'mac-guessr/art1.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
map.set(9, 'mac-guessr/art2.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
map.set(10, 'mac-guessr/art3.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
map.set(11, 'mac-guessr/jwall1.jpg'); //Janet Wallace Fine Arts Center - medium
map.set(12, 'mac-guessr/jwall2.jpg'); //Janet Wallace Fine Arts Center - easy
map.set(13, 'mac-guessr/jwall3.jpg'); //Janet Wallace Fine Arts Center - hard
map.set(14, 'mac-guessr/jwall4.jpg'); //Janet Wallace Fine Arts Center - medium
map.set(15, 'mac-guessr/leonard1.jpg'); //Leonard Center Athletics and Wellness Complex - medium
map.set(16, 'mac-guessr/leonard2.jpg'); //Leonard Center Athletics and Wellness Complex - easy
map.set(17, 'mac-guessr/leonard3.jpg'); //Leonard Center Athletics and Wellness Complex - easy
map.set(18, 'mac-guessr/leonard4.jpg'); //Leonard Center Athletics and Wellness Complex - medium
map.set(19, "mac-guessr/carnegie1.jpg"); //Carnegie Hall - medium
map.set(20, "mac-guessr/carnegie2.jpg"); //Carnegie Hall - hard
map.set(21, "mac-guessr/carnegie3.jpg"); //Carnegie Hall - easy
map.set(22, "mac-guessr/carnegie4.jpg"); //Carnegie Hall - medium
map.set(23, "mac-guessr/cc1.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(24, "mac-guessr/cc2.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(25, "mac-guessr/cc3.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(26, "mac-guessr/cc4.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(27, "mac-guessr/chapel1.jpg"); //The Weyerhaeuser Memorial Chapel - medium
map.set(28, "mac-guessr/chapel2.jpg"); //The Weyerhaeuser Memorial Chapel - medium
map.set(29, "mac-guessr/chapel3.jpg"); //The Weyerhaeuser Memorial Chapel - easy
map.set(30, "mac-guessr/chapel4.jpg"); //The Weyerhaeuser Memorial Chapel - easy
map.set(31, "mac-guessr/humanities1.jpg"); //The Humanities Building - medium
map.set(32, "mac-guessr/humanities2.jpg"); //The Humanities Building - hard
map.set(33, "mac-guessr/humanities3.jpg"); //The Humanities Building - easy
map.set(34, "mac-guessr/humanities4.jpg"); //The Humanities Building - medium
map.set(35, "mac-guessr/oldmain1.jpg"); //Old Main - medium
map.set(36, "mac-guessr/oldmain2.jpg"); //Old Main - hard
map.set(37, "mac-guessr/oldmain3.jpg"); //Old Main - easy
map.set(38, "mac-guessr/oldmain4.jpg"); //Old Main - medium
map.set(39, "mac-guessr/olin1.jpg"); //Olin-Rice Science Center - medium
map.set(40, "mac-guessr/olin2.jpg"); //Olin-Rice Science Center - easy
map.set(41, "mac-guessr/olin3.jpg"); //Olin-Rice Science Center - easy
map.set(42, "mac-guessr/olin4.jpg"); //Olin-Rice Science Center - medium
map.set(43, "mac-guessr/weyerhaeuser1.jpg"); //Weyerhaeuser Hall - easy
map.set(44, "mac-guessr/weyerhaeuser2.jpg"); //Weyerhaeuser Hall - easy
map.set(45, "mac-guessr/weyerhaeuser3.jpg"); //Weyerhaeuser Hall - medium
map.set(46, "mac-guessr/weyerhaeuser4.jpg"); //Weyerhaeuser Hall - medium
map.set(47, "mac-guessr/kagin1.jpg"); //Kagin Commons - easy
map.set(48, "mac-guessr/kagin2.jpg"); //Kagin Commons - hard
map.set(49, "mac-guessr/kagin3.jpg"); //Kagin Commons - medium
map.set(50, "mac-guessr/kagin4.jpg"); //Kagin Commons - easy
map.set(51, "mac-guessr/markim1.jpg"); //Markim Hall - hard
map.set(52, "mac-guessr/markim2.jpg"); //Markim Hall - easy
map.set(53, "mac-guessr/markim3.jpg"); //Markim Hall - hard
map.set(54, "mac-guessr/markim4.jpg"); //Markim Hall - medium
map.set(55, 'mac-guessr/jwall5.jpg'); //Janet Wallace Fine Arts Center - medium
map.set(56, 'mac-guessr/jwall6.jpg'); //Janet Wallace Fine Arts Center - easy
map.set(57, 'mac-guessr/jwall7.jpg'); //Janet Wallace Fine Arts Center - easy
map.set(58, "mac-guessr/olin5.jpg"); //Olin-Rice Science Center - medium
map.set(59, "mac-guessr/olin6.jpg"); //Olin-Rice Science Center - hard
map.set(60, "mac-guessr/olin7.jpg"); //Olin-Rice Science Center - medium
map.set(61, "mac-guessr/olin8.jpg"); //Olin-Rice Science Center - easy
map.set(62, "mac-guessr/olin9.jpg"); //Olin-Rice Science Center - medium
map.set(63, "mac-guessr/olin10.jpg"); //Olin-Rice Science Center - easy
map.set(64, "mac-guessr/olin11.jpg"); //Olin-Rice Science Center - hard
map.set(65, "mac-guessr/olin12.jpg"); //Olin-Rice Science Center - easy
map.set(66, 'mac-guessr/leonard5.jpg'); //Leonard Center Athletics and Wellness Complex - medium
map.set(67, 'mac-guessr/leonard6.jpg'); //Leonard Center Athletics and Wellness Complex - easy
map.set(68, 'mac-guessr/leonard7.jpg'); //Leonard Center Athletics and Wellness Complex - easy
map.set(69, 'mac-guessr/leonard8.jpg'); //Leonard Center Athletics and Wellness Complex - easy
map.set(70, 'mac-guessr/leonard9.jpg'); //Leonard Center Athletics and Wellness Complex - hard
map.set(71, "mac-guessr/cc5.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(72, "mac-guessr/cc6.jpg"); //Ruth Stricker Dayton Campus Center - hard
map.set(73, "mac-guessr/cc7.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(74, "mac-guessr/cc8.jpg"); //Ruth Stricker Dayton Campus Center - hard
map.set(75, "mac-guessr/cc9.jpg"); //Ruth Stricker Dayton Campus Center - hard
map.set(76, "mac-guessr/oldmain5.jpg"); //Old Main - hard
map.set(77, "mac-guessr/oldmain6.jpg"); //Old Main - medium
map.set(78, "mac-guessr/oldmain7.jpg"); //Old Main - medium
map.set(79, "mac-guessr/oldmain8.jpg"); //Old Main - hard
map.set(80, "mac-guessr/oldmain9.jpg"); //Old Main - medium
map.set(81, "mac-guessr/oldmain10.jpg"); //Old Main - hard
map.set(82, "mac-guessr/oldmain11.jpg"); //Old Main - hard
map.set(83, "mac-guessr/oldmain12.jpg"); //Old Main - easy
map.set(84, "mac-guessr/weyerhaeuser5.jpg"); //Weyerhaeuser Hall - hard
map.set(85, "mac-guessr/weyerhaeuser6.jpg"); //Weyerhaeuser Hall - hard
map.set(86, "mac-guessr/weyerhaeuser7.jpg"); //Weyerhaeuser Hall - hard
map.set(87, "mac-guessr/weyerhaeuser8.JPG"); //Weyerhaeuser Hall - hard
map.set(88, "mac-guessr/weyerhaeuser9.jpg"); //Weyerhaeuser Hall - hard
map.set(89, "mac-guessr/weyerhaeuser10.jpg"); //Weyerhaeuser Hall - hard
map.set(90, 'mac-guessr/library5.jpg'); //DeWitt Wallace Library - easy
map.set(91, 'mac-guessr/library6.jpg'); //DeWitt Wallace Library - easy
map.set(92, 'mac-guessr/library7.jpg'); //DeWitt Wallace Library - hard
map.set(93, 'mac-guessr/library8.jpg'); //DeWitt Wallace Library - easy
map.set(94, 'mac-guessr/library9.jpg'); //DeWitt Wallace Library - easy
map.set(95, 'mac-guessr/library10.jpg'); //DeWitt Wallace Library - hard
map.set(96, 'mac-guessr/library11.jpg'); //DeWitt Wallace Library - medium
map.set(97, "mac-guessr/chapel5.JPG"); //The Weyerhaeuser Memorial Chapel - easy
map.set(98, "mac-guessr/chapel6.jpg"); //The Weyerhaeuser Memorial Chapel - hard
map.set(99, "mac-guessr/theater1.jpg"); //Theater and Dance Building - easy
map.set(100, "mac-guessr/theater2.jpg"); //Theater and Dance Building - hard
map.set(101, "mac-guessr/theater3.jpg"); //Theater and Dance Building - medium
map.set(102, "mac-guessr/theater4.jpg"); //Theater and Dance Building - hard
map.set(103, "mac-guessr/seven1.jpg"); //77 Mac - easy
map.set(104, "mac-guessr/seven2.jpg"); //77 Mac - hard
map.set(105, "mac-guessr/seven3.jpg"); //77 Mac - easy
map.set(106, "mac-guessr/seven4.jpg"); //77 Mac - medium


const fullNameMap = new Map();
fullNameMap.set('theater', 'The Theater and Dance Building');
fullNameMap.set('library', 'DeWitt Wallace Library');
fullNameMap.set('art', 'Joan Adams Mondale Hall of Studio Art');
fullNameMap.set('jwall', 'Janet Wallace Fine Arts Center');
fullNameMap.set('carnegie', 'Carnegie Hall');
fullNameMap.set('humanities', 'The Humanities Building');
fullNameMap.set('olin', 'Olin-Rice Science Center');
fullNameMap.set('leonard', 'The Leonard Center Athletics and Wellness Complex');
fullNameMap.set('oldmain', 'Old Main');
fullNameMap.set('cc', 'Ruth Stricker Dayton Campus Center');
fullNameMap.set('chapel', 'The Weyerhaeuser Memorial Chapel');
fullNameMap.set('markim', 'Markim Hall');
fullNameMap.set('kagin', 'Kagin Commons');
fullNameMap.set('weyerhaeuser', 'Weyerhaeuser Hall');
fullNameMap.set('seven', '77 Mac');
fullNameMap.set('stadium', 'Macalester Stadium');
fullNameMap.set('kirk', 'Kirk Hall');

const difficultyMap = new Map(); // first input in map is image difficulty rated 1-3
difficultyMap.set("mac-guessr/theater1.jpg", 1); // Theater and Dance building - easy
difficultyMap.set("mac-guessr/theater2.jpg", 3); // Theater and Dance building - hard
difficultyMap.set("mac-guessr/theater3.jpg", 2); // Theater and Dance building - medium
difficultyMap.set("mac-guessr/theater4.jpg", 2); // Theater and Dance building - medium
difficultyMap.set('mac-guessr/library1.jpg', 3); //DeWitt Wallace Library - hard
difficultyMap.set('mac-guessr/library2.jpg', 2); //DeWitt Wallace Library - medium
difficultyMap.set('mac-guessr/library3.jpg', 2); //DeWitt Wallace Library - medium
difficultyMap.set('mac-guessr/library4.jpg', 3); //DeWitt Wallace Library - hard
difficultyMap.set('mac-guessr/art1.jpg', 3); //Joan Adams Mondale Hall of Studio Art - hard
difficultyMap.set('mac-guessr/art2.jpg', 3); //Joan Adams Mondale Hall of Studio Art - hard
difficultyMap.set('mac-guessr/art3.jpg', 3); //Joan Adams Mondale Hall of Studio Art - hard
difficultyMap.set('mac-guessr/jwall1.jpg', 2); //Janet Wallace Fine Arts Center - medium
difficultyMap.set('mac-guessr/jwall2.jpg', 1); //Janet Wallace Fine Arts Center - easy
difficultyMap.set('mac-guessr/jwall3.jpg', 3); //Janet Wallace Fine Arts Center - hard
difficultyMap.set('mac-guessr/jwall4.jpg', 2); //Janet Wallace Fine Arts Center - medium
difficultyMap.set('mac-guessr/leonard1.jpg', 2); //Leonard Center Athletics and Wellness Complex - medium
difficultyMap.set('mac-guessr/leonard2.jpg', 1); //Leonard Center Athletics and Wellness Complex - easy
difficultyMap.set('mac-guessr/leonard3.jpg', 1); //Leonard Center Athletics and Wellness Complex - easy
difficultyMap.set('mac-guessr/leonard4.jpg', 2); //Leonard Center Athletics and Wellness Complex - medium
difficultyMap.set("mac-guessr/carnegie1.jpg", 2); //Carnegie Hall - medium
difficultyMap.set("mac-guessr/carnegie2.jpg", 3); //Carnegie Hall - hard
difficultyMap.set("mac-guessr/carnegie3.jpg", 1); //Carnegie Hall - easy
difficultyMap.set("mac-guessr/carnegie4.jpg", 2); //Carnegie Hall - medium
difficultyMap.set("mac-guessr/cc1.jpg", 1); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set("mac-guessr/cc2.jpg", 1); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set("mac-guessr/cc3.jpg", 1); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set("mac-guessr/cc4.jpg", 1); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set("mac-guessr/chapel1.jpg", 2); //The Weyerhaeuser Memorial Chapel - medium
difficultyMap.set("mac-guessr/chapel2.jpg", 2); //The Weyerhaeuser Memorial Chapel - medium
difficultyMap.set("mac-guessr/chapel3.jpg", 1); //The Weyerhaeuser Memorial Chapel - easy
difficultyMap.set("mac-guessr/chapel4.jpg", 1); //The Weyerhaeuser Memorial Chapel - easy
difficultyMap.set("mac-guessr/humanities1.jpg", 2); //The Humanities Building - medium
difficultyMap.set("mac-guessr/humanities2.jpg", 3); //The Humanities Building - hard
difficultyMap.set("mac-guessr/humanities3.jpg", 1); //The Humanities Building - easy
difficultyMap.set("mac-guessr/humanities4.jpg", 2); //The Humanities Building - medium
difficultyMap.set("mac-guessr/oldmain1.jpg", 2); //Old Main - medium
difficultyMap.set("mac-guessr/oldmain2.jpg", 3); //Old Main - hard
difficultyMap.set("mac-guessr/oldmain3.jpg", 1); //Old Main - easy
difficultyMap.set("mac-guessr/oldmain4.jpg", 2); //Old Main - medium
difficultyMap.set("mac-guessr/olin1.jpg", 2);  // Olin-Rice Science Center- medium
difficultyMap.set("mac-guessr/olin2.jpg", 1); //Olin-Rice Science Center - easy
difficultyMap.set("mac-guessr/olin3.jpg", 1); //Olin-Rice Science Center - easy
difficultyMap.set("mac-guessr/olin4.jpg", 2); //Olin-Rice Science Center - medium
difficultyMap.set("mac-guessr/weyerhaeuser1.jpg", 1); //Weyerhaeuser Hall - easy
difficultyMap.set("mac-guessr/weyerhaeuser2.jpg", 1); //Weyerhaeuser Hall - easy
difficultyMap.set("mac-guessr/weyerhaeuser3.jpg", 2); //Weyerhaeuser Hall - medium
difficultyMap.set("mac-guessr/weyerhaeuser4.jpg", 2); //Weyerhaeuser Hall - medium
difficultyMap.set("mac-guessr/kagin1.jpg", 1); //Kagin Commons - easy
difficultyMap.set("mac-guessr/kagin2.jpg", 3); //Kagin Commons - hard
difficultyMap.set("mac-guessr/kagin3.jpg", 2); //Kagin Commons - medium
difficultyMap.set("mac-guessr/kagin4.jpg", 1); //Kagin Commons - easy
difficultyMap.set("mac-guessr/markim1.jpg", 3); //Markim Hall - hard
difficultyMap.set("mac-guessr/markim2.jpg", 1); //Markim Hall - easy
difficultyMap.set("mac-guessr/markim3.jpg", 3); //Markim Hall - hard
difficultyMap.set("mac-guessr/markim4.jpg", 2); //Markim Hall - medium
difficultyMap.set('mac-guessr/jwall5.jpg', 2); //Janet Wallace Fine Arts Center - medium
difficultyMap.set('mac-guessr/jwall6.jpg', 1); //Janet Wallace Fine Arts Center - easy
difficultyMap.set('mac-guessr/jwall7.jpg', 1); //Janet Wallace Fine Arts Center - easy
difficultyMap.set("mac-guessr/olin5.jpg", 2); //Olin-Rice Science Center - medium
difficultyMap.set("mac-guessr/olin6.jpg", 3); //Olin-Rice Science Center - hard
difficultyMap.set("mac-guessr/olin7.jpg", 2); //Olin-Rice Science Center - medium
difficultyMap.set("mac-guessr/olin8.jpg", 1); //Olin-Rice Science Center - easy
difficultyMap.set("mac-guessr/olin9.jpg", 2); //Olin-Rice Science Center - medium
difficultyMap.set("mac-guessr/olin10.jpg", 1); //Olin-Rice Science Center - easy
difficultyMap.set("mac-guessr/olin11.jpg", 3); //Olin-Rice Science Center - hard
difficultyMap.set("mac-guessr/olin12.jpg", 1); //Olin-Rice Science Center - easy
difficultyMap.set('mac-guessr/leonard5.jpg', 2); //Leonard Center Athletics and Wellness Complex - medium
difficultyMap.set('mac-guessr/leonard6.jpg', 1); //Leonard Center Athletics and Wellness Complex - easy
difficultyMap.set('mac-guessr/leonard7.jpg', 1); //Leonard Center Athletics and Wellness Complex - easy
difficultyMap.set('mac-guessr/leonard8.jpg', 1); //Leonard Center Athletics and Wellness Complex - easy
difficultyMap.set('mac-guessr/leonard9.jpg', 3); //Leonard Center Athletics and Wellness Complex - hard
difficultyMap.set("mac-guessr/cc5.jpg", 1); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set("mac-guessr/cc6.jpg", 3); //Ruth Stricker Dayton Campus Center - hard
difficultyMap.set("mac-guessr/cc7.jpg", 1); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set("mac-guessr/cc8.jpg", 3); //Ruth Stricker Dayton Campus Center - hard
difficultyMap.set("mac-guessr/cc9.jpg", 3); //Ruth Stricker Dayton Campus Center - hard
difficultyMap.set("mac-guessr/oldmain5.jpg", 3); //Old Main - hard
difficultyMap.set("mac-guessr/oldmain6.jpg", 2); //Old Main - medium
difficultyMap.set("mac-guessr/oldmain7.jpg", 2); //Old Main - medium
difficultyMap.set("mac-guessr/oldmain8.jpg", 3); //Old Main - hard
difficultyMap.set("mac-guessr/oldmain9.jpg", 2); //Old Main - medium
difficultyMap.set("mac-guessr/oldmain10.jpg", 3); //Old Main - hard
difficultyMap.set("mac-guessr/oldmain11.jpg", 3); //Old Main - hard
difficultyMap.set("mac-guessr/oldmain12.jpg", 1); //Old Main - easy
difficultyMap.set("mac-guessr/weyerhaeuser5.jpg", 3); //Weyerhaeuser Hall - hard
difficultyMap.set("mac-guessr/weyerhaeuser6.jpg", 3); //Weyerhaeuser Hall - hard
difficultyMap.set("mac-guessr/weyerhaeuser7.jpg", 3); //Weyerhaeuser Hall - hard
difficultyMap.set("mac-guessr/weyerhaeuser8.JPG", 3); //Weyerhaeuser Hall - hard
difficultyMap.set("mac-guessr/weyerhaeuser9.jpg", 3); //Weyerhaeuser Hall - hard
difficultyMap.set("mac-guessr/weyerhaeuser10.jpg", 3); //Weyerhaeuser Hall - hard
difficultyMap.set('mac-guessr/library5.jpg', 1); //DeWitt Wallace Library - easy
difficultyMap.set('mac-guessr/library6.jpg', 1); //DeWitt Wallace Library - easy
difficultyMap.set('mac-guessr/library7.jpg', 3); //DeWitt Wallace Library - hard
difficultyMap.set('mac-guessr/library8.jpg', 1); //DeWitt Wallace Library - easy
difficultyMap.set('mac-guessr/library9.jpg', 1); //DeWitt Wallace Library - easy
difficultyMap.set('mac-guessr/library10.jpg', 3); //DeWitt Wallace Library - hard
difficultyMap.set('mac-guessr/library11.jpg', 2); //DeWitt Wallace Library - medium
difficultyMap.set("mac-guessr/chapel5.JPG", 1); //The Weyerhaeuser Memorial Chapel - easy
difficultyMap.set("mac-guessr/chapel6.jpg", 3); //The Weyerhaeuser Memorial Chapel - hard
difficultyMap.set("mac-guessr/theater1.jpg", 1); //Theater and Dance Building - easy
difficultyMap.set("mac-guessr/theater2.jpg", 3); //Theater and Dance Building - hard
difficultyMap.set("mac-guessr/theater3.jpg", 2); //Theater and Dance Building - medium
difficultyMap.set("mac-guessr/theater4.jpg", 3); //Theater and Dance Building - hard
difficultyMap.set("mac-guessr/seven1.jpg", 1); //77 Mac - easy
difficultyMap.set("mac-guessr/seven2.jpg", 3); //77 Mac - hard
difficultyMap.set("mac-guessr/seven3.jpg", 1); //77 Mac - easy
difficultyMap.set("mac-guessr/seven4.jpg", 2); //77 Mac - medium

let score = document.createElement('button');
score.style.backgroundColor = "blue";
score.style.fontSize = "50px";

let hint = document.createElement('p');
hint.textContent = "No hint is available for this image.";
hint.className = "map";

let mapCaption = document.createElement('p');
mapCaption.textContent = "Hover over buildings for their name!";
mapCaption.className = "map";
mapCaption.id = "mapCaption";

let lifeCounter = document.createElement('div');
lifeCounter.style.top = "10px";
let correctlyGuessedImages = [];
let incorrectlyGuessedImages = [];
let difficultyLevel = 1;
let round = 1;

// Begin game function: adds map and random image to body of document
function runGame() {

    let mapImage = document.createElement('object');
    mapImage.data = 'mac-guessr/mcgpicnew.svg';
    mapImage.type = "image/svg+xml";
    mapImage.id = "mapImage";
    mapImage.style.height = "600px";
    mapImage.style.border = "thick solid black";

    correctlyGuessedImages = [];
    incorrectlyGuessedImages = [];
    let lives = 5;
    score.textContent = "Score = 0";

    down.style.marginTop = "100px";
    down.style.marginBottom = "100px";
    down.style.color = "green";
    down.innerHTML = "Select which building you think the image was taken in!";

    up.style.marginTop = "100px";
    up.hidden = false;
    up.innerHTML = "Lives Remaining: " + lives;

    document.getElementById("map").appendChild(mapCaption);
    document.getElementById("map").appendChild(mapImage);
    document.getElementById("buttons").appendChild(score);
    document.getElementById("image").appendChild(hint);


    let lifeCounter = document.createElement('div');
    lifeCounter.style.top = "25px";
    for (i = 0; i < 5; i++) {
        var lifeSquare = document.createElement('button');
        lifeSquare.id = "lifeSquare" + i;
        lifeSquare.className = "buttons";
        lifeSquare.style.height = "20px";
        lifeSquare.style.width = "20px";
        lifeSquare.style.margin = "10px";
        lifeSquare.style.border = "1px";
        lifeSquare.style.borderColor = "black";
        lifeSquare.style.backgroundImage = null;
        lifeCounter.appendChild(lifeSquare);
    }

    // let hintButton = document.createElement('button');
    // hintButton.textContent = "click for hint";
    // hintButton.onclick = 
    // function() {
    //     hintButton.remove();
    //     document.getElementById("randImage").remove();
    //     let hint = document.createElement('p');
    //     hint.textContent = "No hint is available for this image.";
    //     document.getElementById("image").appendChild(hint);
    //     document.getElementById("image").appendChild(document.getElementById('randImage'));
    // };
    
    let randImage = getImage();
    let buildingName = grabImageLocation(randImage);
    
    document.getElementById("buttons").appendChild(down);
    document.getElementById("buttons").appendChild(document.getElementById('Button'));
    document.getElementById("buttons").appendChild(up);
    document.getElementById("buttons").appendChild(lifeCounter);


    mapImage.addEventListener("load", () => {
        mapImage.contentDocument
            .querySelectorAll("#buildings > *")
            .forEach((building) => {
                building.addEventListener("click", () => {
                    // console.log(building.id);
                    // console.log(building.style); 
                    console.log(building.id);
                    console.log(buildingName);
                    // This if statement runs if the guess is correct
                    if (building.id === buildingName) {

                        console.log("correct");

                        updateDifficulty();
                        round++;
                        correctlyGuessedImages.push(randImage);
                        score.textContent = "Score: " + correctlyGuessedImages.length;
                        console.log("round: " + round);
                        down.innerHTML = "Congratulations! That is correct! This image was taken in " + fullNameMap.get(buildingName) + ".  \n \n Click the button to move on to the next round.";

                        mapCaption.textContent = "Hover mouse over buildings to see what they are called!";
                        document.getElementById("map").removeChild(mapCaption);
                        document.getElementById("map").removeChild(mapImage);
                        document.getElementById("map").appendChild(congrats);

                        document.querySelector('#Button').textContent = 'Next Round';   
                        document.querySelector('#Button').disabled = false;
                        document.querySelector('#Button').onclick = 
                            function() {
                                document.getElementById("map").removeChild(congrats);
                                document.getElementById("map").appendChild(mapCaption);
                                document.getElementById("map").appendChild(mapImage);
                                document.getElementById("countdown").textContent = null;
                                document.getElementById("countdown").hidden = true;
                                document.getElementById("image").removeChild(document.getElementById('randImage'));
                                randImage = getImage();
                                console.log("image difficulty: " + difficultyMap.get(randImage));
                                buildingName = grabImageLocation(randImage);
                                down.innerHTML = "Select which building you think the image was taken in!";

                                document.getElementById("Button").textContent = "Reset Game";
                                document.querySelector('#Button').onclick =
                                function() {
                                    document.getElementById("map").removeChild(mapImage);
                                    document.getElementById("map").removeChild(mapCaption);
                                    document.getElementById("image").removeChild(document.getElementById('randImage'));
                                    document.getElementById("image").removeChild(hint);
                                    document.getElementById("buttons").removeChild(up);
                                    document.getElementById("buttons").removeChild(down);
                                    document.getElementById("buttons").removeChild(score);
                                    document.getElementById("buttons").removeChild(lifeCounter);  
                                    for (i = 0; i < 5; i++) {
                                        lifeCounter.removeChild; 
                                    }
                                    score.textContent = "Score = 0"
                                    round = 1;
                                    difficultyLevel = 1;
                                    runGame();
                                }; 
                            }; 
                        
                    // This else statement runs if the guess is incorrect
                    } else {
                        console.log("incorrect");

                        var currLife = "lifeSquare" + (5 - lives);
                        lives -= 1;
                        document.getElementById(currLife).style.backgroundColor = "red";


                        if (lives === 0){
                            down.innerHTML = "That is incorrect. You lost! The correct building was " + fullNameMap.get(buildingName) + ".";
                            down.style.color = "red";
                            up.hidden = true;
                            score.textContent = "Final Score = " + correctlyGuessedImages.length;
                            document.getElementById("map").removeChild(mapImage);
                            document.getElementById("map").removeChild(mapCaption);        
                            document.getElementById("buttons").removeChild(lifeCounter);
                            document.getElementById("map").appendChild(endgame);  
                            for (i = 0; i < 5; i++) {
                                lifeCounter.removeChild; 
                            }
                            document.querySelector('#Button').textContent = 'New Game';   
                            document.querySelector('#Button').disabled = false;
                            document.querySelector('#Button').onclick = 
                            function() {
                                document.getElementById("image").removeChild(document.getElementById('randImage'));
                                document.getElementById("map").removeChild(endgame);
                                document.getElementById("buttons").removeChild(score);
                                runGame();
                            }; 
                        
                            round = 1;
                            difficultyLevel = 1;
                        } else {
                            down.innerHTML = "That is incorrect. You have " + lives + " lives remaining. \n \n Click the button to move on to the next round.";
                            mapCaption.style.color = "red";
                            up.innerHTML = "Lives Remaining: " + lives; 
                            down.style.color = "red";

                            round++;
                            incorrectlyGuessedImages.push(randImage);
                            mapCaption.textContent = "Hover mouse over buildings to see what they are called!";
                            document.getElementById("map").removeChild(mapCaption);
                            document.getElementById("map").removeChild(mapImage);
                            document.getElementById("map").appendChild(incorrect);

                            document.querySelector('#Button').textContent = 'Next Round';   
                            document.querySelector('#Button').disabled = false;
                            document.querySelector('#Button').onclick = 
                                function() {
                                    document.getElementById("map").removeChild(incorrect);
                                    document.getElementById("map").appendChild(mapCaption);
                                    document.getElementById("map").appendChild(mapImage);

                                    document.getElementById("image").removeChild(document.getElementById('randImage'));
                                    randImage = getImage();
                                    console.log("image difficulty: " + difficultyMap.get(randImage));
                                    buildingName = grabImageLocation(randImage);
                                    down.innerHTML = "Select which building you think the image was taken in!";
                                    down.style.color = "green";

                                    document.getElementById("Button").textContent = "Reset Game";
                                    document.querySelector('#Button').onclick =
                                    function() {
                                        document.getElementById("map").removeChild(mapImage);
                                        document.getElementById("map").removeChild(mapCaption);
                                        document.getElementById("image").removeChild(document.getElementById('randImage'));
                                        document.getElementById("image").removeChild(hint);
                                        document.getElementById("buttons").removeChild(up);
                                        document.getElementById("buttons").removeChild(down);
                                        document.getElementById("buttons").removeChild(score);
                                        document.getElementById("buttons").removeChild(lifeCounter);  
                                        for (i = 0; i < 5; i++) {
                                            lifeCounter.removeChild; 
                                        }
                                        score.textContent = "Score = 0"
                                        round = 1;
                                        difficultyLevel = 1;
                                        runGame();
                                    }; 
                                }; 
                        }
                        
                    }
                });

                // These two event listeners allow for users to hover over buildings and get information about them.
                building.addEventListener("mouseenter", () => {
                    mapCaption.textContent = "This is " + fullNameMap.get(building.id) + ".";
                    building.setAttribute("stroke", "black");
                    building.setAttribute("stroke-width", "5");
                });
                building.addEventListener("mouseleave", () => {
                    mapCaption.textContent = "Hover over buildings for their name!";
                    mapCaption.style.color = "blue";
                    building.setAttribute("stroke", "none");
                });
            });
    });

    document.getElementById("Button").textContent = "Reset Game";
    document.querySelector('#Button').onclick =
    function() {
        document.getElementById("map").removeChild(mapImage);
        document.getElementById("map").removeChild(mapCaption);
        document.getElementById("image").removeChild(document.getElementById('randImage'));
        document.getElementById("image").removeChild(hint);
        document.getElementById("buttons").removeChild(up);
        document.getElementById("buttons").removeChild(down);
        document.getElementById("buttons").removeChild(score);
        document.getElementById("buttons").removeChild(lifeCounter);  
        for (i = 0; i < 5; i++) {
            lifeCounter.removeChild; 
        }
        score.textContent = "Score = 0"
        round = 1;
        difficultyLevel = 1;
        runGame();
    }; 
} 

function Game_Rules(x) {
    x.style.height = "50px";
}

function getRandomNumber(max) {
    return Math.round((Math.random()*max));
}

function grabImageLocation(url) {
    let numbers = "0123456789";
    let building = "";

    for (let i = 0; i < url.length; i++) {
        if (url[i] === "/") {
            for (let j = i+1; j < url.length; j++) {
                if (!numbers.includes(url[j])) {
                    building += url[j];
                } else {
                    break;
                }    
            }
            break;
        }
    }
    return building;
}

function getImage() {
    let randNum = getRandomNumber(106);
    var randImage = map.get(randNum);

    while (correctlyGuessedImages.includes(randImage) || difficultyMap.get(randImage) != difficultyLevel || incorrectlyGuessedImages.includes(randImage)) {
        randNum = getRandomNumber(106);
        randImage = map.get(randNum);
    }

    var img = document.createElement('img');
    img.src = randImage;
    img.id = "randImage";
    img.style.height = "600px";
    document.getElementById("image").appendChild(img);

    return randImage;
}
   
function updateDifficulty() {
    if (round <= 5) {
        difficultyLevel = 1;
    }
    else if (round > 5 && round <=10) {
        difficultyLevel = 2;
    }
    else if (round > 10) {
        difficultyLevel = 3;
    }
}

  