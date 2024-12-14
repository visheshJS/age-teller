const result = document.getElementById("result");
const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  const birthDate = new Date(userInput.value);
  if (isNaN(birthDate)) {
    alert("Invalid date selected");
    return;
  }
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let y3 = y2 - y1;

  let m3;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + (m2 - m1);
  }

  let d3;

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    if (m3 > 0) {
      m3 = 11;
      y3--;
    }
    console.log(`y1: ${y1}, m1: ${m1}`);

    d3 = getDaysInMonth(y1, m1) + (d2 - d1);
  }

  result.innerHTML = `your are ${y3} years, ${m3} months, and ${d3} days old. `;
  console.log(`your are ${y3} years, ${m3} months, and ${d3} days old. `);
}

function getdaysinMonth() {
  return new Date(year, month, 0).getDate();
  // 0 sets the date to last date of previous month and getDate(); gives the
  //number of days in that last month;
}
