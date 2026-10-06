function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const btn = document.getElemenById("btn-theme");
    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = " 🪼light Mode";
    } else {
        btn.innerHTML = "🎆Dark Mode";
    }
}