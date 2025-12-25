let btns = document.querySelectorAll(".btn");
let theme = document.documentElement;
let contain = document.getElementById("container");
let time = document.getElementById("time");

let myTime = setInterval(myClock, 1000);
function myClock() {
  let currentTime = new Date();

  time.innerHTML = currentTime.toLocaleTimeString();
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.classList);
    let classList = e.target.classList;
    if (classList.contains("btn1")) {
      theme.style.setProperty("--theme-color", "#731a28ff");
      console.log("btn1");
    } else if (classList.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(169, 33, 53)");
    } else if (classList.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(223, 57, 82)");
    } else if (classList.contains("btn4")) {
      theme.style.setProperty("--theme-color", "rgb(255, 97, 120)");
    } else {
      console.log("other");
    }
  });
});
