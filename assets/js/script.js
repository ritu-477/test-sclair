function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
    document.querySelector(".iconbox").classList.toggle("cross")
}


$('.responsive_2').slick({
    arrows: false,
    dots: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
});