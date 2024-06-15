var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        var d = new Date();
        document.getElementById('year').innerHTML = d.getFullYear();
        document.getElementById('date').innerHTML = d.getDate();
        document.getElementById('month').innerHTML = month[d.getMonth()];
        document.getElementById('day').innerHTML = day[d.getDay()];

        let cityName = "Indore";

        function cityNameChange() {
            cityName = document.getElementById("city-name").value;
            run();
        }

        var temp;
        let feel;
        const apiKey = '0cefbdd8089c7b724b58eac94e84c704';



        function run() {
            let city = cityName;
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    feel = data.weather[0].main;
                    document.getElementById('feel').innerHTML = feel;
                    name = data.name;
                    document.getElementById('name').innerHTML = "Weather Today At " + name;
                    temp = data.main.temp;
                    temp -= 273.15;
                    document.getElementById('temp').innerHTML = Math.floor(temp);
                })
                .catch(error => alert("Enter correct City name"));
        }

        run();