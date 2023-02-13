dayjs.extend(dayjs_plugin_duration);

function activatecount(elem, dateString){
    const t = dayjs(dateString);

    elem.querySelector(".until--event").textContent = `Until ${ t.format("D MMMM YYYY") }`;
    setInterval(() =>{
        const now = dayjs();
        const duration = dayjs.duration(t.diff(now));

        if(duration.asMilliseconds() <= 0) return;
        console.log(duration.asWeeks());    

        elem.querySelector(".until--numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
        elem.querySelector(".until--numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
        elem.querySelector(".until--numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
        elem.querySelector(".until--numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
    }, 250);
}

activatecount(document.getElementById("mycountdown"), "2024-12-31");
