# Weather Forecasting App which will help people to check weather easily


this responsive web application  that displays current weather and forecasts for cities worldwide .
## API Attribution
Weather data provided by [OpenWeatherMap](https://openweathermap.org/api)

API Usage:
```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=YOUR_API_KEY`)

```
### how our app works
 
 video-address(https://youtu.be/OOPWdxo2X-Y)


Real-time Weather Data:

  - Current temperature and conditions
  - Wind speed
  -humidity
  - cloud coverage
  - Weather icons from OpenWeatherMap
  
  -current time and date

Live Notes System:
  - Auto-save functionality
  - Manual save button
  - Responsive design

User-Friendly Interface:
  - Clean, modern design
  - Fully responsive layout
  - Intuitive controls
  - Error handling and validations

## Technologies Used

Frontend:
  - HTML, CSS, JavaScript
  - OpenWeatherMap API (Weather data)
  -fontend icons

Development Tools:
  - Visual Studio Code
  - Git/GitHub (Version control)
  - Chrome Developer Tools

  -microsoft edge

## Installation & Setup

1.Clone the repository:
   git clone https://github.com/Umukundwa004/forecasting.git
   cd weather-app


### Server Configuration
- Web Servers(web01 and web02)
-Load Balancer
- Nginx round-robin balancing

## Deployment Steps

1. ssh into servers (Web01, Web02, LB01)
2. Clone repository to /var/www/html:
```bash
git clone https://github.com/Umukundwa004/weather.git
```
2. Deploy application code to both web servers
3. Configure Nginx on all servers
1. SSH into Web01 and Web02 servers

