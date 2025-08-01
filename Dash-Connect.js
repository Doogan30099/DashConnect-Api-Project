//get photo of a random dog through api
const getRandomDogImage = document.getElementById("dog-button");
const dogImageContainer = document.getElementById("dog-output");
//write an async function to fetch a random dog image
async function fetchRandomDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    dogImageContainer.innerHTML = ""; // clear the previous image

    // display the iamge in the correct dog api element
    const img = document.createElement("img");
    img.src = data.message; // set the src of the image to the fetched
    dogImageContainer.appendChild(img); // append the image to the container
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
}
fetchRandomDogImage(); // call the function to fetch and display the image

// add an event listener to the button to call the function when clicked
document
  .getElementById("dog-button")
  .addEventListener("click", fetchRandomDogImage);

// call the htm elements for the cat api and the cat image container
//get photo of a random cat through api
const getRandomcatImage = document.getElementById("cat-button");
const catImageContainer = document.getElementById("cat-output");
//write an async function to fetch a random cat image
async function fetchRandomCatImage() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();

    catImageContainer.innerHTML = ""; // clear the previous image

    // display the iamge in the correct dog api element
    const img = document.createElement("img");
    img.src = data[0].url; // set the src of the image to the fetched
    catImageContainer.appendChild(img); // append the image to the container
  } catch (error) {
    console.error("Error fetching cat image:", error);
  }
}
fetchRandomCatImage(); // call the function to fetch and display the image

// add an event listener to the button to call the function when clicked
document
  .getElementById("cat-button")
  .addEventListener("click", fetchRandomCatImage);

//write an async function to retrive real-time weather data
const currentWeatherButton = document.getElementById("weather-button");
const weatherOutput = document.getElementById("weather-output");

async function fetchWeatherInfo() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=41.6688&longitude=70.2962&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m&timezone=America%2FNew_York&temperature_unit=fahrenheit"
    );
    const data = await response.json();

    weatherOutput.innerHTML = ""; // clear the previous weather data

    const weatherInfo = document.createElement("p");
    weatherInfo.textContent = [
      `Current Temperature: ${data.current.temperature_2m}°F`,
      `Max Temperature: ${data.daily.temperature_2m_max[0]}°F`,
      `Min Temperature: ${data.daily.temperature_2m_min[0]}°F`,
    ];
    weatherOutput.appendChild(weatherInfo); // append the weather info to the container
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
fetchWeatherInfo(); // call the function to fetch and display the weather data

document
  .getElementById("weather-button")
  .addEventListener("click", fetchWeatherInfo); // add an event listener to the button to call the function when clicked

// display the weather data in the correct weather api element

// for currency exchange lets put four input fields
// one for the amount, one for the from currency, one for the to currency and one for the result
// write an async function to get the exchange rate and display the result in the result field
