function openTab(evt, tabName) {
    var i, tab, tabLinks;
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    window.location.hash = tabName;
}

function openTabByHash() {
    var hash = window.location.hash.substring(1);
    if (hash) {
        var tabLink = document.querySelector('.tab-link[onclick*="' + hash + '"]');
        if (tabLink) {
            tabLink.click();
        }
    } else {
        document.getElementsByClassName('tab-link')[0].click();
    }
}

window.onload = openTabByHash;
