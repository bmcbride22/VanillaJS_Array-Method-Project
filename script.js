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
//
// ====================================================================

// ====================================================================
//
// ====================================================================

// ====================================================================
//
// ====================================================================
