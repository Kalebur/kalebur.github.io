window.addEventListener("DOMContentLoaded", () => {
  const globalVars = {};
  const alertBox = document.querySelector(".alert-box");
  const btnCloseAlert = document.querySelector(".close-button");
  const today = new Date();
  const lastVisitDate = new Date(localStorage.getItem("last-seen-date"));

  // Reset time to midnight on today's date
  // for easier date comparison
  today.setHours(0, 0, 0, 0);

  // If user hasn't visited the site today, display alert box
  if (today > lastVisitDate) {
    localStorage.setItem("last-seen-date", "" + "" + today);
    alertBox.classList.add("displayed");
  }

  globalVars.hamburgerBtn = document.querySelector(".hamburger");
  globalVars.hamburgerBtn.addEventListener("click", function (e) {
    if (this.classList.contains("nav-active")) {
      this.classList.remove("nav-active");
    } else {
      this.classList.add("nav-active");
    }
  });

  // Nav links close mobile nav menu when clicked
  document.querySelectorAll("nav a").forEach(function (item) {
    item.addEventListener("click", function () {
      globalVars.hamburgerBtn.classList.remove("nav-active");
    });
  });

  // Functionality to close the employment status alert box
  btnCloseAlert.addEventListener("click", () => {
    alertBox.classList.remove("displayed");
    setTimeout(() => {
      alertBox.remove();
    }, 1000);
  });
});
