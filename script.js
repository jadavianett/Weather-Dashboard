$(document).ready(function () {
  // DOM VARIABLES
  var city = $(".maincity");
  var maintemp = $(".maintemp");
  var humidity = $(".mainhumidity");
  var windspeed = $(".mainwindspeed");
  var uvindex = $(".mainuvindex");
  var day1Temp = $("#temp-1");
  var day2Temp = $("#temp-2");
  var day3Temp = $("#temp-3");
  var day4Temp = $("#temp-4");
  var day5Temp = $("#temp-5");
  var day1Humidity = $("#humidity-1");
  var day2Humidity = $("#humidity-2");
  var day3Humidity = $("#humidity-3");
  var day4Humidity = $("#humidity-4");
  var day5Humidity = $("#humidity-5");
  var day1Date = $("#day-1");
  var day2Date = $("#day-2");
  var day3Date = $("#day-3");
  var day4Date = $("#day-4");
  var day5Date = $("#day-5");
  var iconDay1 = $("#img-1");
  var iconDay2 = $("#img-2");
  var iconDay3 = $("#img-3");
  var iconDay4 = $("#img-4");
  var iconDay5 = $("#img-5");

  

  // JS VARIABLES
  var apiKey = "a71c0c9acdfc6c537e04dc620ee2ba12";
  var previousSearchTerms; 

  // FUNCTION DEFINITIONS
  function init() {
    var currentLocalStorage = localStorage.getItem("previousSearchTerms");

    if (currentLocalStorage !== null) {
      previousSearchTerms = JSON.parse(currentLocalStorage);
    } else {
      previousSearchTerms = [];
    }
  }

  // FUNCTION CALLS
init();

  // EVENT LISTENERS
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    var searchTerm = $("#search-term").val();
    console.log(searchTerm);

    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchTerm +
      "&appid=" +
      apiKey +
      "&units=imperial";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var lon = response.coord.lon;
      var lat = response.coord.lat;
      city.text(response.name + " " + moment().format("M/D/YY"));
      maintemp.text("Temperature: " + response.main.temp + " degrees");
      humidity.text("Humidity: " + response.main.humidity + "%");
      windspeed.text("Wind Speed: " + response.wind.speed + " miles/hr");

      var query2URL =
        "https://api.openweathermap.org/data/2.5/uvi?appid=" +
        apiKey +
        "&lat=" +
        lat +
        "&lon=" +
        lon;
      $.ajax({
        url: query2URL,
        method: "GET",
      }).then(function (response) {
        uvindex.text("UV Index: " + response.value);
        if (response.value <= 2) { uvindex.addClass("lowUv")}
        else if (response.value <= 5) {uvindex.addClass("moderateUv")}
        else if (response.value <=7) {uvindex.addClass("highUv")}
        else if (response.value <= 10) {uvindex.addClass("veryHighUv")}
        else {uvindex.addIndex("extremeUv")};

        var query3URL =
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
          searchTerm +
          "&appid=" +
          apiKey +
          "&units=imperial";
        $.ajax({
          url: query3URL,
          method: "GET",
        }).then(function (response) {
          day1Temp.text("Temperature: " + response.list[1].main.temp + "°");
          day2Temp.text("Temperature: " + response.list[2].main.temp + "°");
          day3Temp.text("Temperature: " + response.list[3].main.temp + "°");
          day4Temp.text("Temperature: " + response.list[4].main.temp + "°");
          day5Temp.text("Temperature: " + response.list[5].main.temp + "°");
          day1Humidity.text(
            "Humidity: " + response.list[1].main.humidity + "%"
          );
          day2Humidity.text(
            "Humidity: " + response.list[2].main.humidity + "%"
          );
          day3Humidity.text(
            "Humidity: " + response.list[3].main.humidity + "%"
          );
          day4Humidity.text(
            "Humidity: " + response.list[4].main.humidity + "%"
          );
          day5Humidity.text(
            "Humidity: " + response.list[5].main.humidity + "%");
            day1Date.text(moment().add(1, 'days').format("M/D/YY"));
            day2Date.text(moment().add(2, 'days').format("M/D/YY"));
            day3Date.text(moment().add(3, 'days').format("M/D/YY"));
            day4Date.text(moment().add(4, 'days').format("M/D/YY"));
            day5Date.text(moment().add(5, 'days').format("M/D/YY"));
            iconDay1.attr("src", "http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png")
            iconDay2.attr("src", "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png")
            iconDay3.attr("src", "http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png")
            iconDay4.attr("src", "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png")
            iconDay5.attr("src", "http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png")
previousSearchTerms.push(searchTerm);
localStorage.setItem("previousSearchTerms", JSON.stringify(previousSearchTerms));

        });
      });
    });
  });
});
