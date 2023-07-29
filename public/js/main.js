const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname'); 
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status');
const temp= document.getElementById('temp');

const getInfo = async(event)=>{
    event.preventDefault();
    let city=cityname.value;
        if(city===""){
            city_name.innerText=`Write name before searching`;

    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99fc66135fe898e93560d980446f74f9&units=metric`
        const response = await fetch(url);
        const data= await response.json();
        const arrdata=[data];
            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_val.innerText= arrdata[0].main.temp
            temp_status.innerText= arrdata[0].weather[0].main
        }
        catch{
            city.innerText="Enter City name correctly";
        }
    }
}
submitbtn.addEventListener('click',getInfo);



const getcurrentday = () => {
    const currentTime = new Date();
    //for day
    const dayy= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let days = dayy[currentTime.getDay()];
    let day =document.getElementById('day');
    day.innerText=days;
};
getcurrentday();

const getcurrentmonth = () => {
    var now = new Date();
    // for month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[now.getMonth()];
    let datey =document.getElementById('datee');
    datey.innerText=month;
    //for day
    let day= now.getDate()
    document.getElementById("dates").innerText = day;
    
};

getcurrentmonth();