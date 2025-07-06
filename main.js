clockTime = document.getElementById('clock-time');
clockDate = document.getElementById('clock-date');

const updateTime = () => {
    const today = new Date()
    // console.log(today)
    clockTime.textContent = `${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}:${String(today.getSeconds()).padStart(2, "0")}`;
    clockDate.textContent = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`
}
updateTime()
setInterval(updateTime, 1000)