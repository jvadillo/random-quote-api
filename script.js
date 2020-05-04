
const SERVICE_URL = "https://got-quotes.herokuapp.com/quotes";

let loadBtn = document.getElementById("load-quote-btn");

loadBtn.addEventListener("click", (event) => {
  loadData();
});

function loadData() {
  fetch(SERVICE_URL)
    .then((response) => response.json())
    .then((json) => {
      let qElement = document.getElementById("quote");
      qElement.textContent = `"${json.quote}"`;
      let cElement = document.getElementById("character");
      cElement.textContent = `- ${json.character} -`;
    });
}

loadData();