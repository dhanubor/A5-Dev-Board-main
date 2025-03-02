//backgrandcolor theme
document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme");
  
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#F4D03F", "#A569BD"];

    let colorIndex = 0;
    themeButton.addEventListener("click", function () {
        document.body.style.backgroundColor = colors[colorIndex];

        colorIndex = (colorIndex + 1) % colors.length;
    }
 )
})
//date
document.addEventListener("DOMContentLoaded", function () {
            
    const today = new Date();


    const options = { weekday: "short" }; 
    const dayName = today.toLocaleDateString("en-US", options);
    const month = today.toLocaleString("en-US", { month: "short" }); 
    const date = today.getDate(); 
    const year = today.getFullYear(); 

    document.getElementById("current-date").innerHTML = 
        `${dayName}, <br> <span class="font-bold">${month} ${date} ${year}</span>`;
});