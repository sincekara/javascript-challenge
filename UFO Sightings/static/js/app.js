
// from data.js
// redefining the data as tableInfo
// YOUR CODE HERE!

// selecting the table tbody (located in index.html file

var tableInfo = data;
tbody = d3.select("tbody")

//preparing values for the table
function displayData(data) {
    tbody.text("");

    data.forEach(function (ufos) {
        tablerows = tbody.append("tr")

        //entering objects using Object.entries function for each object 
        //in the data base based on keys and values

        Object.entries(ufos).forEach(function ([key, value]) {
            tabledata = tablerows.append("td").text(value)
        });

    })
};

//selecting the date column and button from the data to filter it
//based on their class id(located in index.html file)

displayData(tableInfo)

var button = d3.select("#filter-btn")
var dateEntry = d3.select("#datetime");
//filtering the data based on the data that the users enter

function clickSelect() {
    d3.event.preventDefault();

    //printing date entry values

    console.log(dateEntry.property("value"));

    //filtering the data based on the input date and showing it in a different table

    var filteredData = tableInfo.filter(ufos => ufos.datetime === dateEntry.property("value"))

    //printing a new table

    displayData(filteredData);
}

//event listener

dateEntry.on("change", clickSelect);