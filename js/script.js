console.log("Miłego dnia :)");

let przycisk = document.querySelector(".przycisk");
let obrazek = document.querySelector(".obrazek");



przycisk.addEventListener("click", () => {
    if (przycisk.innerText === "Usuń zdjęcie") {
        przycisk.innerText = "Nie podoba Ci się zdjęcie? Naciśnij";
    }
    obrazek.remove();
    przycisk.addEventListener("click", () => {
        if (przycisk.innerText === "Nie podoba Ci się zdjęcie? Naciśnij") {
            console.log("Znajdź lepsze zdjęcie jak to Ci się nie podoba cwaniaczku");
        }
    })
});


console.log(przycisk);