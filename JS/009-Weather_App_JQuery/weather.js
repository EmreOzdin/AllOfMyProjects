
//getElementByClassName(selector) ==> $(selector class)
//getElementById(selector) ==> $(selector id)

const formJS = $(".top-banner form")[0];
// const form = $(".top-banner form").get(0);
// const form = $(".top-banner form").get();

////////////
// const form = $(".top-banner form").first();
//index equals ==> eq
const formJquery = $(".top-banner form").eq(0);
const inputJquery = $(".top-banner input").eq(0);
const inputJS = $(".top-banner input").eq(0);
const msg = $(".top-banner .msg").eq(0);
const list = $(".ajax-section .cities").eq(0);

//DOMContentLoaded ==> means page rendered, DOM is ready
$(document).ready(()=>{
  console.log("DOMContentLoaded");
  localStorage.setItem("apikey", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));
});
//means window loaded (all content (e.g. images, styles etc) also loaded)
$(window).on("load", ()=> {
  console.log("window.load");
  localStorage.setItem("apikey", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));

});


formJquery.on("submit", e => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  let apikey = DecryptStringAES(localStorage.getItem("apikey"));
  let inputVal = inputJquery.val();
  let weatherType = "metric";
  let lang = "tr";
  // console.log(apikey);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=${weatherType}&lang=tr`;
  //ajax request
  //JS AJAX(XHR) vs. jQuery AJAX
  $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    success: function (response) {
      const { main, name, sys, weather } = response;
      const cityListItems = list.find(".city");
      console.log("items", cityListItems);
      const cityListItemArray = cityListItems.get();
      console.log("array", cityListItemArray);
      console.log(cityListItemArray);
      if (cityListItemArray.length > 0) {
        const filteredArray = cityListItemArray.filter((card) => $(card).find(".city-name span").text() == name);
        if (filteredArray.length > 0) {
          msg.text(`You already know the weather for ${name}, Please search for another city 😉`);
          // msg.css("color","darkred");
          msg.css({"color": "darkred", "text-decoration": "underline" });
          setTimeout(()=>{
            msg.text("");
          },5000);
          formJS.reset();
          inputJS.focus();
          return;
        }
      }
      console.log(weather[0].icon);

      const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
      //alternative iconUrl
      // const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
      console.log(iconUrl);
      const createdCityCardLi = $(document.createElement("li"));
      createdCityCardLi.addClass("city");
      const createdCityCardLiInnerH = `
        <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${iconUrl}">
            <figcaption>${weather[0].description}</figcaption>
        </figure>`;

      createdCityCardLi.html(createdCityCardLiInnerH);
      console.log(createdCityCardLi);
      list.append(createdCityCardLi);

      msg.innerText = "";
      // form.reset() ==> input.value = "";
      // jQuery has no reset() method; but native JavaScript does. 
      // So, convert the jQuery element to a JavaScript object by either using :
      formJS.reset();
      inputJquery.focus();
    },
    beforeSend: function (request) {
      console.log("ajax send request before");
    },
    complete: () => {
      console.log("ajax send request finished");

    },
    error: (XMLHttpRequest) => {
      // postErrorLog("app-" + window.location.pathname, XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown); 
      console.log(XMLHttpRequest);
      msg.text(XMLHttpRequest.status + " " + XMLHttpRequest.statusText);
      // msg.css("color","darkred");
      msg.css({"color": "darkred", "text-decoration": "underline" });
      setTimeout(()=>{
        msg.text("");
      }, 5000);
      formJS.reset();
      inputJquery.focus();

      if (XMLHttpRequest.readyState == 4) {

        // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
      }
      else {
        // something weird is happening
      }

    }
  });
}
