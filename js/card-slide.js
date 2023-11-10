
// Slideshow 
function createSlider(containerId) {
    var slideIndex = 1;
    showDivs(slideIndex, containerId); // Inclua o ID do contêiner como argumento

    function plusDivs(n) {
        showDivs(slideIndex += n, containerId); // Inclua o ID do contêiner como argumento
    }

    function currentDiv(n) {
        showDivs(slideIndex = n, containerId); // Inclua o ID do contêiner como argumento
    }

    function showDivs(n, containerId) {
        var i;
        var container = document.getElementById(containerId);
        var x = container.getElementsByClassName("mySlides");
        var dots = container.getElementsByClassName("demodots");
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-white";
    }

    // Crie funções específicas para este slider
    window['plusDivs_' + containerId] = plusDivs;
    window['currentDiv_' + containerId] = currentDiv;
}
createSlider("slide1")
createSlider("slide2")
createSlider("slide3")
createSlider("slide4")
