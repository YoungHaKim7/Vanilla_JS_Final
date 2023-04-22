const Nyclock = document.querySelector(".clock-NY-est");
const clock = document.querySelector(".clock-korea");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const KrDate = new Date().toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', weekday: "long", hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' });
    const NyDate = new Date(date.getTime() - date.getTimezoneOffset() * -26667).toISOString().split("T")[0];
    const NyTime1 = new Date(date.getTime() - date.getTimezoneOffset() * -26667).toISOString().split("T")[1].slice(0,8);
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    Nyclock.innerText =  `NewYork🇺🇸 \n${NyDate} ⏰ ${NyTime1} (EST = GMT -5:00)`;
    clock.innerText = `한국Korea🇰🇷 \n${KrDate}`;
}

getClock();
setInterval(getClock, 1000);