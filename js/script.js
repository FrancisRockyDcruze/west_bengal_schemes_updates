let basePath = window.location.pathname;
console.log(basePath)

if(basePath == "/" || basePath.includes("/index") || basePath == "/west_bengal_schemes_updates/")
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


fetch(basePath.includes("/schemes/") ? "../header.html" : "header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header_container").innerHTML = data;

    // Fix links dynamically
    document.querySelectorAll("#header_container a").forEach(a => {
      let href = a.getAttribute("href");
      if (!href.startsWith("http")) {
        a.setAttribute("href", basePath.includes("/schemes/") ? "../" + href : href);
      }
    });
  });

// /west_bengal_schemes_updates/schemes/
// /west_bengal_schemes_updates/    normal


// let footerPath = basePath === "/" ? "footer.html" : "../footer.html";
let footerPath = basePath.includes("/schemes/") ? "../footer.html" : "footer.html";
console.log("footer : " + footerPath)

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
