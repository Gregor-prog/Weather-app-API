// getting Elements
let inputTime = document.querySelector("#timeOfForecast")
let inputCity = document.querySelector("#city")
let btn = document.querySelector("button")
let state = document.querySelector("#state")
let img = document.querySelector("#img")
let humidity = document.querySelector("#humidityo")
let temperature = document.querySelector("#temperatureo")
let date = new Date()
let year = date.getFullYear()
let month = date.getUTCMonth() + 1
let dayl = date.getDate() + 1



// let APIkey = "223c4968d60d8b8349fc0ecc4bf9a23f"


async function fetchFunc(){
    try {
        let API = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8f14e568ff47450393a200231241111&q=${inputCity.value}&days=2&aqi=no&alerts=no`)
        let response = await API.json()
        let {location,current,forecast} = await response
        let tomorrow = `${year}-${month}-${dayl}`
        let {forecastday} = forecast
        let [a,b] = forecastday
        let {date,date_epoch,day,astro,hour} = b
        
        hour.forEach(element => {
            if(element["time"] ==`${tomorrow} ${inputTime.value}`){
                console.log(element)
                humidity.textContent = element["humidity"]
                temperature.textContent = element["temp_c"]
                    if(element["will_it_rain"] == 1){
                            img.src = "./images/rainy-removebg-preview.png"
                            state.textContent = "Rainy"
                    }
                    else{
                        if(element["cloud"] >= 0 && element["cloud"] <= 25){
                             img.src = "./images/sun.png"
                            state.textContent = "sunny"

                            switch (inputTime.value) {
                                case "18:00":
                                    img.src = "./images/sunset.png"
                                    state.textContent = "sunset"
                                    break;
                                case "19:00":
                                    img.src = "./images/sunset.png"
                                    state.textContent = "sunset"
                                    break;
                                case "20:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "21:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "22:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "23:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "00:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "01:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "02:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "03:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "04:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "05:00":
                                    img.src = "./images/moon.png"
                                    state.textContent = "dark"
                                    break;
                                case "06:00":
                                    img.src = "./images/sunrise.png"
                                    state.textContent = "sunrise"
                                    break;
                                default:
                                    break;
                            }
                        }
                        else if(element["cloud"] > 25 && element["cloud"] <= 50){
                            img.src = "./images/cloudy.png"
                           state.textContent = "Partly Cloudy"
                       }
                       else if(element["cloud"] > 50 && element["cloud"] <= 75){
                        img.src = "./images/cloudy.png"
                       state.textContent = "Mostly Cloudy"
                        }
                        else if(element["cloud"] > 75 && element["cloud"] <= 100){
                            img.src = "./images/cloudy.png"
                           state.textContent = "Overcast"
                       }
                    }
            }
       
        });
        
    } catch (error) {
        console.log(error)
        state.innerHTML = "Error getting foreCast!<br> This might be due to lack of internet connection or incorrect values"
        state.style.fontSize = "25px"
    }
    
}

btn.addEventListener("click", fetchFunc)