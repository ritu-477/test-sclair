function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
    document.querySelector(".iconbox").classList.toggle("cross")
}
// scroll-to -top-button////
const mybutton = document.querySelector(".topBtn");
const show = document.querySelector(".show")

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        mybutton.classList.add("show")
    }
    else {
        mybutton.classList.remove("show")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});


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

var slider = document.getElementById("#range-slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    var value = ((this.value - this.min) / (this.max - this.min)) * 100;

    this.style.background =
        "linear-gradient(to right, #FEF538 0%, #FEF538 " +
        value +
        "%, #d7dcdf " +
        value +
        "%, #d7dcdf 100%)";

};
// // timer//
function getTime() {
    // Get the values from each div
    const days = document.getElementById("days").textContent;
    const hours = document.getElementById("hours").textContent;
    const mins = document.getElementById("mins").textContent;
    const secs = document.getElementById("secs").textContent;

    // Combine the values into a single time format
    const combinedTime = `${days}:${hours}:${mins}:${secs}`;

    // Display the combined time in the "combined-time" div
    document.getElementById("combinedtime").textContent = combinedTime;
}

// Function to start a countdown    
function startCountdown() {
    const daysDiv = document.getElementById("days");
    const hoursDiv = document.getElementById("hours");
    const minsDiv = document.getElementById("mins");
    const secsDiv = document.getElementById("secs");

    // Function to update the countdown every second
    function updateCountdown() {
        let days = parseInt(daysDiv.textContent);
        let hours = parseInt(hoursDiv.textContent);
        let mins = parseInt(minsDiv.textContent);
        let secs = parseInt(secsDiv.textContent);

        // Decrease the seconds
        if (secs > 0) {
            secs -= 1;
        } else {
            secs = 59;
            if (mins > 0) {
                mins -= 1;
            } else {
                mins = 59;
                if (hours > 0) {
                    hours -= 1;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days -= 1;
                    } else {
                        // Stop the countdown if time is up
                        clearInterval(countdownInterval);
                    }
                }
            }
        }

        // Update the HTML elements
        daysDiv.textContent = days.toString().padStart(2, "0");
        hoursDiv.textContent = hours.toString().padStart(2, "0");
        minsDiv.textContent = mins.toString().padStart(2, "0");
        secsDiv.textContent = secs.toString().padStart(2, "0");

        // Update the combined time display
        getTime();
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initial call to display the combined time
getTime();

// Start the countdown
startCountdown();

