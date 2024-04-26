function featuresList() {
    document.getElementById("myDropdown0").classList.toggle("show");
    var features = document.querySelector('.down-icon');
    if (features.src.match('./images/icon-arrow-down.svg')) {
        features.src = './images/icon-arrow-up.svg';
    } else {
        features.src = './images/icon-arrow-down.svg';
    }
}

function companyData() {
    document.getElementById("myDropdown1").classList.toggle("show")
    var company = document.querySelector('.down-icon2');
    if (company.src.match('./images/icon-arrow-down.svg')) {
        company.src = './images/icon-arrow-up.svg';
    } else {
        company.src = './images/icon-arrow-down.svg';
    }
}

const bar = document.querySelector(".menu-show")
const close = document.querySelector(".menu-close")
const sidebar = document.querySelector(".sidebar")



bar.addEventListener("click", function () {

    sidebar.style.display = 'block'

})
close.addEventListener("click", function () {

    sidebar.style.display = 'none'

})

window.onclick = function (event) {
    var isshowing = false;
    var secondshow = false;

    if (!event.target.matches('.dropdown-link')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu", "dropdown-link");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                isshowing = true;
                secondshow = true; // Set secondshow to true when dropdown is showing
            }
        }
    }

    if (isshowing) {
        var features = document.querySelector('.down-icon');
        if (features.src === './images/icon-arrow-down.svg') {
            features.src = './images/icon-arrow-up.svg';
        } else {
            features.src = './images/icon-arrow-down.svg';
        }
    }

    if (secondshow) { // Check if secondshow is true
        var companyData = document.querySelector('.down-icon2');
        if (companyData.src === './images/icon-arrow-down.svg') {
            companyData.src = './images/icon-arrow-up.svg';
        } else {
            companyData.src = './images/icon-arrow-down.svg';
        }
    }
}
