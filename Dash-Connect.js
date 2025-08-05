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

    const weatherInfo = document.createElement("p");
    weatherInfo.innerHTML = [
      `
  Current Temperature: ${data.current.temperature_2m}°F<br>
  Max Temperature: ${data.daily.temperature_2m_max[0]}°F<br>
  Min Temperature: ${data.daily.temperature_2m_min[0]}°F
`,
    ];
    weatherOutput.innerHTML = ""; // clear the previous weather data

    weatherOutput.appendChild(weatherInfo); // append the weather info to the container
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
fetchWeatherInfo(); // call the function to fetch and display the weather data

document
  .getElementById("weather-button")
  .addEventListener("click", fetchWeatherInfo); // add an event listener to the button to call the function when clicked

// currency exchange rate api 

const currencyExchangeButton = document.getElementById(
  "currency-exchange-button"
);
const currencyExchangeOutput = document.getElementById("currency-output");
const amount = document.getElementById("amount").value;
const fromCurrency = document.getElementById("from-currency").value;
const toCurrency = document.getElementById("to-currency").value;

async function fetchCurrencyExchangeRate() {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    );

    const data = await response.json();
    const message = document.getElementById("conversion-message");

    if (data.rates[toCurrency]) {
      const exchangeRate = data.rates[toCurrency];
      const result = (amount * exchangeRate).toFixed(2);

      message.textContent = `Converted Amount: ${result} ${toCurrency}`;
      document.getElementById("result").value = `${result} ${toCurrency}`;
    } else {
      message.textContent = "Invalid currency code.";
      document.getElementById("result").value = "";
    }
    currencyExchangeOutput.innerHTML = ""; // clear the previous exchange rate
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    currencyExchangeOutput.innerHTML = "Error fetching exchange rate.";
  }
}

currencyExchangeButton.addEventListener("click", fetchCurrencyExchangeRate); // add an event listener to the button to call the function when clicked




// get trending movies for the day


const getTrendingMovies = document.getElementById("trending-movies-button");
const trendingMoviesOutput = document.getElementById("trending-movies-output");
async function getMovies() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjY3ZGQ4MmJkNTgyMDAyOTMzNWVhY2VjMTYyYzFkMCIsIm5iZiI6MTc1NDI2ODA1Ny42MjksInN1YiI6IjY4OTAwMTk5YTc3MDExNmFkZGIyMzBiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rchNB8YceYU9LrnK-jBainoDgY6ozGEHRftlXWLLQxk",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    const data = await response.json();
    trendingMoviesOutput.innerHTML = ""; // clear the previous movies data
    const trendingMovies = data.results;

    trendingMovies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `
      <h3>${movie.title}</h3>
      <p>Release Date: ${movie.release_date}</p>
      <p>Rating: ${movie.vote_average}</p>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    `;
      trendingMoviesOutput.appendChild(movieElement);
    });
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    trendingMoviesOutput.innerHTML = "Error fetching trending movies.";
  }
}
getTrendingMovies.addEventListener("click", getMovies); // add an event listener to the button to call the function when clicked



// Get github user profile


const gitHubUserButton = document.getElementById("github-button");
const gitHubUserProfile = document.getElementById("github-output");

async function getGitHubUser() {
  const username = document.getElementById("user-name");
  const password = document.getElementById("password")
  if (!username.value || !password.value) {
    alert("Please enter both email and password.");
    return;
  }
  try {
    const response = await fetch(
      `https://api.github.com/users/${username.value}`,
      {
        headers: {
          Authorization: `Basic ${btoa(`${username.value}:${password.value}`)}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("User not found or authentication failed.");
    }
    const data = await response.json();
    gitHubUserProfile.innerHTML = `
      <h3>${data.login}</h3>
      <p>${data.bio || "No bio available."}</p>
      <img src="${data.avatar_url}" alt="${data.login}" width="100">
    `;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    gitHubUserProfile.innerHTML = "Error fetching GitHub user.";
  }

}

gitHubUserButton.addEventListener("click", getGitHubUser);


//async function to get rando jokes from api 
  const getRandomJokesButton = document.getElementById("get-jokes-button");
  const jokeOutput =document.getElementById("joke-output");


async function getJoke() { 
 

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    const jokeElement = document.createElement("div")
    jokeElement.classList.add("joke");  
    jokeOutput.innerText = "";
    jokeElement.innerHTML = `
    <h3>${data.setup}</h3>
    <p>${data.punchline}</p>
    `;
    jokeOutput.appendChild(jokeElement);
  }catch (error) {
    console.error("Error fetching joke:", error);
    jokeOutput.innerHTML = "Error fetching joke.";
} 
  }
getRandomJokesButton.addEventListener("click", getJoke); 

//make an async function to retrieve real time market data from public api
const getStockMarketInfoButton = document.getElementById("stock-market-button");
const stockMarketInfoOutput = document.getElementById("stock-market-output");
const url =
  "https://api.marketstack.com/v1/eod?access_key=d76839431f68e37d2300f7918f477b7c&symbols=MSTY";
const options = {
  method: "GET",
};

async function getCurrentStockPrice() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    stockMarketInfoOutput.innerHTML = ""; 
    const stockData = data.data[0]; 
    const stockElement = document.createElement("div");
    stockElement.classList.add("stock");

    stockElement.innerHTML = `
      <h3>Symbol: ${stockData.symbol}</h3>
      <p>Open: ${stockData.open}</p>
      <p>Close: ${stockData.close}</p>
      <p>Volume: ${stockData.volume}</p>
      <p>Date: ${stockData.date}</p>
    `;

    stockMarketInfoOutput.appendChild(stockElement); // 
  } catch (error) {
    console.error("Error fetching stock market data:", error);
    stockMarketInfoOutput.innerHTML = "Error fetching stock market data.";
  }
}

getStockMarketInfoButton.addEventListener("click", getCurrentStockPrice);
