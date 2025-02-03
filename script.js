// Pomodoro Timer
let timeLeft = 1500; // 25 minutes
let timer;

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 1500;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = () => li.remove();
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
