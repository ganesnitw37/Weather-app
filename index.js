const apiKey="8206eb1c34ee96ba8b3c5b82f00c08ff";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response= await fetch(apiUrl+city+ `&appid=${apiKey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".Weather").style.display="none";
        }
        else
        {
            var data=await response.json(); 
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

        /*changing pictures accrding to the weather conditions*/
        if(data.weather[0].main=="Clouds"){
             weatherIcon.src="images/images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/images/rain.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src="images/images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/images/mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="images/images/snow.png";
        }

        document.querySelector(".Weather").style.display="block";
        document.querySelector(".error").style.display="none";
        }
    }
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
