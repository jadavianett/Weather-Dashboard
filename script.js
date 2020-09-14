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
      apiKey;
      console.log(queryURL)
      $.ajax({
          url: queryURL,
          method: "GET",
      }).then(function (response) {
          console.log(response)
        city.text(response.name)
        temp.text("Temperature: " + response.main.temp);
        humidity.text("Humidity: " + response.main.humidity + "%");
        windspeed.text("Wind Speed: " + response.wind.speed)
        // uvindex.text(response.)
      })
  });
});
