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
//task
const buttons = document.querySelectorAll(".btn-primary");

let taskplusValue = 23;
let taskMinusValue = 6;

buttons.forEach(button => {
    button.addEventListener('click', () => {
       
        if (taskMinusValue > 0) {
            taskplusValue++;
            taskMinusValue--;

          
            document.getElementById('task-plas').textContent = taskplusValue;
            document.getElementById('task-minus').textContent = `0${taskMinusValue}`;

          
            button.disabled = true;
            button.style.background = 'gray';

            
            if (taskMinusValue > 0) {
                alert('Board updated successfully');
            } else {
                alert('Board updated successfully');
                alert('Congratulations! You have completed the current task');
            }

         
            const time = new Date();
            const nowTime = `${time.getHours() % 12 || 12}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}${time.getHours() >= 12 ? 'PM' : 'AM'}`;

           
            const taskCard = button.closest('.task');
            const title = taskCard.querySelector('.card-title').textContent;
            const p = document.createElement('p');
            p.classList.add('py-5');
            p.innerText = `You have completed the task "${title}" at ${nowTime}`;

          
            document.getElementById('task-history').appendChild(p);
        }
    });
});

//home to page
document.getElementById('Discover').addEventListener('click',
    function () {
        window.location.href =  "question.html"
    }
)

// clear buttons

document.getElementById('clear-btn').addEventListener('click' , function(event){
    event.preventDefault()
//    c document.getElementById('task-history'). = '';
const taskHistory = document.getElementById('task-history')
   taskHistory.innerHTML = "";
})
