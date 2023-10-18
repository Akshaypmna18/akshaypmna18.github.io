const cardFooter = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/5903/5903552.png",
    alt: "humidity",
    text: "humidity",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/172/172922.png",
    alt: "wind-speed",
    text: "Wind speed",
  },
];

const cardFooterEle = $(".card-footer");

let generateCardFooterItems = () =>
  cardFooterEle.append(
    cardFooter.map((item) => {
      const { img, alt, data, text } = item;
      return `
  <div class="d-flex w-5">
                    <img src=${img} alt=${alt}>
                    <div class="ms-2">
                        <p id=${alt} class="mb-0"></p>
                        <p class="mb-0 text-capitalize">${text}</p>
                    </div>
                </div>`;
    })
  );
generateCardFooterItems();

const apiKey = "58c4ce7a7f2e33dd889224a47aa1e6c5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

let cityName = "Bengaluru";
$("input").on("keydown", function (e) {
  if (e.key === "Enter") updateCityName();
});
$("i").on("click", function (e) {
  updateCityName();
});

function updateCityName() {
  cityName = $("input").val();
  checkWeather(cityName);
}

// const weather = {
//   clear:
//     "https://clipart-library.com/images_k/sun-silhouette-vector/sun-silhouette-vector-2.png",
//   thunderstorm:
//     " https://png.pngtree.com/png-clipart/20230522/original/pngtree-weather-vector-png-image_9167000.png",
// };
// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${apiKey}`);
//   let data = await response.json();
//   console.log(data);
// }

function checkWeather(city) {
  $.ajax({
    url: apiUrl + `&q=${city}&appid=${apiKey}`,
    method: "GET",
    dataType: "json",
    success: function (data) {
      $(".city").text(data.name);
      $(".temp").text(`${Math.floor(data.main.temp)}°c`);
      $("#humidity").text(`${Math.floor(data.main.humidity)}%`);
      $("#wind-speed").text(`${data.wind.speed} Km/h`);
    },
    error: function (xhr, status, error) {
      alert("Incorrect City name");
    },
  });
}

checkWeather(cityName);
