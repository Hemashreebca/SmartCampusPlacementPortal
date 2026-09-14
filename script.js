function updateDateTime() {
    let now = new Date();

    let options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("datetime").innerHTML =
        now.toLocaleString("en-IN", options);
}

setInterval(updateDateTime, 1000);
updateDateTime();