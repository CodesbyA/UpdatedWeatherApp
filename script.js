// https://api.openweathermap.org/data/2.5/onecall?lat=32.779167&lon=-96.808891&units=mertric&exclude=minutely,alerts&appid=ac827b230bf1e8af174a3b425d431429

    // API
    let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
    let lat = "lat=32.779167&";
    let long = "lon=-96.808891&";
    let apiOpt = "units=metric&exclude=minutely,alerts&";
    let apiKey = "appid=ac827b230bf1e8af174a3b425d431429";
    let api = queryUrl + lat + long + apiOpt + apiKey;

    //Fetching data from API
    fetch(api)
    .then((response) => response.json())
    .then((data) => {

        //Weather Data
        let wData = data.current.weather[0].main;
        let description = data.current.weather[0].description;
        let temp = Math.round(data.current.temp);
        let pressure = data.current.pressure;
        let humidity = data.current.humidity;


        document.getElementById("wrapper-description").innerHTML = description.toUpperCase();
        document.getElementById("wrapper-temp").innerHTML = temp + " °C";
        document.getElementById("wrapper-pressure").innerHTML = pressure;
        document.getElementById("wrapper-humidity").innerHTML = humidity;


        // Hourly Data
        let hour = data.hourly[0].temp;
        let hour1 = data.hourly[1].temp;
        let hour2 = data.hourly[2].temp;
        let hour3 = data.hourly[3].temp;
        let hour4 = data.hourly[4].temp;
        let hour5 = data.hourly[5].temp;

        document.getElementById("wrapper-hour-now").innerHTML = hour + " °C";
        document.getElementById("wrapper-hour1").innerHTML = hour1 + " °C";
        document.getElementById("wrapper-hour2").innerHTML = hour2+ " °C";
        document.getElementById("wrapper-hour3").innerHTML = hour3 + " °C";
        document.getElementById("wrapper-hour4").innerHTML = hour4 + " °C";
        document.getElementById("wrapper-hour5").innerHTML = hour5 + " °C";

        // Display the time of the next hour
        let timeNow = new Date().getHours();
        let time1 = timeNow + 1; //increment current time by 1
        let time2 = time1 + 1; 
        let time3 = time2 + 1; 
        let time4 = time3 + 1; 
        let time5 = time4 + 1; 

        document.getElementById("wrapper-time1").innerHTML = time1;
        document.getElementById("wrapper-time2").innerHTML = time2;
        document.getElementById("wrapper-time3").innerHTML = time3;
        document.getElementById("wrapper-time4").innerHTML = time4;
        document.getElementById("wrapper-time5").innerHTML = time5;

        //Daily Data (Tomorrow, Day after, and after)
        let tD = Math.round(data.daily[0].temp.day);
        let dA = Math.round(data.daily[1].temp.day);
        let dAT = Math.round(data.daily[2].temp.day);
        let tDMain = data.daily[0].weather[0].main;
        let dAMain = data.daily[1].weather[0].main;
        let dATMain = data.daily[2].weather[0].main;

        document.getElementById("wrapper-forecast-temp-today").innerHTML = tD + " °C";
        document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML = dA + " °C";
        document.getElementById("wrapper-forecast-temp-dAT").innerHTML = dAT + " °C";

        //Icons
        let iconBaseUrl = "http://openweathermap.org/img/wn/";
        let iconFormat = ".png";
        
        //Icon for today's weather
        let iconToday = data.current.weather[0].icon;
        let iconFullUrlToday = iconBaseUrl + iconToday + iconFormat;
        document.getElementById("wrapper-icon-today").src = iconFullUrlToday;

        //Tomorrow's weather
        let iconTomorrow = data.daily[0].weather[0].icon;
        let iconFullUrlTomorrow = iconBaseUrl + iconTomorrow + iconFormat;
        document.getElementById("wrapper-icon-tomorrow").src = iconFullUrlTomorrow;

        //Day After Tomorrow's weather
        let icondAT = data.daily[1].weather[0].icon;
        let iconFullUrldAT = iconBaseUrl + icondAT + iconFormat;
        document.getElementById("wrapper-icon-dAT").src = iconFullUrldAT;

        //Icons Hourly

        //Now
        let iconHourNow = data.hourly[0].weather[0].icon;
        let iconFullUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
        document.getElementById("wrapper-icon-hour-now").src = iconFullUrlHourNow;

        //Next Hours
        let iconHour1 = data.hourly[1].weather[0].icon;
        let iconFullUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
        document.getElementById("wrapper-icon-hour1").src = iconFullUrlHour1;

        let iconHour2 = data.hourly[2].weather[0].icon;
        let iconFullUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
        document.getElementById("wrapper-icon-hour2").src = iconFullUrlHour2;

        let iconHour3 = data.hourly[3].weather[0].icon;
        let iconFullUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
        document.getElementById("wrapper-icon-hour3").src = iconFullUrlHour3;

        let iconHour4 = data.hourly[4].weather[0].icon;
        let iconFullUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
        document.getElementById("wrapper-icon-hour4").src = iconFullUrlHour4;

        let iconHour5 = data.hourly[5].weather[0].icon;
        let iconFullUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
        document.getElementById("wrapper-icon-hour5").src = iconFullUrlHour5;

                //Image
        switch (wData) {
            case "Snow":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/snow.gif')";
                break;
            case "Rain":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/raining.gif')";
                break;
            case "Thunderstorm":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/thunderstorm.gif')";
                break;
            case "Drizzle":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/raining.gif')";
                break;
            case "Haze":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/fog.gif')";
                break;
            case "Mist":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/fog.gif')";
                break;
            case "Clear":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/clear.gif')";
                break;
            case "Clouds":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/cloud.gif')";
                break;
            case "Fog":
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('https://github.com/CodesbyA/UpdatedWeatherApp/blob/91b3e3661f56bb96a0c239f346ea811e1d7eddbc/img/fog.gif')";
                break;
            default:
                document.getElementById("wrapper-bg").style.backgroundImage = 
                "url('img/cloud.gif')";
                break;
                
        }

    });