# Weather-Dashboard

Welcome to my Weather Dashboard! By utilizing a Third-Party API, Moment.js and dynamically updated HTML and CSS powered by jQuery, I have created a Weather Dashboard that will allow a user to see the weather outlook for multiple cities so they can plan their trips accordingly. 


## Application Layout
There are three main sections displayed on the page that are coded into the HTML: the form input area, the main weather section, and the 5-day forecast section.

    - Form Input Area: There is a form inside of this section that allows you to search for the name of any city. In order to activate the dashboard and view weather information, a city name must be entered. 

    - Main Weather: In this section, the city name and current date are displayed as a title. Underneath, the current weather conditions including and icon representing the weather conditions are displayed. 
    When the UV index is viewed, a color indicates whether the current UV index is low, moderate, high, very high, or extreme. 

    - 5-day forecast: The five day forecast displays the dates for the next five days as well as the corresponding temperature and humidity for those days. There is also an icon representing the weather conditions. 

## HTML 
I used my HTML to provide the framework for the application. I used Bootstrap's grid system to set up rows and columns. Bootstrap styling was applied to the page and was used to style the submit form as well. Classes and ID's were added to the HTML so that the elements could be targeted by jQuery on the Javascript end. 

## Third Party API
The Open Weather Map API is central to this application's functionality. This API grabbed the weather data for each city. By utilizing API calls via the ajax method, information on the city's time, UV index, and coordinates were collected an displayed. This API used a "GET" method and I generated the query URL by building out the specific query parameters. 

## Local Storage 
Local storage is used in this application to create a log of the previously searched cities. When a city is searched, it's name is immediately added to the page as a button under the previous searched cities row. When that button is clicked again, that city's weather information is again displayed in the main weather section and five day forecast section. 

## Links 
Link to deployed application: https://jadavianett.github.io/Weather-Dashboard/ 
Link to GitHub repo: https://github.com/jadavianett/Weather-Dashboard



