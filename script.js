$(document).ready(function () {
  // DOM VARIABLES

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
      })
  });
});
