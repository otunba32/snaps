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

//Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    var isshowing = false;
    if (!event.target.matches('.dropdown-link')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); isshowing = true;
            }
        }
    }
    
    if (isshowing) {
        var features = document.querySelector('.down-icon');
        if (features.src.match('./images/icon-arrow-down.svg')) {
            features.src = './images/icon-arrow-up.svg';
        } else {
            features.src = './images/icon-arrow-down.svg';
        }
    } else { isshowing = true; }
    

    // var features = document.querySelector('.down-icon');
    // if (features.src.match('./images/icon-arrow-down.svg')) {
    //     features.src = './images/icon-arrow-up.svg';
    // } else {
    //     features.src = './images/icon-arrow-down.svg';
    // }
    // var company = document.querySelector('.down-icon2');
    // if (company.src.match('./images/icon-arrow-down.svg')) {
    //     company.src = './images/icon-arrow-up.svg';
    // } else {
    //     company.src = './images/icon-arrow-down.svg';
    // }
}
