document.getElementById("toggle_checkbox").addEventListener("change", function() {
    var homeSection = document.getElementById("home");
    
    if (this.checked) {
        homeSection.setAttribute("data-theme", "dark");
    } else {
        homeSection.removeAttribute("data-theme");
    }
});