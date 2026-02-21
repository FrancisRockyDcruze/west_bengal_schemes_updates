let basePath = window.location.pathname;
console.log(basePath)

if(basePath == "/" || basePath.includes("/index"))
{
fetch("latest_scheme.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("main_container").innerHTML = data;
    })
    .catch(error => {
    console.error("Error loading Yuva content:", error);
    
    document.getElementById("main_container").innerHTML =
        "<p class='text-red-500'>Failed to load content.</p>";
    });
}


// header
// basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
let headerPath = basePath == "/west_bengal_schemes_updates/" ? "header.html" : "../header.html";

console.log("header : " + headerPath)

fetch(headerPath)
.then(response => response.text())
.then(data => {
document.getElementById("header_container").innerHTML = data;
})
.catch(error => {
console.error("Error loading Yuva content:", error);

document.getElementById("main_container").innerHTML =
    "<p class='text-red-500'>Failed to load content.</p>";
});



// footer
// document.addEventListener("DOMContentLoaded", function () {
// basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
// let footerPath = basePath === "/" ? "footer.html" : "../footer.html";
let footerPath = basePath == "/west_bengal_schemes_updates/" ? "footer.html" : "../footer.html";
console.log("foot : " + footerPath)

fetch(footerPath)
    .then(response => response.text())
    .then(data => {
    document.getElementById("footer_container").innerHTML = data;
    })
    .catch(error => {
    console.error("Error loading Yuva content:", error);
    
    document.getElementById("main_container").innerHTML =
        "<p class='text-red-500'>Failed to load content.</p>";
    });


document.addEventListener('click', function (e) {
  if (e.target.closest('#mobile-menu-btn')) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  }
});


document.addEventListener('click', function (e) {
  if (e.target.closest('#mobile-schemes-btn')) {
    const mobileSchemeMenu = document.getElementById('mobile-dropdown');
    const mobiledropicon = document.getElementById('mobile-dropdown-icon');
    if (mobileSchemeMenu) {
      mobileSchemeMenu.classList.toggle('hidden');
      mobiledropicon.classList.toggle('rotate-180');
    }
  }
});
