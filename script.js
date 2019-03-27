
let myChart = document.getElementById('myChart').getContext('2d');

let letters;
function showLoader(){
    let loader = document.querySelector('.loader');
        loader.classList.remove('nothing')
    
}
function removeSVG(){
    document.body.querySelector('.icon').innerHTML='';
    
}
function hideLoader(){
    let loader = document.querySelector('.loader');
        loader.classList.add('nothing')
}
function showChart(){
    let container = document.querySelector('.container');
    container.classList.remove('nothing')
}
function hideChart(){
    let container = document.querySelector('.container');
    container.classList.add('nothing')
}
async function getWeather(woeid){
        
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
            .then(result => {
                console.log(result);
                hideLoader();
                return result.json();
            })
            .then(data =>{
                showChart();
                Chart.defaults.global.defaultFontColor = "#fff";
                let massPopChart = new Chart(myChart, {
                    
                    type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, poLarArea
                    data:{
                        labels:['today','tomorrow', 'after tomorrow','next day', 'next day'],
                        datasets:[{
                        label: 'Temperature',
                        
                        data:[
                        
                            data.consolidated_weather[0].the_temp, data.consolidated_weather[1].the_temp,data.consolidated_weather[2].the_temp,data.consolidated_weather[3].the_temp,data.consolidated_weather[4].the_temp
                        ],
                        backgroundColor:'white',
                        borderWidth:1,
                        borderColor:'#777',
                        color:'white'
                        
                                        
                    }
                        ]
                    },
                    options: {
                        title:{
                            display:true,
                            text:'Temperature chart',
                            fontSize:25,
                            fontColor:'white'
                            
                        },
                        legend:{
                            labels:{
                                fontColor:'#fff'
                            }
                        },
                        layout:{
                            padding:{
                                
                                right:0,
                                left:10,
                                bottom:20
                            },
                        }
                }
                });
                
             console.log(data);
            const today=data.consolidated_weather[0];
            const state=today.weather_state_name;
            const tempMin= today.min_temp.toPrecision(2);
            const tempMax= today.max_temp.toPrecision(2);
            const humidity = today.humidity;
            const windSpeed = today.wind_speed.toPrecision(2);
            letters= data.consolidated_weather[0].weather_state_abbr;
            document.querySelector('.state').innerHTML=`Weather state: ${state}.`;
            document.querySelector('.tempMin').innerHTML=`Minimal temperature: ${tempMin}`;            
            document.querySelector('.tempMax').innerHTML=`Maximal temperature: ${tempMax}`;
            document.querySelector('.humidity').innerHTML=`Humidity: ${humidity}`;
            document.querySelector('.windSpeed').innerHTML=`Wind speed: ${windSpeed}`;
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

document.querySelector('.warsaw').addEventListener('click', function(){
    getWeather(523920);
    document.querySelector('.city').innerHTML='Warsaw';
    document.querySelector('.state').innerHTML='';
    document.querySelector('.tempMin').innerHTML='';            
    document.querySelector('.tempMax').innerHTML='';
    document.querySelector('.humidity').innerHTML='';
    document.querySelector('.windSpeed').innerHTML='';
    showLoader();
    removeSVG();
    hideChart();

})
document.querySelector('.berlin').addEventListener('click', function(){
    getWeather(638242);
    document.querySelector('.city').innerHTML='Berlin';
    
   
    document.querySelector('.state').innerHTML='';
    document.querySelector('.tempMin').innerHTML='';            
    document.querySelector('.tempMax').innerHTML='';
    document.querySelector('.humidity').innerHTML='';
    document.querySelector('.windSpeed').innerHTML='';
    showLoader();
    removeSVG()
    hideChart();
});
document.querySelector('.london').addEventListener('click', function(){
    getWeather(44418);
    document.querySelector('.city').innerHTML='London';
    showLoader();
    removeSVG();
    hideChart();
    
    
    document.querySelector('.state').innerHTML='';
    document.querySelector('.tempMin').innerHTML='';            
    document.querySelector('.tempMax').innerHTML='';
    document.querySelector('.humidity').innerHTML='';
    document.querySelector('.windSpeed').innerHTML='';
});
/*function showLoading(){};
function hideLoading(){};*/

//DESCRIPTION BASED ON LETTERS
//TEMPERATURE


//DATA ENGINE

const date = new Date();
const monthNumber = date.getMonth();
const day = date.getDate();


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
// CHARTS WITH TEMP




