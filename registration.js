window.onload = (event) => {
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", (event) => {
        const { target } = event; 
        event.preventDefault();
        const name = target.elements["name"].value;
        const email = target.elements["email"].value;
        const tickets = target.elements["tickets"].value;
        const date = target.elements["date"].value;
        const data = {name, email, tickets, date}
        console.log(data);
    });
};
