const apiKey = "cf3d352e2a70cfe0ebc71fd8f1e24c93";

        // Initialize current dategit 
        function updateCurrentDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById("current-date").textContent = now.toLocaleDateString("en-US", options);
        }

        // Weather function
        async function fetchWeather(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
                
                if (!response.ok) {
                    throw new Error('City not found. Please try another location.');
                }
                
                const data = await response.json();
                
                // Update weather data
                document.getElementById("city-name").textContent = data.name.toUpperCase();
                document.getElementById("current-location").textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").textContent = `${Math.round(data.main.temp)} °C`;
                document.getElementById("weather-description").textContent = data.weather[0].description;
                document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                document.getElementById("weather-icon").alt = data.weather[0].description;
                
                // Update air conditions
                document.getElementById("real-feel").textContent = `${Math.round(data.main.feels_like)} °C`;
                document.getElementById("wind-speed").textContent = `${data.wind.speed} m/s`;
                document.getElementById("clouds").textContent = `${data.clouds.all} %`;
                document.getElementById("humidity").textContent = `${data.main.humidity} %`;
                
                // Update current day
                const now = new Date();
                const options = { weekday: 'long', day: 'numeric', month: 'short' };
                document.getElementById("current-day").textContent = now.toLocaleDateString("en-US", options);
                
            } catch (error) {
                alert(error.message);
                console.error("Failed to fetch weather data:", error);
            }
        }

        // Search functionality
        document.getElementById("search-btn").addEventListener("click", function() {
            const city = document.getElementById('city-input').value.trim();
            if (city) {
                fetchWeather(city);
            } else {
                alert('Please enter a city name');
            }
        });

        // Allow search on Enter key
        document.getElementById("city-input").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                const city = this.value.trim();
                if (city) {
                    fetchWeather(city);
                }
            }
        });

        // Note Saving Functionality
        document.addEventListener('DOMContentLoaded', function() {
            updateCurrentDate();
            
            const noteInput = document.getElementById('note-input');
            const sendNoteBtn = document.getElementById('send-note-btn');
            const originalPlaceholder = noteInput.placeholder;

            sendNoteBtn.addEventListener('click', function() {
                if (noteInput.value.trim() === '') {
                    alert('Please enter a note before saving!');
                    return;
                }

                // Here you would save to localStorage or backend
                alert('Note saved successfully!');
                
                // Clear with animation
                noteInput.style.transition = 'opacity 0.3s ease';
                noteInput.style.opacity = '0';
                
                setTimeout(() => {
                    noteInput.value = '';
                    noteInput.style.opacity = '1';
                    noteInput.style.transition = '';
                }, 300);
                
                // Show feedback
                noteInput.placeholder = 'Note saved!';
                setTimeout(() => {
                    noteInput.placeholder = originalPlaceholder;
                }, 1500);
            });

            // UX improvements
            noteInput.addEventListener('focus', function() {
                this.placeholder = '';
                this.style.borderColor = '#3498db';
            });

            noteInput.addEventListener('blur', function() {
                if (this.value === '') {
                    this.placeholder = originalPlaceholder;
                }
                this.style.borderColor = '#ddd';
            });
        });

        // Initialize with default city
        //window.addEventListener('load', () => {
          //  fetchWeather('Kigali');
        //});