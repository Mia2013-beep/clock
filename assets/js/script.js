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
      theme.style.setProperty("--theme-color", "rgb(197, 20, 20)");
      console.log("btn1");
    } else if (classList.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(135, 26, 26)");
    } else if (classList.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(31, 95, 11)");
    } else if (classList.contains("btn4")) {
      theme.style.setProperty("--theme-color", "rgb(45, 145, 12)");
    } else {
      console.log("other");
    }
  });
});
