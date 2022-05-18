let theme = localStorage.getItem('theme')
if (theme == null) {
  setTheme('light')
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "style.css";
  }

  if (mode == "dark") {
    document.getElementById("theme-style").href = "darkStyle.css";
  }
}

localStorage.setItem('theme', mode)
