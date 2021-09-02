![Gif](https://github.com/CodesbyA/UpdatedWeatherApp/blob/b2fd43d20e51d528ae9642349748a10151dc9750/img/ezgif.com-gif-maker.gif)

# UpdatedWeatherApp

 # Features
- The app fetches data from Open Weather Map and displays the same based on the results provided - https://openweathermap.org/
- Data is retrieved by hard coding the longitude and latitude of the location. 
- Styling done using Material Design for Bootstrap - 
  https://mdbootstrap.com/
- Js is retrieved from the script.js file.
- The app displays realtime data.
- The app also displays data for the next five hours i.e. the time, the weather condition and the icon that displays the weather condition (cloudy, rainy, clear etc).
- Icons were retrieved from the weather codes and associated icons in the API - https://openweathermap.org/weather-conditions

 # What can be improved
- Unlike the previous weather app, this uses longitude and latitude of the location. This is an API restriction as the API doesn't allow locations to be inserted. 
- Another option is to use a different API from Open Weather App, however, the restriction is that the API doesn't identify all the cities with the same name - Example: Paris in France and Paris in Texas. The app would most likely give a result of Paris - France.
- https://codesbya.github.io/weather-app/ uses AccuWeather API that gives all the cities available in the world. The restriction is that it allows only 50 queries per day, which I ran out of everytime I saved the file.
