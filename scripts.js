// top 10 results at Indy during a particular year: https://ergast.com/api/f1/2000/circuits/indianapolis/results.json?limit=10&offset=0

let baseUrl = 'https://ergast.com/api/f1/2007/circuits/indianapolis/results.json';

// FORM FIELDS
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const seasonDropDown = document.getElementById('season'); // Select a year
const section = document.querySelector('section');

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
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }

    let drivers = json.MRData.RaceTable.Races[0].Results;

    //I want to display the driver, their car, their time, and maybe some other information
    for(let i = 0; i < 10; i++){
    
    let div = document.createElement('div');
    let heading = document.createElement('h2');
    let p = document.createElement('p');

    let driverName = drivers[i].Driver.givenName + " " + drivers[i].Driver.familyName
    let position = drivers[i].position;
    let sponsor = drivers[i].Constructor.name;
    let nationality = drivers[i].Driver.nationality;
    let driverInfo = drivers[i].Driver.url;

    div.className = 'driver';

    heading.textContent = "Driver's name: " + driverName;
    p.innerHTML = `<ul>
                        <li>Position: ${position}</li>
                        <li>Sponsor: ${sponsor}</li>
                        <li>Nationality: ${nationality}</li>
                        <li>Driver Info: ${driverInfo}</li>
                    </ul>`

    div.appendChild(heading);
    div.appendChild(p);
    document.body.appendChild(div);

    }
    
}