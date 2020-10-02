// // top 10 results at Indy during a particular year: https://ergast.com/api/f1/2000/circuits/indianapolis/results.json?limit=10&offset=0

// let baseUrl = 'https:/ergast.com/api/f1.json';

// // FORM FIELDS
// const submitBtn = document.querySelector('.submit');
// const searchForm = document.querySelector('form');
// const seasonDropDown = document.getElementById('season'); // Select a year

// // FETCH RESULTS
// fetchResults();

// // FETCH FUNCTION
// function fetchResults() {
    
//     fetch(baseUrl)
//     .then(function(result) {
//     return result.json();
//   }).then(function(json) {
//       displayResults(json);
//       setSeasons(json)
//   });
// }

// // DISPLAY RESULTS FUNCTION
// function displayResults(json) {
//     console.log(json);

//     for(let year = 1997; year <= 2007; year++){
//         let yearOpt = document.createElement('option');
//         yearOpt.value = year;
//         yearOpt.innerText = year;
//         seasonDropDown.appendChild(yearOpt);
//     }

//     let season = document.getElementById("season").value;
//     console.log(season);
// }

// function setSeason(){

// }












let baseUrl = 'https://ergast.com/api/f1/seasons.json?limit=100';


let season = document.getElementById('seasonDropDown').value;
//difference between passing the function as a parameter and actually executing the function on the change...

fetchSeasons();

function fetchResults() {
    fetch(baseUrl)
    .then(function(result) {
    return result.json();
    }).then(function(json) {
        displayResults(json);
    });
}


function popDropDown(json) {
    console.log(json);
    let lastTen = json.MRData.total - 10;

    let year = json.MRData.SeasonTable.seasons;

    for(season in year){
        let yearOpt = document.createElement('option');
        yearOpt.value = season;
        yearOpt.innerText = season;
        seasonDropDown.appendChild(yearOpt);
    }
}

function viewSeason(){
    console.log(document.getElementById('option').value);
    return document.getElementById('option').value;
    
}

function fetchSeasons(){
    fetch(baseUrl)
    .then(function(result) {
    return result.json();
    }).then(function(json) {
        popDropDown(json);
    });
}