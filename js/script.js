document.addEventListener("DOMContentLoaded", function () {
fetch("yuva_sathi.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("main_container").innerHTML = data;
    })
    .catch(error => {
    console.error("Error loading Yuva content:", error);
    
    document.getElementById("main_container").innerHTML =
        "<p class='text-red-500'>Failed to load content.</p>";
    });
});
