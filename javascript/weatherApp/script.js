const cardFooter = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/5903/5903552.png",
    alt: "humidity",
    data: "53%",
    text: "humidity",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/172/172922.png",
    alt: "wind-speed",
    data: "5.3 km/h",
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
                        <p class="mb-0">${data}</p>
                        <p class="mb-0">${text}</p>
                    </div>
                </div>`;
    })
  );
generateCardFooterItems();

const apiKey = "58c4ce7a7f2e33dd889224a47aa1e6c5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=chennai";

// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${apiKey}`);
//   let data = await response.json();
//   console.log(data);
// }

function checkWeather() {
  $.ajax({
    url: apiUrl + `&appid=${apiKey}`,
    method: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $(".city").text(data.name);
      $(".temp").text();
    },
    error: function (xhr, status, error) {
      alert("Incorrect City name");
    },
  });
}

checkWeather();
