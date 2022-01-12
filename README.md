## Project Description

My project will be a basic weather app using React. The app will show current weather data, a three day forecast, as well as additional current day weather details for any location you desire.

## Link to the API used

https://www.weatherapi.com/

## Example data response used

```json
{
	"location": {
		"name": "Detroit",
		"region": "Michigan",
		"country": "United States of America",
		"lat": 42.33,
		"lon": -83.05,
		"tz_id": "America/Toronto",
		"localtime_epoch": 1641924546,
		"localtime": "2022-01-11 13:09"
	},
	"current": {
		"last_updated_epoch": 1641920400,
		"last_updated": "2022-01-11 12:00",
		"temp_c": -9.3,
		"temp_f": 15.3,
		"is_day": 1,
		"condition": {
			"text": "Overcast",
			"icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
			"code": 1009
		},
		"wind_mph": 6.9,
		"wind_kph": 11.2,
		"wind_degree": 180,
		"wind_dir": "S",
		"pressure_mb": 1031.0,
		"pressure_in": 30.43,
		"precip_mm": 0.0,
		"precip_in": 0.0,
		"humidity": 53,
		"cloud": 100,
		"feelslike_c": -15.5,
		"feelslike_f": 4.0,
		"vis_km": 16.0,
		"vis_miles": 9.0,
		"uv": 2.0,
		"gust_mph": 10.7,
		"gust_kph": 17.3
	}
}
```

## Visual of your component hierarchy

![Weather Component Hierarchy!](/assets/weatherappcomponents.jpg)

## Wireframes

![Weather App Layout](/assets/Weatherapplayout.jpg)

### MVP Goals

- As a user, I would like there to be a search bar so that I can generate the three day forecast of the location I am searching for

- As a user I would like there to be further specific weather details for every search, so that I know all of the information about the weather for that specific location and day (wind, humidity, pressure, degrees in C)

### Stretch Goals

- As a user, I would like to be able to click on a certain day of the 5 day forecast to access the hourly forecast for that particular day
- As a user, I would like there to be weather animations on the page
- As a user I would like there to be sound queues depending on the weather for the day (rain, snow, windy, storm, etc)
