let letters;
function getWeather(woeid){fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(data =>{
             console.log(data);
            
            const today=data.consolidated_weather[0];
            const state=today.weather_state_name;
            const tempMin= today.min_temp.toPrecision(1);
            const tempMax= today.max_temp.toPrecision(1);
            const humidity = today.humidity;
            const windSpeed = today.wind_speed.toPrecision(2);
            letters= data.consolidated_weather[0].weather_state_abbr;
            document.querySelector('.state').innerHTML=`Weather state:${state}.`;
            document.querySelector('.tempMin').innerHTML=`Minimal temperature: ${tempMin}.`;
            document.querySelector('.tempMax').innerHTML=`Maximal temperature: ${tempMax}.`;
            document.querySelector('.humidity').innerHTML=`Humidity: ${humidity}.`;
            document.querySelector('.windSpeed').innerHTML=`Wind speed: ${windSpeed}.`;
            function getImg(){
                fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/static/img/weather/${letters}.svg`)
                .then(result =>{
                    console.log(result);
                    return result.text()
                })
                .then(data =>{ 
                  document.body.querySelector('.icon').innerHTML=data;
                  
                  
                })
                .catch(error=>
                    console.log(error)
                )
                //consodilated_wheather[].weather_state_abbr
            }
            getImg();
            }
            
            )
            .catch(error =>
                console.log(error));     
}

getWeather(523920);



//DESCRIPTION BASED ON LETTERS
//TEMPERATURE
//HUMIDITY

//DATA ENGINE

const date = new Date();
const monthNumber = date.getMonth()+1;
const day = date.getDay();
const year = date.getFullYear();
let month;
switch(monthNumber){
    case 0: month='January';break;
    case 1: month='February';break;
    case 2: month='March';break;
    case 3: month='April';break;
    case 4: month='May';break;
    case 5: month='June';break;
    case 6: month='July';break;
    case 0: month='August';break;
    case 1: month='September';break;
    case 2: month='October';break;
    case 3: month='November';break;
    case 4: month='December';break;
    
}
document.querySelector('.date').innerHTML= `Date: ${day} ${month} ${year}`;




