function updateTime() {
  //Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoOption = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoOption.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoOption.format(
      "H:mm:ss [<small>]A[</small]>]"
    );
  }
  //}
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisOption = moment().tz("France/Paris");
    parisDateElement.innerHTML = parisOption.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisOption.format(
      "H:mm:ss [<small>]A[</small]>]"
    );
  }
}
function selectCity(event) {
  let citiesElement = event.target.value;
  let cityName = citiesElement.replace("_", " ").split("/")[1];
  let citiesOption = document.querySelector("#city");
  let cityTimezone = moment().tz(citiesElement);
  citiesOption.innerHTML = `
   <div class = "city">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTimezone.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTimezone.format(
            "H:mm:ss"
          )}<small>${cityTimezone.format("A")}</small></div>
          </div>
`;
}

updateTime();
setInterval(updateTime, 1000);

setInterval(selectCity, 1000);
let theCity = document.querySelector("#cities");
theCity.addEventListener("change", selectCity);
