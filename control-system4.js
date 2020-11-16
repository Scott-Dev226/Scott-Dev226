



  weatherBalloon = (cityID, stateID) => {
    const key = "bd59f1b0a5dc46effebf6e600888394f";
    const fetchURL2 = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityID + ',' + stateID + '&appid=' + key + "&units=imperial"
   
    fetch(fetchURL2)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {

    const lowTemp = (JSON.stringify(data.main.temp_min));
    const highTemp = (JSON.stringify(data.main.temp_max));
  const today3 = formatTodaysDate();
    const windSpeed = (JSON.stringify(data.wind.speed));
    const description = (JSON.stringify(data.weather[0].description));
    const ID = (JSON.stringify(data.weather[0].id));
    const omega = '&#8457';
   

    document.getElementById("placeholderDate").innerHTML = (today3);
    document.getElementById("placeholderName").innerHTML = (cityID) + ', ' + (stateID);
       document.getElementById("placeholder4").innerHTML = (description);
    document.getElementById("placeholder").innerHTML = (highTemp) + " " + (omega);
    document.getElementById("placeholder2").innerHTML = (lowTemp) + " " + (omega);
    document.getElementById("placeholder5").innerHTML = (windSpeed);

   const leftBkgrd =  document.getElementById("left_grab")

   const vid =  document.getElementById("videograb2")




    if(ID >= 200 && ID <=232) {
     
      leftBkgrd.style.backgroundImage = "url('storm.jpg')";


      gsap.from(".left-content", {duration:1.5, y:-1000, opacity:0}); 
      gsap.from(".right-content", {duration:1.5, x:1000,opacity:0}); 
      gsap.to(".container-Hiro", {duration:3, opacity:1});
      
       gsap.to(".data-side-bar", {duration:3, opacity:1});
       gsap.to(".data-side-bar-mars", {duration:3, opacity:1});
      gsap.from(".apiOutput", {x: 300, duration:2, opacity:0, stagger: 1});
      gsap.from(".apiOutput2", {x: 300, duration:2, opacity:0, stagger: 1});
      gsap.from(".apiOutput3", {x: 300, duration:2, opacity:0, stagger: 1});
     
    }




    if(ID >= 300 && ID <=321) {
      alert("Drizzle");
      }




 
      if(ID >= 500 && ID <=531) {
      
      
      
        
        gsap.from(".apiOutput", {x: 300, duration:2, opacity:0,stagger: 0.33});
        gsap.from(".apiOutput2", {x: 300, duration:2, opacity:0, stagger: 1});
        gsap.from(".apiOutput3", {x: 300, duration:2, opacity:0, stagger: 1});
        
        gsap.from(".left-content", {duration:1, y:-1000, opacity:0}); 
            gsap.from(".right-content", {duration:1, x:1000,opacity:0}); 
        gsap.to(".container-Hiro", {duration:3, opacity:1});
        leftBkgrd.style.backgroundImage = "url('storm.jpg')";
        }
 
        
        if(ID >= 600 && ID <=622) {
          
        
      
          
          gsap.to(".data-side-bar", {duration:3, opacity:1});
          gsap.to(".data-side-bar-mars", {duration:3, opacity:1});
           gsap.from(".apiOutput", {fontSize:"1em", duration:2, opacity:0,stagger: 0.33});
          gsap.from(".apiOutput2", {fontSize:"1em", duration:2, opacity:0, stagger: 1});
          gsap.from(".apiOutput3", {fontSize:"1em", duration:2, opacity:0, stagger: 1});
        
          
          gsap.from(".left-content", {duration:1, y:-1000, opacity:0}); 
          gsap.from(".right-content", {duration:1, x:1000,opacity:0}); 
          gsap.to(".container-Hiro", {duration:3, opacity:1});
          
          leftBkgrd.style.backgroundImage = "url('ice.jpg')";
         
          }
       
           if(ID == "800") {
           
       
        
            

            gsap.to(".data-side-bar", {duration:3, opacity:1});
            gsap.to(".data-side-bar-mars", {duration:3, opacity:1});
            gsap.from(".apiOutput", {x: 300, duration:2, opacity:0,stagger: 0.33});
            gsap.from(".apiOutput2", {x:300, duration:2, opacity:0, stagger: 1});
            gsap.from(".apiOutput3", {x: 300, duration:2, opacity:0, stagger: 1});
            
            gsap.from(".left-content", {duration:1, y:-1000, opacity:0}); 
            gsap.from(".right-content", {duration:1, x:1000,opacity:0}); 
            gsap.to(".container-Hiro", {duration:3, opacity:1});
            leftBkgrd.style.backgroundImage = "url('clear.jpg')";
          }
 
          if(ID >= 801 && ID <=805) {
           
            
            
         


            gsap.to(".data-side-bar", {duration:3, opacity:1});
            gsap.to(".data-side-bar-mars", {duration:3, opacity:1});
            gsap.from(".apiOutput", {x: 300, duration:2, opacity:0,stagger: 0.33});
           gsap.from(".apiOutput2", {x: 300, duration:2, opacity:0, stagger: 1});
            gsap.from(".apiOutput3", {x: 300, duration:2, opacity:0, stagger: 1});
            
            gsap.from(".left-content", {duration:1, y:-1000, opacity:0}); 
            gsap.from(".right-content", {duration:1, x:1000,opacity:0}); 
            gsap.to(".container-Hiro", {duration:3, opacity:1});
            leftBkgrd.style.backgroundImage = "url('cloudy.jpg')";
            }


    })
    
    .catch(function() {
      // catch any errors
  
    });



  }
  
  const btn3 = document.getElementById("kicker").addEventListener("click", function() {
    
    const cityName = document.getElementById("input2").value;
    const stateID = document.getElementById("input3").value;

    nasaPull();
    nasaImagePull();
    weatherBalloon( cityName, stateID);
    gsap.to(".apiOutput", {duration:2, opacity:0.85});
  })



  
 /* create variable to access data between javascript and HTML. */ /*
var var1 = document.querySelector('idhere') // you have to use parent class/id

/* Get icon from JASON */ /*
var tempvariable = data['weather'][0]['icon'];

/* pass link along with html tag to html */ /*
var1.innerHTML = "http://openweathermap.org/img/w/" +tempvariable+ '.png' alt='Icon'

*/





function myFunction(event) {
  if (event.keyCode == 13) {
  const cityName = document.getElementById("input2").value;
  const stateName = document.getElementById("input3").value;
    nasaPull();
    nasaImagePull();
    weatherBalloon( cityName, stateName);
    gsap.to(".apiOutput", {duration:2, opacity:0.85});
    
}}
  







nasaPull = () => {
  const nasaKey = "QMRvozKL71LKkdECRWqfD4kuFlW36rD6xHdzico8"
  fetch('https://api.nasa.gov/insight_weather/?api_key=' + nasaKey + '&feedtype=json&ver=1.0')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    const todaysSol = (JSON.parse(data.sol_keys[5]));
    const todaysMarsTempC = (JSON.stringify(data[todaysSol].AT.av)) 
    const todaysMarsTempF = (todaysMarsTempC * (9/5)) + 32
    const todaysMarsWindSpeed = (JSON.stringify(data[todaysSol].HWS.av)) 

  document.getElementById("sol").innerHTML = (todaysSol);
  document.getElementById("marsTemp").innerHTML = (todaysMarsTempF);
  document.getElementById("marsWind").innerHTML = (todaysMarsWindSpeed);



})};


nasaImagePull = () => {
 

  
 

  const today2 = formatMartianDate();
  const nasaKey = "QMRvozKL71LKkdECRWqfD4kuFlW36rD6xHdzico8"
  const fetchUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + today2 + '&api_key=' + nasaKey + '&feedtype=json&ver=1.0'
    fetch(fetchUrl)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    const todaysImages = (JSON.stringify(data.photos[0].img_src))
    const rightBkgrd =  document.getElementById("right_grab")
  
    
    rightBkgrd.style.backgroundImage = "url("  + todaysImages + ")" 
    
  })};



  /*

  dateConversion = () => {
    const today = new Date();
    const dd = today.getDate();
    
    const mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+dd+'-'+mm;
    console.log(today);
   


  }




const moviePul = () =>{

const movieUrl = "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher"


}



*/
const formatMartianDate = () => {

let today = new Date();
let dd = today.getDate()-4;
  
let mm = today.getMonth()+1; 
let  yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today2 = yyyy +'-'+ mm +'-'+ dd;
return today2


}


const formatTodaysDate = () => {

  let today = new Date();
  let dd = today.getDate();
    
  let mm = today.getMonth()+1; 
  let  yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 
  
  if(mm<10) 
  {
      mm='0'+mm;
  } 
  today3 = mm +'/'+ dd +'/'+ yyyy;
  return today3
  
  
  }