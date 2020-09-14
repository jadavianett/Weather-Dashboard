$(document).ready(function () {
  // DOM VARIABLES
  var city = $(".maincity");
  var temp = $(".maintemp");
  var humidity = $(".mainhumidity");
  var windspeed = $(".mainwindspeed");
  var uvindex = $(".mainuvindex");

  // JS VARIABLES
  var apiKey = "a71c0c9acdfc6c537e04dc620ee2ba12";

  // FUNCTION CALLS

  // EVENT LISTENERS
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    console.log("you submitted the form");
    var searchTerm = $("#search-term").val();
    console.log(searchTerm);

    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchTerm +
      "&appid=" +
      apiKey +
      "&units=imperial";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var lon = response.coord.lon;
      var lat = response.coord.lat;
      city.text(response.name +  " " + moment().format("M/D/YY"));
      temp.text("Temperature: " + response.main.temp + " degrees");
      humidity.text("Humidity: " + response.main.humidity + "%");
      windspeed.text("Wind Speed: " + response.wind.speed + " miles/hr");

      var query2URL =
        "https://api.openweathermap.org/data/2.5/uvi?appid=" +
        apiKey +
        "&lat=" +
        lat +
        "&lon=" +
        lon;
      console.log(query2URL);
      $.ajax({
        url: query2URL,
        method: "GET",
      }).then(function (response) {
        uvindex.text("UV Index: " + response.value);
      });
    });
  });
});
