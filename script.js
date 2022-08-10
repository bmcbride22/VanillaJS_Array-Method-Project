// ====================================================================
//	GRAB DOM ELEMENTS
// ====================================================================

const main = document.getElementById("main");
const btn_addUser = document.getElementById("add-user");
const btn_double = document.getElementById("double");
const btn_showMillionaire = document.getElementById("show-millionaire");
const btn_sortRichest = document.getElementById("sort-richest");
const btn_sortPoorest = document.getElementById("sort-poorest");
const btn_calculateWealth = document.getElementById("calculate-wealth");

// ====================================================================
// Functions
// ====================================================================

// Fetch random user and add money
async function getRandomUser() {
  // fetch('https://randomuser.me/api').then(res => res.json().then(data =>))   ## Don't need this if youy use async funtion
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  console.log(data);
  const user = data.results[0];
  const newUser = {
    name: `${user?.name?.first} ${user?.name?.last}`,
    wealth: Math.floor(Math.random() * 2000000),
  };
  addData(newUser);
}

// Add new user data to the userdata array
function addData(obj) {
  userData.push(obj);
  updateDOM();
}

// Update DOM with user data
function updateDOM(providedData = userData) {
  //Clear main div
  main.innerHTML = `
  <h2 class="column-labels">
	<span class="person-title">Person</span>
	<span class="wealth-title">Wealth</span>
  </h2>`;

  providedData.forEach((item) => {
    // body
    const element = document.createElement("div");
    element.classList.add("user");
    element.innerHTML = `<span class="name">${item.name}</span>
	<span class="wealth">${applyCurrencyFormat(item.wealth)}</span>`;
    main.appendChild(element);
  });
}

// Format number as currency

function applyCurrencyFormat(number) {
  // Using answer from stack overflow
  // https://stackoverflow.com/a/14428340/18649153
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// ====================================================================
//	Initialize array and poulate with starting user data (names, wealth)
// ====================================================================

let userData = [];
getRandomUser();
getRandomUser();
getRandomUser();

console.log(userData);

// ====================================================================
//	EVENTS
// ====================================================================

// Add User Button CLick

btn_addUser.addEventListener("click", getRandomUser);

// ====================================================================
//
// ====================================================================

// ====================================================================
//
// ====================================================================
