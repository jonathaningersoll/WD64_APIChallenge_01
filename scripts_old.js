// top 10 results at Indy during a particular year: https://ergast.com/api/f1/2000/circuits/indianapolis/results.json?limit=10&offset=0

let baseUrl;
let pageNumber = 0;

// FORM FIELDS
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const seasonDropDown = document.getElementById('season'); // Select a year

// POPULATE DROPDOWN MENU
for(let year = 1997; year <= 2007; year++){
    let yearOpt = document.createElement('option');
    yearOpt.value = year;
    yearOpt.innerText = year;
    seasonDropDown.appendChild(yearOpt);
}

let seasonSelection = setSeason();

baseUrl = 'https://ergast.com/api/f1/' + seasonSelection + '/circuits/indianapolis/results.json';

searchForm.addEventListener('submit', fetchResults);

// FETCH FUNCTION
function fetchResults(e) {
    e.preventDefault();
    
    fetch(baseUrl)
    .then(function(result) {
    return result.json();
  }).then(function(json) {
      displayResults(json);
  });
}

// DISPLAY RESULTS FUNCTION
function displayResults(json) {
    console.log(json);

    // acquire 

}

function setSeason() {
    console.log(document.getElementById("season").value);
    return document.getElementById("season").value;
}