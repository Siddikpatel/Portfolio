const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.setAttribute("datetime", currentYear);
year.textContent = currentYear;