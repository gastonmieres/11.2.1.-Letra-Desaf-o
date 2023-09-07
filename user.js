document.addEventListener("DOMContentLoaded", () => {
    const user_form = document.getElementById("user_form");

    user_form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const user_data = {
            nombre,
            apellido,
            fecha_nacimiento: fechaNacimiento
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(user_data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});








