$(document).ready(function () {
  // write your code here
//   var table = $("").rows.length;

  $.getJSON("data.json", function (places) {
    // console.log(places[0])
    let items =[]

    $.each(places, function (key, value) {
        items.push(
        /*create your grid and handle your object here*/
        /*access attributes of your object with object.attributname*/
        "<tr><td>" + value.name + "</td></tr>"
        +"<td>"+ value.description + "</td>"
        +"<td><a target='_blank' href='https://www.google.com/maps?q=" + value.location + "'>link</a></td></tr>"
        )
        // console.log(value.location)
        }

    // .$('#placesTable tr:last').after(`<tr><td>${places[0].name}</td><td>${places[0].description}</td><td>${places[0].location}</td></tr>`)
    )
    $("#table").append(items)
    });
});

