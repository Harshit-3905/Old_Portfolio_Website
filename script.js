AOS.init();
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#preloader").style.visibility = "visible";
    } else {
        document.querySelector("#preloader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
var typed = new Typed(".typing-text", {
    strings: ["Frontend Developer","Open Source Contributor","Competitive Coder"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
