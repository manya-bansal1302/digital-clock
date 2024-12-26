const clock = document.getElementById('clock')



const  date = new Date();
clock.innerHTML = `
<div> Current Time: ${date.toLocaleTimeString()} </div>
<div>Current Date: ${date.toLocaleDateString()} </div>
 `;
clock.style.fontSize = "24px"
clock.style.color = "black"


console.log(date.toLocaleTimeString())