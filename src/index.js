function updateTime() {
  //Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoOption = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoOption.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoOption.format(
    "H:mm:ss [<small>]A[</small]>]"
  );

  //}
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisOption = moment().tz("France/Paris");
  parisDateElement.innerHTML = parisOption.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisOption.format(
    "H:mm:ss [<small>]A[</small]>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
