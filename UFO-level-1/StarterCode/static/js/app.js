// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// console.log for returning ufo sightings from data.js
console.log(tableData);

// Loop through `data` UFO sighting object and return each sighting
data.forEach(function(ufo_sighting) {
    console.log(ufo_sighting);
    var row = tbody.append("tr");
    Object.entries(ufo_sighting).forEach(function([key, value]) {
       console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent page refresh
    d3.event.preventDefault();
    //Clear table
    var table = document.getElementById("ufo_sightings_table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    // Select input element and get raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value prop of input element
    var inputValue = inputElement.property("value");
    // Use the form input to filter data by blood type
    var result = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(result);

    
    //Append
    result.forEach(function(ufo_sighting) {
        var row = tbody.append("tr");
        
        Object.entries(ufo_sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}