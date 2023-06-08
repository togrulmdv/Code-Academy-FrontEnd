function openTab(event, tabID) {
    // Açıq olan bütün tabları gizlədir
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // active classını bütün buttonlardan silir
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Seçilmiş tabı ekrana çıxardır
    document.getElementById(tabID).style.display = "block";

    // Hansı tab buttonuna basılıbsa active edir
    event.currentTarget.classList.add("active");
}
