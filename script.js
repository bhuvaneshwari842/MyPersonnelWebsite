document.querySelectorAll(".toggle").forEach(item => {
    item.addEventListener("click", () => {
        const content = item.nextElementSibling;
        content.classList.toggle("open");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
