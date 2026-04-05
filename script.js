const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; // 0-11 → +1 vira 1-12

const semester = month <= 6 ? "1º" : "2º";

document.getElementById("student-validation-semester").innerHTML = "&nbsp;&nbsp;" + semester;
document.getElementById("student-validation-year").innerText = year;