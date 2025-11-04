const message = "Hello!";
localStorage.setItem("mess", message);

const user = {
  login: "qwerty",
  password: "3758",
};
const archiveUser = JSON.stringify(user);
localStorage.setItem("userInfo", archiveUser);

const userData = localStorage.getItem("userInfo");
console.log(userData, typeof userData);
const userDataParsed = JSON.parse(userData);
console.log(userDataParsed, typeof userDataParsed);

const names = ["Mariya", "Ira", "Sofia", "Danil"];
localStorage.setItem("arr", names);

const number = 17;
localStorage.setItem("num", number);

// Видалимо ключ з LocalStorage
localStorage.removeItem("arr");

// Очистимо повністю локальне сховище
// localStorage.clear();

console.dir(localStorage);
console.log(localStorage.length);
