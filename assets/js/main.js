
var plate = document.querySelectorAll(".color-plate");
var plateNameAll = document.querySelectorAll(".color-plate .name");
var searchBar = document.querySelector(".search-bar");
var searchButton = document.querySelector(".search-button");

var plateName = "";
var searchName = "";

searchButton.addEventListener("click", function () {
    searchName = searchBar.value.toLowerCase();

    for (var i = 0; i < plateNameAll.length; i++) {
        plateName = plateNameAll[i].innerText.toLowerCase();
        plateName = plateName.slice(0, searchName.length);

        if (searchName === plateName) {
            plate[i].style.display = "flex";
        } else {
            plate[i].style.display = "none";
        }

    }

});
