let sideBar = false;

function openmenu() {
    sideBar = !sideBar;
    // console.log(sideBar);
    var sideBarBox = document.getElementById("header-list-sidebar");
    if (sideBar == true) {
        sideBarBox.style.left = "0";
    } else {
        sideBarBox.style.left = "-60vw";

    }
}