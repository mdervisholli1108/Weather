function getWeather() {

    let lat = document.getElementById("lat").value
    let lon = document.getElementById("lon").value
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=3c99d972a09fef178db995d09d1110dc`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", weatherAPI);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) { //still need to know what 'this' is reffering to
            if (this.status === 200) {
                document.getElementsByTagName("h1")
                [0].style.display = "none";
                let data = JSON.parse(this.responseText);
                console.log(data)
                let city = data.name;
                let temp = data.main.temp;
                if (temp < 40) {
                    document.body.style.backgroundImage = 'url("https://img.freepik.com/premium-photo/thermometer-snow-background-winter-forest-shows-25-degrees-zero_199743-8600.jpg")';
                } else if (temp > 40 && temp < 55) {
                    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/fa/48/aa/fa48aaa751050e78667203bfb1bd2ee4.jpg")'
                } else if (temp > 55 && temp < 68) {
                    document.body.style.backgroundImage = 'url("https://wallpapercave.com/wp/wp7528816.jpg")'
                    let info = document.getElementById("center");
                    info.style.color = "white";
                } else {
                    document.body.style.backgroundImage = 'url("https://www.wallpapertip.com/wmimgs/231-2319534_tropical-island-hd-wallpapers.jpg")'
                }
                // let description = data.weather[0].description;
                let cityElement = document.getElementById("city");
                cityElement.innerHTML = city;
                let tempElement = document.getElementById("temperture");
                tempElement.innerHTML = temp + " °F";
                // let descriptionElement = document.getElementById("description");
                // descriptionElement.innerHTML = description;
            } else {
                console.log("Error: = this.status + " + this.statusText);
            }
        }
    };
    xhr.send();
    document.getElementById("lat").value = ''
    document.getElementById("lon").value = ''
}
getWeather();

