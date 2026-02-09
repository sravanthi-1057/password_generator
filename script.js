function generatePassword() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let nLetters = document.getElementById("letters").value;
    let nNumbers = document.getElementById("numbers").value;
    let nSymbols = document.getElementById("symbols").value;

    let password = [];

    for (let i = 0; i < nLetters; i++) {
        password.push(letters[Math.floor(Math.random() * letters.length)]);
    }

    for (let i = 0; i < nNumbers; i++) {
        password.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    for (let i = 0; i < nSymbols; i++) {
        password.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    // Shuffle password
    password.sort(() => Math.random() - 0.5);

    document.getElementById("result").innerText =
        "Generated Password: " + password.join("");

    // 🔹 Clear input boxes after generation
    document.getElementById("letters").value = "";
    document.getElementById("numbers").value = "";
    document.getElementById("symbols").value = "";
}
